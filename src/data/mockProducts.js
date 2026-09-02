const createThumbnail = (label, color) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="${color}" />
      <text
        x="50%"
        y="50%"
        fill="#ffffff"
        font-size="18"
        font-family="sans-serif"
        text-anchor="middle"
        dominant-baseline="middle"
      >${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
};

export const mockProducts = [
  {
    id: '1',
    title: 'Camiseta Branca',
    price: 49.9,
    thumbnail: createThumbnail('Camiseta', '#3483fa'),
  },
  {
    id: '2',
    title: 'Caneca de Cafe',
    price: 29.9,
    thumbnail: createThumbnail('Caneca', '#ff6f00'),
  },
  {
    id: '3',
    title: 'Bone Preto',
    price: 59.9,
    thumbnail: createThumbnail('Bone', '#333333'),
  },
];

export default mockProducts;
