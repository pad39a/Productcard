interface SpecTableRow {
  parameter: string;
  specification: string;
}

interface SpecTableProps {
  title: string;
  rows: SpecTableRow[];
}

export function SpecTable({ title, rows }: SpecTableProps) {
  return (
    <div className="mb-12">
      <h2 className="text-[16px] font-semibold mb-4" style={{ fontFamily: 'Inter' }}>
        {title}
      </h2>
      <div className="border border-[#E5E7EB] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-white border-b border-[#E5E7EB]">
              <th className="text-left px-6 py-4 text-[14px] font-medium" style={{ fontFamily: 'Inter', height: '48px' }}>
                Parameter
              </th>
              <th className="text-left px-6 py-4 text-[14px] font-medium" style={{ fontFamily: 'Inter', height: '48px' }}>
                Specification
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}
                style={{ height: '48px' }}
              >
                <td className="px-6 py-3 text-[14px] border-b border-[#E5E7EB]" style={{ fontFamily: 'Inter' }}>
                  {row.parameter}
                </td>
                <td className="px-6 py-3 text-[14px] border-b border-[#E5E7EB]" style={{ fontFamily: 'Inter' }}>
                  {row.specification}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
