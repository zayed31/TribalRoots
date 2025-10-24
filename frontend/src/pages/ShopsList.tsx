import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ShopsList() {
  // Mock data for multiple shops
  const shops = [
    {
      id: 1,
      name: "Artisan's Haven",
      location: "Jaipur, Rajasthan",
      category: "Gond Art & Handicrafts",
      rating: 4.5,
      reviews: 23,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9zmepNxcCfO0WXr8XmgIAJW2zIvdiSyKFnkZbE23rsuW4pQRPfNuoxDglyf2p27p1EWj3cYQxSqn7EF-sJypaRl0IBpQetPPQIEzA5Dpv_SFGcTYtT7xG9iEZU87SwIb3lD7DXBtInNHNUTilZCsdcfHlQ1W5sDl5rSEoa8dGQSsm5eFP3anbCJppkqEJSJbtEE9-To7el7D9cPkCR7g3YwS0kdgyBKpWnX4HQ2Ma_2nEFrHMZle4g12bbq4hP-U3ngjJrYIKVQ",
      description: "Hand-painted Gond art, Dokra metal crafts, and handwoven tussar silk sarees."
    },
    {
      id: 2,
      name: "Gujarat Textiles",
      location: "Ahmedabad, Gujarat",
      category: "Hand-woven Textiles",
      rating: 4.8,
      reviews: 45,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa0OYD4KcLRBBuwCaMAKI8ROAojBH_29r7Tzhdb8PGq2dwuEEw3jWnE81jcLMPedEQMfaMEF6vqcmP7ORpSQ_83XM0ihYR06vkz4JmK3DJxAcLYDejfap_8IAY8byX0eXFDdnsxFK3q7V6ujyJvy1huJeHda3iBEBHfKU9C4BCwwlnoruiZxgScvsBaoQOLnWe3M2lNNvHUmTcpQcqlPjkIs7e0ws7axIzx577rV0yH5kfmwkxpkwaOiyI9N693-stcYLLpkXfVg",
      description: "Traditional hand-woven textiles and fabrics from Gujarat's finest artisans."
    },
    {
      id: 3,
      name: "Rajasthan Pottery",
      location: "Jaipur, Rajasthan",
      category: "Traditional Pottery",
      rating: 4.3,
      reviews: 18,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX_Y_M9Dp-hvBihpalh-GNNnN9pM11ZbIrrwsOw8dUT51k1q60HgzmYemdYO1kyOe2CvSKNUJGDq0iaYuQ13FPwuB8w7k8RJyGVRJ8XLB63uiXSh523pe3HpxgpQncghiDBCHhMSc0j0U7DulrxIvhj7JfaF36Jg615kTl-TFmgJNq-j6vEVq5LqBjoVV9h4wV6FeP7kTRId2fDQC6Adx_FGmfRV1HpHj3Kg96fQ3yNnSRx-cDSUDZBGpIIbluHns0WysUh744jA",
      description: "Beautifully crafted traditional pottery with intricate designs."
    },
    {
      id: 4,
      name: "Kerala Spices",
      location: "Kochi, Kerala",
      category: "Spices & Herbs",
      rating: 4.7,
      reviews: 67,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGCvK_NQQjq10RbQkAWBFzL0NA8xaBxkoM9aLgTgbEHK05xw2aaAaNBMossllIL2_MGVugXUoOB2Mxoy5J9zggvkgPrg2lSx4a4wtunIYEeogV0KGJ7U9ssRDSP2TxoAMY9720SRE9FguEFqB06UJmdT6t5yvJH3acACf34DSuk6VP_yMsF0xHMfjkXulDsdK0ARUyPIPAnqvZGVby4ajJTmG1cZfseU62JQM8n3LGCBbaGR6QMiuVgcb52Y_u34a6Q7KHLEa3kw",
      description: "Aromatic and authentic spices directly from Kerala's spice gardens."
    },
    {
      id: 5,
      name: "Warli Art Studio",
      location: "Mumbai, Maharashtra",
      category: "Warli Tribal Art",
      rating: 4.6,
      reviews: 31,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiaf3NjV-coqQ6AlC6QZp7MBTaRwuEwk0Lcozd2opjJd1Y1LhgFy_LuShXmw-55FsO_XIH1jwXrJslaJ7zLEnGNnxujmky3rhGRMCnpEr4c_qTP8sUQk8IRYm1qOTOex3L18q56I4XQc3pTrBOOe9ToePmqYY7WRvrpIDMdYxMD5bSkNNRMVvlOZnwwf3kOSyhiE0iQrMbF28EorfMh4G7aJiCOzT2jXalOSTwPfvOflrYQj1qWBRzMI7W1GHB7CTdHD4qZwmKDA",
      description: "Contemporary Warli art pieces preserving ancient tribal traditions."
    },
    {
      id: 6,
      name: "Northeast Bamboo Crafts",
      location: "Shillong, Meghalaya",
      category: "Bamboo Handicrafts",
      rating: 4.4,
      reviews: 29,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrW64jbWOVAFrTYi9Kx748KOw38KGTJxaI07K-pvPoRnHFzDEmb-_v2mTxUGSq8tPvcR83_nFv10IQKbyoc2AfA82lq8LWlLQnRmoJoYBaVzIIaJOq8VDEOKaYJd_Gf2HBL93odacmGY2TX5vE7s9NZ_C9lGpV0ndvn71x5RLLmIUUCKEqfMREiJRTkR0JtIGRFivjcYrhe1iO3NMzIzRSUdBa8VbqxSDsGHI-of5o8InSgl7EpIKK2bfJmQomS5-WjrWtrd11Pg",
      description: "Handcrafted bamboo products from the skilled artisans of Northeast India."
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="material-symbols-outlined text-sm">star</span>
      );
    }
    return stars;
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        
        <main className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto w-full flex-1 py-10">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] mb-2">
              Discover Tribal Shops
            </h1>
            <p className="text-accent-light dark:text-accent-dark text-lg">
              Explore authentic tribal shops and support local artisans across India
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-8 flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="flex w-full items-stretch rounded-lg h-12 bg-subtle-light dark:bg-subtle-dark">
                <div className="text-accent-light dark:text-accent-dark flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-0 h-full placeholder:text-accent-light dark:placeholder:text-accent-dark px-4 text-base" 
                  placeholder="Search shops by name, location, or category..." 
                />
              </div>
            </div>
            <select className="form-select rounded-lg bg-subtle-light dark:bg-subtle-dark border-none text-text-light dark:text-text-dark h-12 px-4 min-w-[150px]">
              <option>All Categories</option>
              <option>Handicrafts</option>
              <option>Textiles</option>
              <option>Pottery</option>
              <option>Spices</option>
              <option>Art</option>
            </select>
            <select className="form-select rounded-lg bg-subtle-light dark:bg-subtle-dark border-none text-text-light dark:text-text-dark h-12 px-4 min-w-[150px]">
              <option>All States</option>
              <option>Rajasthan</option>
              <option>Gujarat</option>
              <option>Kerala</option>
              <option>Maharashtra</option>
              <option>Meghalaya</option>
            </select>
          </div>

          {/* Shops Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <Link 
                key={shop.id}
                to={`/shops/${shop.id}`}
                className="flex flex-col rounded-xl bg-subtle-light dark:bg-subtle-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div 
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
                  style={{backgroundImage: `url("${shop.image}")`}}
                ></div>
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight">{shop.name}</h3>
                    <div className="flex items-center gap-2 text-accent-light dark:text-accent-dark text-sm">
                      <span className="material-symbols-outlined text-base">location_on</span>
                      <span>{shop.location}</span>
                    </div>
                    <p className="text-primary text-sm font-medium">{shop.category}</p>
                  </div>
                  
                  <p className="text-text-light dark:text-text-dark text-sm leading-relaxed line-clamp-2">
                    {shop.description}
                  </p>

                  <div className="flex items-center gap-2 mt-auto">
                    <div className="flex text-primary">
                      {renderStars(shop.rating)}
                    </div>
                    <span className="text-accent-light dark:text-accent-dark text-sm">
                      {shop.rating} ({shop.reviews} reviews)
                    </span>
                  </div>

                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 transition-colors mt-2">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-bold">1</button>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white transition-colors">2</button>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white transition-colors">3</button>
            <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
