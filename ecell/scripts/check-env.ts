import mongoose from 'mongoose';
import IORedis from 'ioredis';
import nodemailer from 'nodemailer';

const REQUIRED_ENV_VARS = [
  'MONGO_URI',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_SECURE',
  'SMTP_USER',
  'SMTP_PASS',
  'MAIL_FROM',
  'REDIS_HOST',
  'REDIS_PORT'
];

async function main() {
  console.log('\x1b[36m%s\x1b[0m', '🔍 Starting environment configuration check...\n');

  // 1. Check presence of all required variables
  let missingAny = false;
  for (const varName of REQUIRED_ENV_VARS) {
    const val = process.env[varName];
    if (val === undefined || val === '') {
      console.error('\x1b[31m%s\x1b[0m', `❌ Missing environment variable: ${varName}`);
      missingAny = true;
    } else {
      // Mask credentials in printout
      const printVal = (varName.includes('URI') || varName.includes('PASS')) 
        ? '********' 
        : val;
      console.log('\x1b[32m%s\x1b[0m', `✓ Present: ${varName} = ${printVal}`);
    }
  }

  if (missingAny) {
    console.error('\x1b[31m%s\x1b[0m', '\n❌ Checking failed: Some required environment variables are missing.');
    process.exit(1);
  }

  console.log('\x1b[36m%s\x1b[0m', '\n🔌 Testing connectivity to external services...\n');

  // 2. Test MongoDB Connection
  try {
    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('\x1b[32m%s\x1b[0m', '✅ MongoDB Connection: SUCCESSFUL!');
    await mongoose.disconnect();
  } catch (error: any) {
    console.error('\x1b[31m%s\x1b[0m', `❌ MongoDB Connection: FAILED!`);
    console.error('\x1b[31m%s\x1b[0m', `   Error: ${error.message || error}`);
  }

  // 3. Test Redis Connection
  let redis: IORedis | null = null;
  try {
    const host = process.env.REDIS_HOST || '127.0.0.1';
    const port = parseInt(process.env.REDIS_PORT || '6379');
    console.log(`⏳ Connecting to Redis at ${host}:${port}...`);
    
    redis = new IORedis({
      host,
      port,
      maxRetriesPerRequest: 1,
      connectTimeout: 5000,
      lazyConnect: true // Allow us to handle connection error/timeout explicitly
    });

    const connectPromise = redis.connect();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timed out after 5s')), 5000)
    );

    await Promise.race([connectPromise, timeoutPromise]);
    
    const pingResult = await redis.ping();
    if (pingResult === 'PONG') {
      console.log('\x1b[32m%s\x1b[0m', '✅ Redis Connection: SUCCESSFUL! (Ping response: PONG)');
    } else {
      console.warn('\x1b[33m%s\x1b[0m', `⚠️ Redis Connection: Ping returned unexpected response: ${pingResult}`);
    }
  } catch (error: any) {
    console.error('\x1b[31m%s\x1b[0m', `❌ Redis Connection: FAILED!`);
    console.error('\x1b[31m%s\x1b[0m', `   Error: ${error.message || error}`);
  } finally {
    if (redis) {
      try {
        await redis.quit();
      } catch {}
    }
  }

  // 4. Test SMTP connection
  try {
    console.log('⏳ Verifying SMTP Transport configurations...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT!),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.verify();
    console.log('\x1b[32m%s\x1b[0m', '✅ SMTP Mail Service: SUCCESSFUL! Server is ready to send messages.');
  } catch (error: any) {
    console.error('\x1b[31m%s\x1b[0m', `❌ SMTP Mail Service: FAILED!`);
    console.error('\x1b[31m%s\x1b[0m', `   Error: ${error.message || error}`);
  }

  console.log('\x1b[36m%s\x1b[0m', '\n🏁 Environment check completed.');
}

main().catch((err) => {
  console.error('Unhandled error in check script:', err);
  process.exit(1);
});
