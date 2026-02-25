# 🚀 Quick Start: Create a New Product Page in 3 Steps

## Step 1️⃣: Create Product Data File

```bash
# Create a new file in src/app/data/
touch src/app/data/my-product.ts
```

## Step 2️⃣: Copy Template and Fill Data

```typescript
// src/app/data/my-product.ts
import { ProductPageData } from '@/app/components/ProductPageTemplate';

export const myProductData: ProductPageData = {
  // HERO (Top banner)
  heroBackground: 'https://images.unsplash.com/your-background',
  productCategory: 'GPS Antenna',          // Badge label
  productReference: 'G3-100',              // Ref number
  productTitle: 'My Amazing Product',      // Main title
  productDescription: 'One-line pitch',    // Subtitle
  
  // HIGHLIGHTS (3-column card)
  origin: { country: 'Canada', flagCode: 'ca' },
  manufacturerLogo: 'logo-url-here',
  productImage: 'product-url-here',
  datasheetUrl: '#',  // Optional
  
  // SPECIFICATIONS
  componentSpec: {
    mpn: 'MPN-001',
    standards: ['MIL-STD-883'],
    technology: 'FPRA',
    radiation: 'Report Available',
    bands: ['L1, E1, G1'],
    vswr: '<2.0',
    polarization: 'RHCP',
    lnaGain: '30 dB',
  },
  
  electricalSpecs: [
    { label: 'Voltage', value: '5V' },
    { label: 'Current', value: '100mA' },
  ],
  
  mechanicalSpecs: [
    { label: 'Weight', value: '0.18 kg' },
    { label: 'Size', value: '50x50mm' },
  ],
  
  environmentalSpecs: [
    { label: 'Max Temp', value: '+85°C' },
    { label: 'Min Temp', value: '-55°C' },
  ],
  
  // TABS
  tabs: [
    { name: 'Aviation', color: 'orange' },
    { name: 'Space', color: 'blue' },
    { name: 'Defense', color: 'emerald' },
  ],
  defaultTab: 'Aviation',
  
  // MANUFACTURER
  manufacturerInfo: {
    name: 'My Company Inc.',
    website: {
      url: 'https://example.com',
      displayText: 'example.com',
    },
    qualitySystem: 'ISO 9001',
    description: [
      'My Company Inc. makes great products since 1990.',
      'We specialize in aerospace components.',
    ],
  },
};
```

## Step 3️⃣: Use in App.tsx

```typescript
// src/app/App.tsx
import { ProductPageTemplate } from '@/app/components/ProductPageTemplate';
import { myProductData } from '@/app/data/my-product';

export default function App() {
  return <ProductPageTemplate data={myProductData} />;
}
```

## ✅ That's It!

Your product page is now live with:
- ✨ Professional aerospace-themed design
- 📱 Fully responsive (mobile/tablet/desktop)
- 🎨 Consistent styling and layout
- 🔄 Reusable across all products

---

## 📋 Common Values Reference

### Flag Codes (ISO 3166-1)
```typescript
'us' // United States
'ca' // Canada
'gb' // United Kingdom
'de' // Germany
'fr' // France
'jp' // Japan
'cn' // China
```

### Tab Colors
```typescript
'orange'  // Aviation, Commercial
'blue'    // Space, Marine
'emerald' // Defense, Military
'purple'  // Broadcasting, Media
'indigo'  // Maritime, Naval
'green'   // Environmental
```

### Image Sizes
- Hero Background: **1920x400px** minimum
- Logo: **225x100px** recommended
- Product: **280x280px** recommended

---

## 📚 More Help?

- **Full Guide**: See `PRODUCT_TEMPLATE_GUIDE.md`
- **Complete Example**: See `src/app/data/antcom-g3ant-3xxx.ts`
- **Template with Docs**: See `src/app/data/example-product-template.ts`
- **Second Example**: See `src/app/data/example-satcom-amplifier.ts`

---

## 🎯 Pro Tips

1. **Use existing Figma assets**: `import logo from 'figma:asset/hash.png'`
2. **Or use any URL**: Works with ImageWithFallback automatically
3. **Keep descriptions short**: 1-2 sentences max
4. **Consistent units**: Pick metric or imperial and stick with it
5. **Empty is OK**: Use `''` or `[]` for optional fields

Happy building! 🚀
