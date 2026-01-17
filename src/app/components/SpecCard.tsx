interface SpecCardProps {
  label: string;
  value: string;
}

export function SpecCard({ label, value }: SpecCardProps) {
  return (
    <div className="bg-[#F6F7F9] rounded-[12px] p-4">
      <div className="text-[12px] font-medium text-[#6B7280] uppercase mb-2" style={{ fontFamily: 'Inter' }}>
        {label}
      </div>
      <div className="text-[18px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter' }}>
        {value}
      </div>
    </div>
  );
}
