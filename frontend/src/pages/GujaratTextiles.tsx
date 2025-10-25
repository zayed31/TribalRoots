import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function GujaratTextiles() {
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
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Back Button */}
            <div className="py-4">
              <BackButton />
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column: Image Gallery */}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoxUC_FYzoRsn9lQQLhTzuCQsWWfT46t5P1lBDzSchopMn05l0mRqgPZ4qrPVYf2DqmTQUp9YiwG43jpRMh_MU9wNmN0XAzsFzjz3fECL9YZwjWycYfqnWnxwhMw-ky7fdnF2mTRF6YU2d_cj1S_AcoXZsNf66po_MCs4-VLt0tyqU-cCt0yq0GRj9vzKzB_vr4ePYpJ-vLobiO5x7mcGCsuVMPdDwPOOvIwxD4vEu4J21jPk1DFTfFTg3ZAM3z_W_B8NXxAn1Ow")'}}></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square w-full bg-center bg-no-repeat bg-cover rounded-xl cursor-pointer ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzetYcdqd99wYw8XMA4phcxAGAR-efUa0ySTBfwymTh9XhLTCrvWW03zasK42I_uHqS5YGEcfAGhk5fsS3E1_6yRhRlzC-YfFtHlc23ME-hNvSKALxygaEkfmVzQXHmOrPniqpAyWBCSK_bh-HT-HCM03v08n2zFlwu8K7Bed8WgN4TV62lzJ1PZDZzJX35rvx3-rCiXfA5hUIxBrfEJTcWdUe5yDYsCvDFQUTt3HdcQAfpxAjnaG4YO6Tu4wyymjqcU0nF6a-Eg")'}}></div>
                  <div className="aspect-square w-full bg-center bg-no-repeat bg-cover rounded-xl cursor-pointer hover:ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark transition-all" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6Qcrtj6Jjnt_kN1CnmAU4ukBPAbpV5JTLTHFTCdzZK9ozWnl31lZob6HYAOU9yez8jcUKZEf2wNb7x9ejjogWcBMILYY2zR8uB2S4tNZHFQp5xEcpBpiYZaWq5IU8Y0rUwi58FLzep0JsGZ7Pmx4HHJvkY9tyzcmelD04W7nOUvcfyRRBXrouDQ-YPQ0MsQt38QyLHVD_qVt70xHLPfmkgGzvYUZAVldbWoQ-yw3GjGpbnN2edvfVcdm6pREsTpEo4guD0I7J5Q")'}}></div>
                  <div className="aspect-square w-full bg-center bg-no-repeat bg-cover rounded-xl cursor-pointer hover:ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark transition-all" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqRIeWflue75UcRKqoAcKQhSIXMKK-VXtwZSgOcS-6jJHJkGGV-CetwG0r7uG5nly5fK9OjCJjMU_lxooOrnaWr6I-TmZgyfgNFPXvHcwAP1xiWpomPCjy1UELLht_TnB1L05Ns-iyFndxVgbxRF5oWBQNnHQYvftE8XiFWZBd14JJwyrUtSf-RzTdsCeqxjElWz-lmbwbYNl9TAxjk_fRXS968s8koBcPSEs7jXSt9ZANrDOmZNn4Y3Y9xjdQe6EJ-Cj-x7o8pQ")'}}></div>
                </div>
              </div>

              {/* Right Column: Shop Information */}
              <div className="flex flex-col gap-8">
                {/* Shop Info Card */}
                <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark p-6">
                  <h1 className="text-4xl font-bold leading-tight text-text-light dark:text-text-dark">Gujarat Textiles</h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-primary">
                      {renderStars(4.5)}
                    </div>
                    <p className="text-sm font-medium text-text-light/70 dark:text-text-dark/70">4.5 (123 reviews)</p>
                  </div>
                  <div className="mt-2 flex flex-col gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">123 Artisan Lane, Chikmagalur, Karnataka, 577101, India</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">call</span>
                      <p className="text-text-light dark:text-text-dark">+91 98765 43210</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Open daily, 10:00 AM - 8:00 PM</p>
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
                      <span className="truncate">Call Shop</span>
                    </button>
                  </div>
                </div>

                {/* Tabbed Content Section */}
                <div className="flex flex-col">
                  <div className="border-b border-stone-200 dark:border-stone-700">
                    <nav aria-label="Tabs" className="-mb-px flex gap-2">
                      <button 
                        onClick={() => setActiveTab('description')}
                        className={`px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-t-lg ${
                          activeTab === 'description' 
                            ? 'bg-stone-700 dark:bg-stone-600 text-white shadow-md' 
                            : 'bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700/50 hover:text-stone-800 dark:hover:text-stone-300'
                        }`}
                      >
                        Description
                      </button>
                      <button 
                        onClick={() => setActiveTab('cultural')}
                        className={`px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-t-lg ${
                          activeTab === 'cultural' 
                            ? 'bg-stone-700 dark:bg-stone-600 text-white shadow-md' 
                            : 'bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700/50 hover:text-stone-800 dark:hover:text-stone-300'
                        }`}
                      >
                        Cultural Story
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
                    </nav>
                  </div>

                  {/* Description Tab */}
                  {activeTab === 'description' && (
                    <div className="py-6 prose prose-sm max-w-none text-text-light dark:text-text-dark dark:prose-invert">
                      <h3 className="text-xl font-bold">About the Shop</h3>
                      <p>Gujarat Textiles is a sanctuary of handcrafted fabrics, bringing the vibrant soul of Gujarati weaving traditions to the heart of Karnataka. We specialize in authentic, handwoven textiles like the intricate Bandhani tie-dye and the prestigious Patola silk sarees. Each piece in our collection tells a story of heritage, skill, and timeless beauty, passed down through generations of artisan families.</p>
                      <p>Our mission is to preserve these ancient crafts by providing a platform for artisans to showcase their work to a wider audience. When you purchase from us, you are not just buying a piece of fabric; you are supporting a community and keeping a rich cultural legacy alive.</p>
                    </div>
                  )}

                  {/* Cultural Story Tab */}
                  {activeTab === 'cultural' && (
                    <div className="py-6 space-y-6 text-text-light dark:text-text-dark">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">The Legacy of Gujarati Textiles</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                          Gujarat's textile heritage spans over 5,000 years, with each fabric telling a unique story of the region's rich cultural tapestry. From the royal courts of the maharajas to the bustling trade routes of ancient India, Gujarati textiles have always been synonymous with luxury, craftsmanship, and artistic excellence.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                          The art of weaving in Gujarat is not merely a craft—it's a sacred tradition passed down through generations. Each technique, whether it's the intricate Bandhani tie-dye or the double-ikat Patola weaving, requires years of training and an unwavering dedication to perfection.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-4">Bandhani: The Art of Tie-Dye</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                          Bandhani, also known as Bandhej, is a tie-dye technique that has been practiced in Gujarat for over 5,000 years. The word "Bandhani" comes from the Sanskrit word "bandh," meaning "to tie." Artisans meticulously tie thousands of tiny knots on fabric before dyeing it, creating intricate patterns that have become iconic symbols of Gujarati culture.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                          A single Bandhani saree can have anywhere from 10,000 to 100,000 tie-dye knots, each carefully placed by hand. The finer the dots, the more valuable the garment. Traditionally, Bandhani was reserved for special occasions like weddings and festivals, and different patterns symbolized various blessings and wishes.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-4">Patola: The Queen of Silks</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                          Patola silk sarees are among the most precious textiles in the world. What makes Patola unique is the double-ikat technique, where both the warp and weft threads are resist-dyed before weaving. This creates identical patterns on both sides of the fabric—a feat of extraordinary skill and precision.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                          Creating a single Patola saree can take anywhere from six months to a year, with the entire family often involved in the process. The designs are geometric and symbolic, with motifs like elephants, parrots, flowers, and dancers that have been passed down for centuries. Historically, these sarees were so valuable that they were used as trade currency and diplomatic gifts.
                        </p>
                      </div>

                      <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20">
                        <h3 className="text-xl font-bold text-primary mb-3">Preserving Tradition at Gujarat Textiles</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                          At Gujarat Textiles, we work directly with master artisans and their families in Gujarat, ensuring they receive fair wages and recognition for their incredible skills. Every piece we sell helps keep these ancient traditions alive for future generations. When you purchase from us, you're not just buying a textile—you're becoming a custodian of living heritage and supporting communities dedicated to preserving their craft.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Reviews Tab */}
                  {activeTab === 'reviews' && (
                    <div className="py-6 space-y-6">
                      <div className="flex flex-wrap gap-x-8 gap-y-6 p-6 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark">
                        <div className="flex flex-col gap-2">
                          <p className="text-4xl font-black leading-tight tracking-[-0.033em]">4.5</p>
                          <div className="flex gap-0.5 text-primary">
                            {renderStars(4.5)}
                          </div>
                          <p className="text-base font-normal text-text-light/70 dark:text-text-dark/70">Based on 123 reviews</p>
                        </div>
                        <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
                          <p className="text-sm font-normal">5</p>
                          <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-surface-light dark:bg-border-dark"><div className="rounded-full bg-primary" style={{width: '70%'}}></div></div>
                          <p className="text-sm font-normal text-right text-text-light/70 dark:text-text-dark/70">70%</p>
                          <p className="text-sm font-normal">4</p>
                          <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-surface-light dark:bg-border-dark"><div className="rounded-full bg-primary" style={{width: '15%'}}></div></div>
                          <p className="text-sm font-normal text-right text-text-light/70 dark:text-text-dark/70">15%</p>
                          <p className="text-sm font-normal">3</p>
                          <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-surface-light dark:bg-border-dark"><div className="rounded-full bg-primary" style={{width: '10%'}}></div></div>
                          <p className="text-sm font-normal text-right text-text-light/70 dark:text-text-dark/70">10%</p>
                          <p className="text-sm font-normal">2</p>
                          <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-surface-light dark:bg-border-dark"><div className="rounded-full bg-primary" style={{width: '3%'}}></div></div>
                          <p className="text-sm font-normal text-right text-text-light/70 dark:text-text-dark/70">3%</p>
                          <p className="text-sm font-normal">1</p>
                          <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-surface-light dark:bg-border-dark"><div className="rounded-full bg-primary" style={{width: '2%'}}></div></div>
                          <p className="text-sm font-normal text-right text-text-light/70 dark:text-text-dark/70">2%</p>
                        </div>
                      </div>

                      {/* Customer Reviews */}
                      <div className="space-y-6 mt-8">
                        <h3 className="text-2xl font-bold">Customer Reviews</h3>
                        
                        {/* Review 1 */}
                        <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark">
                          <div className="flex items-start gap-4">
                            <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaxOy9K5rz2Q3LkPXNVzW0aWrqCY8xHsqSjUPQE9KQaXH7LR8nG3Y2UmPVzxLF5wTJXq8XQ2Z3r9Q8KrjANm4u5BpD3q7VxQW8" alt="Priya Sharma" />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-bold text-text-light dark:text-text-dark">Priya Sharma</h4>
                                  <p className="text-sm text-text-light/60 dark:text-text-dark/60">2 weeks ago</p>
                                </div>
                                <div className="flex text-primary">
                                  {renderStars(5)}
                                </div>
                              </div>
                              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">Absolutely stunning Bandhani saree! The craftsmanship is impeccable and the colors are vibrant. The shop owner was very knowledgeable about the history and technique. I felt like I was buying a piece of art, not just clothing. Highly recommend!</p>
                            </div>
                          </div>
                        </div>

                        {/* Review 2 */}
                        <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark">
                          <div className="flex items-start gap-4">
                            <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx5K3Y8r2Q1P9LmTUWpVzN0bXqCZ7yIsrTkVQF0oLRbYI8MS9oH4Z3VnQWyxMG6xUKYr9YR3a4s0R9LskBOn5v6CqE4r8WyRX9" alt="Anjali Patel" />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-bold text-text-light dark:text-text-dark">Anjali Patel</h4>
                                  <p className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</p>
                                </div>
                                <div className="flex text-primary">
                                  {renderStars(5)}
                                </div>
                              </div>
                              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">I purchased a Patola silk saree for my daughter's wedding and it was the showstopper! Everyone wanted to know where I got it. The quality is outstanding and the staff explained the entire weaving process to me. Worth every penny!</p>
                            </div>
                          </div>
                        </div>

                        {/* Review 3 */}
                        <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark">
                          <div className="flex items-start gap-4">
                            <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy6L4Z9s3R2Q0MnUVXqWzO1cYrDa8zJtsUlWRG1pMScZJ9NT0pH5a4WoRXzxNH7yVLZs0ZS4b5t1S0MtlCPo6w7DrF5s9XzSY0" alt="Kavita Mehta" />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-bold text-text-light dark:text-text-dark">Kavita Mehta</h4>
                                  <p className="text-sm text-text-light/60 dark:text-text-dark/60">2 months ago</p>
                                </div>
                                <div className="flex text-primary">
                                  {renderStars(4)}
                                </div>
                              </div>
                              <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">Beautiful collection of traditional textiles. I bought several dupattas and a table runner. The only reason I'm giving 4 stars instead of 5 is the price, which is a bit steep, but I understand it reflects the craftsmanship and quality.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Submit Review Form */}
                      <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 flex flex-col gap-4 mt-8">
                        <h3 className="text-xl font-bold">Share Your Experience</h3>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium">Your Rating</label>
                          <div className="flex gap-1 text-primary/50 cursor-pointer">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span key={star} className="material-symbols-outlined text-3xl hover:text-primary">star</span>
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

