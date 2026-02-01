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
    <div className="flex-1">
      <h3 className="text-[14px] font-semibold mb-3" style={{ fontFamily: 'Inter' }}>
        {title}
      </h3>
      <div className="border border-gray-300">
        <table className="w-full">
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-gray-300 last:border-b-0">
                <td className="px-3 py-2 text-[13px] bg-gray-50 border-r border-gray-300" style={{ fontFamily: 'Inter', width: '50%' }}>
                  {row.label}
                </td>
                <td className="px-3 py-2 text-[13px]" style={{ fontFamily: 'Inter', width: '50%' }}>
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
