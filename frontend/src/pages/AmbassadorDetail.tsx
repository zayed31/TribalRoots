import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function AmbassadorDetail() {
  // Mock data for ambassador
  const ambassador = {
    name: "Ananya Sharma",
    title: "Verified Cultural Ambassador",
    region: "Rajasthan, India",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwB0d_GV9em_IwKAWoFT6oe0BUiF2H5pfvxHFhad90LLkPcgEqLPP_x2e0nPs6CfBYrVFD-mnA-JeBGIHxLYsO0vhNlOcnBCvxeLfwpDOwXQzmRbDasZL9BRNCn5oBHx71Y6kBLkNZBkKGw9-P1gduyrTWqbxGSCKduS7EYibty1DcM_0sKFuwJmA7quVQsVxuK6zfWTmn1Phm9ZYGs4IB8WXamLvhMo8GQGOhKkmX3sgg3L7_CHvu3vebMRkrvqkrhfRm7Ps7DA",
    about: "Ananya is a passionate advocate for preserving and promoting the rich cultural heritage of Rajasthan's tribal communities. With a deep understanding of local crafts and traditions, she has dedicated herself to connecting artisans with a global audience.",
    stats: {
      shopsVerified: 42,
      reviewsWritten: 112,
      culturalSitesMapped: 8
    },
    specialties: ["Textiles", "Pottery", "Tribal Cuisine", "Jewelry", "Folk Music"]
  };

  const verifiedShops = [
    {
      id: 1,
      name: "Jaipur Blue Pottery Art Centre",
      location: "Jaipur, Rajasthan",
      description: "Authentic, high-quality blue pottery. The artisans are incredibly talented and welcoming. A must-visit for any craft lover.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFY7IjLRwnl_ogusfcZYA1T3fSNWHoMot4WhN4Q_WLsv9X6H9Xsl1a30Gi0226wYa7-hau_dhaOrGGZAgo2j9CDSY3zSf8BXH9Xvru3h5QZ1xd5I25BP6s7SHqa8G89s2GWP-jOZ3fLHHr2hKiRim3Vjr8P1yZqPCBFrs7njrqdK6N9Ys2iDwc0iM-YEnwDJElDVEJ8XrraLUnRYG7vBEsZF1IYbBuuCjaVc-Iy6vmpW_W2b4QMT2xWW7rIz8xGJHDwgq4VLJpjw"
    },
    {
      id: 2,
      name: "Sadhna - A Women's Handicraft Enterprise",
      location: "Udaipur, Rajasthan",
      description: "Empowering local women through beautiful applique and patchwork textiles. The quality and storytelling behind each piece is remarkable.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2jJF_z-PTGv9XB7Il2RsgMrcEY9G_EkWGqY15VlSiJ90NIUpn6QihhMKTvDniPn7qnOACPF3jnsZvna1VYiNy9qOMvoJCUft5VaUE-8aKi9DQKlY2nLtmF35yxJVSUPXIDoo1Cawuvj5ysZUOgdAw2rYbQardsGTQHfWwyn5SddPlsw7DKhbrJy5TtjeLT2j-cu5rVrZu3Gc1Gy_TmlxBUc62vhPVY95BUZIIps485SQPNw32XsIs4GXpTIH3z12VcGTCRC4Wg"
    },
    {
      id: 3,
      name: "Bishnoi Village Art",
      location: "Jodhpur, Rajasthan",
      description: "A cooperative preserving the traditional crafts of the Bishnoi community. Their durries and block printing are exceptional.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2AgtTGDlEBPwy46B3sbwWdrHecRtcLb782_Ur-CDQh1PZJgOGNGG5D6VLSOMo0CETt4t7sZxDTMMU03KJ6xaP5Ufxht9oqf9pxZncgaDk5AA8wDGUJt_fPDFhx_HUGy05to5VPJEyJaoTxA0nNzCugYnIwstKh9ofrghSnPrUXaf_gIF7KBG7sZbjUR4k5iGfxJw1Dgc6kJCr-EWEC1b5A9_c5h3LZuyp3fjWbcZnnUaBbbLna7CwDn0VQgxBBBrO8TrebMBnqw"
    },
    {
      id: 4,
      name: "Molela Terracotta Crafts",
      location: "Molela, Rajasthan",
      description: "Home to the unique votive terracotta plaques. Speaking with the artisans revealed generations of history and skill.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP8ptciwYWwuDpRVoRwl9JZtet3PnKijZ5R1fGQnfN2gVP9Hls2koK4yFJcgz4WgQ4LWpzLe2Wjd9750e-di06MgRIGcXyCc4eDZfictEBWnOtbq92sQjLVPt7HeH7Y9GN-Y0bT0joet3msBhiqnWqJX3qUITIp898RqnJUidv-kbLCeFe-z90VNcTPmC5NR6TqUrbuJkAGVReIRu6HkHgthVUv9FGkzWwR3HA4FKDZIyvHXmDWKfcJc9HRHyjIlUo7-zNZBkqIg"
    }
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-10 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Profile Card */}
              <div className="p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 mb-4 ring-4 ring-primary/20"
                      style={{ backgroundImage: `url("${ambassador.avatar}")` }}
                    ></div>
                    <div className="absolute bottom-2 -right-1 bg-primary text-white p-2 rounded-full">
                      <span className="material-symbols-outlined text-2xl">verified</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">{ambassador.name}</h1>
                  <p className="text-sm font-medium text-primary">{ambassador.title}</p>
                  <p className="text-muted-light dark:text-muted-dark text-sm mt-1">{ambassador.region}</p>
                  <div className="flex w-full gap-3 mt-6">
                    <button className="flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-border-light dark:hover:bg-border-dark transition-colors">
                      <span className="truncate">Follow</span>
                    </button>
                    <button className="flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                      <span className="truncate">Contact</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-3">About {ambassador.name.split(' ')[0]}</h3>
                <p className="text-text-light dark:text-text-dark/90 text-base font-normal leading-relaxed">
                  {ambassador.about}
                </p>
              </div>

              {/* Statistics */}
              <div className="p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Statistics</h3>
                <div className="space-y-3">
                  <div className="flex flex-col gap-1 rounded-lg p-4 bg-background-light dark:bg-background-dark">
                    <p className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal">Shops Verified</p>
                    <p className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight">{ambassador.stats.shopsVerified}</p>
                  </div>
                  <div className="flex flex-col gap-1 rounded-lg p-4 bg-background-light dark:bg-background-dark">
                    <p className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal">Reviews Written</p>
                    <p className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight">{ambassador.stats.reviewsWritten}</p>
                  </div>
                  <div className="flex flex-col gap-1 rounded-lg p-4 bg-background-light dark:bg-background-dark">
                    <p className="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal">Cultural Sites Mapped</p>
                    <p className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight">{ambassador.stats.culturalSitesMapped}</p>
                  </div>
                </div>
              </div>

              {/* Specialized Knowledge */}
              <div className="p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Specialized Knowledge</h3>
                <div className="flex gap-2 flex-wrap">
                  {ambassador.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-4">
                      <p className="text-primary text-sm font-medium leading-normal">{specialty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="lg:col-span-2">
              <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark">
                {/* Tabs */}
                <div className="border-b border-border-light dark:border-border-dark">
                  <nav aria-label="Tabs" className="flex space-x-1 p-2">
                    <a className="bg-background-light dark:bg-background-dark text-primary px-4 py-2 text-sm font-bold rounded-md" href="#">
                      Verified Shops
                    </a>
                    <a className="text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark px-4 py-2 text-sm font-medium rounded-md" href="#">
                      Reviews
                    </a>
                    <a className="text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark px-4 py-2 text-sm font-medium rounded-md" href="#">
                      Cultural Routes
                    </a>
                  </nav>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 @container md:grid-cols-2 gap-6">
                    {verifiedShops.map((shop) => (
                      <Link
                        key={shop.id}
                        to={`/shops/${shop.id}`}
                        className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden border border-border-light dark:border-border-dark group transition-all hover:shadow-lg hover:-translate-y-1"
                      >
                        <div
                          className="bg-center bg-no-repeat aspect-video bg-cover"
                          style={{ backgroundImage: `url("${shop.image}")` }}
                        ></div>
                        <div className="p-4 flex-1 flex flex-col">
                          <h4 className="text-lg font-bold text-text-light dark:text-text-dark">{shop.name}</h4>
                          <p className="text-sm text-muted-light dark:text-muted-dark flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-base">location_on</span>
                            {shop.location}
                          </p>
                          <p className="text-text-light dark:text-text-dark/90 text-sm mt-3 leading-relaxed flex-1">
                            "{shop.description}"
                          </p>
                          <span className="text-primary font-bold text-sm mt-4 self-start flex items-center gap-1 group-hover:underline">
                            View Shop <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-border-light dark:hover:bg-border-dark transition-colors">
                      <span className="truncate">Load More</span>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

