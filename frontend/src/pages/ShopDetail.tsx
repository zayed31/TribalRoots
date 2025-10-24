import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function ShopDetail() {
  // Mock data for the shop
  const shop = {
    name: "Artisan's Haven",
    rating: 4.5,
    totalReviews: 23,
    address: "123 Tribal Art Lane, Jaipur, Rajasthan, 302001, India",
    phone: "+91 98765 43210",
    description: "Step into a world where tradition breathes and art thrives. Artisan's Haven specializes in authentic, hand-painted Gond art, exquisite Dokra metal crafts, and lustrous handwoven tussar silk sarees. Each item in our collection is a masterpiece, crafted with passion by skilled artisans from various tribes across India. We believe in fair trade and empowering our artists, ensuring that every purchase supports the preservation of these timeless cultural heritages.",
    story: "Artisan's Haven was born from the dream of a Gond tribal family to bring their ancestral art to the world. Each piece tells a story, a whisper from the forests of Madhya Pradesh, passed down through generations. Our shop is a living gallery, celebrating the spirit and resilience of our community. Through our art, we share the tales of our ancestors, the beauty of our natural surroundings, and the vibrant culture of the Gond tribe.",
    images: {
      main: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9zmepNxcCfO0WXr8XmgIAJW2zIvdiSyKFnkZbE23rsuW4pQRPfNuoxDglyf2p27p1EWj3cYQxSqn7EF-sJypaRl0IBpQetPPQIEzA5Dpv_SFGcTYtT7xG9iEZU87SwIb3lD7DXBtInNHNUTilZCsdcfHlQ1W5sDl5rSEoa8dGQSsm5eFP3anbCJppkqEJSJbtEE9-To7el7D9cPkCR7g3YwS0kdgyBKpWnX4HQ2Ma_2nEFrHMZle4g12bbq4hP-U3ngjJrYIKVQ",
      gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAiaf3NjV-coqQ6AlC6QZp7MBTaRwuEwk0Lcozd2opjJd1Y1LhgFy_LuShXmw-55FsO_XIH1jwXrJslaJ7zLEnGNnxujmky3rhGRMCnpEr4c_qTP8sUQk8IRYm1qOTOex3L18q56I4XQc3pTrBOOe9ToePmqYY7WRvrpIDMdYxMD5bSkNNRMVvlOZnwwf3kOSyhiE0iQrMbF28EorfMh4G7aJiCOzT2jXalOSTwPfvOflrYQj1qWBRzMI7W1GHB7CTdHD4qZwmKDA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDrW64jbWOVAFrTYi9Kx748KOw38KGTJxaI07K-pvPoRnHFzDEmb-_v2mTxUGSq8tPvcR83_nFv10IQKbyoc2AfA82lq8LWlLQnRmoJoYBaVzIIaJOq8VDEOKaYJd_Gf2HBL93odacmGY2TX5vE7s9NZ_C9lGpV0ndvn71x5RLLmIUUCKEqfMREiJRTkR0JtIGRFivjcYrhe1iO3NMzIzRSUdBa8VbqxSDsGHI-of5o8InSgl7EpIKK2bfJmQomS5-WjrWtrd11Pg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCRMK9-PQaB03Nk_Z1z3dt_QDYFveM0YGRUSDQUSH5pHycaRKtr2fo38odOWo5QDit2o246J5wHAn9nRneeP0qAElPrrnpy7cubv80NcC8SGEIO0r4GCZvQE22BcxdWMXXEWLySWrfdAs8_6lfjS7SUMccRNDxdRWFJmQ3Zj8RI2X5MX2myaieLXqbt6RwAQQbj6-doarmEZOUtaIdOC7sIPaeXdplAZCB_LfdmbSd1vHRgaEoZ4Lc0HpkVsgw1MzizOrQ_wmfw7A"
      ]
    },
    reviews: [
      {
        name: "Ananya Sharma",
        rating: 5,
        comment: "An absolute gem! The quality of the Dokra statues is breathtaking. You can feel the history and soul in every piece. A must-visit in Jaipur.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_CE8qqtOmCHefhhSjFR2I8jsnrHEMOirqv7O8w2_cep3gJqJgrhECSJ2zDRFXY82_aY6mUMgbqMrk7ICGCNNtO8_NRggqmki-C-O0K7Eag2L4LRqV_w6JBTm_S1bEOx2BZ8TC3c9PwjOrWEcvyo82v-lZbP6C1J1dpnEpXlIVTYzirB0Ucib3R0yyLO1s8H_CDJsE3S3Ff-4VmaDYkNb6daO2XsCldsCcUUHsfbsEr637xMXOhdDCZjPsLD8-B5q2CJyHy-_wQ"
      },
      {
        name: "Rohan Mehta",
        rating: 4,
        comment: "Beautiful collection of sarees. The staff were incredibly knowledgeable about the weaving process and the cultural significance. A truly enriching experience.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU320hYrwZGIreS1uoHGJdKmmPJcXx8yVARyNE19flIzHEXrP9X3Fm27I-cl4x1A51xMz5ieUPPqb3gzVmwOduxQtz8YqncSWYUjDSCPz7RkT9bwcQMhvtvQ0jS_5ZYeGL2wTREZNiOXDIdYjneNr-8ICl1M8agXmjbw094ftWA6Qb0yhNvlvRkXf_HNjwL2EGXjfS1_L_ad5stblNQD7h-wGBewgPu6ymcIufAERjyhzIuaZuFIE-ABhpX0lU-oxUVlcQuogU5g"
      }
    ],
    ratingDistribution: {
      5: 65,
      4: 25,
      3: 5,
      2: 5,
      1: 0
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="material-symbols-outlined">star</span>
      );
    }
    return stars;
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        
        <main className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto w-full flex-1 py-10">
          {/* Back Button */}
          <div className="p-4">
            <BackButton />
          </div>

          {/* Shop Images and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
            {/* Images Section */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
                <div 
                  className="col-span-2 row-span-2 bg-center bg-no-repeat bg-cover rounded-xl" 
                  style={{backgroundImage: `url("${shop.images.main}")`}}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {shop.images.gallery.map((img, idx) => (
                  <div 
                    key={idx}
                    className="bg-center bg-no-repeat bg-cover h-40 rounded-xl" 
                    style={{backgroundImage: `url("${img}")`}}
                  ></div>
                ))}
              </div>
            </div>

            {/* Shop Info Section */}
            <div className="lg:col-span-2">
              <div className="bg-subtle-light dark:bg-subtle-dark p-6 rounded-xl">
                <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">{shop.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-primary">
                    {renderStars(shop.rating)}
                  </div>
                  <p className="text-accent-light dark:text-accent-dark text-sm">({shop.rating} stars from {shop.totalReviews} reviews)</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                    <p className="text-text-light dark:text-text-dark">{shop.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <p className="text-text-light dark:text-text-dark">{shop.phone}</p>
                  </div>
                  <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mt-4">
                    <img 
                      className="w-full h-full object-cover rounded-lg" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAx17bbQsak8XX0DI7vWqOHcZt2FdovwCccmj8qn7DWR179oKqxhVQqA3bC4U4802PhGpa5P4Rlm5mqYh-5VgNthdVBm7yiCw57ojBIs-YDt5bu1yZ-daiiDJdCoqP2FAH6j9GMKeTt6gtcYVtd4RYxmxzWfdD70fedApNVnYWNFwgYeElYD4KfzvRMvqAvAN7BV7n9EV5QlXsKEoYEa84-_qalNenUJ-FcHlTgeuyvGVSzuPlwXPl-GAJ2_Z8tmOjYBl_HqGyaQ"
                      alt="Map showing the location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Storytelling Layer */}
          <div className="mt-12 bg-subtle-light dark:bg-subtle-dark p-8 rounded-xl">
            <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark mb-6">Cultural Storytelling Layer</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">The Story Behind the Shop &amp; Tribe</h3>
                <p className="mt-2 text-text-light dark:text-text-dark leading-relaxed">{shop.story}</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden group">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo-BZj7TOCWqyVkesiWqYOve_rE55hMgcmlL7-xZnwE7IKCt4cdxcSL0DvOc5jNjkGxivSzrp5xZlKN_1p_NDfPl42hmnh-8frpKxRJr8SxZrhQ0MRaYirw9PqvGNau2hw5uUjeYpJHKQADjDIyeALLFCkZ3mo5CGqN6g6KEEBhMekDEciuY2M1boCQVo5JdqWjW0JVixRmJu9aUZkrx7zhSyT_Ifr4bHblPjBhOf0Ou3Dm3k7KxmY4XhIOXIAV35PWdOr2Y4sBA"
                      alt="A video showing the process of Gond art creation"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button className="bg-primary/80 text-white rounded-full p-4 hover:bg-primary transition-colors">
                        <span className="material-symbols-outlined text-4xl">play_arrow</span>
                      </button>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr3RGm8mP8UTCjjbiPzNbXFT6Ki_mIlrOMdCQXOjF2Ho00sCaoDaP2e4B0Ech7RUhOx1czduNxyICis1FO0YR2e5J_vJ7PtP1rEDxMj-RuDBPg82flXtaBx2cQCH31XevKG1sRm7v6U7X8Uu7jMffR8rNRMUlDSAdb5JCifeq_7-XQBW9Zy7LgG4x9WpR3ETxffYlou4z4-0OVpl_rM49qgz3AwVxbSCM0NuodhDXDfXIF-edSR1ewcZMdw3Zh5l5u2Jz3HDD2OQ"
                      alt="Photo of a Gond artisan with their family"
                    />
                  </div>
                </div>
              </div>

              {/* Did You Know Section */}
              <div>
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Did You Know?</h3>
                <div className="mt-4 bg-primary/10 dark:bg-primary/20 p-4 rounded-lg flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">lightbulb</span>
                  <div>
                    <h4 className="font-bold text-primary">An Ancient Tradition</h4>
                    <p className="text-text-light dark:text-text-dark text-sm mt-1">The intricate patterns in Gond art are often inspired by dreams, folklore, and the natural world. This art form has been practiced for over 1400 years, with skills and stories passed down orally and through murals on house walls.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Description */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Shop Description</h2>
            <p className="mt-4 text-text-light dark:text-text-dark leading-relaxed">{shop.description}</p>
          </div>

          {/* Reviews & Ratings */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Reviews &amp; Ratings</h2>
            <div className="mt-6">
              <div className="flex flex-wrap gap-x-12 gap-y-8 p-4 bg-subtle-light dark:bg-subtle-dark rounded-xl">
                <div className="flex flex-col gap-2">
                  <p className="text-text-light dark:text-text-dark text-5xl font-black leading-tight tracking-[-0.033em]">{shop.rating}</p>
                  <div className="flex gap-0.5 text-primary">
                    {renderStars(shop.rating)}
                  </div>
                  <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal">Based on {shop.totalReviews} reviews</p>
                </div>
                <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <>
                      <p key={`star-${star}`} className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">{star}</p>
                      <div key={`bar-${star}`} className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#e7d6cf] dark:bg-accent-dark/30">
                        <div className="rounded-full bg-primary" style={{width: `${shop.ratingDistribution[star as keyof typeof shop.ratingDistribution]}%`}}></div>
                      </div>
                      <p key={`pct-${star}`} className="text-accent-light dark:text-accent-dark text-sm font-normal leading-normal text-right">{shop.ratingDistribution[star as keyof typeof shop.ratingDistribution]}%</p>
                    </>
                  ))}
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="mt-8 space-y-6">
                {shop.reviews.map((review, idx) => (
                  <div key={idx} className="border-b border-subtle-light dark:border-subtle-dark pb-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" 
                        style={{backgroundImage: `url("${review.avatar}")`}}
                      ></div>
                      <div>
                        <p className="font-bold text-text-light dark:text-text-dark">{review.name}</p>
                        <div className="flex text-primary">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-text-light dark:text-text-dark">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leave a Review Form */}
          <div className="mt-12 bg-subtle-light dark:bg-subtle-dark p-8 rounded-xl">
            <h3 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Leave a Review</h3>
            <p className="text-accent-light dark:text-accent-dark mt-1">Share your experience to help other travelers.</p>
            <form className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="name">Your Name</label>
                <input 
                  className="form-input mt-1 block w-full rounded-lg bg-background-light dark:bg-background-dark border-accent-light/50 dark:border-accent-dark/50 focus:ring-primary focus:border-primary text-text-light dark:text-text-dark" 
                  id="name" 
                  name="name" 
                  placeholder="e.g., Priya Patel" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark">Leave a Rating</label>
                <div className="flex gap-1 mt-2 text-3xl text-accent-light dark:text-accent-dark cursor-pointer">
                  <span className="material-symbols-outlined hover:text-primary">star</span>
                  <span className="material-symbols-outlined hover:text-primary">star</span>
                  <span className="material-symbols-outlined hover:text-primary">star</span>
                  <span className="material-symbols-outlined hover:text-primary">star</span>
                  <span className="material-symbols-outlined hover:text-primary">star</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="experience">Share Your Experience</label>
                <textarea 
                  className="form-textarea mt-1 block w-full rounded-lg bg-background-light dark:bg-background-dark border-accent-light/50 dark:border-accent-dark/50 focus:ring-primary focus:border-primary text-text-light dark:text-text-dark" 
                  id="experience" 
                  name="experience" 
                  placeholder="Tell us about the products, the atmosphere, and your overall visit..." 
                  rows={4}
                ></textarea>
              </div>
              <div>
                <button 
                  className="flex min-w-[150px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" 
                  type="submit"
                >
                  <span className="truncate">Submit Review</span>
                </button>
              </div>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
