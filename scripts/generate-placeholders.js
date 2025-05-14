const fs = require('fs');
const path = require('path');

const products = [
  {
    id: '514-buffalo-plaid',
    name: '514 Buffalo Plaid Jacket'
  },
  {
    id: 'bruh-denim',
    name: 'BRUH Denim Jacket'
  },
  {
    id: 'classic-tee',
    name: 'Classic T-Shirt'
  },
  {
    id: 'premium-hoodie',
    name: 'Premium Hoodie'
  },
  {
    id: 'snapback-cap',
    name: 'Snapback Cap'
  }
];

const additionalPlaceholders = [
  {
    id: 'hero-placeholder',
    name: 'Hero Image'
  },
  {
    id: 'gallery-placeholder',
    name: 'Gallery Image'
  }
];

const svgTemplate = (name) => `
<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="800" fill="#111827"/>
  <text x="400" y="380" font-family="system-ui" font-size="32" fill="#FFFFFF" text-anchor="middle">
    ${name}
  </text>
  <text x="400" y="420" font-family="system-ui" font-size="24" fill="#FFD700" text-anchor="middle">
    BthePrints
  </text>
</svg>
`;

// Ensure directories exist
const imagesDir = path.join(process.cwd(), 'public', 'images');
const productsDir = path.join(imagesDir, 'products');
const placeholdersDir = path.join(imagesDir, 'placeholders');

[imagesDir, productsDir, placeholdersDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate product placeholder images
products.forEach((product) => {
  const svg = svgTemplate(product.name);
  const filePath = path.join(productsDir, `${product.id}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`Generated placeholder for ${product.name}`);
});

// Generate additional placeholder images
additionalPlaceholders.forEach((placeholder) => {
  const svg = svgTemplate(placeholder.name);
  const filePath = path.join(placeholdersDir, `${placeholder.id}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`Generated placeholder for ${placeholder.name}`);
}); 