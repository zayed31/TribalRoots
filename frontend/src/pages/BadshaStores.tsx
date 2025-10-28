import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function BadshaStores() {
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
            <linearGradient id="half-badsha">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-badsha)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  backgroundImage: 'url("/Images/BadshahStores.jpg")'
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
                      Badsha Stores
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      The Silk Experience — Authentic Mysore Silk & Sarees
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(320+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">KR Circle, Devaraja Mohalla, Mysuru, Karnataka 570024</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">call</span>
                      <p className="text-text-light dark:text-text-dark">+91 821 244 2345</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Open Mon-Sat, 10:00 AM - 8:30 PM | Sunday 10:00 AM - 6:00 PM</p>
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
                      <span className="material-symbols-outlined !text-xl">call</span>
                      <span className="truncate">Call Store</span>
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
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">About Badsha Stores</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Badsha Stores is a long-standing institution in Mysore's silk retail landscape, offering an authentic shopping experience for those seeking genuine Mysore silk sarees, dress materials, and traditional ethnic wear. Located in the bustling Devaraja area near KR Circle, this family-run establishment has been serving both locals and tourists for decades.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          What sets Badsha Stores apart is their commitment to authenticity and quality. In a market flooded with imitations, they maintain strict standards for their silk products, ensuring customers receive genuine Mysore silk with the official Karnataka Silk Industries Corporation (KSIC) certification.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Product Range</h3>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Mysore Silk Sarees:</strong> Traditional and contemporary designs in pure silk</li>
                          <li><strong>Wedding Collection:</strong> Bridal sarees and wedding wear with intricate zari work</li>
                          <li><strong>Dress Materials:</strong> Silk and cotton-silk blend unstitched materials</li>
                          <li><strong>Men's Ethnic Wear:</strong> Silk dhotis, kurtas, and traditional wedding attire</li>
                          <li><strong>Ready-to-Wear:</strong> Salwar kameez sets and churidar materials</li>
                          <li><strong>Accessories:</strong> Matching blouse pieces, silk scarves, and traditional jewelry</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Why Choose Badsha Stores</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">Authenticity Guaranteed</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">All Mysore silk products come with KSIC certification, ensuring you're getting genuine handloom silk.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">Expert Guidance</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Knowledgeable staff help you understand different silk types, weaves, and care instructions.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">Fair Pricing</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Transparent pricing with detailed explanations of what makes each piece valuable.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">Traditional Shopping</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Experience the classic Indian silk shopping tradition with personal attention and chai.</p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Shopping Tips</h3>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li>Plan to spend at least 45 minutes—silk shopping is an experience, not a rush</li>
                          <li>Ask to see the KSIC certification mark on sarees</li>
                          <li>Don't hesitate to ask for multiple options—they'll gladly show you various designs</li>
                          <li>Inquire about care instructions; pure silk requires special handling</li>
                          <li>Visit during weekdays for a more relaxed shopping experience</li>
                          <li>They accept both cash and cards, but confirm before purchasing</li>
                        </ul>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Tourist-Friendly:</strong> The staff at Badsha Stores are experienced in serving international visitors and can explain the cultural significance of different saree styles and designs.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">The Legacy of Mysore Silk</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Mysore silk holds a special place in India's textile heritage. The tradition began in the late 18th century when Tipu Sultan, the Tiger of Mysore, invited skilled weavers from Kanchipuram to establish silk production in the region. Today, Mysore silk is protected by a Geographical Indication (GI) tag, recognizing its unique cultural and economic significance.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">What Makes Mysore Silk Special</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Authentic Mysore silk sarees are characterized by their pure mulberry silk fabric, intricate gold zari work, and distinctive pallus (the decorated end piece). The silk is known for its soft texture, rich sheen, and durability. Traditional Mysore silk sarees often feature motifs inspired by the Mysore Palace, including the royal emblem, peacocks, and temple architecture.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Weaving Process</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Creating a Mysore silk saree is labor-intensive. Master weavers work on traditional handlooms, a process that can take anywhere from 10 days to several months depending on the complexity of the design and the amount of zari (gold/silver thread) work. The Karnataka Silk Industries Corporation (KSIC), established in 1912, oversees production standards and supports weaver communities.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Cultural Significance</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          In Karnataka culture, a Mysore silk saree is more than clothing—it's a symbol of elegance, tradition, and auspicious occasions. These sarees are de rigueur for weddings, religious ceremonies, and classical dance performances (especially Bharatanatyam). Many families consider gifting a Mysore silk saree an important ritual during weddings and coming-of-age ceremonies.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Badsha's Role in Preservation</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Establishments like Badsha Stores play a crucial role in keeping the Mysore silk tradition alive. By maintaining quality standards and refusing to compromise on authenticity, they create a sustainable market for handloom weavers. Every purchase from a legitimate silk retailer directly supports weaver families and helps preserve centuries-old craftsmanship.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Recognizing Authentic Mysore Silk</h3>
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                          <p className="text-text-light dark:text-text-dark text-sm mb-3"><strong>Look for these markers:</strong></p>
                          <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-sm space-y-1">
                            <li>KSIC certification seal or hologram</li>
                            <li>Pure mulberry silk fabric (test: genuine silk burns slowly and smells like burning hair)</li>
                            <li>Heavy, substantial feel due to quality silk and zari work</li>
                            <li>Rich, natural sheen (not overly glossy)</li>
                            <li>Intricate border and pallu designs</li>
                            <li>Price reflects quality—authentic Mysore silk is never cheap</li>
                          </ul>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Beyond Commerce</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Shopping at a traditional silk store like Badsha's is a cultural education. The staff often share stories about different weaving techniques, regional variations in design, and the symbolism behind various motifs. This knowledge transfer is how silk appreciation passes from generation to generation.
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "A Mysore silk saree is not just a garment; it's a piece of Karnataka's living heritage, woven with the dreams and skills of countless artisans."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Karnataka Silk Weavers Association</p>
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Meera Venkatesh</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">1 week ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Bought my wedding saree from Badsha Stores and couldn't be happier! The staff took their time showing me different options and explaining the zari work on each piece. The saree I chose is absolutely stunning—the silk quality is exceptional and the KSIC certification gave me confidence in its authenticity. Highly recommend for anyone looking for genuine Mysore silk!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">David Thompson</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              As a tourist, I was nervous about buying silk in India—so many stories of fake products! Badsha Stores made me feel confident. They patiently explained the difference between various silk types, showed me the certification, and didn't pressure me at all. I bought two sarees for my wife and mother, and they both loved them. The staff even taught me how to identify quality silk for future purchases. A truly educational and pleasant experience.
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Anjali Krishnan</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Good collection of traditional Mysore silk sarees with fair pricing. The store has been around for years and you can tell they know their craft. I found their wedding collection particularly impressive. My only suggestion would be to expand their modern/contemporary designs for younger customers. Overall, a reliable place for authentic silk purchases. The location near KR Circle makes it easy to visit along with Devaraja Market.
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
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your silk shopping experience..."></textarea>
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



