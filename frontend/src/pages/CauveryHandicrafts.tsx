import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function CauveryHandicrafts() {
  const [activeTab, setActiveTab] = useState<'description' | 'cultural' | 'reviews'>('description');
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
            <linearGradient id="half-cauvery">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-cauvery)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-['Inter']">
      <Navbar />
      <div className="flex flex-1 flex-col">
        <main className="flex flex-1 flex-col gap-6 px-4 sm:px-6 lg:px-40 py-5">
          <BackButton />
          
          <div className="layout-container flex flex-col w-full">
            {/* Hero Image */}
            <div className="w-full">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: 'url("/Images/CauveryHandicrafts.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row gap-6 mt-6">
              {/* Left Column - Shop Info */}
              <div className="flex flex-col gap-6 lg:w-2/3">
                {/* Shop Header */}
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-surface-light dark:bg-surface-dark">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                      Cauvery Handicrafts
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      Karnataka State Arts & Crafts Emporium
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(450+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">Sayyaji Rao Road, Mysuru, Karnataka 570001</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">call</span>
                      <p className="text-text-light dark:text-text-dark">+91 821 242 4148</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Open daily, 10:00 AM - 8:00 PM</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">verified</span>
                      <p className="text-text-light dark:text-text-dark font-medium text-green-700 dark:text-green-400">
                        Government Certified Emporium
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button 
                      onClick={handleComingSoon}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
                    >
                      <span className="material-symbols-outlined !text-xl">directions</span>
                      <span className="truncate">Get Directions</span>
                    </button>
                    <button 
                      onClick={handleComingSoon}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-sm font-bold tracking-wide hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors border border-amber-300 dark:border-amber-700"
                    >
                      <span className="material-symbols-outlined !text-xl">language</span>
                      <span className="truncate">Visit Website</span>
                    </button>
                  </div>
                </div>

                {/* Tabbed Content Section */}
                <div className="flex flex-col">
                  <div className="border-b border-stone-200 dark:border-stone-700">
                    <div className="flex gap-2 p-2">
                      <button
                        onClick={() => setActiveTab('description')}
                        className={`flex items-center justify-center h-10 px-6 rounded-full text-sm font-bold transition-all ${
                          activeTab === 'description'
                            ? 'bg-stone-700 dark:bg-stone-600 text-white shadow-md'
                            : 'bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700/50 hover:text-stone-800 dark:hover:text-stone-300'
                        }`}
                      >
                        Description
                      </button>
                      <button
                        onClick={() => setActiveTab('cultural')}
                        className={`flex items-center justify-center h-10 px-6 rounded-full text-sm font-bold transition-all ${
                          activeTab === 'cultural'
                            ? 'bg-stone-700 dark:bg-stone-600 text-white shadow-md'
                            : 'bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700/50 hover:text-stone-800 dark:hover:text-stone-300'
                        }`}
                      >
                        Cultural Story
                      </button>
                      <button
                        onClick={() => setActiveTab('reviews')}
                        className={`flex items-center justify-center h-10 px-6 rounded-full text-sm font-bold transition-all ${
                          activeTab === 'reviews'
                            ? 'bg-stone-700 dark:bg-stone-600 text-white shadow-md'
                            : 'bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700/50 hover:text-stone-800 dark:hover:text-stone-300'
                        }`}
                      >
                        Reviews
                      </button>
                    </div>
                  </div>

                  {/* Tab Content */}
                  {activeTab === 'description' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">About Cauvery Handicrafts</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Cauvery Handicrafts is the Karnataka State Government's official emporium for authentic handicrafts and artisanal products. Established to promote and preserve Karnataka's rich craft heritage, this state-run institution offers a curated collection of verified, GI-tagged products representing the finest traditional artisanship from across the state.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          As a government-certified establishment, Cauvery provides consumers with complete confidence in product authenticity. Every item sold here is sourced directly from registered artisan communities, ensuring fair pricing for craftspeople and genuine quality for buyers. This makes it an ideal destination for tourists and locals seeking authentic Karnataka handicrafts without the risk of counterfeits.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Product Categories</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary">local_florist</span>
                              Sandalwood Products
                            </h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Authentic Mysore sandalwood carvings, incense sticks, essential oils, and decorative items with government certification.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary">checkroom</span>
                              Mysore Silk
                            </h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">KSIC-certified Mysore silk sarees, dress materials, and traditional garments with GI tag authentication.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary">chair</span>
                              Rosewood Inlay
                            </h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Exquisite furniture and decorative pieces featuring traditional Mysore rosewood inlay craftsmanship.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary">palette</span>
                              Traditional Crafts
                            </h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Bidriware, Channapatna toys, Kasuti embroidery, and other Karnataka heritage crafts with GI tags.</p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Why Shop at Cauvery?</h3>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Guaranteed Authenticity:</strong> All products carry government certification and GI tags where applicable</li>
                          <li><strong>Fair Trade Certified:</strong> Artisans receive fair compensation; no exploitation or middlemen markups</li>
                          <li><strong>Quality Assurance:</strong> Every product undergoes quality checks before being displayed</li>
                          <li><strong>Fixed Pricing:</strong> No haggling needed; transparent, government-regulated prices</li>
                          <li><strong>Cultural Preservation:</strong> Purchases directly support traditional artisan communities</li>
                          <li><strong>Expert Staff:</strong> Knowledgeable about product origins, techniques, and care instructions</li>
                          <li><strong>Tourist-Friendly:</strong> Shipping assistance and export documentation available</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Geographical Indication (GI) Tagged Products</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Cauvery stocks several GI-tagged products unique to Karnataka, including:
                        </p>
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                          <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-sm space-y-1">
                            <li>Mysore Silk (protected designation since 2005)</li>
                            <li>Mysore Sandalwood products (oil and crafts)</li>
                            <li>Channapatna Toys (wooden lacquerware)</li>
                            <li>Bidriware (metal inlay craft from Bidar)</li>
                            <li>Ilkal Sarees (traditional weaves)</li>
                            <li>Kasuti Embroidery (traditional needlework)</li>
                          </ul>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Shopping Experience</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The emporium features a spacious, air-conditioned showroom organized by product category. Unlike crowded markets, shopping here is leisurely and comfortable. Staff members are salaried government employees (not commission-based), so you receive honest advice without pressure to buy.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The store accepts cash, cards, and UPI payments. They also offer packaging services suitable for air travel and can arrange domestic/international shipping for larger purchases.
                        </p>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Perfect For:</strong> Tourists seeking authentic souvenirs, corporate gift buyers, collectors of Indian handicrafts, and anyone wanting to support traditional artisan communities with confidence.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Preserving Karnataka's Craft Heritage</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          State handicraft emporiums like Cauvery were established across India in the 1960s as part of a national initiative to preserve traditional crafts threatened by industrialization. In Karnataka, this mission was particularly urgent given the state's extraordinary diversity of craft traditions—from coastal shell work to northern Bidriware, from Mysore's sandalwood carving to the Channapatna toy-making of rural artisans.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Role of Government Emporiums</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Cauvery Handicrafts serves multiple crucial functions beyond mere retail. It acts as a market guarantor for artisan communities, purchasing products at fair prices and providing a reliable income stream. This stability allows craftspeople to continue practicing their traditional skills rather than abandoning them for more profitable but culturally disconnected work.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The emporium also functions as a living museum and educational center. Each product comes with detailed information about its origin, the artisan community that created it, and the traditional techniques involved. This transforms a simple shopping trip into a cultural education.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Sandalwood: Mysore's Aromatic Legacy</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Karnataka, particularly the Mysore region, is synonymous with sandalwood. The state accounts for over 90% of India's sandalwood production, with the famous Mysore sandalwood (<em>Santalum album</em>) considered the finest in the world for its high oil content and exquisite fragrance.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          However, sandalwood is also India's most smuggled forest product. This creates a massive authenticity problem—markets are flooded with fake sandalwood items made from cheaper woods and synthetic fragrances. Cauvery's government certification provides ironclad authenticity, sourcing products only from the Karnataka Soaps and Detergents Limited (KSDL) and licensed sandalwood carvers.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Channapatna Toys: Wooden Magic</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Among Karnataka's most beloved crafts are Channapatna toys—colorful, lacquered wooden toys and decorative items. This 200-year-old tradition uses ivory wood (<em>Wrightia tinctoria</em>), which is soft and close-grained, ideal for intricate turning on lathes.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          What makes Channapatna toys special is their complete non-toxicity. Artisans use natural lacquer dyes (derived from lac beetles) and traditional coloring methods, making these toys safe for children. The craft earned GI tag protection in 2006, and Cauvery is one of the largest authenticated retailers.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Bidriware: The Dark Beauty</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Bidriware, a metal handicraft from Bidar in northern Karnataka, represents one of India's most distinctive art forms. Artisans inlay pure silver wire into blackened zinc-copper alloy, creating stunning contrasts. The blackening process uses a secret soil found only in the Bidar fort—a closely guarded traditional technique passed through generations.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Originally created to serve the Bahmani Sultans in the 14th century, Bidriware has Persian and Arabic influences, featuring geometric patterns and floral motifs. Cauvery's Bidriware collection comes directly from Bidar's artisan cooperative, ensuring both authenticity and fair compensation to master craftsmen.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Impact on Artisan Communities</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          For many Karnataka artisan families, Cauvery represents economic stability. The emporium's bulk purchase orders provide steady income, allowing parents to keep children in school rather than forcing them into the family trade prematurely. Ironically, this stability has helped preserve crafts by giving the next generation a choice to continue traditions out of passion rather than desperate necessity.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The GI Tag Movement</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          India's Geographical Indication (GI) tagging system, similar to France's AOC for wines, legally protects traditional products from specific regions. Karnataka has successfully secured GI tags for multiple crafts, largely due to documentation and advocacy by institutions like Cauvery Handicrafts. These tags prevent imitations and ensure regional artisans benefit from their cultural heritage.
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "When you buy from Cauvery, you're not just purchasing a product—you're voting for the survival of centuries-old traditions and the dignity of artisan families who keep them alive."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Karnataka Handicrafts Development Corporation</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="p-6 flex flex-col gap-6">
                      <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Customer Reviews</h2>
                      
                      {/* Review 1 */}
                      <div className="border-b border-border-light dark:border-border-dark pb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">person</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-text-light dark:text-text-dark">James Anderson</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Perfect place for authentic Karnataka handicrafts! As a tourist, I was worried about buying fake sandalwood products, but the government certification at Cauvery gave me complete confidence. I bought several sandalwood carvings and Channapatna toys for my grandchildren. The staff was incredibly knowledgeable and explained the history behind each item. They even helped me with proper packaging for international travel. Highly recommend for anyone wanting genuine Indian crafts!
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Review 2 */}
                      <div className="border-b border-border-light dark:border-border-dark pb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">person</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-text-light dark:text-text-dark">Priya Ramesh</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              I've been shopping at Cauvery for years for corporate gifts. The quality is consistently excellent and the fixed pricing means no haggling—perfect for bulk purchases. Their Mysore silk section is outstanding, and I love that everything comes with proper certification. Recently bought a beautiful Bidriware set that my clients absolutely loved. The only minor issue is parking can be difficult during weekends, but the quality and service more than make up for it.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Review 3 */}
                      <div className="border-b border-border-light dark:border-border-dark pb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">person</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-text-light dark:text-text-dark">Suresh Kumar</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Best place in Mysore for authentic Karnataka handicrafts. Being a government emporium, you can trust that you're getting the real deal and that artisans are being paid fairly. I purchased rosewood inlay furniture pieces for my new home—the craftsmanship is exceptional. The air-conditioned showroom makes browsing comfortable, and the staff gives you space without being pushy. Prices are very reasonable considering the quality and authenticity. A must-visit for anyone interested in genuine Indian handicrafts.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Submit Review Form */}
                      <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 flex flex-col gap-4 mt-8">
                        <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Share Your Experience</h3>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium">Your Rating</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button key={star} className="text-2xl text-gray-300 hover:text-yellow-400 transition-colors">
                                <span className="material-symbols-outlined">star</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium">Your Review</label>
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your experience at Cauvery..."></textarea>
                        </div>
                        <button 
                          onClick={handleComingSoon}
                          className="flex w-full sm:w-auto self-end min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-opacity"
                        >
                          Submit Review
                        </button>
                      </div>
                    </div>
                  )}
                </div>
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



