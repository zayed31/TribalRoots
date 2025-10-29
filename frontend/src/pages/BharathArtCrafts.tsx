import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function BharathArtCrafts() {
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
            <linearGradient id="half-bharath">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-bharath)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  backgroundImage: 'url("/Images/BharatArtsAndCrafts.jpg")',
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
                      Channapatna Toys Shop
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      Traditional Channapatna Wooden Lacquer Toys & Factory Tours
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(380+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">Nizami Chouk, Channapatna, Ramanagara District, Karnataka 571501</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">directions_car</span>
                      <p className="text-text-light dark:text-text-dark">55-70 km from Mysuru | 60 km from Bengaluru (on Bangalore-Mysore Highway)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Mon-Sat: 9:00 AM - 6:00 PM | Factory Tours: Call ahead to arrange</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">verified</span>
                      <p className="text-text-light dark:text-text-dark font-medium text-green-700 dark:text-green-400">
                        GI-Tagged Craft • UNESCO Intangible Heritage
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button 
                      onClick={handleComingSoon}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
                    >
                      <span className="material-symbols-outlined !text-xl">factory</span>
                      <span className="truncate">Book Factory Tour</span>
                    </button>
                    <button 
                      onClick={handleComingSoon}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-sm font-bold tracking-wide hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors border border-amber-300 dark:border-amber-700"
                    >
                      <span className="material-symbols-outlined !text-xl">call</span>
                      <span className="truncate">Contact Workshop</span>
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
                        Workshop & Products
                      </button>
                      <button
                        onClick={() => setActiveTab('cultural')}
                        className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                          activeTab === 'cultural'
                            ? 'border-b-orange-500 text-orange-600 dark:text-orange-400'
                            : 'border-b-transparent text-amber-700 dark:text-amber-300 hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400'
                        }`}
                      >
                        Channapatna Heritage
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
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Welcome to Channapatna's Toy-Making Heartland</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Channapatna Toys Shop is a family-run workshop representing the authentic soul of Channapatna—India's "Toy Town" famous for vibrant wooden lacquer toys that have delighted children for over 200 years. Located in the heart of Channapatna's craft cluster at Nizami Chouk, this small factory and artisan unit welcomes visitors to witness the magical transformation of simple wood into colorful, eco-friendly toys using traditional techniques passed down through generations.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          What makes Channapatna Toys Shop special is their commitment to maintaining traditional methods while welcoming curious visitors. Unlike large commercial operations, this is a family home-unit model where artisans work at wooden lathes in workshops adjacent to their homes—the authentic small-scale setup that built Channapatna's reputation. Factory visits and live demonstrations are available (call ahead to arrange), offering a rare glimpse into a UNESCO-recognized craft tradition.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Signature Products</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎨 Traditional Lacquered Toys</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Hand-turned wooden toys in vibrant natural colors—animals, vehicles, figurines, rattles. Each piece smoothly finished with eco-friendly lacquer application.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🧩 Educational Toys & Puzzles</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Stacking rings, shape sorters, building blocks, alphabet sets—designed for child development using safe, natural materials and non-toxic dyes.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🪆 Decorative Dolls & Figurines</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Beautifully crafted wooden dolls, Golu/Bombe display pieces, decorative figurines suitable for home décor and gift purposes.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🥣 Utility Items</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Wooden bowls, plates, utensils, napkin rings, coasters—functional items that bring Channapatna's colorful aesthetic to everyday use.</p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Craft Process: From Tree to Toy</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Watching Channapatna toys being made is mesmerizing. The entire process combines mechanical precision with artistic intuition, all executed by skilled artisans using techniques refined over centuries.
                        </p>
                        
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 space-y-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Traditional Manufacturing Steps:</h4>
                          <ol className="list-decimal list-inside text-text-light/80 dark:text-text-dark/80 text-sm space-y-2">
                            <li><strong>Wood Selection:</strong> Ivory wood (Hale mara) is the traditional choice—soft, close-grained, and sustainably sourced from local forests. Wood is seasoned for months to prevent cracking.</li>
                            <li><strong>Lathe Turning:</strong> Artisans mount wood pieces on foot-powered or electric lathes, shaping them into desired forms—spheres, cylinders, animals, vehicles—with chisels and gouges while the lathe spins.</li>
                            <li><strong>Sanding & Smoothing:</strong> Each piece is carefully sanded smooth while still on the lathe, creating perfectly rounded, splinter-free surfaces safe for children.</li>
                            <li><strong>Lacquer Application:</strong> This is where the magic happens! Artisans press colored lac sticks (made from natural shellac mixed with vegetable dyes) against the spinning toy. Friction melts the lac, coating the wood in vibrant, glossy color.</li>
                            <li><strong>Coloring & Detailing:</strong> Different colors are applied in sections—the artisan controls exactly where each color goes by precise hand placement. Patterns emerge from skillful color transitions.</li>
                            <li><strong>Buffing & Polishing:</strong> A final polish with soft cloths while the piece spins gives the characteristic Channapatna luster—smooth, shiny, and irresistibly touchable.</li>
                            <li><strong>Assembly:</strong> Complex toys with multiple parts (wheels, moveable pieces, joinery) are assembled using traditional wood-fitting techniques and natural glues.</li>
                          </ol>
                        </div>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed mt-3">
                          A skilled artisan can produce 50-100 simple toys per day, but complex pieces may take hours. The beauty of Channapatna toys lies in their handmade variability—no two are exactly identical, each bearing the subtle signature of its maker's hand.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">100% Natural & Eco-Friendly</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Channapatna toys are completely non-toxic and child-safe, using only natural materials:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Ivory Wood Base:</strong> Sustainable, soft wood from managed forests—lightweight and safe if mouthed by children</li>
                          <li><strong>Natural Lac Coating:</strong> Shellac derived from lac insect secretions—completely organic and biodegradable</li>
                          <li><strong>Vegetable Dyes:</strong> Colors from natural sources—turmeric (yellow), kumkum/vermillion (red), indigo (blue), spinach/henna (green), etc.</li>
                          <li><strong>No Chemicals:</strong> Zero synthetic paints, varnishes, or toxic substances—safe for babies who explore by mouth</li>
                        </ul>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed mt-3">
                          This eco-friendly approach has made Channapatna toys increasingly popular with environmentally conscious parents worldwide, especially as concerns about plastic toys and chemical exposures have grown.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Factory Tour Experience</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Bharath Art & Crafts explicitly welcomes visitors to their workshop—a rare opportunity to see artisans at work. A typical factory visit includes:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Live Demonstrations:</strong> Watch artisans turning wood on lathes and applying colorful lacquer in real-time</li>
                          <li><strong>Process Explanation:</strong> Staff or artisans explain each step, from wood selection to finishing</li>
                          <li><strong>Artisan Interaction:</strong> Meet the craftspeople, learn about their family craft lineages, ask questions</li>
                          <li><strong>Workshop Tour:</strong> See the production setup—lathes, tools, materials storage, finished product displays</li>
                          <li><strong>Shopping Opportunity:</strong> Purchase directly from the workshop at wholesale/factory prices—significant savings vs. retail stores</li>
                        </ul>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Important:</strong> Factory tours work best when arranged in advance—call the workshop to schedule your visit. This ensures artisans can allocate time for demonstrations and explanations rather than focusing purely on production. Tours are typically free, though toy purchases are appreciated (and prices are excellent!).
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Visiting Bharath Art & Crafts</h3>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg space-y-3">
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">🚗 Getting There</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Channapatna is on NH275 (Bangalore-Mysore Highway). From Mysore: 55-70 km, 1-1.5 hours. From Bangalore: ~60 km, 1-1.5 hours. Perfect stopover if traveling between cities. Local buses, taxis, and private vehicles all accessible.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">⏰ Planning Your Visit</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Allocate 1-2 hours for a leisurely factory visit including demonstration, shopping, and artisan interaction. Weekday mornings (10 AM-12 PM) are typically best—artisans actively working, not crowded.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">💰 Pricing & Shopping</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Factory-direct prices: small toys ₹50-₹300, medium toys ₹300-₹800, large/complex pieces ₹800-₹3,000+. Wholesale rates for bulk orders. Significant savings vs. retail shops in cities.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">🌟 Combining with Other Channapatna Visits</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Channapatna has hundreds of toy workshops. Visit multiple family units to compare styles and prices. Also explore the main market area where many artisans have small showrooms.</p>
                          </div>
                        </div>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Supporting Craft Families:</strong> When you buy Channapatna toys from workshops like Bharath Art & Crafts, you directly support artisan families who've preserved this 200-year-old tradition. Your purchase helps ensure the next generation can continue learning and practicing this UNESCO-recognized craft, keeping a vital piece of Indian cultural heritage alive.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Channapatna: The Toy Town of India</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Channapatna, a small town in Karnataka's Ramanagara district, has been synonymous with wooden toys for over two centuries. Nearly 60% of the town's population is involved in toy-making—from artisans at lathes to painters, assemblers, and sellers. This craft cluster represents one of India's most successful examples of sustainable traditional industry, where ancient techniques support modern livelihoods.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Historical Origins: The Persian Connection</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The Channapatna toy tradition is said to have begun in the 18th century under Tipu Sultan, the ruler of Mysore Kingdom. Tipu Sultan invited Persian artisans to train local craftspeople in lacquerware techniques. The Persians brought knowledge of lathe-turning and lac application, which local artisans adapted to create toys using readily available ivory wood.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The craft flourished under Mysore's Wodeyar dynasty patronage in the 19th and early 20th centuries. The royal family commissioned toys for princes and princesses, elevating the craft's status. By the mid-20th century, Channapatna had become a full-fledged craft cluster with hundreds of artisan families practicing the tradition.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">GI Tag & UNESCO Recognition</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          In 2006, Channapatna toys received **Geographical Indication (GI) tag** protection—legal recognition that toys made in Channapatna using traditional methods have unique characteristics deserving intellectual property protection. This was a major victory for artisan communities, preventing imitations from being sold as "Channapatna toys."
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Even more prestigiously, in 2022, **Channapatna toy-making was included in UNESCO's List of Intangible Cultural Heritage** of humanity. This global recognition acknowledges the craft's cultural significance and the need to preserve the knowledge and skills it represents. UNESCO recognition has brought international attention and renewed pride among artisan communities.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Craft Cluster Model</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Channapatna operates as a **craft cluster**—a geographic concentration of interconnected businesses and artisans working in the same craft tradition. This model has several advantages:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Knowledge Sharing:</strong> Artisans learn from each other; innovations spread quickly through the community</li>
                          <li><strong>Specialized Roles:</strong> Some families specialize in turning, others in lacquering, others in assembly—division of labor increases efficiency</li>
                          <li><strong>Material Access:</strong> Suppliers of wood, lac, and tools concentrate in the area, reducing costs</li>
                          <li><strong>Quality Standards:</strong> Community reputation depends on maintaining quality—peer pressure ensures high standards</li>
                          <li><strong>Cultural Identity:</strong> The entire town's identity centers on toy-making, creating strong community cohesion</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Family Lineages & Generational Knowledge</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Most Channapatna artisans are **third, fourth, or even fifth-generation toy-makers**. Skills are transmitted through apprenticeship—children grow up watching parents and grandparents work, gradually learning techniques through hands-on practice rather than formal instruction.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          This generational transfer ensures not just technical skill, but also the aesthetic sensibility and quality consciousness that define authentic Channapatna work. An experienced artisan can judge wood quality by touch, knows exactly how much pressure to apply when lacquering, and has internalized the proportions that make toys visually pleasing—knowledge accumulated over decades that cannot be easily replicated.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Economic & Social Impact</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The toy industry provides livelihoods for thousands of families in Channapatna and surrounding villages:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Direct Employment:</strong> Approximately 3,000-5,000 artisans work full-time in toy-making</li>
                          <li><strong>Indirect Employment:</strong> Wood suppliers, lac collectors, tool makers, transporters, shopkeepers all benefit</li>
                          <li><strong>Women's Participation:</strong> Women play significant roles in painting, assembly, and finishing work—important for household income</li>
                          <li><strong>Home-Based Work:</strong> Many artisans work from home workshops, allowing flexible family involvement and childcare compatibility</li>
                          <li><strong>Export Market:</strong> Channapatna toys are exported globally—Europe, USA, Japan—bringing foreign exchange and international recognition</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Challenges in Modern Times</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Despite international recognition, Channapatna toy-makers face significant challenges:
                        </p>
                        
                        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 space-y-2">
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Plastic Competition:</strong> Mass-produced plastic toys are cheaper, more durable, and aggressively marketed—traditional wooden toys struggle to compete on price.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Price Pressure:</strong> Wholesalers and retailers squeeze artisan margins; many families struggle to earn sustainable incomes despite long work hours.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Youth Migration:</strong> Younger generations increasingly pursue education and urban jobs rather than learning family crafts, threatening knowledge transmission.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Raw Material Costs:</strong> Ivory wood prices have increased significantly; lac and natural dyes are more expensive than synthetic alternatives.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Market Access:</strong> Small artisans lack resources for branding, marketing, or e-commerce—they depend on middlemen who capture much of the value.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Revival Efforts & New Markets</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          There are positive developments helping sustain the craft:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Eco-Conscious Consumers:</strong> Growing global demand for sustainable, non-toxic, plastic-free toys benefits Channapatna artisans</li>
                          <li><strong>E-Commerce Platforms:</strong> Artisans are slowly adopting online sales, connecting directly with customers and improving margins</li>
                          <li><strong>Government Support:</strong> Schemes providing financial assistance, skill training, and marketing support help artisan communities</li>
                          <li><strong>Design Innovation:</strong> Some artisans collaborate with designers to create contemporary products (home décor, lifestyle items) expanding beyond traditional toys</li>
                          <li><strong>Tourism Integration:</strong> Factory tours and craft experiences attract tourists, creating additional income streams</li>
                          <li><strong>Fair Trade Partnerships:</strong> Organizations connecting artisans with ethical retailers ensure better prices and long-term orders</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Cultural Significance Beyond Economics</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Channapatna toys represent more than income—they're a living cultural heritage embodying:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Craftsmanship Values:</strong> Patience, precision, attention to detail, and pride in work quality</li>
                          <li><strong>Sustainable Practices:</strong> Use of renewable materials, zero waste production, non-toxic processes—an ecological wisdom relevant today</li>
                          <li><strong>Community Identity:</strong> The craft defines Channapatna's character; losing it would fundamentally change the town's identity</li>
                          <li><strong>Intergenerational Bonds:</strong> Families working together strengthen social fabric and transmit cultural values</li>
                          <li><strong>Indian Creativity:</strong> The craft showcases Indian artistic traditions and the ability to create beauty from simple materials</li>
                        </ul>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "My grandfather taught my father, my father taught me, and now I'm teaching my son. When we turn wood on the lathe and watch colors bloom on the spinning toy, we're not just making products—we're keeping alive a tradition that connects us to our ancestors and to the soul of Channapatna. This is our heritage, our identity, our contribution to the world."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Fourth-generation Channapatna toy artisan (representative voice)</p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">How You Can Help Preserve the Tradition</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Supporting Channapatna toys makes a real difference:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Buy Authentic:</strong> Purchase GI-tagged Channapatna toys from verified artisans or ethical retailers</li>
                          <li><strong>Pay Fair Prices:</strong> Understand the skill and labor involved; don't over-bargain with artisans struggling to earn livelihood</li>
                          <li><strong>Spread Awareness:</strong> Share the story of Channapatna toys with friends, family, and on social media</li>
                          <li><strong>Gift Thoughtfully:</strong> Choose Channapatna toys as meaningful, eco-friendly gifts instead of plastic toys</li>
                          <li><strong>Visit Workshops:</strong> Take factory tours, interact with artisans, and buy directly when possible</li>
                          <li><strong>Support Artisan Platforms:</strong> Buy from organizations working with fair-trade principles that ensure artisan welfare</li>
                        </ul>
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Arjun Reddy</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Amazing experience! Stopped in Channapatna while driving from Bangalore to Mysore and visited Bharath Art & Crafts. The artisan demonstration was incredible—watching the wooden pieces transform into colorful toys right before our eyes was magical. My kids were fascinated! We bought a whole collection of animals, vehicles, and stacking toys. The prices were unbeatable—paid maybe 40% of what similar toys cost in Bangalore stores. Everything is genuinely handmade with natural materials, safe for children. The family running the workshop was warm and welcoming, explained the entire process. Highly recommend visiting if you're passing through Channapatna!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Emma Johnson</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              As an eco-conscious parent from the UK, I was thrilled to discover Channapatna toys during our India trip. Bharath Art & Crafts gave us a wonderful factory tour—seeing the traditional lathe work and natural lacquer application was educational and beautiful. We learned these toys are 100% non-toxic, made from sustainable wood and vegetable dyes. I purchased a large selection to take home as gifts and for my children. The quality is outstanding—smooth finish, vibrant colors, no sharp edges. These toys have soul and story unlike mass-produced plastic ones. They shipped some items internationally for me as well. Supporting traditional artisans while getting superior, safe products—win-win! Absolute must-visit for anyone interested in sustainable crafts.
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Sneha Patil</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Excellent workshop with authentic Channapatna toys. We called ahead and they arranged a demonstration specifically for our visit. The artisan showed us each step—from selecting wood to the final lacquer application. Very informative! We bought educational toys for our toddler and decorative pieces for home. Love that everything is eco-friendly and supports traditional artisan families. Prices are very reasonable—factory direct makes a huge difference. Only minor suggestion: the workshop could use better signage from the highway; we had to ask for directions a couple times. But once there, the experience and products are fantastic. Definitely worth the detour from the Mysore highway. Planning to return for Diwali shopping!
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Submit Review Form */}
                      <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 flex flex-col gap-4 mt-8">
                        <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Share Your Factory Visit Experience</h3>
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
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your experience at Bharath Art & Crafts..."></textarea>
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
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Workshop Information</h3>
                    <div className="flex flex-col gap-3 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">handyman</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Craft Type</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Wooden Lacquer Toys (GI-Tagged)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">groups</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Workshop Model</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Family-Run Craft Unit</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">factory</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Factory Tours</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Available (Call to Arrange)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Certifications</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">GI Tag • UNESCO Heritage</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">local_shipping</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Shipping</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Domestic & International</p>
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
                        <span className="material-symbols-outlined text-lg">directions</span>
                        <span className="font-semibold text-sm">Get Directions</span>
                      </button>
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

                  {/* Eco-Friendly Badge */}
                  <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-700 dark:text-green-400 mt-0.5">eco</span>
                      <div>
                        <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">100% Eco-Friendly</h4>
                        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                          <li>• Natural ivory wood</li>
                          <li>• Vegetable-based dyes</li>
                          <li>• Zero toxic chemicals</li>
                          <li>• Biodegradable materials</li>
                          <li>• Safe for children</li>
                        </ul>
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

