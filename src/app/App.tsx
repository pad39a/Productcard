import { useState } from 'react';
import { ComponentSpecTable } from '@/app/components/ComponentSpecTable';
import { DetailedSpecColumn } from '@/app/components/DetailedSpecColumn';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import hexagonAntcomLogo from 'figma:asset/9854e5f16552ed056e5d55af39a0eb0abc6892f4.png';
import antennaProductImage from 'figma:asset/452b69bb395cc19053e4cb69abfc21bca62c5faa.png';
import 'flag-icons/css/flag-icons.min.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Aviation');

  const componentSpec = {
    mpn: 'G3Ant-3XXX',
    standards: ['MIL-STD-883', 'RTCA DO160G'],
    technology: 'FPRA',
    radiation: 'Report Available',
    bands: ['L1, E1, G1', 'L2, G2, G3, E5a'],
    vswr: '<2.0',
    polarization: 'RHCP',
    lnaGain: '',
  };

  const electricalSpecs = [
    { label: 'VDC', value: '5 +/- 0.25' },
    { label: 'Current', value: '100 mA' },
    { label: 'Power Handling', value: '1 Watt CW' },
    { label: 'Output Signal', value: 'Analog' },
    { label: 'Connector', value: 'SMA, SMB' },
  ];

  const mechanicalSpecs = [
    { label: 'Weight', value: '0.18' },
    { label: 'Volume', value: '5.6' },
    { label: 'Materials', value: 'AL, CU, Plastic' },
    { label: 'Form Factor', value: 'Module, Round' },
  ];

  const environmentalSpecs = [
    { label: 'Maximum operating temperature', value: '+85°C' },
    { label: 'Minimum operating temperature', value: '-55°C' },
    { label: 'Max Shock, G', value: '5,000 G' },
    { label: 'Altitude, ft', value: '-1,000 to 70,000' },
    { label: 'Humidity', value: '1,000 hours, 95% RH' },
    { label: 'Radiation Levels', value: 'LEO, MEO, GEO' },
    { label: 'Moisture Rating', value: 'Hermetic, IP 67, IP68' },
  ];

  const tabs = ['Aviation', 'Space', 'Defense', 'R & D'];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter' }}>
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Back Button */}
          <button className="flex items-center gap-2 py-4 text-blue-600 text-[14px] font-medium hover:text-blue-700" style={{ fontFamily: 'Inter' }}>
            <ChevronLeft size={16} />
            Back
          </button>

          {/* Product Title and Tabs */}
          <div className="flex items-center gap-4 pb-4">
            <h1 className="text-[24px] font-bold" style={{ fontFamily: 'Inter' }}>
              Antcom G3ANT-3XXX
            </h1>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-[12px] font-medium" style={{ fontFamily: 'Inter' }}>
              GPS Antenna
            </span>
            <div className="flex gap-2 ml-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-[13px] font-semibold transition-colors ${
                    activeTab === tab
                      ? tab === 'Aviation'
                        ? 'bg-orange-500 text-black'
                        : tab === 'Space'
                        ? 'bg-gray-800 text-white'
                        : tab === 'Defense'
                        ? 'bg-green-600 text-white'
                        : 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  style={{ fontFamily: 'Inter' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Product Header Section */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Left: USA Flag and Request Quote */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[14px] font-medium" style={{ fontFamily: 'Inter' }}>Canada</span>
              <span className="fi fi-ca"></span>
            </div>
            <button className="px-6 py-2.5 bg-orange-500 text-black rounded text-[14px] font-semibold hover:bg-orange-600 transition-colors" style={{ fontFamily: 'Inter' }}>
              Request Loan or Sample
            </button>
            <div className="mt-4">
              <a href="#" className="flex items-center gap-1 text-[14px] text-gray-700 hover:text-blue-600" style={{ fontFamily: 'Inter' }}>
                G3Ant-3XXX
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-2 flex items-center justify-center">
                <img 
                  src={hexagonAntcomLogo} 
                  alt="Hexagon Antcom Logo" 
                  className="max-w-full h-auto max-h-[100px]"
                />
              </div>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="flex items-center justify-center">
            <ImageWithFallback
              src={antennaProductImage}
              alt="GPS Antenna"
              className="w-full max-w-md h-auto object-contain rounded-lg"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
            />
          </div>
        </div>

        {/* Component Specifications */}
        <div className="mb-8">
          <h2 className="text-[16px] font-semibold mb-4" style={{ fontFamily: 'Inter' }}>
            Component specifications
          </h2>
          <ComponentSpecTable data={componentSpec} />
        </div>

        {/* Three Column Detailed Specs */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <DetailedSpecColumn title="Electrical" rows={electricalSpecs} />
          <DetailedSpecColumn title="Mechanical" rows={mechanicalSpecs} />
          <DetailedSpecColumn title="Environmental" rows={environmentalSpecs} />
        </div>

        {/* Manufacturer Section */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-[14px] font-semibold mb-3" style={{ fontFamily: 'Inter' }}>
            Manufacturer
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <table className="w-full border border-gray-300">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="px-3 py-2 text-[13px] bg-gray-50 border-r border-gray-300" style={{ fontFamily: 'Inter' }}>
                      Website URL
                    </td>
                    <td className="px-3 py-2 text-[13px]" style={{ fontFamily: 'Inter' }}>
                      <a 
                        href="https://www.navtechgps.com/brands/antcom/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        https://www.navtechgps.com/brands/antcom/
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-3 py-2 text-[13px] bg-gray-50 border-r border-gray-300" style={{ fontFamily: 'Inter' }}>
                      COO
                    </td>
                    <td className="px-3 py-2 text-[13px]" style={{ fontFamily: 'Inter' }}>
                      Canada
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-[13px] bg-gray-50 border-r border-gray-300" style={{ fontFamily: 'Inter' }}>
                      Quality System
                    </td>
                    <td className="px-3 py-2 text-[13px]" style={{ fontFamily: 'Inter' }}>
                      AS9100
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-2">
              <div className="border border-gray-300 p-4">
                <h4 className="text-[13px] font-semibold mb-2" style={{ fontFamily: 'Inter' }}>
                  Additional
                </h4>
                <div className="text-[13px] text-gray-700 space-y-4" style={{ fontFamily: 'Inter' }}>
                  <p>
                    Antcom Corporation designs, develops and manufactures a wide range of GPS / GNSS antennas, as well a large selection of ground and satellite based antennas with frequencies ranging from 100 MHz to 50 GHz,  and also communication antennas and microwave products. It is an ISO 9001-2008 certified company with an extensive antenna product line.
                  </p>
                  <p>
                    The Antcom line includes Global Positioning System (GPS) antennas, Global Navigation Satellite System (GNSS) antennas, as well as Galileo, GLONASS, BeiDou, and QZSS in the L1, L2, L5 bands, and SBAS antennas in L-Band, such as OmniSTAR™ antennas, as well as a broad range of single band and multi-band antennas for voice / video / data Link applications in the L, S, C, X and Ku bands for various critical ground, marine, aerospace communication and navigation communication applications all of which are equipped with a low noise amplifier (LNA).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
