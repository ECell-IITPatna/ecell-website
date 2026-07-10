import Link from 'next/link';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-slate-300 pt-20 pb-6 px-6 md:px-16 lg:px-24 border-t border-slate-900/60 relative z-20 font-clash select-none">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10">
        
        {/* Left Side: Logo, Text, and Icons */}
        <div className="md:col-span-5 flex flex-col items-center text-center space-y-3">
          <div className="h-32 w-auto flex items-center justify-center">
            <img 
              src="/images/logo.png" 
              alt="E-Cell IIT Patna Logo" 
              className="h-full w-auto object-contain" 
            />
          </div>
          
          <p className="text-m font-medium text-slate-300 tracking-wide">
            Where Innovation Begins
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-1">
            <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><LinkedinIcon /></a>
          </div>
        </div>

        {/* Right Area containing Links & The "Made with love" credit */}
        <div className="md:col-span-7 grid grid-cols-3 gap-8 w-full text-center md:text-left">
          
          {/* Column 1: E-Cell */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-white text-base font-semibold tracking-wide">E-Cell</h4>
            <div className="flex flex-col items-center md:items-start space-y-1.5 text-sm text-slate-400 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/team" className="hover:text-white transition-colors">Team</Link>
              <Link href="/speakers" className="hover:text-white transition-colors">Speakers</Link>
              <Link href="/alumni" className="hover:text-white transition-colors">Alumni</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              <Link href="/legacy" className="hover:text-white transition-colors">Legacy Page</Link>
            </div>
          </div>

          {/* Column 2: E-Summit */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-white text-base font-semibold tracking-wide">E-Summit</h4>
            <div className="flex flex-col items-center md:items-start space-y-1.5 text-sm text-slate-400 font-medium">
              <Link href="#" className="hover:text-white transition-colors">Home</Link>
            </div>
          </div>

          {/* Column 3: Initiatives */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-white text-base font-semibold tracking-wide">Initiatives</h4>
            <div className="flex flex-col items-center md:items-start space-y-1.5 text-sm text-slate-400 font-medium">
              <Link href="#" className="hover:text-white transition-colors">Startin</Link>
              <Link href="#" className="hover:text-white transition-colors">Xplore</Link>
            </div>
          </div>

          {/* Credit Section*/}
          <div className="col-span-3 flex justify-center md:justify-end items-end pt-6 md:pt-4">
            <p className="text-sm font-medium text-slate-500">
              Made with 🤍 by Web Dev Wing E-Cell IIT Patna
            </p>
          </div>

        </div>
      </div>

      {/* Footer Base*/}
      <div className="max-w-7xl mx-auto flex justify-center items-center text-sm text-slate-400 pt-6 border-t border-slate-900/60">
        <p>© 2026 E-Cell IIT Patna. All Rights Reserved</p>
      </div>
    </footer>
  );
}