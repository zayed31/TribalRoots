import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function TravelRoute() {
  // Mock data for points of interest
  const pointsOfInterest = [
    {
      id: 1,
      name: "Warli Painting Workshop",
      description: "Learn the traditional art of Warli painting from local artisans.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB278ErEHc36uCDMhHxrwtSDBqteYsxrIfbouj5gD0x9b_GuxWCcn4yud6p9UmH1W5tGqeALNz4I94mnaavtamYtjx15GhHy8fGwlypJKyMgFIyde24RtJcbkpLmKaizP3EuWQAOiIuoMUQrMxluiEdvxKv7DYKWbSAO1EF7DQICAy93UZZqgWL6ReNbvIGlm_AHsxVLJ-IirUs0lygvn4MsXVh22J49IqvR-EokFi-G0O67RFmbK1qOJaYqBkVHs7hxsYWRaNeUQ"
    },
    {
      id: 2,
      name: "Dhokra Craft Souvenirs",
      description: "Shop for unique metal crafts made using the lost-wax casting technique.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtpbuaSbN5YAG-BUILVROBq8AoB14yxmhBBKn5NmjaDfJ_8hJFBEnF0w-4j7yXOKfK2TE465qg4BVLSfFcvso2uwKDIOchg0p1MxYT6vxBMZ4t3bQVM4O9OISqhb2RImAJX-2tqBFeYB8oW2Il64iv8F0Jr3c-pefpSOB9JPDyVS8ROXUvOro-iDrRLVTmFSrZIlNi3xwbL6p9CbQHgQl8EaQnAhj_-0QqXc4_PN8mD6RBwaYDeWR8ngDkf3GGLp2EXh6gplXMJg"
    },
    {
      id: 3,
      name: "Bastar Tribal Food Stall",
      description: "Savor authentic and delicious tribal cuisine from the Bastar region.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt0q7uZA2FRi9WgVecCWyBhAacqragg1o6z83w0xKYiVItDGN1FtrsQub65Pa5XBLzXZNsMjlQg8FZdVckMCyCOESoO_USwX56FMP9sauYy4Nn3tjSnHlltUUsm0AHK88dAqSTaQU4k_-SYOLFMbSDpBQpeNXiIBGEAwsCDLxM7R-ZDsI48vfeXk1TQxfGaIPsGlR409zqkZuLPHMZ3GT3gVKi0Ak_ifLa5G3atJRenD-LoJWOPLhSVJMdpHa-he9HLbekChvtOg"
    }
  ];

  const categories = [
    { name: "Handicrafts", icon: "palette", active: true },
    { name: "Local Cuisine", icon: "restaurant", active: false },
    { name: "Historical Sites", icon: "account_balance", active: false }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              {/* Title Section */}
              <div className="flex flex-col gap-3">
                <p className="text-4xl font-black leading-tight tracking-[-0.033em]">Plan Your Cultural Journey</p>
                <p className="text-base font-normal leading-normal text-muted-light dark:text-muted-dark">Discover the rich heritage of India's tribal communities</p>
              </div>

              {/* Route Input Form */}
              <div className="flex flex-col gap-4 p-6 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex flex-col flex-1">
                    <p className="text-base font-medium leading-normal pb-2">From</p>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">trip_origin</span>
                      <input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-muted-light dark:placeholder:text-muted-dark pl-10 pr-4 py-3 text-base font-normal leading-normal" 
                        placeholder="Enter starting point" 
                      />
                    </div>
                  </label>
                  <label className="flex flex-col flex-1">
                    <p className="text-base font-medium leading-normal pb-2">To</p>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">location_on</span>
                      <input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-muted-light dark:placeholder:text-muted-dark pl-10 pr-4 py-3 text-base font-normal leading-normal" 
                        placeholder="Enter destination" 
                      />
                    </div>
                  </label>
                </div>
                <button className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Get Directions</span>
                </button>
              </div>

              {/* Filter by Category */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Filter by Category</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category, idx) => (
                    <button 
                      key={idx}
                      className={`flex items-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-medium leading-normal tracking-[0.015em] transition-colors ${
                        category.active 
                          ? 'bg-primary/20 text-primary hover:bg-primary/30' 
                          : 'bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">{category.icon}</span>
                      <span className="truncate">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Points of Interest */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Points of Interest</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {pointsOfInterest.map((poi) => (
                    <div 
                      key={poi.id}
                      className="flex gap-4 p-4 border border-border-light dark:border-border-dark rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div 
                        className="w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-lg object-cover flex-shrink-0" 
                        style={{backgroundImage: `url("${poi.image}")`}}
                      ></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{poi.name}</h4>
                        <p className="text-sm text-muted-light dark:text-muted-dark mt-1 mb-2">{poi.description}</p>
                        <Link to={`/shops/${poi.id}`} className="text-primary font-bold text-sm hover:underline">
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div 
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover shadow-lg border border-border-light dark:border-border-dark" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArrYeP3pJqMifGs56y5vCcTnRewneOf6fQ3mV6JfNCWt7MSklhzsdht1XYqqlFZCBNRXi47Brn8Vc_0hQp1gBtfmF_IKopfl1I9ewVpj2ndZB_jUTpanh3WC7__B6Gzt7Rhnq_xjyBSa7JaeQQbxa_fYcSxuarb-f8ufxdgTrwk9BlCp8pwtuhEtHaeX1rQRcdqpXgUO6noaYN1gBgKRVxmh9mpfYX5318z3TYozTyNs34pbGuozYmIP3l3vNtob4me0JRHDhIDg")'}}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
