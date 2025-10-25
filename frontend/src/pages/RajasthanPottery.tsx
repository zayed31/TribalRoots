import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function RajasthanPottery() {
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
            <linearGradient id="half-rajasthan">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="#D1D5DB"/>
            </linearGradient>
          </defs>
          <path fill="url(#half-rajasthan)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
        <main className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-6 lg:px-8 flex flex-1 justify-center py-10">
            <div className="layout-content-container flex flex-col max-w-4xl flex-1 gap-8">
              {/* Back Button */}
              <div className="flex flex-wrap gap-2">
                <BackButton />
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
                <div className="col-span-2 row-span-2 w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHJNIw_y2BDDIy7x-N-lG6rOB5W6jClHkC0FAqA27Ea-oMGUvzWFfpWf34n4zrRYBsix7wu-6MnX4AaxV7AXvYNByAVLRSaLDc4ZX9W_p9QaVdnkiEF27SiFGgECsh_SZkF4BqY4VK9Mwu9vHNXGA5rrtYF7boMUGxqb-zrrmcP6HO_9Xfhv_tHWy7n72vfKOZq1HMbHxHPYtnS1zeej2_X2z89EukuKehwM_ALzagonFqSt3M27qs3vEzz3_gjwxefq_HVUtVuA")'}}></div>
                <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7tPPE6mNyKaMK4ScV9F3CRcbZLMQjvLy7tLhFTArdautxKBb6-IGF6gOYQdJ4RCgfnnYFYxmexa67HrUfOKLl9H_7cjf8_XeRqqiTb9issnwH6GWNKh3Hm_7g6FB4ISO0oQ0jcPfhnQ0CWmw2P-tMVdC4nnyCJ1slZFtphH-IODGujEv1X2WHGU72i8Yd3uWwTfzX7VS8atjwAiRkba3FC2dwkkq_FPIpIN53U3k0DNwkTQQW0RoxVXmb3AluVd0_0dDjZ6W_vw")'}}></div>
                <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_fTMAK2FxYn4zjosns_JjuHy7PY6a_YZGCFTmx1I2oEfNCbp0RqSBaF-CHFvT1Mi53WC0kkGDyA-A6XqJs2bXMHUW5o9kPs_BYAWrUnNgQi0ImjL1ACJF-zF6XG5Fu741JU6uhmeP6LGVxLYUqw_u4UF14dkIiqUh9ETXqgq_6_nK5K6gsU5nDAuD2t9iHiA0fGTA9BTxKKnWLYzzAPLpiVUigtpWaFu1E-RYKURr6Q8inixA3nHQLzHAKq3G_Z8XUPB_myzLEA")'}}></div>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4">
                <div className="md:col-span-2 flex flex-col gap-8">
                  {/* Page Heading and Info */}
                  <div className="flex flex-col gap-4">
                    <h1 className="text-stone-900 dark:text-stone-100 text-4xl font-black tracking-tight">Rajasthan Pottery</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Authentic Rajasthani pottery in the heart of Karnataka, offering a vibrant collection of handmade crafts.</p>
                    <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="font-bold">4.8</span>
                        <span className="text-slate-500 dark:text-slate-400">(142 reviews)</span>
                      </div>
                      <span className="text-slate-300 dark:text-slate-600">·</span>
                      <p>Pottery Shop</p>
                    </div>
                  </div>
                  <hr className="border-stone-200 dark:border-stone-800" />

                  {/* Cultural Storytelling */}
                  <div className="py-6 space-y-6 text-slate-700 dark:text-slate-300">
                    <div>
                      <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-2">The History of Blue Pottery</h3>
                      <p>Originating from the Turko-Persian region, the art of blue pottery found its way to Rajasthan through the Mughals. Unlike traditional pottery, it uses a unique quartz frit material, not clay. This gives it its distinctive delicate and fragile nature. The name comes from the eye-catching cobalt blue dye used to color the pottery.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-2">Techniques of the Craft</h3>
                      <p>The process is intricate and time-consuming. It involves preparing a dough from quartz powder, powdered glass, and other materials. This dough is then molded, smoothed, and painted with intricate designs by skilled artisans. After glazing, it is fired at very low temperatures, which makes the pottery fragile but also gives it its signature glossy finish.</p>
                    </div>
                    <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
                      <h3 className="text-lg font-bold text-primary mb-2">Did You Know?</h3>
                      <p>Blue Pottery is the only pottery in the world that does not use clay. This unique composition makes it impervious and more hygienic for daily use as it doesn't develop cracks like earthenware.</p>
                    </div>
                  </div>

                  {/* User Reviews */}
                  <div className="py-6 space-y-6">
                    <h3 className="text-2xl font-bold">User Reviews</h3>
                    <div className="flex flex-col gap-6">
                      {/* Review Item */}
                      <div className="flex gap-4">
                        <img alt="Reviewer's profile picture" className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_vmoE3Fb10KZ8VxM06ha60cbCf8Dn_pvhj9i49Zoxz6j4y1-JBnckYjsx0g7uoj6JWaKU4lZu27jp8gybfIs2Uij4BH-EUbD-yGh6A1nv_q9DnCjCJmwaHvq8Lqrl1TN1TB-nVPaiL86kNtPKfreqjmKB4-shRX6csv2BpZyyHav1xc2Ns5yiuLlOeSNuClFL7QSB-ubVcYpMFPtCsgn1hnZHzcuBFdNaHxZFPu24eUeCOSPcPswFDx3tdaWfT64irqNbWeenZw" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-stone-800 dark:text-stone-200">Ananya Sharma</h4>
                            <div className="flex items-center">
                              {renderStars(5)}
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Absolutely stunning collection! The quality and craftsmanship are top-notch. A must-visit for anyone who appreciates traditional art.</p>
                        </div>
                      </div>
                      <hr className="border-stone-200 dark:border-stone-800" />
                      {/* Review Item */}
                      <div className="flex gap-4">
                        <img alt="Reviewer's profile picture" className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGQugecR5kwzsxeQ-VL7Ut6w80vKMCUr4l9Wjkmeb1f_ngx5lHMRRWmtuefN1aE9sxT2XCd4LVisZnpZtmfV8W_GDObYpAIKPrSd8rLKpm3joNCBvqixp3n4d72irdFdPfyu_mYXy1QCxQf2j3YP_uPfdjkjm91qufIiAwH8fppZyu7IoHV-wnWfiSLDz4htM9sWfOcEv4cDx5orobRJ68ULvAf6jU-pvRzn7DP-pOnfTCU5_O_6knXQ5-BFyqjSrLPbmxxrysog" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-stone-800 dark:text-stone-200">Rohan Mehta</h4>
                            <div className="flex items-center">
                              {renderStars(4)}
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Great place with a wide variety. A little pricey, but the art is worth it. The owner was very knowledgeable.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side Panel */}
                <div className="md:col-span-1">
                  <div className="sticky top-28 border border-stone-200 dark:border-stone-700 rounded-xl p-6 flex flex-col gap-6 bg-white dark:bg-stone-900">
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">Shop Information</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                        <p className="text-sm text-slate-700 dark:text-slate-300">123, Artisan Lane, Indiranagar, Bengaluru, Karnataka 560038</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary mt-1">call</span>
                        <p className="text-sm text-slate-700 dark:text-slate-300">+91 98765 43210</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                        <p className="text-sm text-slate-700 dark:text-slate-300">Open Daily: 10:00 AM - 8:00 PM</p>
                      </li>
                    </ul>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={handleComingSoon}
                        className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
                      >
                        <span className="material-symbols-outlined mr-2">directions</span>
                        Get Directions
                      </button>
                      <button 
                        onClick={handleComingSoon}
                        className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary/20 dark:bg-primary/30 text-primary font-bold hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                      >
                        <span className="material-symbols-outlined mr-2">call</span>
                        Call Shop
                      </button>
                    </div>
                    <div className="w-full h-48 rounded-lg overflow-hidden mt-2">
                      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFBoSAM9u-ij-USeqYD4dgyQpQC9Xb2ZDkVA0BQ8QMt7G0vMqey-qDDhhhHJluiwMAVGnw0aJoez58n0_l0KMDV939Ty0_OUDX9ImdxSD8VQ1RJ-3FwJxyzhVlI8fcxTOSoPYXOv22Kqq9Q_8nUSH75Sz5LnXCBZzFr23DheyP-6eNn7bdSFdm-JNJrJWlIphdFAuXZy5aU4b1vuCz6m7DDTa5nNzG2RwhrAv7UEjlqwhZvVG9tB0RHThgsYBcc1PKZ0Z4_0genA")'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-stone-200 dark:border-stone-800 my-8" />

              {/* Review Submission Form */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">Leave a Review</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="rating">Your Rating</label>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-3xl text-slate-300 dark:text-slate-600 cursor-pointer hover:text-primary">star</span>
                      <span className="material-symbols-outlined text-3xl text-slate-300 dark:text-slate-600 cursor-pointer hover:text-primary">star</span>
                      <span className="material-symbols-outlined text-3xl text-slate-300 dark:text-slate-600 cursor-pointer hover:text-primary">star</span>
                      <span className="material-symbols-outlined text-3xl text-slate-300 dark:text-slate-600 cursor-pointer hover:text-primary">star</span>
                      <span className="material-symbols-outlined text-3xl text-slate-300 dark:text-slate-600 cursor-pointer hover:text-primary">star</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="comment">Your Review</label>
                    <textarea className="mt-1 block w-full rounded-lg border-stone-300 dark:border-stone-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-200" id="comment" name="comment" placeholder="Share your experience..." rows={4}></textarea>
                  </div>
                  <button 
                    onClick={handleComingSoon}
                    className="inline-flex justify-center rounded-lg border border-transparent bg-primary py-2 px-6 text-sm font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                    type="button"
                  >
                    Submit Review
                  </button>
                </form>
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

