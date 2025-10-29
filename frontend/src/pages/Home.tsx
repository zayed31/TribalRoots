import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Toast from '../components/Toast';

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleComingSoon = () => {
    setShowToast(true);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <Navbar />
            
            <main className="flex-1">
              {/* Hero Section */}
              <div className="@container p-4">
                <div 
                  className="flex min-h-[520px] flex-col gap-8 items-center justify-center p-4 rounded-xl" 
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfUzNuk4RngWbFM5V9-fmHafIO3onKCq6O9EoOuz5OllUJPKrild4QNqD0wBziDoPi8jGHSF8UFlHMtWAUKQ9J6w8kz4nZA9_nW-xKUptLweJGb9cXTpL8Z4uO6CIV1q6qfutqhAR2-fFVAbwjMIUDKFZQm_HXINypSMhv9FN57HNLkpBozByXKHXCK7YtCzDOZ-RwArh7VW0TenIVQM3MWUBRt5qoLlja1hmjLBjbgNZ8NJqTQ9bhf9T_3ggkpO_20hxsF3cIOw")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="flex flex-col gap-4 text-center text-white">
                    <h1 className="text-5xl font-black leading-tight tracking-[-0.033em]">Discover India's Tribal Heart</h1>
                    <h2 className="text-base font-normal leading-normal">Find and promote authentic tribal shops and cultural sites across India.</h2>
                  </div>
                  <div className="flex w-full max-w-2xl items-center rounded-xl bg-background-light/90 dark:bg-background-dark/90 p-2 shadow-lg">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                      <div className="text-text-light dark:text-text-dark flex items-center justify-center pl-4">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input 
                        onClick={handleComingSoon}
                        onFocus={(e) => e.target.blur()}
                        readOnly
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-0 h-12 placeholder:text-text-light/70 dark:placeholder:text-text-dark/70 px-3 text-base cursor-pointer" 
                        placeholder="Search for a place to find nearby cultural spots" 
                      />
                      <button 
                        onClick={handleComingSoon}
                        className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-yellow-500 transition-colors"
                      >
                        <span className="truncate">Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Section */}
              <div className="px-4 py-8">
                <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5 text-center">Explore Mysuru's Cultural Heritage</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                  {/* Card 0 - Channapatna Toys Shop (featured) */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("/Images/BharatArtsAndCrafts.jpg")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Channapatna Toys Shop</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Traditional Channapatna wooden lacquer toys & factory tours</p>
                      </div>
                      <Link to="/shops/12" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                        <span className="truncate">View Shop</span>
                      </Link>
                    </div>
                  </div>
                  {/* Card 1 - Warli Art Studio */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCx1JdlVT-7DnwpWfm_mlwQu0UwaNEBeOO_Q-ZTsgYKdR8UNEuOetoEUju8VmltHcJUai6B2ohHCzRTu4Vc6fCRxqOTAlMpMp5PpViyGO7g74gO2Sy27w-Ql0pZJsNG3ZoJ22piTNm51qYMd9Skvn5213CE--Ti7qEZzQryrtOH39Z2Xv-9UDReF-ushhNXYXUIxOti2n-bSNbcvlireAG3gFPkS3l2LabeXUDyZYsO2MjOXjCsMlU2iwWlXsGzQt_xWDvwyNZP5A")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Warli Art Studio</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Traditional Warli tribal art</p>
                      </div>
                      <Link to="/shops/1" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                        <span className="truncate">View Shop</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 2 - Devaraja Market */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("/Images/DevarajaMarket.jpg")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Devaraja Market</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Historic bazaar with flowers & spices</p>
                      </div>
                      <Link to="/shops/2" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                        <span className="truncate">View Shop</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 3 - Sri Geetha Fine Arts */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("/Images/SriGeetaArts.jpg")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Sri Geetha Fine Arts</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Rosewood inlay workshop</p>
                      </div>
                      <Link to="/shops/3" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                        <span className="truncate">View Shop</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 4 - Ramsons Bombe Mane */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("/Images/RamsomBombeMane.jpg")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Ramsons Bombe Mane</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Traditional doll house & cultural exhibits</p>
                      </div>
                      <Link to="/shops/4" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                        <span className="truncate">View Shop</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 5 - Mysuru Miniatures */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("/Images/MysoreMiniatures.webp")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Mysuru Miniatures</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Museum-quality miniature models</p>
                      </div>
                      <Link to="/shops/5" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                        <span className="truncate">View Shop</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="@container py-10">
                <div className="flex flex-col justify-end gap-8 px-4 py-10 @[480px]:px-10 @[480px]:py-20 text-center">
                  <div className="flex flex-col gap-4 items-center">
                    <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] max-w-2xl">Become a Part of Our Community</h1>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal max-w-2xl">Help us grow our database of authentic tribal shops and cultural experiences.</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex flex-1 gap-4 max-w-md justify-center">
                      <Link to="/submit-shop" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] grow hover:bg-yellow-500">
                        <span className="truncate">Add a Shop</span>
                      </Link>
                      <Link to="/travel-routes" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary/20 text-primary text-base font-bold leading-normal tracking-[0.015em] grow hover:bg-primary/30">
                        <span className="truncate">Explore Cultural Routes</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <Footer />
          </div>
        </div>
      </div>
      
      {showToast && (
        <Toast 
          message="Search feature will be added soon!" 
          onClose={() => setShowToast(false)} 
        />
      )}
    </div>
  );
}

