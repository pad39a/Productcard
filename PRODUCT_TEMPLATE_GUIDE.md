# Product Page Template Guide

This project includes a reusable **Product Page Template** system that allows you to create professional aerospace/industrial product pages with consistent styling and layout.

## 📁 File Structure

```
src/app/
├── components/
│   ├── ProductPageTemplate.tsx     # Main reusable template component
│   ├── ComponentSpecTable.tsx      # Specifications table component
│   └── DetailedSpecColumn.tsx      # Detailed specs column component
├── data/
│   ├── antcom-g3ant-3xxx.ts       # Example: Antcom GPS Antenna data
│   └── example-product-template.ts # Template with documentation
└── App.tsx                         # Main app (imports and uses template)
```

## 🚀 Quick Start: Create a New Product Page

### Step 1: Create Your Product Data File

```bash
# Copy the example template
cp src/app/data/example-product-template.ts src/app/data/your-product.ts
```

### Step 2: Fill In Your Product Data

Open `your-product.ts` and customize all the fields. The template includes detailed comments for each section:

```typescript
import { ProductPageData } from '@/app/components/ProductPageTemplate';

export const yourProductData: ProductPageData = {
  heroBackground: 'your-background-image.jpg',
  productCategory: 'Your Category',
  productReference: 'REF-001',
  productTitle: 'Your Product Name',
  // ... fill in all other fields
};
```

### Step 3: Use It in App.tsx

```typescript
import { ProductPageTemplate } from '@/app/components/ProductPageTemplate';
import { yourProductData } from '@/app/data/your-product';

export default function App() {
  return <ProductPageTemplate data={yourProductData} />;
}
```

## 📋 Data Structure Overview

### Hero Section
- **heroBackground**: Background image URL
- **productCategory**: Small badge label (e.g., "GPS Antenna")
- **productReference**: Reference number
- **productTitle**: Main product name
- **productDescription**: Brief description (1-2 sentences)

### Product Highlights
- **origin**: Country of origin with flag
- **manufacturerLogo**: Company logo URL
- **productImage**: Product photo URL
- **datasheetUrl**: Link to datasheet (optional)

### Specifications
- **componentSpec**: Main specifications table
  - MPN, standards, technology, radiation, bands, VSWR, polarization, LNA gain
- **electricalSpecs**: Array of electrical specifications
- **mechanicalSpecs**: Array of mechanical specifications
- **environmentalSpecs**: Array of environmental specifications

### Navigation
- **tabs**: Industry/application categories with colors
- **defaultTab**: Which tab is selected initially (optional)

### Manufacturer
- **manufacturerInfo**: Company details and description

## 🎨 Customization Options

### Tab Colors
Available colors: `orange`, `blue`, `emerald`, `purple`, `indigo`, `green`

```typescript
tabs: [
  { name: 'Aviation', color: 'orange' },
  { name: 'Space', color: 'blue' },
  { name: 'Defense', color: 'emerald' },
]
```

### Country Flags
Use ISO 3166-1 alpha-2 country codes:
- `us` - United States
- `ca` - Canada
- `gb` - United Kingdom
- `de` - Germany
- `fr` - France
- `jp` - Japan
- `cn` - China
- And many more...

```typescript
origin: {
  country: 'Canada',
  flagCode: 'ca',
}
```

## 🖼️ Image Guidelines

### Hero Background
- **Size**: 1920x400px minimum
- **Type**: Space, technology, industrial scenes work well
- **Note**: Dark overlay is automatically applied

### Manufacturer Logo
- **Size**: 225x100px recommended
- **Format**: PNG with transparent background works best
- **Note**: Will be displayed with hover effect

### Product Image
- **Size**: 280x280px recommended
- **Format**: PNG with transparent/white background
- **Note**: Drop shadow is automatically applied

### Using Images

**Option 1: Figma Assets (if you have imported designs)**
```typescript
import yourLogo from 'figma:asset/hash.png';
```

**Option 2: ImageWithFallback (for any URL)**
```typescript
productImage: 'https://example.com/product.png'
// The template automatically uses ImageWithFallback component
```

## 📝 Examples

### Minimal Product (Required Fields Only)

