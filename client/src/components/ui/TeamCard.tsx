import { Mail } from 'lucide-react';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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

interface MemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
}

export default function TeamCard({ member }: { member: MemberProps }) {
  return (
    <div className="w-full max-w-70.5 bg-[#0F172A] rounded-xl overflow-hidden border border-slate-800 flex flex-col transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] group">
      
      <div className="w-full h-61 overflow-hidden relative bg-slate-900">
        <img 
          src={member.image || "/images/team/placeholder.jpg"} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-50" />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow text-left">
        
        <div>
          <h3 className="text-base font-bold text-slate-100 tracking-tight">
            {member.name}
          </h3>
          <p className="text-[11px] font-semibold text-blue-500 tracking-wider uppercase mt-0.5">
            {member.role}
          </p>
        </div>
        
        <div className="flex gap-2.5 mt-4 pt-3 border-t border-slate-800/60">
          {member.linkedin && (
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-all border border-slate-800/40"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          )}
          
          {member.email && (
            <a 
              href={`mailto:${member.email}`} 
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-all border border-slate-800/40"
              title="Send Mail"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}