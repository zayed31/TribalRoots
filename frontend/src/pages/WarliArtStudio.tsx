import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function WarliArtStudio() {
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
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 gap-6">
            {/* Back Button */}
            <div className="flex flex-wrap gap-2 px-4">
              <BackButton />
            </div>

            {/* Asymmetric Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 px-4">
              {/* Left Column: Gallery */}
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-4">
                  <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-80 w-full aspect-[4/3]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCx1JdlVT-7DnwpWfm_mlwQu0UwaNEBeOO_Q-ZTsgYKdR8UNEuOetoEUju8VmltHcJUai6B2ohHCzRTu4Vc6fCRxqOTAlMpMp5PpViyGO7g74gO2Sy27w-Ql0pZJsNG3ZoJ22piTNm51qYMd9Skvn5213CE--Ti7qEZzQryrtOH39Z2Xv-9UDReF-ushhNXYXUIxOti2n-bSNbcvlireAG3gFPkS3l2LabeXUDyZYsO2MjOXjCsMlU2iwWlXsGzQt_xWDvwyNZP5A")'}}></div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-cover bg-center rounded-lg aspect-square" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmCzX17vLNOqouu_A2_kIspLSqT4KjIpguQhLkaIvyKXnzyB7ls-0jkwjJfQQOo2joYK2q3svdIWiBUTGN6IRGGZhA5hCtyFOO9rECW2mNuQ8rKIPegTwXo80r0DQcSZazwreoISfCWyos_uVRYJD3BBbcep_ggspmLHeWorLXAJ1A8Dk2y77vOMWFgdNJemCHndGTZ6NLR8Qf9jumD8t8YQ9OHZqs4eb9XTepdWzsu36ybG9vOcGP08SRJUYXRZ6n7qRG6FuNjQ")'}}></div>
                    <div className="bg-cover bg-center rounded-lg aspect-square" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzS-ke2xbXHHRNXkOsBDD8_NOd2WixTmEDpSbuB5Xz6Jitymja8Z87BZfwL_p5Q51y2rGN5lytOkg8C0sfcexnZB572iSlIxzlh23ds95S0Vg8Fly_Rt9yEdS3MB3W-amuk9RC8SNmX4EI5Nv5LPrz8UNUg7t9xRa5AHAzFH5JnKT7VKi6DdGFf4zaQehB8TyiG_KyZQuWPppv78dxOmo2iTw6-Fs20fXsLBq9ZnVlTffG3xLqLCRik3vRLbREZdw79bhixjjsVA")'}}></div>
                    <div className="bg-cover bg-center rounded-lg aspect-square" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoUmH7K_dxGggdeAp7RaoSEXsNmN2Gh-3nEmHqDu2aYV6KCHGwq56Jd0ipYZyQS3B9pyAjDw64igEer2cXZqEDYPoK--MgxD11eLe4Ou3KHQQ_ceFOymMl1ec29o1Q4Xu8Wd05-KfGY4nHP1wzBPDREtr0PuCoVvSlPNmjLU5HsKxKd8hQxydGrg3f6WZullvnKI3Yb8Wiu63OEEc4G8JQblIydxU1nw0Mh3m0Mn6dVZ7TyJQbt5ZZlPk_FooxmuTRU_Nwcwrz5w")'}}></div>
                    <div className="bg-cover bg-center rounded-lg aspect-square" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlm42aGAy680YgJpqyVJk2I93hFzFfcOTijKYAtr2zBBwQZ_ZABsN0IvsnlhWcSrYfPHHvu-lSz7so4q917WuGL-9ch83Br73-MWNHx13T5ZVFkyZOK-iAdhThVYssmcKGP6or8FCj-ToWGusYeaDNW5bJAW2w7Z4DODW2hjgTh8oPu-rrTEbp3u5QfhVhp4d8u9-R14XIYJN388Rm3rU9eIxgl1bh9lF0vzli6jFMPkPs74NIF-epnyK4b7PY0YSdo5w_yvJhBA")'}}></div>
                  </div>
                </div>
              </div>

              {/* Right Column: Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-6">
                  {/* Heading and Rating */}
                  <div className="flex flex-col gap-3">
                    <p className="text-4xl font-black leading-tight tracking-[-0.033em]">Warli Art Studio</p>
                    <p className="text-base font-normal leading-normal text-text-light/80 dark:text-text-dark/80">A sanctuary of traditional tribal art in Karnataka.</p>
                    <div className="flex items-center gap-2">
                      <div className="flex text-primary">
                        {renderStars(4.5)}
                      </div>
                      <p className="font-bold">4.5</p>
                      <p className="text-text-light/70 dark:text-text-dark/70">(128 reviews)</p>
                    </div>
                  </div>

                  {/* Contact and Location */}
                  <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light/30 dark:border-border-dark/30 flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                      <div className="flex flex-col">
                        <p className="font-bold">Address</p>
                        <p className="text-text-light/80 dark:text-text-dark/90">123 Artisan Lane, Mysuru, Karnataka 570001</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">call</span>
                      <div className="flex flex-col">
                        <p className="font-bold">Contact</p>
                        <p className="text-text-light/80 dark:text-text-dark/90">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button 
                        onClick={handleComingSoon}
                        className="flex-1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-primary/90 transition-opacity"
                      >
                        <span className="material-symbols-outlined text-sm">directions</span>
                        <span className="truncate">Get Directions</span>
                      </button>
                      <button 
                        onClick={handleComingSoon}
                        className="flex min-w-[40px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 px-2 bg-primary/20 dark:bg-primary/20 text-primary text-sm font-bold hover:bg-primary/30 transition-colors"
                      >
                        <span className="material-symbols-outlined">share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabbed Content Section */}
            <div className="px-4 mt-8">
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
                    About
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
                </div>
              </div>

              {/* About Tab Content */}
              {activeTab === 'about' && (
                <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left Column: Tab Content */}
                  <div className="md:col-span-2 space-y-6 text-text-light/90 dark:text-text-dark/90 leading-relaxed">
                    <div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">About the Studio</h3>
                      <p>Welcome to the Warli Art Studio, a place where ancient traditions come to life on canvas. Our studio is dedicated to preserving and promoting the beautiful and intricate art form of the Warli tribe from the North Sahyadri Range in Maharashtra. While our roots are in Maharashtra, we bring this unique cultural heritage to the heart of Karnataka.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">The Art of Warli</h3>
                      <p>Our artists, many of whom come from Warli families, use traditional techniques and natural materials to create stunning pieces that tell stories of village life, folklore, and humanity's connection with nature. Each painting is a masterpiece of symbolic geometry, using circles, triangles, and squares to depict the world in a simple yet profound way.</p>
                      <p className="mt-3">The circle represents the sun and moon, the triangle signifies mountains and trees, and the square symbolizes the sacred enclosure. These basic shapes come together to form intricate narratives of daily life, celebrations, and the eternal cycle of nature.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">Cultural Significance</h3>
                      <p>Warli art dates back to 2500 BCE and was originally created as ritualistic decorations for special occasions like weddings and harvests. The art form remained largely unknown to the outside world until the 1970s when it was discovered and documented. Today, it stands as a testament to the enduring spirit of tribal India.</p>
                      <p className="mt-3">What makes Warli art unique is its democratic nature - there are no hierarchies depicted. Human beings and animals are drawn the same size, reflecting the Warli philosophy that all life is interconnected and equally important.</p>
                    </div>
                  </div>
                  {/* Right Column: Did you know? */}
                  <div className="md:col-span-1">
                    <div className="p-6 rounded-xl bg-primary/10 dark:bg-primary/10 border border-primary/20 dark:border-primary/40 mb-6">
                      <h3 className="text-lg font-bold text-primary mb-3">Did you know?</h3>
                      <p className="text-sm text-text-light dark:text-text-dark leading-normal">Traditionally, Warli paintings were done on the walls of huts, using a mixture of rice paste and water, with a bamboo stick as a brush. The white pigment against the earthy, reddish-brown walls created a striking visual effect.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-primary/10 dark:bg-primary/10 border border-primary/20 dark:border-primary/40">
                      <h3 className="text-lg font-bold text-primary mb-3">Traditional Materials</h3>
                      <p className="text-sm text-text-light dark:text-text-dark leading-normal">The white paint is made from rice flour and water, while the reddish-brown base is created from a mixture of mud and cow dung. These natural materials ensure the art remains eco-friendly and sustainable.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Cultural Story Tab Content */}
              {activeTab === 'cultural' && (
                <div className="py-8 space-y-8">
                  <div className="max-w-4xl">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">The Origin of Warli Art</h3>
                    <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                      The Warli tribe inhabits the mountainous and coastal regions of Maharashtra-Gujarat border, in the Western Ghats. Their art form, one of the oldest in India, predates even the Indus Valley Civilization. For thousands of years, this art remained hidden within their communities, painted on the mud walls of tribal huts during auspicious occasions.
                    </p>
                    <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                      The Warlis believed that their art had the power to invoke Palaghata, the mother goddess, and they painted elaborate murals during weddings and harvest festivals. Each element in a Warli painting has deep symbolic meaning, representing the tribe's connection to nature and their understanding of the cosmos.
                    </p>
                  </div>

                  <div className="max-w-4xl">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Symbolism in Every Stroke</h3>
                    <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                      The basic vocabulary of Warli art consists of circles, triangles, and lines. The circle and triangle come from their observation of nature—the circle representing the sun and moon, the triangle derived from mountains and pointed trees. In contrast, the square seems to be a human invention, indicating a sacred enclosure or a piece of land.
                    </p>
                    <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                      Human figures are represented using two triangles—one inverted representing the torso, and one upright representing the pelvis. The head is shown as a circle, and the arms and legs are simple lines. This minimalist style allows for complex storytelling, with hundreds of figures often depicted in a single painting.
                    </p>
                  </div>

                  <div className="max-w-4xl">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">From Hut Walls to Gallery Walls</h3>
                    <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mb-4">
                      In the 1970s, an artist named Jivya Soma Mashe brought Warli art to the attention of the broader world. He transitioned the art from walls to paper and canvas, making it accessible to art collectors and enthusiasts globally. His innovation didn't dilute the tradition—instead, it ensured its survival in a rapidly changing world.
                    </p>
                    <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                      Today, Warli art has found its place in contemporary design, appearing on everything from clothing to home decor. Yet, the traditional art form remains rooted in its spiritual and cultural origins, with each painting serving as a window into the Warli way of life.
                    </p>
                  </div>

                  <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20">
                    <h3 className="text-xl font-bold text-primary mb-3">Preserving Tradition at Warli Art Studio</h3>
                    <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                      At our studio in Mysuru, we are committed to keeping this ancient tradition alive. We work directly with Warli artists, providing them with a platform to showcase their work while ensuring they receive fair compensation. Every purchase supports not just an artist, but an entire community dedicated to preserving their cultural heritage. When you buy a Warli painting from us, you're not just acquiring art—you're becoming part of a 4000-year-old story.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Reviews Section */}
            {activeTab === 'reviews' && (
              <div className="px-4 py-8">
              <h2 className="text-3xl font-bold mb-6">Reviews & Ratings</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Rating Summary */}
                <div className="md:col-span-2">
                  <div className="flex flex-col gap-y-6 p-4 rounded-xl bg-background-light dark:bg-background-dark/50">
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl font-black leading-tight tracking-[-0.033em]">4.5</p>
                      <div className="flex gap-0.5 text-primary">
                        {renderStars(4.5)}
                      </div>
                      <p className="text-base font-normal leading-normal text-text-light/80 dark:text-text-dark/80">Based on 128 reviews</p>
                    </div>
                    <div className="grid w-full grid-cols-[20px_1fr_40px] items-center gap-y-3">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <>
                          <p key={`star-${star}`} className="text-sm font-normal leading-normal">{star}</p>
                          <div key={`bar-${star}`} className="flex h-2 flex-1 overflow-hidden rounded-full bg-border-light/30 dark:bg-border-dark/30">
                            <div className="rounded-full bg-primary" style={{width: star === 5 ? '75%' : star === 4 ? '15%' : star === 3 ? '5%' : star === 2 ? '3%' : '2%'}}></div>
                          </div>
                          <p key={`pct-${star}`} className="text-sm font-normal leading-normal text-right text-text-light/70 dark:text-text-dark/70">{star === 5 ? '75%' : star === 4 ? '15%' : star === 3 ? '5%' : star === 2 ? '3%' : '2%'}</p>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Individual Reviews */}
                <div className="md:col-span-5 mt-8">
                  <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {/* Review 1 */}
                    <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark">
                      <div className="flex items-start gap-4">
                        <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCfh01U8D0Qqg72xHRAHpjeKLkp9bLxDcKZoxtC76HxVaIdaoUYslG1lJW6kluhcUoDDqUP9IOnDcdy3oUN7E3blfdtrSkQGJ9t_nyy37YZLrhNuzaWJx-L4tuWkVITxzoxxPDFH9doE_0X8nFssBzRmB4Ups6yUEp8E4f-mcvUazHlpE_gBbtsr2Yh3ebAQzKOyn8YE7D13QHpjUJLtMRqS3TzC4IPdZeB-0QCS41tEUPZjVZePL0vT7lh3WUy4Rq5YslOP5mJw" alt="Meera Kulkarni" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold text-text-light dark:text-text-dark">Meera Kulkarni</h4>
                              <p className="text-sm text-text-light/60 dark:text-text-dark/60">3 weeks ago</p>
                            </div>
                            <div className="flex text-primary">
                              {renderStars(5)}
                            </div>
                          </div>
                          <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">Absolutely mesmerizing! I purchased a large Warli painting depicting a wedding ceremony, and it's become the centerpiece of my living room. The artist took time to explain the symbolism behind each element. The level of detail and the story it tells is incredible. Highly recommend visiting this studio!</p>
                        </div>
                      </div>
                    </div>

                    {/* Review 2 */}
                    <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark">
                      <div className="flex items-start gap-4">
                        <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdyYRxpmj_VxnfDS_PH-_cHhdXWprQgz_qKTKwxFvQEmVtVtBSXCGHBMOnMdmiG--3BqRijvgmpDAsq6nHmBPWfQxA-x7_mR8x0VUuCy_h2y6pjWUPKUUsvp-uhIlze_zkR7FtV8id9KmQqV_XYYJMKHuTMuVZUOwCVA1laO-8TiVUQFrNyq1XpnySRaWg5WOwWLRl_s3ws_-Jj9jSBAGEPa2x6nuVdBwWuZx4Qv9cLnbXbVn5ZyUuU8Fg8t9hzUsouo93g3EIog" alt="Rajesh Iyer" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold text-text-light dark:text-text-dark">Rajesh Iyer</h4>
                              <p className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</p>
                            </div>
                            <div className="flex text-primary">
                              {renderStars(5)}
                            </div>
                          </div>
                          <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">What a wonderful experience! The artists here are not just creating art; they're preserving a 4000-year-old tradition. I learned so much about the Warli tribe's culture and philosophy. I bought three small pieces for my office, and everyone who visits comments on them. Supporting this studio means supporting cultural preservation.</p>
                        </div>
                      </div>
                    </div>

                    {/* Review 3 */}
                    <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark">
                      <div className="flex items-start gap-4">
                        <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_vmoE3Fb10KZ8VxM06ha60cbCf8Dn_pvhj9i49Zoxz6j4y1-JBnckYjsx0g7uoj6JWaKU4lZu27jp8gybfIs2Uij4BH-EUbD-yGh6A1nv_q9DnCjCJmwaHvq8Lqrl1TN1TB-nVPaiL86kNtPKfreqjmKB4-shRX6csv2BpZyyHav1xc2Ns5yiuLlOeSNuClFL7QSB-ubVcYpMFPtCsgn1hnZHzcuBFdNaHxZFPu24eUeCOSPcPswFDx3tdaWfT64irqNbWeenZw" alt="Priya Deshmukh" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold text-text-light dark:text-text-dark">Priya Deshmukh</h4>
                              <p className="text-sm text-text-light/60 dark:text-text-dark/60">2 months ago</p>
                            </div>
                            <div className="flex text-primary">
                              {renderStars(4)}
                            </div>
                          </div>
                          <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">Beautiful art and very welcoming atmosphere. The prices are reasonable considering the craftsmanship involved. I would have given 5 stars, but the studio was quite crowded when I visited, making it hard to properly appreciate the artwork. I'd recommend visiting on a weekday morning for a more peaceful experience.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Submit Review Form */}
                <div className="md:col-span-5 mt-8">
                  <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Share your experience</h3>
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
                      <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your visit..."></textarea>
                    </div>
                    <button 
                      onClick={handleComingSoon}
                      className="flex w-full sm:w-auto self-end min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-opacity"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
              )}
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

