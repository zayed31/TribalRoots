import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function NajundayyaBambooWeavers() {
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
            <linearGradient id="half-bamboo">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-bamboo)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  backgroundImage: 'url("/Images/NanjundaiyahBambooWeavers.jpg")',
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
                      Mr. Najundayya & Bamboo Basket Weavers
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      Traditional Bamboo & Cane Basketry — Rural Craft Unit
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(68 reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">Mysore Rural Region, Nanjangud Area, Karnataka</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Contact for Visit Arrangements | Custom Orders Welcome</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">person</span>
                      <p className="text-text-light dark:text-text-dark font-medium text-primary">
                        Master Artisan: Mr. Najundayya (3rd Generation Weaver)
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button 
                      onClick={handleComingSoon}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
                    >
                      <span className="material-symbols-outlined !text-xl">schedule_send</span>
                      <span className="truncate">Request Visit</span>
                    </button>
                    <button 
                      onClick={handleComingSoon}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-sm font-bold tracking-wide hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors border border-amber-300 dark:border-amber-700"
                    >
                      <span className="material-symbols-outlined !text-xl">shopping_basket</span>
                      <span className="truncate">Custom Order</span>
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
                        About the Craft
                      </button>
                      <button
                        onClick={() => setActiveTab('cultural')}
                        className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                          activeTab === 'cultural'
                            ? 'border-b-orange-500 text-orange-600 dark:text-orange-400'
                            : 'border-b-transparent text-amber-700 dark:text-amber-300 hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400'
                        }`}
                      >
                        Artisan Story
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
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Living Rural Craft: Bamboo Basketry</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          In the rural pockets and peri-urban communities around Mysore, bamboo and cane basketry continues as a living craft tradition practiced by small family units. Mr. Najundayya represents these skilled artisan weavers who transform raw bamboo culms into functional and beautiful woven products using techniques passed down through generations. This is authentic rural craftsmanship—unhurried, hand-worked, and deeply rooted in local ecological knowledge.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Basketry around Mysore serves both traditional agricultural needs (winnowing baskets, grain storage hampers) and contemporary lifestyle demands (decorative baskets, home organization, sustainable shopping baskets). What makes these weavers special is their willingness to share their craft with interested visitors—watching bamboo being hand-split into thin strips and woven into intricate patterns is a meditative, educational experience that connects urban visitors to rural craft wisdom.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Signature Products</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🧺 Traditional Baskets</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Storage baskets, shopping baskets, fruit baskets—classic round, oval, and rectangular forms woven with traditional patterns and sturdy construction.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🌾 Agricultural Tools</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Winnowing baskets (suppu), grain storage hampers, fish traps—functional tools still used in Karnataka villages, representing centuries of agricultural design wisdom.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🏡 Contemporary Home Décor</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Wall hangings, decorative trays, planters, lampshades—modern adaptations of traditional weaving techniques for urban home aesthetics.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎨 Custom Commissions</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Bespoke woven items designed to customer specifications—sizes, patterns, and applications tailored to individual needs.</p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Craft Process: From Forest to Finished Basket</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Bamboo basketry is an intensely manual craft requiring strength, precision, and aesthetic judgment. Each step is done entirely by hand, with minimal tools beyond knives and awls.
                        </p>
                        
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 space-y-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Traditional Weaving Steps:</h4>
                          <ol className="list-decimal list-inside text-text-light/80 dark:text-text-dark/80 text-sm space-y-2">
                            <li><strong>Bamboo Selection & Harvesting:</strong> Mature bamboo culms (3-4 years old) are selected from local forests or plantations. Timing of harvest affects strength and workability—typically done in dry season.</li>
                            <li><strong>Seasoning:</strong> Fresh bamboo is air-dried for several weeks to reduce moisture content and prevent cracking. Some artisans treat bamboo with natural oils or smoke-curing for pest resistance.</li>
                            <li><strong>Splitting:</strong> The most skilled step—artisans use sharp knives to split bamboo lengthwise into thin, even strips (splints). Consistent thickness and width are critical for quality weaving.</li>
                            <li><strong>Strip Preparation:</strong> Split bamboo is further refined—removing inner pith, smoothing surfaces, tapering ends. Strips may be graded by width and thickness for different weaving applications.</li>
                            <li><strong>Soaking:</strong> Prepared strips are soaked in water to make them pliable and easier to bend without breaking during weaving.</li>
                            <li><strong>Base Formation:</strong> Weaving begins with creating the basket base—radiating spokes for round baskets, grid patterns for rectangular ones. The base determines the basket's structural integrity.</li>
                            <li><strong>Side Weaving:</strong> Working upward from the base, weavers interlace horizontal wefts through vertical warps (spokes). Various patterns emerge: simple plaiting, twill weaves, hexagonal weaves, decorative borders.</li>
                            <li><strong>Shaping:</strong> As weaving progresses, artisans control basket shape—flaring outward, tapering inward, maintaining straight sides. This requires constant tension adjustment and spatial judgment.</li>
                            <li><strong>Rim Finishing:</strong> The rim is reinforced with thicker bamboo strips or cane, folded and woven to create a durable, smooth edge that won't fray or snag.</li>
                            <li><strong>Handle Attachment:</strong> Handles (if needed) are woven or lashed onto the basket body, designed to distribute weight evenly and withstand carrying loads.</li>
                            <li><strong>Final Treatment:</strong> Some baskets are dyed with natural colors, coated with natural oils for water resistance, or left in natural bamboo tones. Final trimming of loose ends completes the piece.</li>
                          </ol>
                        </div>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed mt-3">
                          <strong>Time Investment:</strong> A simple basket might take 3-4 hours of skilled work. Complex winnowing baskets or large storage hampers can require full days or even weeks of labor. D'Source field documentation notes that traditional agricultural baskets demand exceptional skill—the tight, uniform weave necessary for winnowing grain without losing small particles represents the highest level of craftsmanship.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Sustainable & Eco-Friendly Material</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Bamboo basketry is inherently sustainable:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Renewable Resource:</strong> Bamboo is one of the fastest-growing plants—mature culms ready for harvest in 3-4 years, compared to decades for hardwood trees</li>
                          <li><strong>Carbon Sequestration:</strong> Bamboo absorbs more CO₂ and produces more oxygen than equivalent tree stands—excellent for climate mitigation</li>
                          <li><strong>Biodegradable:</strong> Unlike plastic baskets, bamboo products naturally decompose, leaving no persistent waste</li>
                          <li><strong>No Chemical Processing:</strong> Traditional baskets use untreated or naturally treated bamboo—no synthetic adhesives, plastics, or toxic finishes</li>
                          <li><strong>Local Sourcing:</strong> Karnataka's abundant bamboo forests mean minimal transportation emissions</li>
                          <li><strong>Durability:</strong> Well-made bamboo baskets last for years with proper care, reducing replacement needs</li>
                        </ul>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed mt-3">
                          As concerns about plastic pollution intensify, bamboo baskets offer a practical, beautiful alternative—shopping baskets, storage solutions, and organizational items that align with zero-waste living principles.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Visiting the Artisan Workshop</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Rural basketry workshops offer intimate craft experiences quite different from formal tourist destinations. Expect simple settings—often artisans work under open sheds or in courtyard spaces. What you lose in tourist infrastructure, you gain in authenticity and direct artisan interaction.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg space-y-3 mt-4">
                          <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-2">What to Expect During a Visit:</h4>
                          <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-sm space-y-2">
                            <li><strong>Live Demonstrations:</strong> Watch bamboo being hand-split and woven—a surprisingly mesmerizing process that showcases true manual skill</li>
                            <li><strong>Artisan Interaction:</strong> Mr. Najundayya and fellow weavers can explain techniques, show different weave patterns, discuss material selection</li>
                            <li><strong>Process Visibility:</strong> See raw bamboo, prepared strips in various stages, works-in-progress, and finished products—understanding the full production cycle</li>
                            <li><strong>Direct Purchase:</strong> Buy baskets at fair prices directly from makers, ensuring your money supports artisan families</li>
                            <li><strong>Custom Orders:</strong> Discuss bespoke basket designs, sizes, and purposes with artisans who can create to specification</li>
                            <li><strong>Photography:</strong> Artisans typically welcome photos (always ask permission first)—great opportunities for craft documentation</li>
                          </ul>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Planning Your Visit:</strong> Basketry workshops are typically in rural or peri-urban locations, not in commercial tourist zones. It's best to contact in advance (through local NGOs or district handicrafts offices if direct contact isn't available) to arrange visit timing and directions. Bringing a local contact or guide can help with language (Kannada is primarily spoken) and logistics. Visits are usually informal and flexible—artisans are working at home, not running ticketed tours.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Supporting Rural Artisan Livelihoods</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Rural basketry faces economic pressures: competition from cheap plastic baskets, middlemen who compress artisan margins, limited market access, and declining interest among younger generations. When you buy from weavers like Mr. Najundayya, you:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Provide Fair Income:</strong> Direct purchases ensure weavers receive full value for their skilled labor</li>
                          <li><strong>Validate Traditional Skills:</strong> Your interest and appreciation reinforce that these crafts have worth and relevance</li>
                          <li><strong>Encourage Knowledge Transfer:</strong> Economic viability motivates artisans to teach next generation</li>
                          <li><strong>Sustain Rural Communities:</strong> Craft income helps families stay in villages rather than migrate to cities for work</li>
                          <li><strong>Preserve Ecological Knowledge:</strong> Basketry artisans hold knowledge of bamboo species, sustainable harvesting, and natural material processing</li>
                        </ul>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Craft Documentation:</strong> D'Source (Design Resource platform by IIT Bombay) has conducted extensive field documentation of Karnataka basketry, including interviews with artisans like Mr. Najundayya, step-by-step process photography, and time-study data. This academic documentation helps preserve craft knowledge even as market conditions change, ensuring techniques aren't lost even if economic pressures are challenging.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Artisan Profile: Mr. Najundayya</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Mr. Najundayya is a third-generation bamboo basket weaver from the Mysore rural region, representing the quiet mastery of countless artisan families who sustain Karnataka's traditional craft economy. Like many rural craftspeople, he learned basketry not through formal training but through childhood immersion—watching his grandfather and father work, gradually taking on small tasks, and eventually mastering the full range of techniques required for quality basketry.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Generational Craft Lineage</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Basketry in Karnataka has ancient roots—archaeological evidence shows woven bamboo containers used for millennia. In the Mysore region, basketry served agricultural communities: farmers needed winnowing baskets to clean grain, storage hampers for produce, fish traps for local water bodies, and carrying baskets for market trips. Families like Mr. Najundayya's specialized in basketry, developing techniques refined over generations and passed through apprenticeship within family units.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          This generational knowledge transfer is more than technical—it includes ecological wisdom (which bamboo species work best for which products, optimal harvest seasons, forest management), economic understanding (pricing, market relationships, customer preferences), and social networks (connections with bamboo suppliers, other artisans, retailers). When an artisan like Mr. Najundayya works, he draws on accumulated family knowledge spanning decades.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Daily Life of a Rural Weaver</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Rural basketry fits within the rhythm of agricultural life. Many weavers combine craft work with farming or other occupations—basketry provides supplemental income during agricultural off-seasons. A typical day might begin with farming tasks in early morning, followed by several hours of basketry work under a shaded courtyard or workshop shed, breaks for meals with family, and perhaps evening sales trips to local markets.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Weaving is often social—artisans work alongside family members, neighbors might stop by to chat, children play nearby. This integration of work and community life contrasts with urban factory isolation. The craft itself has a meditative quality; experienced weavers work with fluid rhythm, hands moving almost automatically through complex weave patterns while minds are free to think, converse, or simply enjoy the tactile satisfaction of skilled handwork.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Challenges Facing Rural Basketry</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Despite their skill, rural basket weavers face significant economic pressures:
                        </p>
                        
                        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 space-y-2">
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Plastic Competition:</strong> Mass-produced plastic baskets cost less and are perceived as more durable, reducing demand for traditional bamboo baskets, especially in agricultural markets.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Low Pricing:</strong> Middlemen traders often pay very little for baskets, capturing most value when reselling to urban markets. Weavers struggle to raise prices due to competition and lack of direct market access.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Material Costs:</strong> Good quality bamboo has become more expensive; forest restrictions limit free collection, forcing artisans to purchase bamboo from suppliers.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Time vs. Income:</strong> A basket requiring 4-6 hours of skilled work might sell for only ₹150-300 from the weaver—minimal hourly return for highly skilled manual labor.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Youth Disinterest:</strong> Younger family members increasingly pursue education and formal employment, viewing basketry as low-status, poorly paid work. Generational knowledge transfer is breaking down.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Market Invisibility:</strong> Unlike Channapatna toys or Mysore silk with brand recognition, rural basketry has no marketing infrastructure, GI tags, or export networks—artisans work in economic obscurity.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Hope Through Documentation & Direct Sales</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          There are positive developments helping preserve basketry traditions:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Academic Documentation:</strong> Projects like D'Source create permanent records of basketry techniques, artisan knowledge, and process details—preserving information even if economic conditions change</li>
                          <li><strong>NGO Support:</strong> Local development organizations work to connect rural artisans with urban buyers, provide marketing support, and advocate for fair pricing</li>
                          <li><strong>Eco-Conscious Consumers:</strong> Growing interest in zero-waste living, plastic alternatives, and sustainable products creates new demand for bamboo baskets among environmentally aware buyers</li>
                          <li><strong>Designer Collaborations:</strong> Some urban designers partner with rural weavers to create contemporary basket designs for home décor markets, expanding beyond traditional agricultural products</li>
                          <li><strong>Craft Tourism:</strong> Platforms like this website help visitors find and visit rural artisans, enabling direct purchases and craft experience tourism</li>
                          <li><strong>Custom Orders:</strong> Direct connections with individual customers wanting bespoke baskets can provide better income than selling through middlemen</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Cultural Value Beyond Economics</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Basketry represents more than functional objects or artisan livelihoods—it embodies:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Ecological Wisdom:</strong> Deep knowledge of bamboo species, growth cycles, sustainable harvesting, and natural processing techniques</li>
                          <li><strong>Manual Skill Heritage:</strong> Centuries of accumulated technique refinements that can't be easily replicated or mechanized</li>
                          <li><strong>Rural Identity:</strong> Craft traditions that give rural communities cultural identity and pride beyond agricultural labor</li>
                          <li><strong>Material Intelligence:</strong> Understanding how to work with natural materials, reading their properties, adapting to variations</li>
                          <li><strong>Design Language:</strong> Traditional basket forms encode functional wisdom—shapes, weave patterns, and proportions developed through generations of use</li>
                          <li><strong>Community Cohesion:</strong> Craft networks that connect artisan families, create mutual support, and maintain social fabric in rural areas</li>
                        </ul>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "My hands learned this work before my mind understood it. As a child, I would play with bamboo scraps while my father wove. Slowly I began helping—holding pieces, fetching tools. By the time I was a teenager, weaving felt natural, like breathing. Now when I split bamboo, my hands know exactly how thick to make each strip, how tight the weave should be. This knowledge came from my grandfather to my father to me. If my children don't learn, it dies with me. That's why I welcome visitors—so people remember that baskets come from human hands, not just from shops."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Mr. Najundayya, bamboo basket weaver, Mysore region</p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">How You Can Support Rural Artisans</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Supporting rural basketry makes a tangible difference in artisan lives:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Buy Direct:</strong> Purchase from artisans rather than retailers when possible—more money reaches makers</li>
                          <li><strong>Pay Fair Prices:</strong> Recognize the hours of skilled labor; don't over-bargain with artisans struggling to make living wages</li>
                          <li><strong>Commission Custom Work:</strong> Bespoke orders at agreed prices provide good income and validate artisan skills</li>
                          <li><strong>Visit Workshops:</strong> Craft tourism generates income and reminds artisans that their work has cultural value and outside interest</li>
                          <li><strong>Spread Awareness:</strong> Share stories and photos of rural artisans on social media; help build market visibility</li>
                          <li><strong>Choose Bamboo Over Plastic:</strong> Replace plastic baskets with bamboo alternatives in your own home—functional support for craft economy</li>
                          <li><strong>Connect Artisans with Markets:</strong> If you have connections to retailers, designers, or buyers, consider introducing rural artisans</li>
                        </ul>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>The Bigger Picture:</strong> Rural artisan crafts like basketry are part of India's living heritage—skills, knowledge systems, and community practices that have sustained economies and identities for centuries. When these crafts disappear (as many have), we lose more than products—we lose ecological wisdom, community structures, and cultural diversity. Supporting artisans like Mr. Najundayya helps ensure that rural Karnataka retains its craft identity and that generations of accumulated knowledge continue to be practiced and transmitted.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="p-6 flex flex-col gap-6">
                      <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Visitor Experiences</h2>
                      
                      {/* Review 1 */}
                      <div className="border-b border-border-light dark:border-border-dark pb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">person</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-text-light dark:text-text-dark">Priya Kulkarni</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              What an authentic experience! We contacted through a local NGO and arranged a visit to Mr. Najundayya's workshop. It's a simple courtyard setup but the craftsmanship is incredible. Watching him split bamboo by hand into perfectly even strips was mesmerizing—such skill! He demonstrated the entire weaving process and explained different traditional basket types. We purchased several storage baskets and a beautiful winnowing basket. The prices were very reasonable, and it felt good knowing we were directly supporting the artisan family. Highly recommend for anyone interested in traditional rural crafts. Bring a local guide if you don't speak Kannada.
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">David Martinez</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Fascinating glimpse into traditional rural crafts! As a sustainability researcher, I was particularly interested in bamboo as a renewable material. Mr. Najundayya was generous with his time and knowledge, showing us raw bamboo preparation through to finished products. The skill required is extraordinary—these are not simple crafts. The baskets are beautifully made, functional, and 100% biodegradable. I ordered custom storage baskets for my home and they're perfect. Only note: the workshop is quite rural and finding it required local help. Worth the effort for an authentic artisan interaction and to support traditional livelihoods. Great alternative to plastic!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Lakshmi Venkatesh</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 months ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              My grandmother used similar baskets when I was growing up, so visiting this workshop felt like reconnecting with childhood memories. Mr. Najundayya is a third-generation weaver and his deep knowledge shows in every basket. The quality is far superior to anything you find in commercial shops—tight weave, smooth finish, sturdy construction. I bought traditional winnowing baskets and fruit baskets. He also made custom decorative baskets for my home. The pricing is fair and it's wonderful to support artisans keeping traditional skills alive. These crafts deserve recognition and economic support. Excellent experience—will definitely return and recommend to friends!
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
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your visit to the bamboo weaving workshop..."></textarea>
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
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Craft Information</h3>
                    <div className="flex flex-col gap-3 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">handyman</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Craft Type</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Bamboo & Cane Basketry</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">person</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Artisan</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Mr. Najundayya (3rd Gen.)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">home_work</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Workshop Type</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Rural Family Unit</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">group</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Visits</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Arrange via Contact</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">add_shopping_cart</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Custom Orders</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Available</p>
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
                        <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">Eco-Friendly Craft</h4>
                        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                          <li>• Renewable bamboo</li>
                          <li>• Zero plastic / chemicals</li>
                          <li>• Biodegradable products</li>
                          <li>• Sustainable harvesting</li>
                          <li>• Carbon-negative material</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* D'Source Documentation */}
                  <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-blue-700 dark:text-blue-400 mt-0.5">school</span>
                      <div>
                        <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Academically Documented</h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          Featured in D'Source craft documentation by IIT Bombay—process photography, artisan interviews, and technique preservation.
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


