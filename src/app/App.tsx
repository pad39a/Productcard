import { useState } from 'react';
import { ComponentSpecTable } from '@/app/components/ComponentSpecTable';
import { DetailedSpecColumn } from '@/app/components/DetailedSpecColumn';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import hexagonAntcomLogo from 'figma:asset/9854e5f16552ed056e5d55af39a0eb0abc6892f4.png';
import antennaProductImage from 'figma:asset/452b69bb395cc19053e4cb69abfc21bca62c5faa.png';
import heroBackground from 'figma:asset/8624f9524d3544dc8d7bd9fa3ead71e6a5cf4a01.png';
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
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Inter' }}>
      {/* Hero Header */}
      <div className="relative bg-slate-900 border-b border-white/10 shadow-2xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src={heroBackground}
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-8 pt-6 pb-0">
          {/* Back Button */}
          <button className="flex items-center gap-2 mb-8 text-blue-300 text-[14px] font-medium hover:text-white transition-colors group" style={{ fontFamily: 'Inter' }}>
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>

          {/* Product Title and Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-200 border border-blue-500/30 rounded text-[12px] font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter' }}>
                  GPS Antenna
                </span>
                <span className="text-slate-400 text-[14px]">Ref: G3-3XXX</span>
              </div>
              <h1 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight drop-shadow-sm" style={{ fontFamily: 'Inter' }}>
                Antcom G3ANT-3XXX
              </h1>
              <p className="text-slate-300 mt-2 max-w-xl text-[15px] leading-relaxed">
                High-reliability antenna designed for critical aviation and space applications, offering precision positioning in demanding environments.
              </p>
            </div>
            
            {/* Tabs - Docked at bottom */}
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg backdrop-blur-md border border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-md text-[13px] font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? tab === 'Aviation'
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-900/20'
                        : tab === 'Space'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                        : tab === 'Defense'
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20'
                        : 'bg-orange-500 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
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
      <div className="max-w-[1440px] mx-auto px-8 py-10 space-y-8">
        
        {/* Product Highlights Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            
            {/* Left: Actions */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1 text-slate-500 text-[12px] font-medium uppercase tracking-wider">
                  Origin
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[18px] font-semibold text-slate-900" style={{ fontFamily: 'Inter' }}>Canada</span>
                  <span className="fi fi-ca text-[24px] shadow-sm rounded-sm"></span>
                </div>
              </div>
              
              <div className="pt-2">
                <button className="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-[14px] font-semibold shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0" style={{ fontFamily: 'Inter' }}>
                  Request Loan or Sample
                </button>
                <div className="mt-4 flex items-center gap-2">
                   <a href="#" className="text-[13px] text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
                    <ExternalLink size={12} />
                    View Datasheet
                   </a>
                </div>
              </div>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center py-6 md:py-0 border-y md:border-y-0 md:border-x border-slate-100">
              <img 
                src={hexagonAntcomLogo} 
                alt="Hexagon Antcom Logo" 
                className="max-w-[180px] h-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Right: Product Image */}
            <div className="flex justify-center relative group">
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <ImageWithFallback
                src={antennaProductImage}
                alt="GPS Antenna"
                className="relative w-full max-w-[280px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }}
              />
            </div>
          </div>
        </div>

        {/* Component Specifications */}
        <div>
          <h2 className="text-[18px] font-bold text-slate-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
            <span className="w-1.5 h-5 bg-blue-600 rounded-full"></span>
            Component Specifications
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
             <ComponentSpecTable data={componentSpec} />
          </div>
        </div>

        {/* Detailed Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DetailedSpecColumn title="Electrical" rows={electricalSpecs} />
          <DetailedSpecColumn title="Mechanical" rows={mechanicalSpecs} />
          <DetailedSpecColumn title="Environmental" rows={environmentalSpecs} />
        </div>

        {/* Manufacturer Info */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-[16px] font-bold text-slate-900 mb-6 flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
             <span className="w-1.5 h-5 bg-slate-600 rounded-full"></span>
            Manufacturer Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/60">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Website</div>
                <a 
                  href="https://www.navtechgps.com/brands/antcom/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[13px] text-blue-600 hover:text-blue-700 font-medium break-all block hover:underline"
                >
                  navtechgps.com/brands/antcom
                </a>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/60">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Quality System</div>
                <div className="text-[13px] text-slate-900 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  AS9100 Certified
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="prose prose-sm max-w-none text-slate-600 text-[14px] leading-relaxed">
                <p className="mb-4">
                  <span className="font-bold text-slate-900">Antcom Corporation</span> designs, develops and manufactures a wide range of GPS / GNSS antennas, as well as a large selection of ground and satellite based antennas with frequencies ranging from 100 MHz to 50 GHz.
                </p>
                <p>
                  The Antcom line includes Global Positioning System (GPS) antennas, Global Navigation Satellite System (GNSS) antennas, as well as Galileo, GLONASS, BeiDou, and QZSS in the L1, L2, L5 bands. Products serve critical ground, marine, and aerospace communication applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
