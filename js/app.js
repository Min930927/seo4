const products = [
  { id: 'kr_1', category: 'korean', title: '首爾霓虹之夜', artist: 'K-Pop 群星', price: '$29.99', img: 'assets/images/kr_record_1.png', desc: '體驗最頂級 K-Pop 國歌的動感節奏與生動旋律。霓虹粉紅彩膠壓製。', label: '首爾唱片', year: '2024' },
  { id: 'kr_2', category: 'korean', title: '粉彩夢境', artist: '獨立浪潮', price: '$27.99', img: 'assets/images/kr_record_2.png', desc: '舒緩的獨立音樂曲目，帶您踏上穿越粉彩風景的旅程。', label: '美學之聲', year: '2023' },
  { id: 'kr_3', category: 'korean', title: '午夜律動', artist: 'R&B 傳奇 KR', price: '$31.99', img: 'assets/images/kr_record_3.png', desc: '適合深夜開車時聆聽的滑順、黑暗 R&B 節奏。', label: '霓虹靈魂', year: '2025' },
  
  { id: 'jp_1', category: 'japanese', title: '東京城市之光', artist: 'City Pop 樂團', price: '$35.99', img: 'assets/images/jp_record_1.png', desc: '80 年代風格日本 City Pop 的終極收藏。', label: '復古浪潮 JP', year: '1984 / 2024 數位修復' },
  { id: 'jp_2', category: 'japanese', title: '澀谷暴動', artist: 'J-Rock 革命', price: '$28.99', img: 'assets/images/jp_record_2.png', desc: '充滿活力與喧鬧。定義新 J-Rock 時代的指標性專輯。', label: '失真公司', year: '2024' },
  { id: 'jp_3', category: 'japanese', title: '枯山水', artist: '環境音大師', price: '$26.99', img: 'assets/images/jp_record_3.png', desc: '極簡主義的環境音樂，非常適合冥想與集中精神。', label: '自然之聲', year: '2022' },
  
  { id: 'cn_1', category: 'chinese', title: '上海優雅', artist: 'C-Pop 天后', price: '$30.99', img: 'assets/images/cn_record_1.png', desc: '將現代製作與優雅嗓音完美融合的電影感流行音樂。', label: '龍之唱片', year: '2024' },
  { id: 'cn_2', category: 'chinese', title: '水墨與琴弦', artist: '民謠融合樂團', price: '$32.99', img: 'assets/images/cn_record_2.png', desc: '傳統國樂器與現代管弦樂的完美交織。', label: '東方和聲', year: '2023' },
  { id: 'cn_3', category: 'chinese', title: '街頭迴音', artist: 'CN 嘻哈地下', price: '$29.99', img: 'assets/images/cn_record_3.png', desc: '來自北京街頭最純粹、未經修飾的嘻哈音樂。', label: '城市亞洲', year: '2025' },
  { id: 'cn_4', category: 'chinese', title: '憂鬱之雨', artist: '獨立搖滾 CN', price: '$27.99', img: 'assets/images/cn_record_4.png', desc: '捕捉下雨天午後情緒的 Lo-fi 美學獨立搖滾。', label: 'Lo-Fi 唱片', year: '2023' },
  
  { id: 'us_1', category: 'western', title: '好萊塢魅力', artist: '流行巨星', price: '$34.99', img: 'assets/images/us_record_1.png', desc: '定義了一個世代的美國流行冠軍單曲。', label: '洛杉磯金曲', year: '2024' },
  { id: 'us_2', category: 'western', title: '66 號公路之火', artist: '經典搖滾傳奇', price: '$29.99', img: 'assets/images/us_record_2.png', desc: '重型吉他與雷鳴般的鼓聲。真正的美國搖滾。', label: '老鷹唱片', year: '1978 / 2024 數位修復' },
  { id: 'us_3', category: 'western', title: '紐奧良之夜', artist: '爵士四重奏', price: '$36.99', img: 'assets/images/us_record_3.png', desc: '在法國區中心錄製的復古爵士樂。', label: '藍調音符', year: '1965 / 2025 數位修復' },
  { id: 'us_4', category: 'western', title: '布魯克林震撼', artist: '東岸嘻哈', price: '$31.99', img: 'assets/images/us_record_4.png', desc: '為手提音響準備好的節奏與傳奇的抒情流動。', label: '帝國大廈', year: '1995' },
  
  { id: 'oth_1', category: 'others', title: '雷射光網', category: 'others', artist: 'EDM 先驅', price: '$28.99', img: 'assets/images/other_record_1.png', desc: '為極致俱樂部體驗打造的高能量電子舞曲。', label: '未來之聲', year: '2025' },
  { id: 'oth_2', category: 'others', title: '金色交響曲', category: 'others', artist: '愛樂交響樂團', price: '$39.99', img: 'assets/images/other_record_2.png', desc: '由世界知名音樂家演奏的優雅古典傑作。', label: '作品唱片', year: '2022' }
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
