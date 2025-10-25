import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function KeralaSpices() {
  const [showToast, setShowToast] = useState(false);

  const handleComingSoon = () => {
    setShowToast(true);
  };
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-kerala">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="#D1D5DB"/>
            </linearGradient>
          </defs>
          <path fill="url(#half-kerala)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1 gap-8">
            {/* Back Button */}
            <div className="flex flex-wrap gap-2 px-4 py-3">
              <BackButton />
            </div>

            {/* Header Image */}
            <div className="w-full">
              <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px] md:min-h-[500px]" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDL_Y4Xw1qX8PWYJQ8y6tR2f-8UG1iDRcZm_TDy1_NvkulZKm9lcG8eXOM0_mFSxcIQIkh3hPyRZgvenxKy_7lNAqnA_IBOUZUcHrBJYrHhZzsikeDltV_rrK4PfocgPHM7PO2299cxUcC4MG8qyZOrlN2cmP5HLT9GHPc9veoQaNrfn57cyqCjnIexQqcIlmBqvag_m6fVYVf1hYOy9v1pQJfaJVb0Ul5eeaBC9Ufkyi-JjQAXhoUdaMcUDqxNyDLjMIt6j31QKQ")'}}>
                <div className="flex flex-col gap-2 p-6 md:p-8">
                  <h1 className="text-white tracking-tight text-4xl md:text-5xl font-black leading-tight">Kerala Spices</h1>
                  <p className="text-white/90 text-lg md:text-xl font-medium">Authentic Flavors from the Spice Gardens.</p>
                </div>
              </div>
            </div>

            {/* Sticky Info Bar */}
            <div className="sticky top-[69px] z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-4 rounded-xl border border-text-light/10 dark:border-text-dark/10 shadow-sm">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Kerala Spices</h2>
                  <p className="text-sm text-text-light/70 dark:text-text-dark/70">Karnataka, India</p>
                </div>
                <div className="flex items-center gap-2 text-text-light/70 dark:text-text-dark/70">
                  <span className="material-symbols-outlined text-yellow-500 text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="font-bold text-text-light dark:text-text-dark">4.8</span>
                  <span>(124 reviews)</span>
                </div>
                <div className="flex gap-2 items-center w-full sm:w-auto">
                  <button 
                    onClick={handleComingSoon}
                    className="flex-1 sm:flex-none p-3 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-2xl">share</span>
                  </button>
                  <button 
                    onClick={handleComingSoon}
                    className="flex-1 sm:flex-none p-3 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-2xl">bookmark_add</span>
                  </button>
                  <button 
                    onClick={handleComingSoon}
                    className="flex-1 sm:flex-none flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-6 hover:bg-opacity-90 transition-opacity"
                  >
                    <span className="material-symbols-outlined text-xl">near_me</span>
                    <span className="truncate">Get Directions</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Information Block and Image Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
              {/* Left Column: Info + Story */}
              <div className="lg:col-span-2 flex flex-col gap-12">
                {/* Shop Info */}
                <section>
                  <div className="border-b border-text-light/10 dark:border-text-dark/10 pb-4 mb-6">
                    <h3 className="text-2xl font-bold">Shop Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-1">Address</h4>
                        <p className="text-text-light/70 dark:text-text-dark/70">123 Spice Route, Near Tribal Market, Madikeri, Kodagu District, Karnataka, 571201, India</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-1">Contact</h4>
                        <p className="text-text-light/70 dark:text-text-dark/70">+91 98765 43210</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-1">Hours</h4>
                        <p className="text-text-light/70 dark:text-text-dark/70">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-text-light/70 dark:text-text-dark/70">Sunday: Closed</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-light dark:text-text-dark mb-2">About the Shop</h4>
                      <p className="text-text-light/70 dark:text-text-dark/70 text-base font-normal leading-relaxed">
                        A genuine taste of tradition from the heart of Karnataka, celebrating the rich heritage of local spice cultivation. Our shop, run by the Kuruba tribe, offers hand-picked, sun-dried spices that carry the stories and flavors of generations. Discover the true essence of Indian cuisine with our authentic, aromatic treasures.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Cultural Storytelling Section */}
                <section className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl">
                  <div className="border-b border-primary/20 pb-4 mb-6">
                    <h3 className="text-2xl font-bold">Cultural Storytelling</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">The Spice Story</h4>
                      <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">The spice trade in Kerala dates back thousands of years, making it historically one of the most important centers for spices in the world. Known as the "Spice Garden of India," the region's unique climate and fertile soil give rise to spices of unparalleled quality. Our spices are sourced from small, family-run farms that use traditional, sustainable methods passed down through generations.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">Traditional Uses</h4>
                      <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Beyond the kitchen, spices are integral to Ayurvedic medicine and local rituals. Turmeric is used for its anti-inflammatory properties, cardamom as a digestive aid, and cloves for their antiseptic qualities. These spices are not just ingredients; they are a vital part of our cultural and medicinal heritage.</p>
                    </div>
                    <div className="bg-background-light/50 dark:bg-background-dark/20 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-primary mb-2">Did You Know?</h4>
                      <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Black pepper, often called the "King of Spices," was once more valuable than gold. It was so prized that it was used as currency in ancient trade routes and was a primary motivation for European explorers to find a sea route to India.</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Image Gallery */}
              <aside className="lg:col-span-1">
                <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 shadow-sm">
                  <div className="border-b border-text-light/10 dark:border-text-dark/10 pb-4 mb-6">
                    <h3 className="text-2xl font-bold">Gallery</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
                      <img alt="Close-up of star anise and cinnamon sticks" className="w-full h-full object-cover aspect-[4/3] cursor-pointer hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwY5pfnbslgRUyZ1C2c-aqvmL0SWt_URWl4U5XDMr6YAh1gQwUEVikGfrxCd0wHk_Qjj5KBLLXD_nFhWklCOR2HPCOJBFkYuIduvBFcR1TRD_EZ94Hhh338NBT1Xr0n2PzpN057cMuE1TMmZHLUy66f4jBWoAJUF7EkiVotmh8_ZOAS062NYmKe2X1fuNXDyNVsMHl9gN3M6dGWIhQHfumbjZKloluMFY0Cg7l2mNN3tlsyXVVI1tChHWMx7Z-Y-rLAm_DpI1kew" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img alt="Bags of colorful spices at a market" className="w-full h-full object-cover aspect-square cursor-pointer hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIlMbLUDHlOjrYT0qx60BCf-8jPMAP6RD5D6yYc6w7en7uvetYlBz2hGkBYeAQnhT2_-bbQ16v4nAspf1AjUSWTlZlKROGtWTnc_ytkhM-pX6hE8vaDISR9oQ93nX2iNGEW0MIpEyTFpqpK4ik24JnG6ghmZJDzAwxP236bvISsDV42S8V1sXMIKyAToxj4KKEOOaRd-PG_l501lX-6vAtnD8Bcx5h5AosdHJYQHhXWSmaGAb1zmxy9LyB3DmvEOQdOxp8jTP4VQ" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img alt="Dried red chillies in a bowl" className="w-full h-full object-cover aspect-square cursor-pointer hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZwqqTuK_pTxjedVbDlHdrG2f9d2052ezUt26UCYc4h0AT3J7-gQNOLElaZ4OffQASRKhX0hqSF05y3tAlA4cRO_gRkJPJ6CA_pDjgvBPaRdLj1mb3nDLX75luzBG0cQQ_uy0ohi1vuRHzPVf61t7TLM8w2G6xs3YQSwWvzP-NE18fw0dpqfdOFuCnQgXKArk3b9JdFkExM5bCfYoV94nkDdOML3HVhXA" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img alt="A variety of whole spices on a dark surface" className="w-full h-full object-cover aspect-square cursor-pointer hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCop3hs8RDslffK7DoZVWMEvQuNizUkFlSpgWwT3I-s-l9U4YaCNlWOFYzym04NW9Di6A54pBi1-dU5rdJZ8w0jLRWUR2U7aNUkqEx22J8c5Og9TgY7HkghO0DcbPrFVBkAgY-YY9dQMAvAVpRcbPG5-5WX_z2aFfjgC4LLMla7q0A9t7ko0G58qCG28w4TicittFWLIDqaTjUHcghcAm8NWw2Ww5enabIcA9smdqSbbgheQhsJQp1krjRDftpdZ317F1MqTk54w" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img alt="Spoons filled with powdered spices" className="w-full h-full object-cover aspect-square cursor-pointer hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Wgb5Gl2FGa7iphUGn_I2U9SRBdkCykJdCX7Xsu1qP53UbAYPy-WhvyRV7OEwKWebVZ22TQS_x9mFnm6DfnPP8wsJFUc75GPA7MZQfKBrq8vf8ZpIaB2IOs1ZOJ6Nk1nev5Z-eZFbIP8QjfkDej9F_Alu4x8WgphJwarnsRsgAGD4HPYvKeZoU1yGIN9uoGUCcrgMLoKtn5zoHkO-49bSVicaYcCsD3B0-oBZx_oTCpc9-O8VB1IOgvf_XKa4kA_Nuev3DZDNjA" />
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* User Reviews Section */}
            <section className="p-4">
              <div className="border-b border-text-light/10 dark:border-text-dark/10 pb-4 mb-6">
                <h3 className="text-2xl font-bold">Reviews & Ratings</h3>
              </div>
              {/* Overall Rating */}
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8 p-6 rounded-xl bg-primary/5 dark:bg-primary/10">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-5xl font-black text-primary">4.8</p>
                  <div className="flex text-yellow-500 text-xl">
                    {renderStars(4.8)}
                  </div>
                  <p className="text-text-light/70 dark:text-text-dark/70">Based on 124 reviews</p>
                </div>
                <div className="flex-1 w-full">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-2 text-sm text-text-light/70 dark:text-text-dark/70">
                      <span>{star}</span>
                      <span className="material-symbols-outlined text-yellow-500" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <div className="w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{width: star === 5 ? '90%' : star === 4 ? '5%' : star === 3 ? '3%' : star === 2 ? '2%' : '0%'}}></div>
                      </div>
                      <span className="font-bold text-text-light dark:text-text-dark w-8 text-right">{star === 5 ? '90%' : star === 4 ? '5%' : star === 3 ? '3%' : star === 2 ? '2%' : '0%'}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-6">
                {/* Review Card 1 */}
                <div className="flex gap-4 border-b border-text-light/10 dark:border-text-dark/10 pb-6">
                  <img alt="Reviewer avatar" className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCfh01U8D0Qqg72xHRAHpjeKLkp9bLxDcKZoxtC76HxVaIdaoUYslG1lJW6kluhcUoDDqUP9IOnDcdy3oUN7E3blfdtrSkQGJ9t_nyy37YZLrhNuzaWJx-L4tuWkVITxzoxxPDFH9doE_0X8nFssBzRmB4Ups6yUEp8E4f-mcvUazHlpE_gBbtsr2Yh3ebAQzKOyn8YE7D13QHpjUJLtMRqS3TzC4IPdZeB-0QCS41tEUPZjVZePL0vT7lh3WUy4Rq5YslOP5mJw" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">Ananya Sharma</p>
                        <p className="text-sm text-text-light/70 dark:text-text-dark/70">2 weeks ago</p>
                      </div>
                      <div className="flex text-yellow-500">
                        {renderStars(5)}
                      </div>
                    </div>
                    <p className="mt-2 text-text-light/70 dark:text-text-dark/70 leading-relaxed">Absolutely incredible! The aroma from the shop is heavenly. I bought some black pepper and cardamom, and the quality is far superior to anything I've found in supermarkets. A must-visit!</p>
                  </div>
                </div>

                {/* Review Card 2 */}
                <div className="flex gap-4 border-b border-text-light/10 dark:border-text-dark/10 pb-6">
                  <img alt="Reviewer avatar" className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdyYRxpmj_VxnfDS_PH-_cHhdXWprQgz_qKTKwxFvQEmVtVtBSXCGHBMOnMdmiG--3BqRijvgmpDAsq6nHmBPWfQxA-x7_mR8x0VUuCy_h2y6pjWUPKUUsvp-uhIlze_zkR7FtV8id9KmQqV_XYYJMKHuTMuVZUOwCVA1laO-8TiVUQFrNyq1XpnySRaWg5WOwWLRl_s3ws_-Jj9jSBAGEPa2x6nuVdBwWuZx4Qv9cLnbXbVn5ZyUuU8Fg8t9hzUsouo93g3EIog" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">Rohan Patel</p>
                        <p className="text-sm text-text-light/70 dark:text-text-dark/70">1 month ago</p>
                      </div>
                      <div className="flex text-yellow-500">
                        {renderStars(4.5)}
                      </div>
                    </div>
                    <p className="mt-2 text-text-light/70 dark:text-text-dark/70 leading-relaxed">A fantastic find. The owner was so knowledgeable and shared stories about how each spice is grown. It's more than a shop; it's a cultural experience. Highly recommend the cinnamon.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Review Submission Form */}
            <section className="p-4">
              <div className="border-b border-text-light/10 dark:border-text-dark/10 pb-4 mb-6">
                <h3 className="text-2xl font-bold">Leave a Review</h3>
              </div>
              <div className="p-6 bg-background-light dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 rounded-xl">
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="font-medium mb-2 block">Your Rating</label>
                    <div className="flex items-center gap-1 text-4xl text-text-light/30 dark:text-text-dark/30 cursor-pointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="material-symbols-outlined hover:text-yellow-500 transition-colors">star</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="font-medium mb-2 block" htmlFor="review-comment">Your Review</label>
                    <textarea className="w-full rounded-lg border-text-light/20 dark:border-text-dark/20 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary" id="review-comment" placeholder="Share your experience..." rows={4}></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button 
                      onClick={handleComingSoon}
                      className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-8 hover:bg-opacity-90 transition-opacity" 
                      type="button"
                    >
                      <span className="truncate">Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
      {showToast && (
        <Toast
          message="This feature will be added soon!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

