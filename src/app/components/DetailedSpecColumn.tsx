interface SpecRow {
  label: string;
  value: string;
}

interface DetailedSpecColumnProps {
  title: string;
  rows: SpecRow[];
}

export function DetailedSpecColumn({ title, rows }: DetailedSpecColumnProps) {
  return (
    <div className="flex-1 bg-[#F6F7F9] rounded-xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-[15px] font-bold text-slate-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
        <span className="w-1 h-4 bg-orange-500 rounded-full inline-block"></span>
        {title}
      </h3>
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table className="w-full">
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 text-[13px] font-medium text-slate-500 border-r border-slate-100 bg-slate-50/50" style={{ fontFamily: 'Inter', width: '45%' }}>
                  {row.label}
                </td>
                <td className="px-4 py-3 text-[13px] font-semibold text-slate-900" style={{ fontFamily: 'Inter', width: '55%' }}>
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
