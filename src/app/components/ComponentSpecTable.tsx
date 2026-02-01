interface ComponentSpecTableProps {
  data: {
    mpn: string;
    standards: string[];
    technology: string;
    radiation: string;
    bands: string[];
    vswr: string;
    polarization: string;
    lnaGain: string;
  };
}

export function ComponentSpecTable({ data }: ComponentSpecTableProps) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="border border-gray-300 px-4 py-2 text-[14px] font-medium text-center" style={{ fontFamily: 'Inter' }}>
              MPN
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[14px] font-medium text-center" style={{ fontFamily: 'Inter' }}>
              Standards
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[14px] font-medium text-center" style={{ fontFamily: 'Inter' }}>
              Technology
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[14px] font-medium text-center" style={{ fontFamily: 'Inter' }}>
              Radiation-SEU
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[14px] font-medium text-center" style={{ fontFamily: 'Inter' }}>
              Bands
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[14px] font-medium text-center" style={{ fontFamily: 'Inter' }}>
              VSWR
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[14px] font-medium text-center" style={{ fontFamily: 'Inter' }}>
              Polarization
            </th>
            <th className="border border-gray-300 px-4 py-2 text-[14px] font-medium text-center" style={{ fontFamily: 'Inter' }}>
              LNA Gain
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-6 text-[14px] text-center" style={{ fontFamily: 'Inter' }}>
              {data.mpn}
            </td>
            <td className="border border-gray-300 px-4 py-6 text-[14px] text-center" style={{ fontFamily: 'Inter' }}>
              {data.standards.map((std, i) => (
                <div key={i}>{std}</div>
              ))}
            </td>
            <td className="border border-gray-300 px-4 py-6 text-[14px] text-center" style={{ fontFamily: 'Inter' }}>
              {data.technology}
            </td>
            <td className="border border-gray-300 px-4 py-6 text-[14px] text-center" style={{ fontFamily: 'Inter' }}>
              {data.radiation}
            </td>
            <td className="border border-gray-300 px-4 py-6 text-[14px] text-center" style={{ fontFamily: 'Inter' }}>
              {data.bands.map((band, i) => (
                <div key={i}>{band}</div>
              ))}
            </td>
            <td className="border border-gray-300 px-4 py-6 text-[14px] text-center" style={{ fontFamily: 'Inter' }}>
              {data.vswr}
            </td>
            <td className="border border-gray-300 px-4 py-6 text-[14px] text-center" style={{ fontFamily: 'Inter' }}>
              {data.polarization}
            </td>
            <td className="border border-gray-300 px-4 py-6 text-[14px] text-center" style={{ fontFamily: 'Inter' }}>
              {data.lnaGain}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
