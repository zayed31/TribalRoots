import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function NortheastBambooCrafts() {
  const [activeTab, setActiveTab] = useState<'about' | 'cultural' | 'reviews'>('about');
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
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="#D1D5DB"/>
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        
        {/* Main Content */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Back Button */}
          <div className="flex flex-wrap gap-2 mb-6 px-4">
            <BackButton />
          </div>

          {/* Header Image */}
          <div className="relative w-full h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-xl mb-10 shadow-lg">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0vads5uIFbKKorG_DiY3Lgj8siTMyw--GjePg8jgHDLI7XkzfLkXtmuaDTtpGIH6wKOwOb2s4Q8a39hLUk5GdAKX2j1_CUd3uqo5rO11PqXHeJr_cRIS6c0PTOEXbdFhflSh8q8N7eEqB7ggQrzKSkDS3rsBexTBvZwaBT7OxiWUat0jTs4yjIxr2f7-cA5S53VJS2o1qu_nag-fVYUvUWFh9ihuyAi3WXUgnrzkgnwvLQttTNRVOoDmZYtZ7D0Iv5chQIyrzEw")'}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tighter">Northeast Bamboo Crafts</h1>
              <p className="text-white/90 text-base md:text-lg font-normal leading-normal mt-2 max-w-2xl">Authentic Artistry from the Seven Sisters, in the Heart of Karnataka.</p>
            </div>
          </div>

          {/* Main layout with Sticky Panel */}
          <div className="flex flex-col lg:flex-row lg:gap-10">
            {/* Left Content Column */}
            <div className="flex-grow lg:w-2/3">
              {/* Tabs */}
              <div className="border-b border-stone-200 dark:border-stone-700">
                <div className="flex px-4 gap-2 -mb-px">
                  <button 
                    onClick={() => setActiveTab('about')}
                    className={`px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-t-lg ${
                      activeTab === 'about' 
                        ? 'bg-stone-700 dark:bg-stone-600 text-white shadow-md' 
                        : 'bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700/50 hover:text-stone-800 dark:hover:text-stone-300'
                    }`}
                  >
                    About the Shop
                  </button>
                  <button 
                    onClick={() => setActiveTab('cultural')}
                    className={`px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-t-lg ${
                      activeTab === 'cultural' 
                        ? 'bg-stone-700 dark:bg-stone-600 text-white shadow-md' 
                        : 'bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700/50 hover:text-stone-800 dark:hover:text-stone-300'
                    }`}
                  >
                    Cultural Storytelling
                  </button>
                  <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-t-lg ${
                      activeTab === 'reviews' 
                        ? 'bg-stone-700 dark:bg-stone-600 text-white shadow-md' 
                        : 'bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700/50 hover:text-stone-800 dark:hover:text-stone-300'
                    }`}
                  >
                    Reviews
                  </button>
                </div>
              </div>

              {/* About Tab Content */}
              {activeTab === 'about' && (
                <div className="p-4 sm:p-6 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">A Tradition Woven in Bamboo</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Welcome to Northeast Bamboo Crafts, a sanctuary of authentic artistry where the timeless traditions of the Seven Sisters of India are celebrated and preserved. Nestled in the vibrant heart of Karnataka, our shop is a bridge between cultures, bringing the intricate, eco-friendly, and soulful craft of Northeastern bamboo weaving to a wider audience. Each piece in our collection, from sturdy furniture and delicate home decor to intricately woven baskets, tells a story of heritage, skill, and the sustainable relationship between humans and nature.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">The Art of Bamboo Weaving</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Bamboo craftsmanship in Northeast India is more than just a livelihood—it's a way of life that has been passed down through generations. The tribes of Assam, Meghalaya, Nagaland, and Manipur have perfected the art of transforming this versatile grass into functional and decorative items that are both beautiful and sustainable.</p>
                  <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed mt-3">The process begins with carefully selecting mature bamboo culms, which are then treated, split, and woven using traditional techniques. Each tribe has its own unique weaving patterns and methods, creating a rich diversity of styles that we proudly showcase in our collection.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Cultural Significance</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">For the tribal communities of Northeast India, bamboo is sacred. It provides shelter, food, tools, and art. The Khasi and Garo tribes of Meghalaya create intricate fish traps and carrying baskets, while the Naga tribes are renowned for their decorative headgear and ceremonial containers. Every piece has a purpose and a story rooted in centuries of tradition.</p>
                  <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed mt-3">By bringing these crafts to Karnataka, we're not just selling products—we're preserving cultural heritage and supporting the livelihoods of these artisan communities.</p>
                </div>

                {/* Did You Know? Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl mt-1">eco</span>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Did You Know?</h4>
                      <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">Bamboo is one of the fastest-growing plants on Earth. Some species can grow up to 3 feet in a single day, making it a highly sustainable resource for crafting.</p>
                    </div>
                  </div>
                  <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl mt-1">emoji_objects</span>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Symbolic Weaves</h4>
                      <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">Many bamboo patterns aren't just decorative; they hold cultural significance, representing tribal identity, folklore, or elements of nature.</p>
                    </div>
                  </div>
                  <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl mt-1">forest</span>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Sustainability Champion</h4>
                      <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">Bamboo absorbs more CO2 and releases 35% more oxygen than equivalent trees, making it an environmental hero and a perfect eco-friendly material.</p>
                    </div>
                  </div>
                  <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl mt-1">handshake</span>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Fair Trade</h4>
                      <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">Every purchase directly supports tribal artisans and their families, ensuring fair wages and preservation of traditional craftsmanship.</p>
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Cultural Storytelling Tab Content */}
              {activeTab === 'cultural' && (
                <div className="p-4 sm:p-6 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Soul of Northeastern Bamboo Crafts</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">In the mist-shrouded hills of Northeast India, bamboo is more than a plant—it's a lifeline, a cultural symbol, and the backbone of tribal communities. From the moment it sprouts from the earth to the day it's transformed into a work of art, bamboo weaves its way through every aspect of life in the Seven Sisters.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">A Living Tradition</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-4">
                      For generations, the tribes of Assam, Meghalaya, Nagaland, Manipur, Mizoram, Tripura, and Arunachal Pradesh have lived in harmony with bamboo forests. The knowledge of which bamboo species to use, when to harvest, and how to treat it has been passed down through oral traditions, with elders teaching younger generations the sacred craft.
                    </p>
                    <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                      The Khasi tribe of Meghalaya, for instance, uses bamboo to create 'Khasi,' intricate fish traps that demonstrate an intimate understanding of river ecosystems. The Naga tribes craft ornate headgear and jewelry from bamboo, worn during festivals and ceremonial dances that celebrate their ancestors and the land.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Journey from Forest to Home</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-4">
                      Every bamboo piece in our shop has traveled a remarkable journey. It begins in the dense bamboo groves where artisans carefully select mature culms, ensuring they leave enough behind for natural regeneration. The bamboo is then transported to workshops where skilled hands split, treat, and weave it using techniques perfected over centuries.
                    </p>
                    <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                      The weaving process itself is meditative—a rhythmic dance of fingers interlacing strips of bamboo, creating patterns that are both functional and beautiful. No two pieces are exactly alike; each carries the unique signature of its maker, a testament to the human touch in an increasingly automated world.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Preserving Heritage in a Modern World</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed mb-4">
                      As younger generations migrate to cities in search of opportunities, traditional bamboo craftsmanship faces the threat of extinction. Many tribal communities struggle to earn a livelihood from their ancestral craft, competing with mass-produced alternatives.
                    </p>
                    <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                      This is where Northeast Bamboo Crafts steps in. We partner directly with artisan cooperatives in the Seven Sisters, ensuring fair prices and creating a sustainable market for their work. By bringing these crafts to Karnataka and beyond, we're not just selling products—we're keeping alive a 4,000-year-old tradition and providing dignified livelihoods to tribal communities.
                    </p>
                  </div>

                  <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20">
                    <h3 className="text-xl font-bold text-primary mb-3">Your Role in This Story</h3>
                    <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                      When you choose to buy bamboo crafts from us, you become part of this ancient narrative. You're not just decorating your home—you're supporting families, preserving cultural heritage, and making an eco-conscious choice that benefits our planet. Every basket, lamp, or piece of furniture carries within it the stories, traditions, and hopes of Northeastern tribal communities.
                    </p>
                  </div>
                </div>
              )}

              {/* Reviews Tab Content */}
              {activeTab === 'reviews' && (
                <div className="p-4 sm:p-6 space-y-8">
                  {/* User Reviews */}
                  <div className="pt-8 border-t border-border-light dark:border-border-dark">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold">What Our Visitors Say</h3>
                    <button 
                      onClick={handleComingSoon}
                      className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-full h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-transform active:scale-95 whitespace-nowrap hover:bg-primary/90"
                    >
                      <span className="material-symbols-outlined">edit</span>
                      <span className="truncate">Leave a Review</span>
                    </button>
                  </div>

                  {/* Rating Summary */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark mb-8">
                    <div className="flex flex-col items-center">
                      <p className="text-5xl font-black text-primary">4.8</p>
                      <div className="flex text-primary">
                        {renderStars(4.8)}
                      </div>
                      <p className="text-text-light/70 dark:text-text-dark/70 text-sm mt-1">Based on 124 reviews</p>
                    </div>
                    <div className="w-full flex-grow space-y-1">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-2 text-sm">
                          <span className="w-8">{star} star</span>
                          <div className="w-full bg-border-light dark:bg-border-dark rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{width: star === 5 ? '85%' : star === 4 ? '10%' : star === 3 ? '3%' : star === 2 ? '2%' : '0%'}}></div>
                          </div>
                          <span className="w-8 text-right">{star === 5 ? '85%' : star === 4 ? '10%' : star === 3 ? '3%' : star === 2 ? '2%' : '0%'}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Review List */}
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6aI5MaTX3fhVb2lRKFD-CBY18mdo3eRrEHzcPRivdC7tIYLKLXzuf1MkyGR1riKTDl7uB0Jjb8eWcl56sGROx4U8Cm_eG2-H_Rq09AegtkKah94pKKcz62vYt_8wxrCZtJMkP9zBIozRJuJ9x0FKsyZ-3kQzJtjNdt-0tCejnZZHI654Aap71MAjnUg6w1gxcSPRXIkx1zSvfSkBeGWgi9rauRc6dPoyF4mF0n-XMIhkh7tXn4uDEFJKxzpY_J86U0FisGU2JNw" alt="Reviewer profile picture" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-bold">Aniket Sharma</h5>
                          <span className="text-text-light/70 dark:text-text-dark/70 text-sm">• 2 weeks ago</span>
                        </div>
                        <div className="flex text-primary mb-2">
                          {renderStars(5)}
                        </div>
                        <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">An absolute gem! The craftsmanship is breathtaking. I bought a set of bamboo mugs and they are my favorite thing in the kitchen now. The story behind the craft makes it even more special.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbvMYjB7B64N89ZqiFPdyhma6YMxsKdCQV68A05dHyPskvidiPZ4Byud42dFlRFmTy3DBwqmEdILLLxsjHC3QO1D1sXgP7MornjNsfQP8W6hQFSI2LJ87HiPRGuwoayb6CFY8i4bKKO-mXsxJmlShEtF_iNpgOxryyrErAFlWiBMYQkYI9SC85QwJfZIo0tVOuVQnuxYj2mTqwIs9IRwKPzEeNkwQnCof6eKSf5MQ6abbwBS5nHYfV3nowz2W0JSJ-apAYHq7bLA" alt="Reviewer profile picture" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-bold">Priya Desai</h5>
                          <span className="text-text-light/70 dark:text-text-dark/70 text-sm">• 1 month ago</span>
                        </div>
                        <div className="flex text-primary mb-2">
                          {renderStars(4.5)}
                        </div>
                        <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Beautiful collection and a very knowledgeable owner. It's more than a shop, it's a cultural experience. A must-visit if you are in Bengaluru.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCfh01U8D0Qqg72xHRAHpjeKLkp9bLxDcKZoxtC76HxVaIdaoUYslG1lJW6kluhcUoDDqUP9IOnDcdy3oUN7E3blfdtrSkQGJ9t_nyy37YZLrhNuzaWJx-L4tuWkVITxzoxxPDFH9doE_0X8nFssBzRmB4Ups6yUEp8E4f-mcvUazHlpE_gBbtsr2Yh3ebAQzKOyn8YE7D13QHpjUJLtMRqS3TzC4IPdZeB-0QCS41tEUPZjVZePL0vT7lh3WUy4Rq5YslOP5mJw" alt="Reviewer profile picture" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-bold">Kavya Reddy</h5>
                          <span className="text-text-light/70 dark:text-text-dark/70 text-sm">• 2 months ago</span>
                        </div>
                        <div className="flex text-primary mb-2">
                          {renderStars(5)}
                        </div>
                        <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">I purchased a beautiful lamp made from bamboo and it has transformed my living space! The craftsmanship is extraordinary—you can see the care put into every piece. The owner explained how each item is handwoven by specific tribal artisans. Supporting this shop means supporting sustainable practices and preserving indigenous crafts. Will definitely be back!</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdyYRxpmj_VxnfDS_PH-_cHhdXWprQgz_qKTKwxFvQEmVtVtBSXCGHBMOnMdmiG--3BqRijvgmpDAsq6nHmBPWfQxA-x7_mR8x0VUuCy_h2y6pjWUPKUUsvp-uhIlze_zkR7FtV8id9KmQqV_XYYJMKHuTMuVZUOwCVA1laO-8TiVUQFrNyq1XpnySRaWg5WOwWLRl_s3ws_-Jj9jSBAGEPa2x6nuVdBwWuZx4Qv9cLnbXbVn5ZyUuU8Fg8t9hzUsouo93g3EIog" alt="Reviewer profile picture" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-bold">Aditya Kumar</h5>
                          <span className="text-text-light/70 dark:text-text-dark/70 text-sm">• 3 months ago</span>
                        </div>
                        <div className="flex text-primary mb-2">
                          {renderStars(5)}
                        </div>
                        <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">Exceptional quality and authentic pieces. I bought several items including storage baskets and decorative wall hangings. The owner is passionate about the cultural heritage behind each piece and takes time to educate customers. Prices are very fair for handmade, ethically-sourced items. This is exactly the kind of business we should all support!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>

            {/* Right Sticky Info Panel */}
            <div className="lg:w-1/3">
              <div className="lg:sticky top-28 space-y-6 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h3 className="text-xl font-bold">Shop Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70 mt-0.5">storefront</span>
                    <div>
                      <p className="font-semibold">Northeast Bamboo Crafts</p>
                      <p className="text-text-light/70 dark:text-text-dark/70">Handicrafts & Decor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70 mt-0.5">location_on</span>
                    <div>
                      <p className="font-semibold">123, Artisan Lane, Indiranagar</p>
                      <p className="text-text-light/70 dark:text-text-dark/70">Bengaluru, Karnataka 560038</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70 mt-0.5">call</span>
                    <div>
                      <p className="font-semibold">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70 mt-0.5">schedule</span>
                    <div>
                      <p className="font-semibold">Open Daily</p>
                      <p className="text-text-light/70 dark:text-text-dark/70">10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border-light dark:border-border-dark">
                  <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8PqwHv3vxkA79phkoZ0D_2xFelzcWMUKjWNhvkk5faCduqfio6_UpI7sNem7RTEteAsjrHmBPQXZXgdcJvrFqarTwBLIupnPvRbJj3KzPOBnkkdmvXHOmAqmiUVtiHiAddJdedHExLDvjb_ZeJPmouKg0nCUjUMsWthsT3koH8j5SrfF87QyxsRgQgYaXmfZOvBWOmwwBHgJBShVd-8dzGWQaUKyyVolSpiRFOlNJYqtkNNOMlX8wXaIp4xFHi3GlNDzvkXNaMw" alt="Map showing the location of the shop in the city" />
                  </div>
                </div>
                <button 
                  onClick={handleComingSoon}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform active:scale-95 hover:bg-primary/90"
                >
                  <span className="material-symbols-outlined">assistant_navigation</span>
                  <span className="truncate">Get Directions</span>
                </button>
              </div>
            </div>
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

