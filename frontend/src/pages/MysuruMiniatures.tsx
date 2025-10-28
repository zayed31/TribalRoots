import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function MysuruMiniatures() {
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
            <linearGradient id="half-miniatures">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-miniatures)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  backgroundImage: 'url("/Images/MysoreMiniatures.webp")',
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
                      Mysuru Miniatures
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      Handcrafted Miniatures, Scale Models & Cultural Dioramas
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(95+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">No. 14, Karakushala Nagara, Metagalli, Mysuru, Karnataka 570016</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">By Appointment Only • Call ahead to visit studio</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">person</span>
                      <p className="text-text-light dark:text-text-dark font-medium text-indigo-700 dark:text-indigo-400">
                        Independent Artisan Studio • Custom Commissions
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button 
                      onClick={handleComingSoon}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
                    >
                      <span className="material-symbols-outlined !text-xl">calendar_month</span>
                      <span className="truncate">Schedule Studio Visit</span>
                    </button>
                    <button 
                      onClick={handleComingSoon}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-4 bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 text-sm font-bold tracking-wide hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors border border-amber-300 dark:border-amber-700"
                    >
                      <span className="material-symbols-outlined !text-xl">call</span>
                      <span className="truncate">Contact Artisan</span>
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
                        Studio & Works
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
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Where Precision Meets Passion</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Mysuru Miniatures is a one-person artisan studio specializing in exquisitely detailed handcrafted miniatures, scale models, and cultural dioramas. Run by skilled miniaturist Sudeesh Kottikkal from a modest workshop in Metagalli, this studio represents the intersection of traditional craftsmanship, artistic vision, and painstaking precision. Unlike mass-produced souvenirs, every piece created here is a labor of love—weeks or even months of meticulous work condensed into palm-sized marvels.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          For collectors, cultural enthusiasts, and anyone who appreciates the extraordinary skill required to recreate architectural grandeur or cultural scenes at miniature scale, Mysuru Miniatures offers something truly special. Each creation tells a story—of Mysore's heritage, India's architectural splendor, or everyday cultural moments frozen in time at 1:50 or 1:100 scale.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Signature Creations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🏛️ Miniature Temple Models</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Incredibly detailed scale replicas of South Indian temples—Mysore Palace, Chamundeshwari Temple, Somnathpur Keshava Temple. Every gopuram, pillar, and sculptural detail faithfully reproduced.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🏠 Architectural Scale Models</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Traditional Karnataka homes, heritage structures, colonial bungalows—architectural models capturing regional building styles with accurate proportions and materials.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎭 Cultural Dioramas</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Miniature scenes depicting cultural moments—Dasara processions, village markets, traditional crafts workshops, festival celebrations. Intricate tableaus with multiple figures and elements.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎁 Custom Commissions</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Bespoke miniature creations based on client requirements—family homes, ancestral temples, historical scenes, commemorative pieces. Perfect for unique gifts or personal collection.</p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Art of Miniature Making</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Creating miniatures is not simply "making things small"—it's a discipline requiring exceptional spatial understanding, manual dexterity, patience, and artistic sensibility. The miniaturist must understand architecture, proportions, materials, and cultural details to create pieces that feel authentic despite their diminutive size.
                        </p>
                        
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 space-y-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Miniature Creation Process:</h4>
                          <ol className="list-decimal list-inside text-text-light/80 dark:text-text-dark/80 text-sm space-y-2">
                            <li><strong>Research & Documentation:</strong> Extensive study of the subject—photographs, architectural drawings, site visits if possible. Understanding every detail before beginning.</li>
                            <li><strong>Scale Drawing:</strong> Creating precise scaled-down technical drawings. Common scales include 1:50 (1 cm = 50 cm in reality) or 1:100 for larger structures.</li>
                            <li><strong>Material Selection:</strong> Choosing appropriate materials—wood, cardboard, clay, plaster, metal, fabric—based on what's being represented and scale requirements.</li>
                            <li><strong>Base Structure Creation:</strong> Building the foundational structure using cutting, carving, and assembly techniques. Precision is critical—1mm error at miniature scale is visible.</li>
                            <li><strong>Detail Work:</strong> Adding architectural elements—pillars, windows, doors, decorative carvings, roof tiles. This is the most time-intensive phase, often using magnification and specialized micro-tools.</li>
                            <li><strong>Surface Treatment:</strong> Texturing surfaces to represent stone, wood, plaster, or other materials. Creating realistic weathering and aging where appropriate.</li>
                            <li><strong>Painting & Finishing:</strong> Applying colors with fine brushes or airbrush. Miniatures require multiple thin layers for depth and realism. Gold leaf or metallic paints for temple details.</li>
                            <li><strong>Assembly & Display:</strong> If the piece has multiple components (diorama with figures, vehicles, vegetation), final assembly and mounting on display base with protective case.</li>
                          </ol>
                        </div>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed mt-3">
                          A simple miniature building might take 40-60 hours of work. Complex temple models can require 200-300+ hours spread over several months. The level of detail is extraordinary—miniature temple carvings you need a magnifying glass to fully appreciate, tiny human figures in traditional dress positioned in authentic poses, miniature objects like clay pots or flower garlands just millimeters in size.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Featured Collections</h3>
                        
                        <div className="space-y-4">
                          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🕌 Mysore Heritage Series</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">
                              Miniature models of Mysore's iconic structures—Mysore Palace (the magnum opus!), Chamundeshwari Temple, Jaganmohan Palace, St. Philomena's Cathedral. Each model captures architectural details that make these buildings legendary.
                            </p>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              <strong>Example:</strong> 1:100 scale Mysore Palace model showing the three-story structure, domes, arches, and palace grounds—approximately 60cm × 40cm display size representing a 6,000 sq ft footprint.
                            </p>
                          </div>

                          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🏛️ Temple Architecture Collection</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">
                              South Indian temple miniatures showcasing Dravidian architecture—towering gopurams with sculptural tiers, pillared mandapams, sanctum sanctorum structures. Popular subjects include Hampi temples, Somnathpur, Belur-Halebidu style temples.
                            </p>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              <strong>Detail Level:</strong> Individual deity sculptures on gopuram tiers visible under magnification; intricate ceiling patterns in miniature mandapams; authentic color schemes based on historical references.
                            </p>
                          </div>

                          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎪 Cultural Scene Dioramas</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">
                              Miniature tableaus depicting Karnataka cultural moments—Mysore Dasara procession with caparisoned elephants and royal entourage, village marketplace with vendors and customers, traditional craft workshop scenes, temple festivals.
                            </p>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              <strong>Elements:</strong> 50-100+ miniature figures in each diorama, accurate traditional costumes, period-appropriate props, landscaping with trees/vegetation, lighting effects for display drama.
                            </p>
                          </div>

                          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🏡 Traditional Home Models</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">
                              Scale replicas of traditional Karnataka architecture—Mangalorean tile-roof houses, traditional agrahara (Brahmin quarter) homes, colonial-era bungalows, heritage wadas (mansions). Popular for families wanting miniatures of ancestral homes.
                            </p>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              <strong>Custom Service:</strong> Provide photographs and dimensions of your family home; receive a detailed scale model capturing architectural character and sentimental details. Perfect heirloom pieces.
                            </p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Studio Visit Experience</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Mysuru Miniatures operates by appointment, allowing for personalized interaction with the artisan. A studio visit typically includes:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Work-in-Progress Viewing:</strong> See current projects in various stages—fascinating to observe the building process</li>
                          <li><strong>Completed Pieces Display:</strong> Portfolio of finished miniatures available for purchase or commission inspiration</li>
                          <li><strong>Technique Demonstration:</strong> If time permits, the artisan can demonstrate specific miniature-making techniques</li>
                          <li><strong>Process Explanation:</strong> Understanding how research, scaling, material selection, and detail work combine</li>
                          <li><strong>Commission Consultation:</strong> Discuss custom projects—subject, scale, detail level, timeline, pricing</li>
                        </ul>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Important:</strong> As a one-person operation, the studio cannot accommodate walk-ins. Please call or message ahead to schedule a visit. The artisan appreciates genuine interest in the craft and can allocate time for serious collectors or those considering commissions.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Pricing & Commissions</h3>
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 p-4 rounded-lg space-y-3">
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">💰 Ready-Made Miniatures</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Small miniatures (10-15cm): ₹3,000-₹8,000. Medium pieces (20-30cm): ₹8,000-₹25,000. Large complex models (40cm+): ₹25,000-₹1,00,000+. Pricing reflects hours of skilled labor and materials.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">🎨 Custom Commissions</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Bespoke projects quoted based on complexity, scale, detail level, and timeline. Typical commission process: consultation → concept sketch → quote → 40% advance → creation (4-12 weeks) → final payment on completion.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">📦 Display & Shipping</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Most miniatures come with custom acrylic or glass display cases. Careful packing for shipping. Courier costs extra for outstation orders. International shipping available for overseas collectors.</p>
                          </div>
                        </div>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Collector's Note:</strong> Handcrafted miniatures are investment pieces. Unlike mass-produced models, these are unique artworks created with museum-quality attention to detail. They appreciate in value, particularly as the artisan's reputation grows. Many collectors commission pieces documenting personal heritage—family homes, hometown landmarks, favorite temples—creating tangible connections to places and memories that can be passed down through generations.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">The Artisan: Sudeesh Kottikkal</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Sudeesh Kottikkal's journey into miniature making began with a childhood fascination with architecture and model-building. Growing up in Kerala with family connections to traditional crafts, he was exposed to the importance of precision and detail from an early age. After formal education in architecture and design, he worked in the construction industry, but the creative call of hands-on artisan work proved irresistible.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          About a decade ago, Sudeesh shifted to Mysore, drawn by the city's rich architectural heritage and vibrant cultural scene. He began creating miniatures as a passionate hobby—detailed models of Mysore Palace, local temples, traditional homes. Word spread through social media and local exhibitions, and what started as a side pursuit evolved into a full-time artisan practice. Today, Mysuru Miniatures has a growing collector following and regular commission requests from across India and abroad.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Philosophy & Approach</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          For Sudeesh, miniature-making is more than technical skill—it's cultural documentation and storytelling at a tiny scale:
                        </p>
                        <blockquote className="border-l-4 border-primary p-4 bg-surface-light dark:bg-surface-dark italic text-text-light/80 dark:text-text-dark/80 my-4">
                          "When I create a miniature of a 16th-century temple or a traditional agrahara house, I'm not just building a model—I'm preserving architectural knowledge and cultural memory. Many heritage structures are deteriorating or being demolished. A detailed miniature can document them for future generations. It's my way of honoring Karnataka's architectural legacy and the craftsmen who built these marvels centuries ago."
                        </blockquote>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Miniature-Making Tradition</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          While Sudeesh is an individual practitioner, he's part of a broader tradition of architectural model-making with deep roots:
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 space-y-3 mt-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Historical Context</h4>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            In India, architectural models have been used for centuries. Temple builders created miniature prototypes to show patrons before construction. Royal courts commissioned miniature palaces and fortifications. The Mughal and Rajput courts had artisans who created intricate miniature paintings and three-dimensional models documenting architecture and court life.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            In the colonial era, British architects created detailed models of Indian monuments for documentation and study. Many of these historical miniatures now reside in museums—evidence of their value as cultural artifacts beyond mere decoration.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Skills & Knowledge Required</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Becoming a skilled miniaturist requires a unique combination of abilities:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Architectural Understanding:</strong> Knowledge of building principles, structural systems, traditional construction methods, regional architectural styles</li>
                          <li><strong>Manual Dexterity:</strong> Extremely precise hand control for working with millimeter-scale components; steady hands, good hand-eye coordination</li>
                          <li><strong>Spatial Intelligence:</strong> Ability to visualize three-dimensional structures from photographs or drawings and translate them to miniature scale</li>
                          <li><strong>Material Knowledge:</strong> Understanding properties of different materials at small scale—how they cut, join, finish, age over time</li>
                          <li><strong>Tool Proficiency:</strong> Mastery of micro-tools, cutting instruments, adhesives, painting techniques, finishing methods</li>
                          <li><strong>Patience & Focus:</strong> Capacity for sustained concentration on minute details for hours or days; tolerance for repetitive precision work</li>
                          <li><strong>Artistic Sensibility:</strong> Color sense, composition skills, understanding of light/shadow, aesthetic judgment</li>
                          <li><strong>Research Capability:</strong> Ability to find and interpret historical documentation, architectural drawings, archaeological evidence</li>
                        </ul>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed mt-3">
                          These skills take years to develop. Sudeesh estimates it took him 5-7 years of serious practice to reach his current proficiency level, and he continues learning and refining techniques with every new project.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Cultural Documentation Mission</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          One of Sudeesh's passionate projects is documenting disappearing architectural heritage:
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 space-y-2 mt-3">
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Heritage at Risk:</strong> Many traditional Karnataka homes, colonial bungalows, and lesser-known temples are being demolished for modern construction. Sudeesh has made it his mission to document as many as possible through miniature models before they're lost forever.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Community Partnerships:</strong> He works with heritage conservation groups, offering to create miniatures of endangered structures. These models serve as visual archives—if the building is demolished, the miniature preserves knowledge of its architectural details.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Educational Role:</strong> Miniatures help people understand architectural heritage. A child can examine a miniature temple model, seeing details invisible from ground level on the actual structure. It makes architecture tangible and accessible.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Challenges of Solo Artisan Practice</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Running a one-person studio has unique challenges:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Time Constraints:</strong> Complex commissions can take 3-6 months; balancing multiple projects while maintaining quality is difficult</li>
                          <li><strong>Income Variability:</strong> Unlike salaried work, income fluctuates based on commission flow; requires financial discipline and planning</li>
                          <li><strong>Marketing & Business:</strong> Artisans excel at creating, not necessarily at marketing, bookkeeping, client management; learning business skills alongside craft</li>
                          <li><strong>Scaling Limitations:</strong> One person can only produce so much; turning down work is sometimes necessary to preserve quality</li>
                          <li><strong>Physical Demands:</strong> Miniature work strains eyes, hands, and back; managing ergonomics and taking breaks is essential for sustainability</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Joy of the Craft</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Despite challenges, Sudeesh finds deep fulfillment in his work:
                        </p>
                        <blockquote className="border-l-4 border-green-500 p-4 bg-green-50 dark:bg-green-900/20 italic text-text-light/80 dark:text-text-dark/80 my-4">
                          "There's a meditative quality to miniature work. When I'm fitting a tiny carved pillar into place, or painting details on a miniature gopuram, the world disappears. It's just me and the piece. And when I complete a complex model—when I set it under glass and see it whole for the first time—there's this moment of pure joy. I've brought something into existence that didn't exist before, preserved something important. That feeling never gets old."
                        </blockquote>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Equally rewarding is client reaction. When someone commissions a miniature of their ancestral home and tears up seeing it completed, when a collector spends 20 minutes examining every detail with a magnifying glass, when a child's eyes widen seeing a miniature Mysore Palace—these moments affirm the value of the work beyond economics.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Vision for the Future</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Sudeesh envisions expanding his impact while maintaining quality:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Heritage Documentation Project:</strong> Creating a comprehensive miniature collection of Karnataka's architectural heritage—temples, palaces, traditional homes—for museum or permanent exhibition</li>
                          <li><strong>Teaching Workshops:</strong> Offering short courses to teach interested students basic miniature-making skills, sharing knowledge</li>
                          <li><strong>Collaboration with Architects:</strong> Working with architectural firms to create presentation models for clients or historical reconstruction projects</li>
                          <li><strong>Digital Documentation:</strong> Photographing miniatures in extreme detail and creating 3D scans for digital archives</li>
                          <li><strong>Apprenticeship:</strong> Eventually training 1-2 dedicated apprentices to ensure skill transfer and potentially expand studio capacity</li>
                        </ul>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "I want Mysuru Miniatures to be more than a business—I want it to be a cultural contribution. Every miniature I create is a small act of preservation, a tiny museum piece that helps keep our architectural heritage alive in people's minds and hearts. If my work inspires even one young person to appreciate traditional architecture or take up this craft, it will have been worthwhile."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Sudeesh Kottikkal, Founder & Miniaturist, Mysuru Miniatures</p>
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Raghavan Iyer</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 months ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              I commissioned Sudeesh to create a miniature of my grandfather's ancestral home in Melkote—a traditional agrahara house that was demolished five years ago. I provided old photographs and rough measurements. What he created was nothing short of miraculous! Every detail was perfect—the Mangalorean tile roof, the wooden pillars, even the tulsi vrindavanam in the courtyard. When I showed it to my elderly mother, she cried. It was like having our family home back. The craftsmanship is museum-quality. Worth every rupee. An heirloom piece I'll treasure forever. Highly recommend for anyone wanting to preserve architectural memories!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Dr. Anjali Krishnan</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 months ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              As an architecture professor, I'm constantly amazed by Sudeesh's technical accuracy and artistic sensibility. I purchased his 1:100 scale Mysore Palace model for my office—it's an incredible teaching tool. Students can examine architectural details invisible on photographs. The level of detail is extraordinary—you need a magnifying glass to fully appreciate the miniature carvings and decorative elements. He clearly does meticulous research. I've since ordered miniatures of several historical temples for our department's collection. The quality rivals professional architectural models costing 3-4x more. Supporting this kind of skilled artisan work is important. Absolute excellence!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Vikram Hegde</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Bought a ready-made Chamundeshwari Temple miniature from Sudeesh's collection. The craftsmanship is outstanding—intricate details, accurate proportions, beautiful finish. It sits in my living room display cabinet and is always a conversation starter with guests. Sudeesh was very welcoming when I visited his studio, explained his process, showed works in progress. The pricing is fair for the amount of skill and time invested. Only minor suggestion: the display case could be slightly better quality for the price point, though he did say he's working on sourcing upgraded cases. Overall excellent experience. Will definitely commission a custom piece in the future. Great way to own a piece of Karnataka's architectural heritage!
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
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Tell us about your Mysuru Miniatures experience..."></textarea>
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
                        <span className="material-symbols-outlined text-primary mt-0.5">person</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Artisan</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Sudeesh Kottikkal</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">category</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Specialization</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Architectural Miniatures & Dioramas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">schedule</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Visit Policy</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">By Appointment Only</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">handshake</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Custom Work</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Commissions Accepted</p>
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
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Connect</h3>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={handleComingSoon}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700/50 transition-all duration-200 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-lg">photo_library</span>
                        <span className="font-semibold text-sm">View Portfolio</span>
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

                  {/* Commission Notice */}
                  <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-indigo-700 dark:text-indigo-400 mt-0.5">brush</span>
                      <div>
                        <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Custom Commissions</h4>
                        <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-3">
                          Preserve your family heritage, favorite landmarks, or dream architecture as exquisite miniatures!
                        </p>
                        <p className="text-xs text-indigo-700 dark:text-indigo-300">
                          Timeline: 4-12 weeks depending on complexity. Contact for consultation and quote.
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

