import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function SriGeethaFineArts() {
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
            <linearGradient id="half-geetha">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-geetha)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  backgroundImage: 'url("/Images/SriGeetaArts.jpg")',
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
                      Sri (New) Geetha Fine Arts
                    </h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal">
                      Traditional Rosewood Inlay & Marquetry Workshop
                    </p>
                  </div>

                  {/* Rating and Location */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {renderStars(4.5)}
                      </div>
                      <span className="text-text-light dark:text-text-dark font-medium">4.5</span>
                      <span className="text-text-light/70 dark:text-text-dark/70">(145+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">location_on</span>
                      <p className="text-text-light dark:text-text-dark">Near Mission Hospital Road, Mandi Mohalla, Mysuru, Karnataka 570001</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">schedule</span>
                      <p className="text-text-light dark:text-text-dark">Mon-Sat: 9:00 AM - 7:00 PM | Sunday: By Appointment</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-light/70 dark:text-text-dark/70">handyman</span>
                      <p className="text-text-light dark:text-text-dark font-medium text-amber-700 dark:text-amber-400">
                        Artisan Workshop • Hand-Crafted Inlay Work
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
                      <span className="truncate">Call Workshop</span>
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
                        Workshop Details
                      </button>
                      <button
                        onClick={() => setActiveTab('cultural')}
                        className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                          activeTab === 'cultural'
                            ? 'border-b-orange-500 text-orange-600 dark:text-orange-400'
                            : 'border-b-transparent text-amber-700 dark:text-amber-300 hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400'
                        }`}
                      >
                        Craft Tradition
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
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">About Sri Geetha Fine Arts</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Nestled in the historic Mandi Mohalla area of old Mysore, Sri (New) Geetha Fine Arts is a traditional artisan workshop specializing in the centuries-old craft of rosewood inlay and marquetry. This small, workshop-style establishment represents the authentic face of Mysore's woodworking heritage—where skilled craftsmen continue time-honored techniques passed down through generations.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Operating for several decades, this family-run workshop is a living testament to Mysore's rich tradition of wood inlay artistry. Unlike commercial retailers, this is a true working atelier where visitors can witness master craftsmen meticulously creating intricate inlay patterns, carefully fitting tiny pieces of contrasting woods, ivory substitutes, and decorative materials into rosewood bases to create stunning visual effects.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Signature Products & Craftsmanship</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎁 Rosewood Inlay Boxes</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Exquisite jewelry boxes, keepsake boxes, and decorative storage pieces featuring intricate geometric or floral inlay patterns. Each piece hand-finished with traditional polish.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🪑 Custom Furniture Pieces</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Small furniture items like side tables, decorative stools, and display stands with inlay work. Custom orders available for larger furniture with client-chosen designs.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🖼️ Framed Inlay Art</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Decorative wall panels and framed inlay artwork depicting traditional Mysore motifs, Mysore Palace designs, floral compositions, and geometric patterns.</p>
                          </div>
                          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2">🎨 Decorative Panels</h4>
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">Ornamental wooden panels suitable for doors, cabinet inserts, or standalone art pieces. Traditional Mysore Palace-inspired designs and custom commissions welcomed.</p>
                          </div>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Inlay Process: Art Meets Precision</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Witnessing the inlay process at Sri Geetha Fine Arts is a mesmerizing experience. The artisan begins with premium rosewood, carefully selecting pieces with the right grain and color. The design is then meticulously drawn or transferred onto the wood surface.
                        </p>
                        
                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 space-y-3">
                          <h4 className="font-bold text-text-light dark:text-text-dark">Traditional Inlay Steps:</h4>
                          <ol className="list-decimal list-inside text-text-light/80 dark:text-text-dark/80 text-sm space-y-2">
                            <li><strong>Design Planning:</strong> Traditional motifs or custom designs are carefully planned and sketched</li>
                            <li><strong>Wood Selection:</strong> Premium rosewood base and contrasting woods (ivory substitutes, lighter hardwoods) are chosen</li>
                            <li><strong>Precision Carving:</strong> Grooves are carved into the rosewood base following the design lines—depth and width must be exact</li>
                            <li><strong>Inlay Cutting:</strong> Decorative materials are cut to perfectly fit the carved grooves—this requires exceptional hand-eye coordination</li>
                            <li><strong>Fitting & Adhesion:</strong> Each tiny piece is fitted into its groove with traditional adhesives, ensuring seamless integration</li>
                            <li><strong>Sanding & Leveling:</strong> The entire surface is carefully sanded until inlay and base wood are perfectly level</li>
                            <li><strong>Polishing:</strong> Multiple coats of traditional polish (often shellac-based) are applied and hand-buffed to a lustrous finish</li>
                          </ol>
                        </div>

                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          A single intricate inlay box can take several days to complete, depending on design complexity. This painstaking attention to detail ensures each piece is not just a product, but a work of art that can be treasured for generations.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Workshop Experience</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Visitors are warmly welcomed to observe the craftsmen at work (prior phone call appreciated). The workshop maintains an authentic, no-frills atmosphere—this is a working studio first, retail space second. The scent of rosewood shavings, the sound of hand tools, and the sight of artisans bent over their workbenches create an immersive experience rarely found in commercial shops.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Why Shop Here?</h3>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Direct from Artisan:</strong> No middlemen—purchase directly from the craftsmen who create each piece</li>
                          <li><strong>Authentic Quality:</strong> True rosewood and traditional techniques, not mass-produced imitations</li>
                          <li><strong>Competitive Pricing:</strong> Workshop-direct prices are significantly lower than retail stores for comparable quality</li>
                          <li><strong>Customization Available:</strong> Discuss custom designs or modifications directly with the artisan</li>
                          <li><strong>Cultural Experience:</strong> Learn about traditional craft techniques and Mysore's woodworking heritage</li>
                          <li><strong>Supporting Traditional Crafts:</strong> Your purchase directly supports artisan livelihoods and helps preserve endangered craft traditions</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Visiting Tips</h3>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg space-y-3">
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">📍 Location Access</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Located in the old city area near Mission Hospital Road and M.K. Street. Narrow lanes—best accessed by auto-rickshaw or on foot. Ask locals for "Geetha Fine Arts, Mandi Mohalla."</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">⏰ Best Time to Visit</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Weekday mornings (10 AM - 12 PM) when artisans are actively working and the workshop isn't crowded. Call ahead to confirm availability, especially for custom orders or extended visits.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">💰 Payment & Pricing</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Primarily cash-based. Prices negotiable for larger purchases or custom orders. Expect to pay ₹800-₹5,000+ for small boxes, ₹5,000-₹50,000+ for furniture pieces depending on size and intricacy.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">📦 Shipping & Transport</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Workshop can arrange secure packing for delicate items. For large furniture, they can recommend trusted transporters or courier services for domestic/international shipping.</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm mb-1">🗣️ Language</h4>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm">Kannada and Hindi spoken; basic English communication possible. Bringing a local friend or guide can facilitate deeper conversations about craft techniques.</p>
                          </div>
                        </div>

                        <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mt-4">
                          <p className="text-text-light dark:text-text-dark text-sm">
                            <strong>Authenticity Note:</strong> Sri Geetha Fine Arts is a genuine artisan workshop, not a tourist-oriented showroom. The focus is on craft quality and traditional methods. While the setting may be humble compared to polished emporiums, the authenticity and value are unmatched. This is where you find Mysore's true woodworking soul.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cultural' && (
                    <div className="p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">Mysore's Inlay & Marquetry Heritage</h2>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Rosewood inlay work is one of Mysore's most distinguished traditional crafts, with roots stretching back to the era of the Wodeyar dynasty. When the Mysore Palace was built and rebuilt (the current structure dating to 1912), the royal patronage of wood craftsmanship reached its zenith. The palace's magnificent rosewood doors, carved pillars, and inlaid furniture showcased what Mysorean artisans could achieve.
                        </p>
                        
                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Historical Royal Patronage</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The Wodeyar rulers were great patrons of arts and crafts. They established workshops within the palace complex and in the old city quarters, where master craftsmen created furniture, decorative panels, and art pieces for the royal family and visiting dignitaries. These workshops became training grounds where knowledge was passed from master to apprentice over decades.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Inlay work—known as "sadeli" in some traditions or simply "wood inlay" locally—involves embedding contrasting materials into a wooden base to create decorative patterns. In Mysore, rosewood became the preferred base due to its rich color, fine grain, and durability. Lighter woods, ivory (and later ivory substitutes), bone, and sometimes semi-precious materials were used for the inlay itself.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Marquetry vs. Inlay: The Mysore Technique</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          While "inlay" broadly refers to setting materials into carved grooves, "marquetry" involves creating pictures or patterns from thin veneers of different-colored woods that are then applied to a surface. Mysore artisans practice both techniques, often combining them in a single piece.
                        </p>
                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 space-y-2">
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Traditional Inlay:</strong> Grooves carved into solid rosewood, then filled with contrasting wood or material pieces—creates a durable, seamless surface.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Marquetry Veneer:</strong> Thin pieces of different woods arranged like a mosaic puzzle to form images, then glued onto a base—allows for more pictorial complexity and color variation.
                          </p>
                          <p className="text-text-light/80 dark:text-text-dark/80 text-sm">
                            <strong>Combined Technique:</strong> Mysore artisans often combine both: a rosewood base with carved inlay grooves for structural patterns, topped with marquetry veneers for detailed imagery.
                          </p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Traditional Design Motifs</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Mysore inlay work features distinctive design elements drawn from local architectural and cultural sources:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Mysore Palace Motifs:</strong> Arches, jali (lattice) patterns, and architectural elements inspired by the palace's Indo-Saracenic style</li>
                          <li><strong>Floral Compositions:</strong> Lotus flowers, jasmine garlands, and local flora rendered in stylized or naturalistic forms</li>
                          <li><strong>Geometric Patterns:</strong> Intricate tessellations, star patterns, and Islamic-influenced geometric designs reflecting the region's syncretic culture</li>
                          <li><strong>Wildlife & Nature:</strong> Elephants (the Mysore Dasara symbol), peacocks, and tropical foliage</li>
                          <li><strong>Religious Iconography:</strong> Hindu temple motifs, depictions of deities (on commission), and auspicious symbols like Om or Swastika</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Artisan Lineage</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Many Mysore inlay workshops, including Sri Geetha Fine Arts, are family-run businesses where skills pass from father to son, uncle to nephew. The training is lengthy—apprentices begin by learning wood selection and basic carpentry, then progress to simple carving, and only after years do they attempt complex inlay work.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          This generational transfer ensures not just technical skill, but also the aesthetic sensibility and cultural knowledge that makes Mysore inlay distinctive. An experienced artisan can identify wood types by sight and touch, knows which adhesives work best for specific applications, and has internalized design proportions developed over centuries.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Challenges in the Modern Era</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Traditional inlay workshops face significant challenges today:
                        </p>
                        <ul className="list-disc list-inside text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed space-y-2">
                          <li><strong>Economic Pressure:</strong> Mass-produced furniture and cheap imitations undercut artisan prices; many customers don't understand the value of hand-crafted work</li>
                          <li><strong>Youth Migration:</strong> Younger generations often pursue education and careers in IT, engineering, or other fields instead of learning family crafts</li>
                          <li><strong>Material Costs:</strong> High-quality rosewood is increasingly expensive due to forestry regulations and scarcity; artisans must balance quality with affordability</li>
                          <li><strong>Market Access:</strong> Small workshops lack marketing resources; tourists often gravitate toward larger emporiums with air-conditioning and credit card facilities</li>
                          <li><strong>Skill Preservation:</strong> As master craftsmen age, there's a risk that certain advanced techniques could be lost if not adequately documented and taught</li>
                        </ul>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">The Cultural Significance</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Beyond economics, inlay work carries deep cultural meaning. These pieces embody Mysore's artistic heritage and the Wodeyar dynasty's legacy of supporting crafts. Each inlaid box or furniture piece is a tangible link to centuries of tradition—when you purchase from a workshop like Sri Geetha Fine Arts, you're not just buying an object, you're participating in the preservation of cultural heritage.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          The patience, precision, and dedication required for inlay work also reflect broader Indian philosophical values—the importance of dharma (duty/craftsmanship), the pursuit of excellence, and the idea that work itself can be a form of meditation and spiritual practice when performed with full attention and devotion.
                        </p>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Supporting the Tradition</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Buying from traditional workshops has a ripple effect. It provides artisans with sustainable income, which in turn makes craft practice economically viable for the next generation. It validates the artisan's skill and cultural contribution. And it helps preserve techniques that might otherwise disappear in the face of mechanization and globalization.
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6">
                          <p className="text-text-light dark:text-text-dark text-sm italic">
                            "Every piece we create carries the soul of Mysore's royal past. My grandfather worked on furniture for the Maharaja's palace. Today, we create the same quality for anyone who appreciates true craftsmanship. This is not just business—this is our family's dharma, our contribution to keeping Mysore's artistic legacy alive."
                          </p>
                          <p className="text-text-light/70 dark:text-text-dark/70 text-xs mt-2">— Artisan testimony from Mysore inlay workshop (representative voice)</p>
                        </div>

                        <h3 className="text-text-light dark:text-text-dark text-xl font-bold mt-4">Recognition & Preservation Efforts</h3>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          In recent years, there has been growing awareness of the need to preserve traditional crafts. Organizations like the Karnataka State Handicrafts Development Corporation and various NGOs have initiated programs to support artisan communities. Government schemes provide financial assistance, training workshops aim to modernize business practices without compromising craft quality, and cultural tourism initiatives increasingly highlight authentic artisan experiences.
                        </p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-base leading-relaxed">
                          Shops like Sri Geetha Fine Arts represent the living heart of this tradition—small, unpretentious, deeply skilled. They may not have the polish of commercial galleries, but they possess something far more valuable: the authentic continuation of a centuries-old craft practiced with integrity, skill, and cultural pride.
                        </p>
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Ramesh Kumar</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">3 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Discovered this gem while exploring old Mysore! The artisan showed me how he creates the inlay patterns—absolutely mesmerizing to watch. I bought a rosewood jewelry box with intricate floral inlay for my wife's birthday. The craftsmanship is outstanding, and the price was very reasonable compared to the fancy shops near the palace. Highly recommend visiting this authentic workshop. You're getting museum-quality work at workshop prices. The only challenge is finding it in the narrow lanes—ask auto drivers for Mandi Mohalla area.
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Sarah Thompson</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">1 month ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4.5)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Such an authentic experience! Unlike polished tourist shops, this is a real working workshop. The smell of wood, the sound of hand tools—it felt like stepping back in time. I commissioned a custom decorative panel with a Mysore Palace-inspired design. The artisan sketched several options and we finalized one together. It took two weeks to complete, but the result exceeded my expectations. Beautiful craftsmanship, genuine rosewood, and fair pricing. They arranged secure packing for international shipping. Only drawback: cash only and very basic English, but we managed to communicate through gestures and drawings!
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
                              <h3 className="font-bold text-text-light dark:text-text-dark">Divya Nair</h3>
                              <span className="text-sm text-text-light/60 dark:text-text-dark/60">2 weeks ago</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(4)}
                            </div>
                            <p className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                              Good workshop with quality products. Bought two small inlay boxes as gifts—the workmanship is excellent and they're genuine rosewood. Prices were negotiable; I got a reasonable discount for buying multiple pieces. The workshop is quite small and basic, not like a fancy showroom, but that's part of its charm. Parking can be difficult in the old city area—I recommend taking an auto. Do call before visiting to make sure they're open, especially on weekends. The artisan was patient and showed me different pieces. Overall, a worthwhile visit for authentic Mysore handicrafts.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Submit Review Form */}
                      <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark/50 flex flex-col gap-4 mt-8">
                        <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Leave a Review</h3>
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
                          <textarea className="form-textarea w-full min-h-24 resize-y rounded-lg text-text-light bg-border-light/20 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light/40 placeholder:text-text-light/50 dark:bg-border-dark/10 dark:text-text-dark dark:placeholder:text-text-dark/60 dark:border-border-dark/50" placeholder="Share your experience with this workshop..."></textarea>
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
                          <p className="font-medium text-text-light dark:text-text-dark">Craft Specialty</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Rosewood Inlay & Marquetry</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">groups</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Workshop Type</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Family-Run Artisan Studio</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">history</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Established</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Several Decades Ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">workspace_premium</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Custom Orders</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Available • Discuss On-Site</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">payments</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">Payment Methods</p>
                          <p className="text-text-light/70 dark:text-text-dark/70">Cash Preferred</p>
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
                        <span className="font-semibold text-sm">Share Workshop</span>
                      </button>
                      <button 
                        onClick={handleComingSoon}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700/50 transition-all duration-200 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-lg">bookmark</span>
                        <span className="font-semibold text-sm">Save for Later</span>
                      </button>
                    </div>
                  </div>

                  {/* Visit Notice */}
                  <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-amber-700 dark:text-amber-400 mt-0.5">info</span>
                      <div>
                        <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">Before You Visit</h4>
                        <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                          <li>• Call ahead to confirm hours</li>
                          <li>• Bring cash for purchases</li>
                          <li>• Located in narrow lanes—use auto</li>
                          <li>• Allow time to watch artisans work</li>
                          <li>• Bargaining is acceptable</li>
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

