import { SpecCard } from '@/app/components/SpecCard';
import { SpecTable } from '@/app/components/SpecTable';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function App() {
  const keySpecs = [
    { label: 'Bands', value: 'L1/L2/L5' },
    { label: 'VSWR', value: '< 2.0:1' },
    { label: 'Polarization', value: 'RHCP' },
    { label: 'Standards', value: 'DO-160G' },
    { label: 'Radiation', value: 'Hemispherical' },
    { label: 'Form Factor', value: 'Low Profile' },
  ];

  const electricalSpecs = [
    { parameter: 'Frequency Range', specification: 'L1: 1575.42 MHz, L2: 1227.60 MHz, L5: 1176.45 MHz' },
    { parameter: 'VSWR', specification: '< 2.0:1 typical' },
    { parameter: 'Polarization', specification: 'Right Hand Circular (RHCP)' },
    { parameter: 'Gain', specification: '3 dBic minimum at zenith' },
    { parameter: 'Axial Ratio', specification: '< 3 dB at zenith, < 6 dB at 10° elevation' },
    { parameter: 'Impedance', specification: '50 Ohms nominal' },
    { parameter: 'Radiation Pattern', specification: 'Hemispherical coverage' },
  ];

  const mechanicalSpecs = [
    { parameter: 'Dimensions', specification: '95mm (L) × 95mm (W) × 28mm (H)' },
    { parameter: 'Weight', specification: '285g typical' },
    { parameter: 'Mounting', specification: '4-hole pattern, M4 screws' },
    { parameter: 'Connector', specification: 'TNC Female' },
    { parameter: 'Radome Material', specification: 'UV-resistant polycarbonate' },
    { parameter: 'Base Material', specification: 'Aluminum alloy' },
  ];

  const environmentalSpecs = [
    { parameter: 'Operating Temperature', specification: '-55°C to +85°C' },
    { parameter: 'Storage Temperature', specification: '-62°C to +95°C' },
    { parameter: 'Humidity', specification: '95% RH non-condensing' },
    { parameter: 'Vibration', specification: 'DO-160G Section 8, Category S' },
    { parameter: 'Shock', specification: 'DO-160G Section 7, Category A' },
    { parameter: 'Salt Spray', specification: 'MIL-STD-810G Method 509.5' },
    { parameter: 'IP Rating', specification: 'IP67' },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter' }}>
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Info */}
            <div>
              <h1 className="text-[32px] font-bold mb-4" style={{ fontFamily: 'Inter', lineHeight: 1.2 }}>
                Antcom G3ANT-3XXX
              </h1>
              <p className="text-[16px] font-normal text-gray-600 mb-6" style={{ fontFamily: 'Inter' }}>
                High-Reliability GPS Antenna for Aviation & Space
              </p>
              
              {/* Tags */}
              <div className="flex gap-2 mb-8">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-[12px] font-medium uppercase" style={{ fontFamily: 'Inter' }}>
                  Aviation
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-[12px] font-medium uppercase" style={{ fontFamily: 'Inter' }}>
                  Space
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-[12px] font-medium uppercase" style={{ fontFamily: 'Inter' }}>
                  Defense
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-[14px] font-semibold hover:bg-blue-700 transition-colors" style={{ fontFamily: 'Inter' }}>
                  Request Quote
                </button>
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg text-[14px] font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors" style={{ fontFamily: 'Inter' }}>
                  Download Datasheet
                </button>
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1766997199839-2fb5b9abaf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFMlMjBhbnRlbm5hJTIwYXZpYXRpb258ZW58MXx8fHwxNzY4NjI3MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Antcom G3ANT-3XXX GPS Antenna"
                  className="w-full max-w-md rounded-lg"
                  style={{ 
                    filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.08))',
                    transform: 'scale(0.6)',
                    transformOrigin: 'center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Specs Section */}
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <h2 className="text-[24px] font-bold mb-8" style={{ fontFamily: 'Inter' }}>
          Key Specifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {keySpecs.map((spec, index) => (
            <SpecCard key={index} label={spec.label} value={spec.value} />
          ))}
        </div>
      </div>

      {/* Detailed Specifications Tables */}
      <div className="max-w-[1200px] mx-auto px-8 py-8">
        <h2 className="text-[28px] font-bold mb-12" style={{ fontFamily: 'Inter' }}>
          Detailed Specifications
        </h2>

        <SpecTable title="Electrical Specifications" rows={electricalSpecs} />
        <SpecTable title="Mechanical Specifications" rows={mechanicalSpecs} />
        <SpecTable title="Environmental Specifications" rows={environmentalSpecs} />
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          <p className="text-[14px] text-gray-600 text-center" style={{ fontFamily: 'Inter' }}>
            © 2026 Antcom Corporation. All specifications subject to change without notice.
          </p>
        </div>
      </div>
    </div>
  );
}
