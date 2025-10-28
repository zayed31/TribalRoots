import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ShopsList() {
  // Mock data for multiple shops
  const shops = [
    {
      id: 1,
      name: "Warli Art Studio",
      location: "Mysuru, Karnataka",
      category: "Warli Tribal Art",
      rating: 4.5,
      reviews: 128,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx1JdlVT-7DnwpWfm_mlwQu0UwaNEBeOO_Q-ZTsgYKdR8UNEuOetoEUju8VmltHcJUai6B2ohHCzRTu4Vc6fCRxqOTAlMpMp5PpViyGO7g74gO2Sy27w-Ql0pZJsNG3ZoJ22piTNm51qYMd9Skvn5213CE--Ti7qEZzQryrtOH39Z2Xv-9UDReF-ushhNXYXUIxOti2n-bSNbcvlireAG3gFPkS3l2LabeXUDyZYsO2MjOXjCsMlU2iwWlXsGzQt_xWDvwyNZP5A",
      description: "Traditional Warli art studio preserving ancient tribal traditions with contemporary pieces."
    },
    {
      id: 2,
      name: "Devaraja Market",
      location: "Mysuru, Karnataka",
      category: "Historic Bazaar",
      rating: 4.5,
      reviews: 850,
      image: "/Images/DevarajaMarket.jpg",
      description: "Century-old market famous for fresh flowers, spices, sandalwood products, and traditional crafts."
    },
    {
      id: 3,
      name: "Badsha Stores",
      location: "Mysuru, Karnataka",
      category: "Mysore Silk",
      rating: 4.5,
      reviews: 320,
      image: "/Images/BadshahStores.jpg",
      description: "Authentic Mysore silk sarees and dress materials with KSIC certification and traditional shopping experience."
    },
    {
      id: 4,
      name: "Cauvery Handicrafts",
      location: "Mysuru, Karnataka",
      category: "Government Emporium",
      rating: 4.5,
      reviews: 450,
      image: "/Images/CauveryHandicrafts.jpg",
      description: "Karnataka State Arts & Crafts Emporium offering authenticated GI-tagged handicrafts including sandalwood, Mysore silk, and rosewood inlay."
    },
    {
      id: 5,
      name: "Sri (New) Geetha Fine Arts",
      location: "Mandi Mohalla, Mysuru, Karnataka",
      category: "Artisan Workshop",
      rating: 4.5,
      reviews: 145,
      image: "/Images/SriGeetaArts.jpg",
      description: "Traditional rosewood inlay & marquetry workshop in old Mysore—decades of hand-crafted furniture, decorative panels, and boxes."
    },
    {
      id: 6,
      name: "Ramsons Bombe Mane",
      location: "Nazarbad, Mysuru, Karnataka",
      category: "Cultural Studio",
      rating: 4.5,
      reviews: 220,
      image: "/Images/RamsomBombeMane.jpg",
      description: "Traditional doll house & cultural exhibition space—handcrafted dolls from artisan clusters across India, Golu displays, folk art."
    },
    {
      id: 7,
      name: "Mysuru Miniatures",
      location: "Metagalli, Mysuru, Karnataka",
      category: "Artisan Studio",
      rating: 4.5,
      reviews: 95,
      image: "/Images/MysoreMiniatures.webp",
      description: "One-person studio creating museum-quality miniature models—temples, palaces, heritage homes, cultural dioramas, custom commissions."
    },
    {
      id: 8,
      name: "Narayana Fine Arts & Crafts",
      location: "Mysuru, Karnataka",
      category: "Heritage Workshop",
      rating: 4.5,
      reviews: 210,
      image: "/Images/NarayanaFineArtsAndCrafts.jpeg",
      description: "Traditional rosewood & teakwood furniture workshop since 1969—three generations of master carvers and inlay artisans."
    },
    {
      id: 9,
      name: "Gujarat Textiles",
      location: "Chikmagalur, Karnataka",
      category: "Hand-woven Textiles",
      rating: 4.5,
      reviews: 123,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoxUC_FYzoRsn9lQQLhTzuCQsWWfT46t5P1lBDzSchopMn05l0mRqgPZ4qrPVYf2DqmTQUp9YiwG43jpRMh_MU9wNmN0XAzsFzjz3fECL9YZwjWycYfqnWnxwhMw-ky7fdnF2mTRF6YU2d_cj1S_AcoXZsNf66po_MCs4-VLt0tyqU-cCt0yq0GRj9vzKzB_vr4ePYpJ-vLobiO5x7mcGCsuVMPdDwPOOvIwxD4vEu4J21jPk1DFTfFTg3ZAM3z_W_B8NXxAn1Ow",
      description: "Authentic handwoven textiles like Bandhani tie-dye and Patola silk sarees from Gujarat's finest artisans."
    },
    {
      id: 10,
      name: "Rajasthan Pottery",
      location: "Bengaluru, Karnataka",
      category: "Blue Pottery",
      rating: 4.8,
      reviews: 142,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHJNIw_y2BDDIy7x-N-lG6rOB5W6jClHkC0FAqA27Ea-oMGUvzWFfpWf34n4zrRYBsix7wu-6MnX4AaxV7AXvYNByAVLRSaLDc4ZX9W_p9QaVdnkiEF27SiFGgECsh_SZkF4BqY4VK9Mwu9vHNXGA5rrtYF7boMUGxqb-zrrmcP6HO_9Xfhv_tHWy7n72vfKOZq1HMbHxHPYtnS1zeej2_X2z89EukuKehwM_ALzagonFqSt3M27qs3vEzz3_gjwxefq_HVUtVuA",
      description: "Authentic Rajasthani blue pottery in Karnataka, offering a vibrant collection of handmade crafts."
    },
    {
      id: 11,
      name: "Kerala Spices",
      location: "Madikeri, Karnataka",
      category: "Spices & Herbs",
      rating: 4.8,
      reviews: 124,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL_Y4Xw1qX8PWYJQ8y6tR2f-8UG1iDRcZm_TDy1_NvkulZKm9lcG8eXOM0_mFSxcIQIkh3hPyRZgvenxKy_7lNAqnA_IBOUZUcHrBJYrHhZzsikeDltV_rrK4PfocgPHM7PO2299cxUcC4MG8qyZOrlN2cmP5HLT9GHPc9veoQaNrfn57cyqCjnIexQqcIlmBqvag_m6fVYVf1hYOy9v1pQJfaJVb0Ul5eeaBC9Ufkyi-JjQAXhoUdaMcUDqxNyDLjMIt6j31QKQ",
      description: "Hand-picked, sun-dried spices from the Kuruba tribe, celebrating Kerala's rich spice heritage."
    },
    {
      id: 12,
      name: "Northeast Bamboo Crafts",
      location: "Bengaluru, Karnataka",
      category: "Bamboo Handicrafts",
      rating: 4.8,
      reviews: 124,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0vads5uIFbKKorG_DiY3Lgj8siTMyw--GjePg8jgHDLI7XkzfLkXtmuaDTtpGIH6wKOwOb2s4Q8a39hLUk5GdAKX2j1_CUd3uqo5rO11PqXHeJr_cRIS6c0PTOEXbdFhflSh8q8N7eEqB7ggQrzKSkDS3rsBexTBvZwaBT7OxiWUat0jTs4yjIxr2f7-cA5S53VJS2o1qu_nag-fVYUvUWFh9ihuyAi3WXUgnrzkgnwvLQttTNRVOoDmZYtZ7D0Iv5chQIyrzEw",
      description: "Authentic artistry from the Seven Sisters, bringing Northeastern bamboo weaving to Karnataka."
    },
    {
      id: 13,
      name: "Bharath Art & Crafts",
      location: "Channapatna, Karnataka (60 km from Mysuru & Bengaluru)",
      category: "Craft Cluster",
      rating: 4.5,
      reviews: 380,
      image: "/Images/BharatArtsAndCrafts.avif",
      description: "GI-tagged Channapatna wooden lacquer toys—family workshop with factory tours, live demos, 100% eco-friendly traditional crafts."
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-list">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="#D1D5DB"/>
            </linearGradient>
          </defs>
          <path fill="url(#half-list)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
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