```typescript
export const minimalProduct: ProductPageData = {
  heroBackground: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  productCategory: 'RF Module',
  productReference: 'RF-100',
  productTitle: 'Basic RF Module',
  productDescription: 'Simple RF module for testing.',
  
  origin: { country: 'USA', flagCode: 'us' },
  manufacturerLogo: 'https://via.placeholder.com/225x100',
  productImage: 'https://via.placeholder.com/280x280',
  
  componentSpec: {
    mpn: 'RF-100',
    standards: [],
    technology: 'CMOS',
    radiation: 'N/A',
    bands: ['1-2 GHz'],
    vswr: '<2.0',
    polarization: 'Linear',
    lnaGain: '',
  },
  
  electricalSpecs: [{ label: 'Voltage', value: '5V' }],
  mechanicalSpecs: [{ label: 'Weight', value: '100g' }],
  environmentalSpecs: [{ label: 'Temp Range', value: '-40 to +85°C' }],
  
  tabs: [{ name: 'General', color: 'blue' }],
  
  manufacturerInfo: {
    name: 'Example Corp',
    website: { url: 'https://example.com', displayText: 'example.com' },
    qualitySystem: 'ISO 9001',
    description: ['Example Corp manufactures RF modules.'],
  },
};
```

### Full-Featured Product

See `/src/app/data/antcom-g3ant-3xxx.ts` for a complete real-world example with all features.

## 🔧 Advanced Customization

### Creating Multiple Product Pages

To create a multi-product catalog, you can use React Router:

```typescript
// Install react-router if needed
import { RouterProvider, createBrowserRouter } from 'react-router';
import { ProductPageTemplate } from './components/ProductPageTemplate';
import { product1Data } from './data/product1';
import { product2Data } from './data/product2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductCatalog />, // Your catalog page
  },
  {
    path: '/products/product1',
    element: <ProductPageTemplate data={product1Data} />,
  },
  {
    path: '/products/product2',
    element: <ProductPageTemplate data={product2Data} />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

### Extending the Template

If you need to modify the template itself:

1. Edit `/src/app/components/ProductPageTemplate.tsx`
2. Add new fields to the `ProductPageData` interface
3. Update the template to render your new fields
4. Update all product data files to include the new fields

## 📚 Component Reference

### ProductPageTemplate
Main template component that accepts product data and renders the complete page.

**Props:**
- `data: ProductPageData` - All product information

### ComponentSpecTable
Renders the main specifications table.

**Props:**
- `data: ComponentSpec` - Component specifications object

### DetailedSpecColumn
Renders a column of detailed specifications.

**Props:**
- `title: string` - Column title (e.g., "Electrical")
- `rows: SpecRow[]` - Array of label-value pairs

## 🎯 Design System

The template follows these design specifications:

- **Font**: Inter
- **Max Width**: 1440px
- **Grid**: 8px base unit
- **Typography**:
  - H1: 32-40px / 700 weight
  - H2: 18px / 700 weight
  - Body: 14-16px / 400 weight
- **Colors**:
  - Primary: Orange (#f97316)
  - Background: Slate-50 (#f8fafc)
  - Cards: White with slate borders
- **Border Radius**: 12px for cards, 8px for elements
- **Shadows**: Subtle elevation with colored glows

## 🌐 Responsive Design

The template is fully responsive:
- **Mobile**: Stacked layout, scrollable tabs, adjusted font sizes
- **Tablet**: Mixed layout with some columns
- **Desktop**: Full three-column layout with all features

## ❓ FAQ

**Q: Can I use different image formats?**
A: Yes, PNG, JPG, SVG are all supported. Use ImageWithFallback for best results.

**Q: How many tabs can I have?**
A: As many as you want, but 3-5 is recommended for best UX.

**Q: Can I add more specification categories?**
A: Yes, but you'll need to modify the DetailedSpecColumn grid in ProductPageTemplate.tsx.

**Q: What if I don't have a datasheet?**
A: Simply omit the `datasheetUrl` field or set it to `undefined`.

**Q: Can I change the styling?**
A: Yes, edit ProductPageTemplate.tsx. The component uses Tailwind CSS v4 classes.

## 📞 Support

For issues or questions:
1. Check the inline documentation in `example-product-template.ts`
2. Review the working example in `antcom-g3ant-3xxx.ts`
3. Examine the template component code in `ProductPageTemplate.tsx`

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**License**: Use freely in your projects
