import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function DevarajaMarket() {
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
            <linearGradient id="half-devaraja">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-devaraja)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  backgroundImage: 'url("/Images/DevarajaMarket.jpg")',
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
                      Devaraja Market
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      Mysore's Historic Bazaar
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(850+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">KR Circle, Devaraja Mohalla, Mysuru, Karnataka 570001</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Open daily, 6:00 AM - 8:00 PM</p>
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
                      <span className="truncate">Contact Market</span>
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
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">About Devaraja Market</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Devaraja Market is a bustling, century-old market in the heart of Mysore, renowned for its vibrant atmosphere and authentic local goods. This historic bazaar is more than just a market—it's a sensory journey through Karnataka's rich cultural heritage.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The market is especially famous for its fresh flowers, particularly fragrant jasmines that perfume the morning air. Vendors display colorful pyramids of roses, marigolds, and chrysanthemums, creating a photographer's paradise. Beyond flowers, you'll find aromatic spices, genuine sandalwood products, traditional kumkum, regional sweets, and small handicraft stalls run by local artisans.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">What You'll Find</h3>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Fresh Flowers:</strong> Jasmine garlands, roses, marigolds, and seasonal blooms</li>
                          <li><strong>Spices & Aromatics:</strong> Authentic Karnataka spices, sandalwood powder, and incense</li>
                          <li><strong>Traditional Items:</strong> Kumkum, sacred threads, pooja items, and religious artifacts</li>
                          <li><strong>Local Sweets:</strong> Mysore Pak, traditional mithai, and regional delicacies</li>
                          <li><strong>Handicrafts:</strong> Small stalls selling wooden toys, sandalwood carvings, and local crafts</li>
                          <li><strong>Vegetables & Produce:</strong> Fresh organic produce from surrounding villages</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Visitor Tips</h3>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li>Visit early morning (6-8 AM) for the freshest flowers and coolest weather</li>
                          <li>Late afternoon (4-6 PM) offers great light for photography</li>
                          <li>Bargaining is expected and part of the cultural experience</li>
                          <li>Wear comfortable shoes—you'll be walking on uneven surfaces</li>
                          <li>Bring cash, as many vendors don't accept cards</li>
                          <li>Be respectful when taking photos; ask permission first</li>
                        </ul>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Location:</strong> Centrally located near KR Circle and just a short walk from Mysore Palace, making it easy to combine with other sightseeing.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">The Heart of Mysore's Daily Life</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          For over a century, Devaraja Market has been the beating heart of Mysore's commercial and cultural life. Established during the reign of the Wodeyar dynasty, the market continues traditions that have remained largely unchanged for generations.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">A Living Heritage</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The market's flower section is legendary—Mysore has always been known as the "City of Flowers," and Devaraja Market is where this identity comes alive daily. The jasmine sold here is considered among the finest in India, with many vendors representing families who've been in the flower trade for over four generations.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Early each morning, farmers from surrounding villages bring their harvest—flowers picked before dawn to preserve their fragrance, vegetables still covered in morning dew, and traditional herbs used in Ayurvedic medicine. The market becomes a meeting point where urban Mysore connects with its agricultural roots.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Sandalwood Legacy</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Karnataka is the sandalwood capital of India, and Devaraja Market offers authentic sandalwood products—from fragrant incense to carved artifacts. However, visitors should be cautious and buy only from established vendors, as counterfeit sandalwood is common. Look for the Government of Karnataka certification on genuine products.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Cultural Significance</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Beyond commerce, Devaraja Market plays a vital role in Mysore's festivals and rituals. During Dasara, the city's grandest festival, the market explodes with activity—providing flowers for the palace decorations, materials for rangoli competitions, and traditional items for household pujas. The market's rhythm follows the Hindu calendar, with demand shifting based on auspicious days and religious festivals.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Architectural Character</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The market's colonial-era architecture features covered arcades and high ceilings designed for natural ventilation—a practical response to Mysore's climate. The long corridors create a labyrinthine shopping experience where discovery is part of the charm. Despite modernization attempts, the market has retained its original character, with most stalls remaining family-run operations.
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "Devaraja Market isn't just where Mysoreans shop—it's where they connect with their heritage, maintain traditions, and keep alive the cultural practices that define their identity."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Local Cultural Historian</p>
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Rajesh Kumar</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              An absolute must-visit when in Mysore! The flower market section is simply breathtaking, especially early morning when the jasmine is fresh. I bought sandalwood incense and some local spices—the vendors were friendly and helped me understand the different varieties. The atmosphere is chaotic but in the most charming way. Don't miss it!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Sarah Mitchell</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              As a photographer, this market is a dream! The colors, the people, the incredible displays of flowers and spices—every corner is Instagram-worthy. I visited around 5 PM and the golden hour light was perfect. Bargaining is expected, so don't pay the first price. I got beautiful jasmine garlands for a fraction of the initial quote. Highly recommend for anyone wanting an authentic Indian market experience.
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Lakshmi Narayan</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Great traditional market with lots of variety. The kumkum and pooja items section has everything you need for religious ceremonies. I was able to find some rare spices that aren't available in modern supermarkets. The market can get crowded and a bit overwhelming, especially on weekends. Wear comfortable shoes and be prepared for some pushing in the narrow lanes. Overall, a wonderful cultural experience.
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
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your experience..."></textarea>
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



