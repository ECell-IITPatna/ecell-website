type CornerBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CornerBox({
  children,
  className = "",
}: CornerBoxProps) {
  return (
    <div className={`relative ${className} bg-black`}>

      {/* Top Left */}
      <span className="absolute -top-2 -left-2 h-8 w-8 border-l border-t border-slate-300" />

      {/* Top Right */}
      <span className="absolute -top-2 -right-2 h-8 w-8 border-r border-t border-slate-300" />

      {/* Bottom Left */}
      <span className="absolute -bottom-2 -left-2 h-8 w-8 border-l border-b border-slate-300" />

      {/* Bottom Right */}
      <span className="absolute -bottom-2 -right-2 h-8 w-8 border-r border-b border-slate-300" />

      {children}
    </div>
  );
}