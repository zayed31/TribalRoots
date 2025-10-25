import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative w-full">
            <div 
              className="flex min-h-[400px] flex-col gap-6 items-center justify-center p-8 md:p-16 bg-gradient-to-br from-primary/90 to-orange-700/90 text-white"
            >
              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-center">About Tribal Treasures</h1>
              <p className="text-xl md:text-2xl font-normal leading-normal text-center max-w-3xl">
                Bridging the gap between travelers and India's rich tribal heritage through authentic cultural experiences.
              </p>
            </div>
          </div>

          {/* Our Story Section */}
          <section className="px-4 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-text-light dark:text-text-dark">Our Story</h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                    Tribal Treasures was born from a simple yet powerful realization: India's tribal communities possess invaluable cultural heritage, traditional crafts, and timeless wisdom that deserve global recognition and appreciation.
                  </p>
                  <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                    In 2024, a group of passionate travelers, cultural enthusiasts, and technology innovators came together with a shared vision – to create a platform that connects conscious travelers with authentic tribal artisans, preserving traditional crafts while empowering local communities.
                  </p>
                  <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                    What started as a small directory of tribal shops has grown into a thriving ecosystem of cultural exchange, where every purchase tells a story, every visit creates a connection, and every review helps preserve a tradition.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&auto=format&fit=crop"
                  alt="Indian tribal artisan at work"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="bg-subtle-light dark:bg-subtle-dark py-16">
            <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Mission */}
                <div className="bg-background-light dark:bg-background-dark rounded-xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary text-4xl">flag</span>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark">Our Mission</h3>
                  </div>
                  <p className="text-text-light/80 dark:text-text-dark/80 text-lg leading-relaxed">
                    To empower tribal communities across India by providing a digital platform that showcases their authentic crafts, preserves their cultural heritage, and creates sustainable economic opportunities through ethical tourism and direct trade.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-background-light dark:bg-background-dark rounded-xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary text-4xl">visibility</span>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark">Our Vision</h3>
                  </div>
                  <p className="text-text-light/80 dark:text-text-dark/80 text-lg leading-relaxed">
                    To become India's most trusted platform for tribal cultural experiences, where every artisan has a voice, every traveler finds authentic connections, and traditional crafts thrive in the modern world for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="px-4 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-text-light dark:text-text-dark mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-full">
                  <span className="material-symbols-outlined text-primary text-5xl">store</span>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Discover Authentic Shops</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Explore a curated collection of tribal shops offering genuine handcrafted products, from textiles to pottery, directly from artisan communities.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-full">
                  <span className="material-symbols-outlined text-primary text-5xl">map</span>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Cultural Routes</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Plan immersive cultural journeys through tribal regions with expertly crafted routes that showcase the best of local heritage and traditions.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-full">
                  <span className="material-symbols-outlined text-primary text-5xl">groups</span>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Community Ambassadors</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Connect with local cultural ambassadors who share their stories, traditions, and expertise to create meaningful connections.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-full">
                  <span className="material-symbols-outlined text-primary text-5xl">add_circle</span>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Contribute & Earn</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Help grow our community by submitting shops, writing reviews, and sharing experiences. Earn credits and unlock exclusive benefits.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-full">
                  <span className="material-symbols-outlined text-primary text-5xl">book</span>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Cultural Stories</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Read fascinating stories about tribal traditions, craft techniques, and the artisans behind every masterpiece.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-full">
                  <span className="material-symbols-outlined text-primary text-5xl">verified</span>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Verified Authenticity</h3>
                <p className="text-text-light/70 dark:text-text-dark/70">
                  Every shop is carefully verified to ensure you're getting genuine tribal crafts and authentic cultural experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="bg-gradient-to-br from-primary/5 to-orange-50/50 dark:from-primary/10 dark:to-orange-950/20 py-16">
            <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-text-light dark:text-text-dark mb-12">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">handshake</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Authenticity</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
                    We champion genuine tribal crafts and cultural experiences, free from imitation or exploitation.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">favorite</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Respect</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
                    We honor tribal traditions, cultural practices, and the dignity of artisan communities.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">public</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Sustainability</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
                    We promote ethical tourism and fair trade practices that ensure long-term community prosperity.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">school</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Education</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
                    We educate travelers about tribal cultures, fostering appreciation and responsible engagement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="px-4 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-text-light dark:text-text-dark mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="text-5xl font-black text-primary">500+</div>
                <div className="text-text-light/70 dark:text-text-dark/70 font-medium">Tribal Shops Listed</div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="text-5xl font-black text-primary">50+</div>
                <div className="text-text-light/70 dark:text-text-dark/70 font-medium">Communities Empowered</div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="text-5xl font-black text-primary">10K+</div>
                <div className="text-text-light/70 dark:text-text-dark/70 font-medium">Cultural Travelers</div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="text-5xl font-black text-primary">25+</div>
                <div className="text-text-light/70 dark:text-text-dark/70 font-medium">States Covered</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-primary to-orange-600 py-16">
            <div className="px-4 md:px-10 lg:px-20 max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Join Our Journey</h2>
              <p className="text-xl text-white/90">
                Be part of a movement that celebrates India's tribal heritage while empowering communities and preserving traditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <a href="/shops">
                  <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors">
                    Explore Shops
                  </button>
                </a>
                <a href="/submit-shop">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white/10 transition-colors">
                    Contribute Now
                  </button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

