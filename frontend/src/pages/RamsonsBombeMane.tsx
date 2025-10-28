import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function RamsonsBombeMane() {
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
            <linearGradient id="half-bombe">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-bombe)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  backgroundImage: 'url("/Images/RamsomBombeMane.jpg")',
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
                      Ramsons Bombe Mane
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      Traditional Doll House & Cultural Exhibition Space
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(220+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">91 Main Road, Nazarbad, Mysuru, Karnataka 570010</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Mon-Sat: 10:00 AM - 6:00 PM | Sunday: By Appointment</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">museum</span>
                      <p className="text-text-light dark:text-text-dark font-medium text-purple-700 dark:text-purple-400">
                        Cultural Studio • Curated Exhibitions • Artisan Showcase
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
                      <span className="material-symbols-outlined !text-xl">call</span>
                      <span className="truncate">Contact Studio</span>
                    </button>
                  </div>
                </div>

                {/* Tabbed Content Section */}
                <div className="flex flex-col">
                  <div className="border-b border-stone-200 dark:border-stone-700">
                    <div className="flex gap-1 overflow-x-auto">
                      <button
                        onClick={() => setActiveTab('description')}
                        className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                          activeTab === 'description'
                            ? 'border-b-orange-500 text-orange-600 dark:text-orange-400'
                            : 'border-b-transparent text-amber-700 dark:text-amber-300 hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400'
                        }`}
                      >
                        About Bombe Mane
                      </button>
                      <button
                        onClick={() => setActiveTab('cultural')}
                        className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                          activeTab === 'cultural'
                            ? 'border-b-orange-500 text-orange-600 dark:text-orange-400'
                            : 'border-b-transparent text-amber-700 dark:text-amber-300 hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400'
                        }`}
                      >
                        Cultural Heritage
                      </button>
                      <button
                        onClick={() => setActiveTab('reviews')}
                        className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                          activeTab === 'reviews'
                            ? 'border-b-orange-500 text-orange-600 dark:text-orange-400'
                            : 'border-b-transparent text-amber-700 dark:text-amber-300 hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400'
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
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">A Living Museum of Dolls & Cultural Art</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          "Bombe Mane" translates to "Doll House" in Kannada, and Ramsons Bombe Mane lives up to its name as a unique cultural space dedicated to preserving and showcasing India's rich tradition of doll-making and folk toys. Run by Ramsons Kala Pratishtana (a local cultural organization), this compact studio-cum-exhibition space in Nazarbad is much more than a retail shop—it's a cultural institution connecting visitors with artisans from craft clusters across India.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Unlike commercial toy stores, Bombe Mane functions as a curated cultural space where traditional handcrafted dolls tell stories of regional heritage, festival traditions, and folk art forms. The space hosts rotating exhibitions, artisan meets, and cultural programming that brings Mysore's artistic soul to life. Visiting here means direct exposure to makers, curators, and the living traditions they represent.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Collections & Crafts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🪆 Handmade Dolls</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Traditional dolls crafted from clay, cloth, paper mâché, terracotta, and wood. Representing various Indian regional styles and folk traditions.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎎 Golu/Bombe Display Sets</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Special doll sets for Navaratri/Dussehra Golu displays—traditional tableau arrangements depicting mythological scenes, village life, and religious themes.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🐘 Vahana & Deity Figures</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Miniature representations of Hindu deities and their vahanas (vehicles)—elephants, peacocks, lions—often used in temple displays and festive decorations.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎨 Folk Art Souvenirs</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Small handicraft items representing various Indian folk art traditions—painted wooden toys, tribal dolls, textile dolls, and decorative artifacts.</p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Regional Craft Clusters Represented</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Ramsons Bombe Mane works directly with artisan clusters from across India, bringing authentic regional dolls to Mysore. The collection typically includes:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🏺 Tamil Nadu Thanjavur & Tirunelveli Dolls</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              Classic bobblehead dolls with nodding mechanisms (Thanjavur Thalayatti Bommai), clay dolls painted with traditional motifs, and terracotta festival figurines.
                            </p>
                          </div>

                          <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🧵 Andhra Pradesh & Telangana Etikoppaka Dolls</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              Lacquered wooden toys using natural dyes (turmeric, kumkum, tamarind seed powder)—a GI-tagged craft with vibrant colors and smooth finishes.
                            </p>
                          </div>

                          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎭 Rajasthan Kathputli & Cloth Dolls</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              Traditional puppets and cloth dolls in colorful Rajasthani attire, representing folk characters from desert culture and royal courts.
                            </p>
                          </div>

                          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🌾 Karnataka Kinhal & Channapatna Toys</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              Local Karnataka crafts: Kinhal paper mâché dolls with traditional painting, and Channapatna wooden lacquered toys—both regional treasures.
                            </p>
                          </div>

                          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🪡 Bengal & Assam Terracotta & Bamboo Dolls</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              Terracotta horses (Bankura), clay dolls from Krishnanagar, and bamboo-craft dolls from Northeast India representing tribal traditions.
                            </p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Cultural Programming & Exhibitions</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Beyond retail, Bombe Mane functions as a cultural hub with occasional exhibitions, artisan demonstrations, and seasonal displays:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Navaratri Golu Festival:</strong> Special displays during Dussehra showcasing elaborate doll arrangements with thematic tableaus</li>
                          <li><strong>Artisan Meets:</strong> Visiting craftspeople demonstrate doll-making techniques and share stories about their craft traditions</li>
                          <li><strong>Curated Exhibitions:</strong> Rotating displays focusing on specific regional crafts, historical doll traditions, or contemporary artisan work</li>
                          <li><strong>Cultural Workshops:</strong> Occasional hands-on sessions where visitors can try basic doll-making or painting techniques</li>
                          <li><strong>Storytelling Sessions:</strong> Cultural programs explaining the mythology and folklore behind traditional doll representations</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Experience</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Walking into Bombe Mane is like entering a miniature world of colors, traditions, and stories. Unlike the sensory overload of commercial markets, this space offers a curated, intimate experience. The knowledgeable staff can explain the cultural context of different doll types, their regional origins, and the artisan communities that create them.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Whether you're a collector seeking authentic regional dolls, a cultural enthusiast wanting to understand Indian folk traditions, or simply looking for meaningful souvenirs, Bombe Mane provides context and authenticity often missing from conventional tourist shops.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Why Visit Bombe Mane?</h3>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Authentic Regional Crafts:</strong> Genuine dolls from verified artisan clusters, not mass-produced commercial toys</li>
                          <li><strong>Cultural Education:</strong> Learn about regional traditions, festival customs, and folk art forms through curated displays</li>
                          <li><strong>Direct Artisan Connection:</strong> Many dolls come with information about the maker community and craft tradition</li>
                          <li><strong>Supporting Traditional Crafts:</strong> Purchases directly support artisan livelihoods through Ramsons' fair-trade model</li>
                          <li><strong>Curated Selection:</strong> Quality-assured collection vetted for craftsmanship and cultural authenticity</li>
                          <li><strong>Cultural Programming:</strong> Exhibitions and events provide deeper cultural immersion beyond shopping</li>
                          <li><strong>Unique Souvenirs:</strong> Find items representing India's diverse craft heritage that you won't see elsewhere</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Visitor Tips</h3>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg space-y-3">
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">📍 Location & Access</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Located on Main Road in Nazarbad area—easy to reach by auto-rickshaw or taxi. Well-marked signage makes it easy to find.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">⏰ Best Time to Visit</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Weekday afternoons are less crowded. Visit during Navaratri/Dussehra (September-October) for special Golu displays. Call ahead to inquire about artisan demonstrations or special exhibitions.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">💰 Pricing & Shopping</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Prices vary by craft complexity: small dolls ₹100-₹500, larger or intricate pieces ₹500-₹3,000+. Fixed prices for most items. Cash and cards accepted.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">📸 Photography</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Ask permission before photographing displays, especially during exhibitions. Staff usually allow non-commercial photography.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">🎁 Packaging & Shipping</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Fragile dolls are carefully packed. Domestic shipping can be arranged for larger purchases. Bring your own padding if buying delicate terracotta items.</p>
                          </div>
                        </div>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Cultural Note:</strong> Ramsons Bombe Mane represents a unique model where cultural curation meets craft retail. This isn't just a shop—it's a cultural space preserving doll-making traditions and educating visitors about India's rich heritage of toy crafts. By supporting Bombe Mane, you're contributing to the preservation of endangered artisan traditions and the livelihoods of craft families across India.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">The Tradition of Bombe/Golu in South India</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The word "Bombe" in Kannada (similar to "Golu" in Tamil and "Kolu" in Telugu) refers to traditional doll displays created during the Navaratri festival. This centuries-old tradition involves arranging dolls and figurines on stepped platforms to depict mythological stories, village life, and devotional themes. Ramsons Bombe Mane takes its name from this rich cultural practice.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Historical Roots of Golu/Bombe Tradition</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The Golu tradition has deep roots in South Indian culture, particularly in Tamil Nadu, Karnataka, and Andhra Pradesh. Historical records suggest it dates back at least 400-500 years, with possible origins even earlier. The practice likely evolved from temple traditions of arranging deity processions and religious storytelling through visual displays.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          During the Vijayanagara Empire (14th-17th centuries), royal courts maintained elaborate doll collections used in festivals and religious celebrations. When the empire declined, courtly traditions dispersed into local communities, and wealthy families began creating their own festival displays. Over time, the practice democratized—families of all backgrounds participated in Golu, passing down doll collections through generations like precious heirlooms.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Cultural Significance of Festival Dolls</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Golu dolls serve multiple cultural functions beyond decoration:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Religious Education:</strong> Mythological scenes teach children Hindu epics (Ramayana, Mahabharata) and Puranic stories visually</li>
                          <li><strong>Social Commentary:</strong> Village life scenes, marketplace tableaus, and contemporary themes reflect social realities and values</li>
                          <li><strong>Feminine Spirituality:</strong> Golu is primarily a women's tradition—women arrange dolls, invite neighbors, exchange sundal (snacks), and sing devotional songs</li>
                          <li><strong>Community Building:</strong> Visiting neighbors' Golu displays strengthens social bonds and creates intergenerational connections</li>
                          <li><strong>Artistic Expression:</strong> Arranging dolls allows creative expression within traditional frameworks—each family's Golu is unique</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Regional Doll-Making Traditions</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          India's doll-making traditions reflect incredible regional diversity, shaped by local materials, religious influences, and artistic styles:
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 space-y-3 mt-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Tamil Nadu Craft Legacy</h4>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            Tamil Nadu has strong terracotta and clay doll traditions. Thanjavur's bobblehead dolls (Thalayatti Bommai) with weighted bases create a nodding motion—symbols of resilience and balance. The terracotta dolls from villages near Pondicherry and Tirunelveli are painted with bright natural colors and often depict village women, musicians, and deities.
                          </p>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 space-y-3 mt-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Karnataka's Kinhal Craft</h4>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            Kinhal village in Karnataka produces paper mâché dolls and masks with distinctive painting styles. Artisans create hollow figures from paper pulp, dry them, then paint using natural colors and gold leaf—a tradition dating back 300+ years with royal patronage from the Adil Shahi dynasty.
                          </p>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 space-y-3 mt-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Andhra's Etikoppaka Lacquerware</h4>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            Etikoppaka in Andhra Pradesh is famous for lacquered wooden toys and dolls using 100% natural dyes. The craft received GI tag recognition. Artisans turn wood on lathes while applying colored lac mixed with natural materials—turmeric for yellow, vermillion for red, indigo for blue—creating vibrant, eco-friendly toys.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Women's Role in Craft Preservation</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Doll traditions are significantly preserved through women's cultural work. Mothers teach daughters how to arrange Golu, which dolls represent which stories, and how to maintain and expand family collections. Women are the primary buyers of dolls for household displays, making them critical economic supporters of artisan communities.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          In many craft clusters, women also participate directly in production—painting clay dolls, sewing cloth doll clothing, or finishing details on wooden figures. This gender dimension makes doll crafts important for women's economic empowerment in rural artisan communities.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Ramsons Kala Pratishtana's Cultural Mission</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Ramsons Kala Pratishtana (Ramsons Arts Foundation) runs Bombe Mane as part of its broader cultural mission to preserve and promote traditional arts. The organization connects urban consumers with rural artisan clusters, ensuring fair compensation and cultural recognition for craftspeople.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          By curating dolls from diverse regions, Ramsons educates Mysore residents and tourists about India's craft diversity. Each doll comes with context—where it's from, what tradition it represents, which artisan community makes it. This transforms shopping into cultural education, helping customers appreciate the heritage behind each handmade piece.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Contemporary Challenges & Adaptations</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Traditional doll-making faces pressures from:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Plastic Toy Competition:</strong> Mass-produced plastic dolls are cheaper and more durable, reducing demand for fragile traditional dolls</li>
                          <li><strong>Changing Festival Practices:</strong> Fewer urban families create elaborate Golu displays due to space constraints and busy lifestyles</li>
                          <li><strong>Artisan Youth Migration:</strong> Young people in craft villages pursue education and urban jobs instead of learning family crafts</li>
                          <li><strong>Material Costs:</strong> Natural materials and dyes are increasingly expensive compared to synthetic alternatives</li>
                        </ul>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed mt-3">
                          However, there's also renewed interest in authentic, eco-friendly, handmade products among educated consumers. Organizations like Ramsons tap into this market, creating sustainable income for artisans while educating customers about cultural heritage. Some artisans are adapting designs for home décor markets beyond festival use, creating year-round demand.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Living Tradition</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Despite challenges, doll-making traditions remain vibrant in many communities. Every Navaratri season, families across South India unpack treasured doll collections, adding new pieces each year. Artisan villages continue crafting dolls using centuries-old techniques. Spaces like Bombe Mane ensure these traditions don't become museum exhibits but remain living practices connecting past and present.
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "Each doll carries a story—of the artisan who made it, the village where it was crafted, the tradition it represents. When you buy a handmade doll, you're not just purchasing an object; you're preserving a cultural practice and supporting an artisan family. This is the heart of what we do at Bombe Mane."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Ramsons Kala Pratishtana Cultural Statement</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="p-6 flex flex-col gap-6">
                      <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Visitor Reviews</h2>
                      
                      {/* Review 1 */}
                      <div className="border-b border-border-light dark:border-border-dark pb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">person</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-text-light dark:text-text-dark">Lakshmi Narayanan</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Perfect place for authentic Golu dolls! I was preparing for Navaratri and needed to add to my collection. Bombe Mane had such a wonderful variety—from traditional Thanjavur dolls to beautiful terracotta pieces from Tamil Nadu villages. The staff was incredibly knowledgeable about each doll's origin and cultural significance. I bought a set of miniature deities and some village life scenes. Prices were reasonable for handmade quality. They packed everything so carefully with bubble wrap. Highly recommend for anyone wanting genuine regional dolls, not commercial plastic toys!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Michael Roberts</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Fascinating cultural space! As a tourist interested in Indian folk arts, I loved exploring this place. It's not just a shop—feels more like a mini museum with explanations about different regional doll traditions. I learned so much about Golu festival customs and the artisan communities behind these crafts. Bought some Etikoppaka wooden toys as gifts—beautiful natural colors and smooth finish. The owner explained they're made with organic dyes. Only minor issue: limited English signage for some displays. But the staff was helpful when I asked questions. Great cultural experience!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Priya Venkatesh</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Good collection of traditional dolls from various states. I appreciated that they source from actual artisan communities and provide information about each craft cluster. Bought Kinhal paper mâché dolls and some cloth dolls from Rajasthan. Quality is excellent and pricing is fair. The space itself is small but well-organized with dolls displayed nicely. They also had a small exhibition on Channapatna toys when I visited which was informative. Would be great if they organized more artisan demonstrations. Overall, a valuable cultural resource for Mysore. Worth visiting if you appreciate traditional crafts.
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
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your visit to Bombe Mane..."></textarea>
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

              {/* Right Sidebar - Quick Info */}
              <div className="lg:w-1/3">
                <div className="sticky top-6 flex flex-col gap-6">
                  {/* Contact Info */}
                  <div className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark">
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Studio Information</h3>
                    <div className="flex flex-col gap-3 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">business</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Organization</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Ramsons Kala Pratishtana</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">category</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Specialization</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Traditional Indian Dolls & Folk Toys</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">diversity_3</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Artisan Clusters</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Multiple Regions Across India</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">event</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Special Events</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Exhibitions & Artisan Meets</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">payments</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Payment</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Cash & Cards Accepted</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark">
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Quick Actions</h3>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={handleComingSoon}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700/50 transition-all duration-200 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-lg">share</span>
                        <span className="font-semibold text-sm">Share</span>
                      </button>
                      <button 
                        onClick={handleComingSoon}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700/50 transition-all duration-200 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-lg">bookmark</span>
                        <span className="font-semibold text-sm">Save</span>
                      </button>
                    </div>
                  </div>

                  {/* Navaratri Info */}
                  <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-purple-700 dark:text-purple-400 mt-0.5">celebration</span>
                      <div>
                        <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Navaratri Season</h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                          Visit during Navaratri/Dussehra (Sept-Oct) for special Golu displays and expanded doll collections. Call ahead for exhibition schedules!
                        </p>
                      </div>
                    </div>
                  </div>
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

