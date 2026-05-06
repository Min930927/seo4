const products = [
  { id: 'kr_1', category: 'korean', title: 'Seoul Neon Nights', artist: 'K-Pop All Stars', price: '$29.99', img: 'assets/images/kr_record_1.png', desc: 'Experience the dynamic beats and vivid melodies of the best K-Pop anthems. Pressed on neon pink vinyl.', label: 'Seoul Records', year: '2024' },
  { id: 'kr_2', category: 'korean', title: 'Pastel Dreams', artist: 'Indie Wave', price: '$27.99', img: 'assets/images/kr_record_2.png', desc: 'Soothing indie tracks that take you on a journey through pastel landscapes.', label: 'Aesthetic Sounds', year: '2023' },
  { id: 'kr_3', category: 'korean', title: 'Midnight Groove', artist: 'R&B Legends KR', price: '$31.99', img: 'assets/images/kr_record_3.png', desc: 'Smooth, dark R&B rhythms for those late night drives.', label: 'Neon Soul', year: '2025' },
  
  { id: 'jp_1', category: 'japanese', title: 'Tokyo City Lights', artist: 'City Pop Collective', price: '$35.99', img: 'assets/images/jp_record_1.png', desc: 'The ultimate collection of 80s inspired Japanese City Pop.', label: 'Retro Wave JP', year: '1984 / Remastered 2024' },
  { id: 'jp_2', category: 'japanese', title: 'Shibuya Riot', artist: 'J-Rock Revolution', price: '$28.99', img: 'assets/images/jp_record_2.png', desc: 'Energetic and loud. The defining album of the new J-Rock era.', label: 'Distortion Inc', year: '2024' },
  { id: 'jp_3', category: 'japanese', title: 'Zen Garden', artist: 'Ambient Masters', price: '$26.99', img: 'assets/images/jp_record_3.png', desc: 'Minimalist ambient tracks perfect for meditation and focus.', label: 'Nature Sounds', year: '2022' },
  
  { id: 'cn_1', category: 'chinese', title: 'Shanghai Elegance', artist: 'C-Pop Divas', price: '$30.99', img: 'assets/images/cn_record_1.png', desc: 'Cinematic pop music blending modern production with elegant vocals.', label: 'Dragon Records', year: '2024' },
  { id: 'cn_2', category: 'chinese', title: 'Ink & Strings', artist: 'Folk Fusion Ensemble', price: '$32.99', img: 'assets/images/cn_record_2.png', desc: 'Traditional Chinese instruments meet modern orchestration.', label: 'Eastern Harmonies', year: '2023' },
  { id: 'cn_3', category: 'chinese', title: 'Street Echoes', artist: 'CN Hip-Hop Underground', price: '$29.99', img: 'assets/images/cn_record_3.png', desc: 'Raw and unfiltered hip-hop from the streets of Beijing.', label: 'Urban Asia', year: '2025' },
  { id: 'cn_4', category: 'chinese', title: 'Melancholy Rain', artist: 'Indie Rock CN', price: '$27.99', img: 'assets/images/cn_record_4.png', desc: 'Lo-fi aesthetic indie rock that captures the mood of a rainy afternoon.', label: 'Lo-Fi Records', year: '2023' },
  
  { id: 'us_1', category: 'western', title: 'Hollywood Glamour', artist: 'Pop Superstars', price: '$34.99', img: 'assets/images/us_record_1.png', desc: 'Chart-topping American pop hits that define a generation.', label: 'LA Hits', year: '2024' },
  { id: 'us_2', category: 'western', title: 'Route 66 Fire', artist: 'Classic Rock Legends', price: '$29.99', img: 'assets/images/us_record_2.png', desc: 'Heavy guitars and thunderous drums. True American rock.', label: 'Eagle Records', year: '1978 / Remastered 2024' },
  { id: 'us_3', category: 'western', title: 'New Orleans Night', artist: 'Jazz Quartet', price: '$36.99', img: 'assets/images/us_record_3.png', desc: 'Vintage jazz recorded in the heart of the French Quarter.', label: 'Blue Note', year: '1965 / Remastered 2025' },
  { id: 'us_4', category: 'western', title: 'Brooklyn Boom', artist: 'East Coast Hip-Hop', price: '$31.99', img: 'assets/images/us_record_4.png', desc: 'Boombox ready beats and legendary lyrical flows.', label: 'Empire State', year: '1995' },
  
  { id: 'oth_1', category: 'others', title: 'Laser Grid', category: 'others', artist: 'EDM Pioneers', price: '$28.99', img: 'assets/images/other_record_1.png', desc: 'High-energy electronic dance music for the ultimate club experience.', label: 'Future Sound', year: '2025' },
  { id: 'oth_2', category: 'others', title: 'Golden Symphony', category: 'others', artist: 'Philharmonic Orchestra', price: '$39.99', img: 'assets/images/other_record_2.png', desc: 'Elegant classical masterpieces performed by world-renowned musicians.', label: 'Opus Records', year: '2022' }
];

function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

function createProductCard(product) {
  return `
    <div class="product-card animate-fade" onclick="window.location.href='product.html?id=${product.id}'">
      <div class="product-img-wrapper">
        <img src="${product.img}" alt="${product.title}" class="product-img">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-artist">${product.artist}</p>
        <div class="product-price">${product.price}</div>
      </div>
    </div>
  `;
}

function renderProducts(containerId, category) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const items = getProductsByCategory(category);
  container.innerHTML = items.map(p => createProductCard(p)).join('');
}
