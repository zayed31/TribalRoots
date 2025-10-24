import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
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
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-0 h-12 placeholder:text-text-light/70 dark:placeholder:text-text-dark/70 px-3 text-base" 
                        placeholder="Search for a place to find nearby cultural spots" 
                      />
                      <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-yellow-500">
                        <span className="truncate">Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Section */}
              <div className="px-4 py-8">
                <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5 text-center">Featured Tribal Treasures</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                  {/* Card 1 */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCa0OYD4KcLRBBuwCaMAKI8ROAojBH_29r7Tzhdb8PGq2dwuEEw3jWnE81jcLMPedEQMfaMEF6vqcmP7ORpSQ_83XM0ihYR06vkz4JmK3DJxAcLYDejfap_8IAY8byX0eXFDdnsxFK3q7V6ujyJvy1huJeHda3iBEBHfKU9C4BCwwlnoruiZxgScvsBaoQOLnWe3M2lNNvHUmTcpQcqlPjkIs7e0ws7axIzx577rV0yH5kfmwkxpkwaOiyI9N693-stcYLLpkXfVg")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Gujarat Textiles</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Hand-woven textiles and fabrics.</p>
                      </div>
                      <Link to="/shops/1" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                        <span className="truncate">View Shop</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX_Y_M9Dp-hvBihpalh-GNNnN9pM11ZbIrrwsOw8dUT51k1q60HgzmYemdYO1kyOe2CvSKNUJGDq0iaYuQ13FPwuB8w7k8RJyGVRJ8XLB63uiXSh523pe3HpxgpQncghiDBCHhMSc0j0U7DulrxIvhj7JfaF36Jg615kTl-TFmgJNq-j6vEVq5LqBjoVV9h4wV6FeP7kTRId2fDQC6Adx_FGmfRV1HpHj3Kg96fQ3yNnSRx-cDSUDZBGpIIbluHns0WysUh744jA")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Rajasthan Pottery</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Beautifully crafted traditional pottery.</p>
                      </div>
                      <Link to="/shops/1" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                        <span className="truncate">View Shop</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
                      style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGCvK_NQQjq10RbQkAWBFzL0NA8xaBxkoM9aLgTgbEHK05xw2aaAaNBMossllIL2_MGVugXUoOB2Mxoy5J9zggvkgPrg2lSx4a4wtunIYEeogV0KGJ7U9ssRDSP2TxoAMY9720SRE9FguEFqB06UJmdT6t5yvJH3acACf34DSuk6VP_yMsF0xHMfjkXulDsdK0ARUyPIPAnqvZGVby4ajJTmG1cZfseU62JQM8n3LGCBbaGR6QMiuVgcb52Y_u34a6Q7KHLEa3kw")'}}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">Kerala Spices</p>
                        <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">Aromatic and authentic spices.</p>
                      </div>
                      <Link to="/shops/1" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
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
    </div>
  );
}

