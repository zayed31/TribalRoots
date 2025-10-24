import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-subtle-light dark:border-subtle-dark px-4 md:px-10 py-3">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-4 text-text-light dark:text-text-dark">
              <div className="size-6 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_319)">
                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Tribal Treasures</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-9">
              <Link className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" to="/">Home</Link>
              <Link className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" to="/shops">Shops</Link>
              <Link className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" to="/ambassadors">Ambassadors</Link>
              <Link className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" to="/travel-routes">Cultural Routes</Link>
              <Link className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" to="#">About Us</Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 md:gap-8">
            <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-accent-light dark:text-accent-dark flex border-none bg-subtle-light dark:bg-subtle-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-subtle-light dark:bg-subtle-dark focus:border-none h-full placeholder:text-accent-light dark:placeholder:text-accent-dark px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" 
                  placeholder="Search" 
                />
              </div>
            </label>
            <Link to="/submit-shop">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Contribute</span>
              </button>
            </Link>
            <Link to="/profile">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:ring-2 hover:ring-primary transition-all" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3VmaP6ggMTRl-snzLLFyWllVw3Qk8et5WsHPGSMJthWzhCJ_8XjH4cBwU7UY0Oe7wx9jUFEHjWpbyFYQ9YmN7EFH6Qdc6DfSdWBcrWNGcXdR6KYlUus5w3n4U_1N_9zYm2Jw6jVFQuHOA4Ov9kY0Lz5GqHAzWpeU17ByRRH5spjIWfE9BBzur0D40N8sgCEC8BZDq6sjAblbP4TRzA5EMfzQRQ63u_sDK7ICJTBGdFaFZKV6BSe81WfTMeBu-GFnlF4aYitVKEQ")'}}
              ></div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
