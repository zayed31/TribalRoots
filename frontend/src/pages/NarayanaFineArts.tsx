import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function NarayanaFineArts() {
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
            <linearGradient id="half-narayana">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-narayana)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  backgroundImage: 'url("/Images/NarayanaFineArtsAndCrafts.jpeg")',
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
                      Narayana Fine Arts & Crafts
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      Traditional Rosewood & Teakwood Furniture Since 1969
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(210+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">Mysuru, Karnataka</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Mon-Sat: 9:00 AM - 7:00 PM | Sunday: By Appointment</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">workspace_premium</span>
                      <p className="text-text-light dark:text-text-dark font-medium text-amber-700 dark:text-amber-400">
                        Established 1969 • 55+ Years of Craftsmanship
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
                        Heritage & Craft
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
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Over Half a Century of Wood Mastery</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Since 1969, Narayana Fine Arts & Crafts has been a cornerstone of Mysore's traditional wood-crafting heritage. For over 55 years, this family-run workshop has specialized in creating exquisite rosewood, teakwood, and sandalwood furniture and decorative pieces that embody the finest Mysore artisan traditions. What began as a small workshop has evolved into a respected name in traditional carved furniture, yet they've never abandoned the hand-craftsmanship and attention to detail that built their reputation.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Unlike mass-production furniture retailers, Narayana Fine Arts maintains the workshop-scale model where skilled artisans personally oversee every piece from wood selection to final polish. Their specialty lies in traditional carving and inlay work—techniques passed down through generations of Mysore craftsmen. Each furniture piece is not just functional—it's a work of art showcasing centuries-old woodworking traditions.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Signature Collections</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🪑 Carved Furniture Sets</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Traditional sofa sets, dining tables, chairs, and bedroom furniture featuring intricate hand-carved details. Rosewood and teak pieces with classic Mysore motifs.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎨 Decorative Wall Panels</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Hand-carved wooden wall panels depicting traditional scenes, mythological themes, or geometric patterns. Perfect for home or commercial interior decoration.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🕉️ Carved Idols & Religious Items</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Wooden deity sculptures, pooja mantaps, temple-style carvings in sandalwood and rosewood. Traditional iconography with meticulous craftsmanship.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">✨ Inlay Decorative Pieces</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Rosewood boxes, trays, photo frames, and decorative items with traditional inlay work—brass, ivory substitutes, or contrasting woods creating stunning visual effects.</p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Premium Wood Selection</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The foundation of exceptional furniture is exceptional wood. Narayana Fine Arts sources only premium quality timber:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🌳 Rosewood (Sheesham)</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              Rich, dark wood with distinctive grain patterns. Extremely durable and takes carving beautifully. Sourced from certified suppliers, properly seasoned for 2-3 years to prevent warping. Ideal for heirloom furniture that lasts generations.
                            </p>
                          </div>

                          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🪵 Teakwood</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              Premium teak known for natural oil content, resistance to termites, and weathering. Lighter than rosewood but equally strong. Excellent for both indoor and outdoor furniture. Beautiful honey-gold color deepens with age.
                            </p>
                          </div>

                          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🌺 Sandalwood (Limited Items)</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              For special carved idols and small decorative pieces, they work with certified sandalwood—the fragrant wood sacred in Indian culture. Due to restrictions, only small items. Each piece aromatic and spiritually significant.
                            </p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Traditional Carving Techniques</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The artisans at Narayana Fine Arts are masters of traditional wood carving, employing techniques refined over centuries in Mysore workshops:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Relief Carving:</strong> Three-dimensional designs raised from flat background—used for decorative panels, furniture backs, armrests</li>
                          <li><strong>Chip Carving:</strong> Geometric patterns created by removing small chips—traditional borders and ornamental details</li>
                          <li><strong>Sculptural Carving:</strong> Free-standing three-dimensional work for idols, figurines, and decorative sculptures</li>
                          <li><strong>Pierced Carving (Jali Work):</strong> Intricate lattice patterns—decorative screens, panels allowing light while providing privacy</li>
                          <li><strong>Inlay Integration:</strong> Combining carved wood base with inlaid contrasting materials for visual drama</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Custom Furniture Service</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          One of Narayana Fine Arts' strengths is custom furniture creation. They work closely with clients to design and craft pieces tailored to specific requirements:
                        </p>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg space-y-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Custom Commission Process:</h4>
                          <ol className="list-decimal list-inside text-text-light/80 dark:text-text-dark/80 text-sm space-y-2">
                            <li><strong>Consultation:</strong> Discuss requirements, style preferences, space dimensions, budget</li>
                            <li><strong>Design Development:</strong> Artisans create sketches or 3D concepts showing proposed piece</li>
                            <li><strong>Wood Selection:</strong> Choose wood type, grade, and finish based on use and aesthetic goals</li>
                            <li><strong>Approval & Advance:</strong> Finalize design, provide quote, collect advance payment (typically 40-50%)</li>
                            <li><strong>Crafting Phase:</strong> Skilled artisans begin work—duration varies by complexity (2-12 weeks typical)</li>
                            <li><strong>Quality Review:</strong> Client invited to inspect piece before final finishing</li>
                            <li><strong>Finishing & Delivery:</strong> Final polish, protective coating, delivery/installation arranged</li>
                          </ol>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Why Choose Narayana Fine Arts?</h3>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>55+ Years Experience:</strong> Three generations of woodworking expertise; proven track record of quality and reliability</li>
                          <li><strong>Traditional Techniques:</strong> Authentic Mysore carving and inlay methods, not shortcuts or machine-only production</li>
                          <li><strong>Premium Materials:</strong> Only certified, properly seasoned timber—no composite woods or cheap substitutes</li>
                          <li><strong>Skilled Artisans:</strong> Experienced craftsmen with 10-30+ years personal experience in traditional woodwork</li>
                          <li><strong>Custom Capability:</strong> Can execute complex custom designs while maintaining traditional aesthetic integrity</li>
                          <li><strong>Heirloom Quality:</strong> Furniture built to last generations, not disposable modern pieces</li>
                          <li><strong>Fair Pricing:</strong> Direct workshop purchase eliminates retail markup while ensuring artisan wages</li>
                          <li><strong>Cultural Authenticity:</strong> Every piece reflects genuine Mysore wood-crafting heritage</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Visiting the Workshop</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Visitors are welcome to see the workshop and finished pieces. While primarily operating as a manufacturing workshop rather than a showroom, they accommodate clients interested in viewing their work or discussing custom projects. Call ahead to schedule a visit, especially if you want to see artisans at work or discuss specific furniture requirements.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg space-y-2 mt-4">
                          <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">💰 Pricing Guide</h4>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Small decorative items: ₹3,000-₹15,000 | Carved wall panels: ₹15,000-₹50,000 | Single furniture pieces (chairs, small tables): ₹20,000-₹80,000 | Complete furniture sets (dining, living room): ₹1,50,000-₹5,00,000+ | Custom sandalwood idols: ₹10,000-₹1,00,000+</p>
                        </div>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Investment in Heritage:</strong> Furniture from Narayana Fine Arts isn't an expense—it's an investment in craftsmanship that appreciates over time. Properly maintained rosewood and teak furniture actually increases in value as wood ages and becomes richer. Many families pass down Narayana pieces through generations, each serving as both functional furniture and tangible connection to family history and Karnataka's woodworking legacy.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">The Mysore Wood-Crafting Lineage</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Mysore has been renowned for wood craftsmanship for centuries. Under the Wodeyar dynasty, royal patronage attracted and nurtured skilled wood artisans who created furniture, decorative panels, temple carvings, and architectural elements for palaces and religious institutions. The Mysore Palace itself stands as testimony to the region's wood-crafting excellence—its rosewood doors, carved pillars, and inlay work represent the pinnacle of traditional technique.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Narayana Fine Arts: A Family Legacy</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Founded in 1969, Narayana Fine Arts emerged during a period when traditional crafts faced pressure from industrial furniture manufacturing. The founder recognized that machine-made furniture could never replicate the soul, quality, and artistic merit of hand-crafted wood pieces. Starting as a small workshop with a handful of artisans, the business was built on a simple philosophy: create furniture so well-crafted that it becomes family heirloom rather than disposable commodity.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Now in its third generation of family management, Narayana Fine Arts has maintained that founding vision. The current generation learned woodworking by working alongside their fathers and grandfathers, absorbing not just technical skills but the deeper understanding of wood as a living material that requires respect, patience, and artistic sensitivity.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Artisan Workshop Model</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Narayana operates on the traditional workshop model rather than factory production:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Master-Apprentice System:</strong> Experienced artisans train younger craftsmen through hands-on apprenticeship, typically 5-7 years to develop full proficiency</li>
                          <li><strong>Specialized Roles:</strong> Different artisans specialize—some in carving, others in joinery, finishing, or inlay work—leveraging deep expertise</li>
                          <li><strong>Quality Over Quantity:</strong> Production volume is deliberately limited to what skilled hands can create without compromising standards</li>
                          <li><strong>Collaborative Creation:</strong> Complex pieces involve multiple artisans contributing specialized skills under senior artisan oversight</li>
                          <li><strong>Personal Accountability:</strong> Each artisan takes ownership of their work; reputation depends on consistent quality</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Traditional Mysore Wood Motifs</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The carving patterns used at Narayana Fine Arts draw from Mysore's rich artistic heritage:
                        </p>
                        
                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 space-y-2 mt-3">
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Floral Designs:</strong> Lotus, jasmine, and marigold—flowers significant in Hindu tradition and regionally abundant. Often stylized in traditional Indian artistic conventions.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Peacock Motifs:</strong> The peacock, India's national bird, frequently appears in Mysore wood art—symbol of beauty, pride, and Hindu deity association (Kartikeya's vehicle).
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Elephant Imagery:</strong> Sacred in Karnataka culture, elephants feature in furniture designs—especially pieces for pooja rooms or traditional homes. Mysore Dasara's elephant processions inspire many designs.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Architectural Elements:</strong> Patterns from Mysore Palace architecture—arches, jali lattices, pillars—translated into furniture decorative elements.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Mythological Scenes:</strong> Episodes from Ramayana, Mahabharata, Puranas carved as narrative panels on furniture backs, wall art, or door panels.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Craft vs. Commerce Balance</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Operating a traditional workshop in the modern economy presents challenges:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Price Competition:</strong> Mass-produced furniture is cheaper; many consumers don't understand value proposition of handcrafted quality</li>
                          <li><strong>Changing Tastes:</strong> Modern aesthetics sometimes favor minimalism over traditional carved ornamentation</li>
                          <li><strong>Material Costs:</strong> Quality timber, especially rosewood, has become significantly more expensive due to scarcity and regulation</li>
                          <li><strong>Skill Scarcity:</strong> Fewer young people willing to undergo lengthy apprenticeships; skilled artisan talent pool shrinking</li>
                          <li><strong>Time vs. Profit:</strong> Hand-carving is time-intensive; economic pressure to cut corners exists but must be resisted</li>
                        </ul>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed mt-3">
                          Despite these pressures, Narayana Fine Arts has survived—and continues thriving—by serving clients who understand quality. Their customer base includes families building heritage homes, temples commissioning religious installations, collectors appreciating fine woodwork, and discerning individuals who view furniture as multi-generational investment.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Environmental Consciousness</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Modern Narayana Fine Arts is conscious of environmental sustainability:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Certified Wood Sources:</strong> All timber from legal, certified suppliers with proper forest department documentation</li>
                          <li><strong>No Waste Philosophy:</strong> Wood scraps repurposed for smaller items or inlay components; sawdust composted or donated for fuel</li>
                          <li><strong>Longevity Focus:</strong> Furniture designed to last generations reduces need for replacement—true sustainability</li>
                          <li><strong>Natural Finishes:</strong> Preference for natural oils, beeswax, traditional lac polishes over synthetic chemical finishes where appropriate</li>
                          <li><strong>Repair & Restoration:</strong> They repair and restore old furniture, extending life rather than encouraging disposal</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Cultural Preservation Through Commerce</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Businesses like Narayana Fine Arts serve a cultural preservation function beyond economics:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Skill Transmission:</strong> By maintaining viable workshop operations, they provide employment that enables skill transfer to next generation</li>
                          <li><strong>Living Tradition:</strong> Techniques aren't museum pieces but actively practiced crafts with contemporary relevance</li>
                          <li><strong>Quality Standards:</strong> Maintaining high standards ensures traditional methods remain economically competitive, not just nostalgic</li>
                          <li><strong>Cultural Education:</strong> Clients purchasing traditional furniture gain appreciation for heritage craftsmanship</li>
                          <li><strong>Regional Identity:</strong> Mysore wood-crafting traditions continue defining Karnataka's cultural identity through active practice</li>
                        </ul>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "When we carve a piece of rosewood, we're not just creating furniture—we're continuing a conversation with our grandfathers and their grandfathers. The motifs we carve, the joints we make, the polish we apply—these techniques connect us to centuries of Mysore artisans. Every piece that leaves our workshop carries that lineage forward. This is why we never compromise on quality or tradition, even when commercial pressures exist. Our reputation is built over 55 years; we protect it by honoring the craft."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Third-generation craftsman, Narayana Fine Arts & Crafts</p>
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Vishwanath Rao</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 months ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              We commissioned a complete rosewood dining set from Narayana Fine Arts for our new home—table for 8 with traditional carved chairs. The craftsmanship is absolutely stunning! Every detail, from the hand-carved floral patterns on the chair backs to the intricate border work on the table, shows exceptional skill. The artisans patiently worked with us to finalize the design, showing sketches and even allowing us to visit the workshop mid-production to see progress. Took 3 months but worth every day of waiting. This furniture will be in our family for generations. Pricing was very reasonable considering the quality and custom work. Highly recommend for anyone wanting authentic traditional furniture!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Dr. Meera Krishnan</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">5 months ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Purchased a sandalwood Ganesha idol and a rosewood wall panel depicting Dasara procession. The idol carving is exquisite—every detail of Ganesha's form perfectly executed with traditional iconographic accuracy. The sandalwood fragrance is divine! The wall panel is a masterpiece—dozens of miniature elephants, musicians, and royal figures carved in relief with amazing detail. You can see individual expressions on faces and decorative elements on the elephants. The artisans clearly have deep knowledge of both wood-carving technique and cultural/religious subject matter. These aren't just products—they're art pieces. Narayana Fine Arts maintains the highest standards of Mysore wood-carting tradition. Worth every rupee!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Suresh Bhat</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 months ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Bought a teak wood sofa set (3+2+1) with traditional carving. The quality of wood and workmanship is excellent—you can tell this is genuine traditional craft, not factory-made furniture. The carving details are beautiful, joints are solid, finish is smooth. Pricing was higher than modern furniture stores, but you're paying for real craftsmanship and materials that will last. My only minor feedback: delivery took slightly longer than estimated (though they kept us informed). The final result exceeded expectations. This is furniture you buy once and it serves your family for decades. Very satisfied with the purchase and the professionalism of the Narayana team. Definitely recommend for quality traditional furniture.
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
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your experience with Narayana Fine Arts..."></textarea>
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
                        <span className="material-symbols-outlined text-primary mt-0.5">history</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Established</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">1969 (55+ Years)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">category</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Specialization</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Rosewood, Teak & Sandalwood</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">handyman</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Craft Type</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Traditional Carving & Inlay</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">workspace_premium</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Custom Work</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Full Custom Furniture Service</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">groups</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Workshop Model</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Family-Run Artisan Workshop</p>
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
                        <span className="material-symbols-outlined text-lg">language</span>
                        <span className="font-semibold text-sm">Visit Website</span>
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

                  {/* Heritage Badge */}
                  <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-amber-700 dark:text-amber-400 mt-0.5">stars</span>
                      <div>
                        <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">Heritage Craftsmanship</h4>
                        <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                          <li>• Est. 1969 - 55+ Years</li>
                          <li>• 3 Generations of Masters</li>
                          <li>• Traditional Mysore Methods</li>
                          <li>• Heirloom Quality Furniture</li>
                          <li>• Custom Commissions Welcome</li>
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

