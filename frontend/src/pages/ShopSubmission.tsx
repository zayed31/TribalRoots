import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function ShopSubmission() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="layout-content-container flex flex-col max-w-7xl mx-auto gap-12">
              {/* Back Button */}
              <div>
                <BackButton />
              </div>

              {/* Header */}
              <div className="flex flex-col gap-3 text-center">
                <h1 className="text-text-light dark:text-text-dark text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Share a Local Treasure: Add a Tribal Shop
                </h1>
                <p className="text-subtle dark:text-subtle-dark text-lg font-normal leading-normal">
                  Help us preserve and promote local culture by sharing information about tribal shops.
                </p>
              </div>

              {/* Form and Sidebar Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Form Section */}
                <div className="lg:col-span-2 space-y-8">
                  <form className="space-y-8">
                    {/* Shop Details */}
                    <div>
                      <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Shop Details</h3>
                      <div className="space-y-6">
                        <label className="flex flex-col">
                          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Shop Name</p>
                          <input 
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent dark:border-accent-dark bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-subtle dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal" 
                            placeholder="Enter the name of the shop" 
                          />
                        </label>
                        <label className="flex flex-col">
                          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Type of Goods Sold</p>
                          <select className="form-select flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent dark:border-accent-dark bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-subtle dark:placeholder:text-subtle-dark px-[15px] text-base font-normal leading-normal">
                            <option>Select a category</option>
                            <option>Handicrafts</option>
                            <option>Textiles</option>
                            <option>Food</option>
                            <option>Art</option>
                            <option>Other</option>
                          </select>
                        </label>
                      </div>
                    </div>

                    {/* Location & Contact */}
                    <div>
                      <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Location &amp; Contact</h3>
                      <div className="space-y-6">
                        <label className="flex flex-col">
                          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Shop Address</p>
                          <textarea 
                            className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent dark:border-accent-dark bg-background-light dark:bg-background-dark focus:border-primary min-h-36 placeholder:text-subtle dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal" 
                            placeholder="Enter the full address of the shop"
                          ></textarea>
                        </label>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <label className="flex flex-col">
                            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Contact Person (Optional)</p>
                            <input 
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent dark:border-accent-dark bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-subtle dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal" 
                              placeholder="" 
                            />
                          </label>
                          <label className="flex flex-col">
                            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Phone Number</p>
                            <input 
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent dark:border-accent-dark bg-background-light dark:bg-background-dark focus:border-primary h-14 placeholder:text-subtle dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal" 
                              placeholder="Enter a valid phone number" 
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* About the Shop */}
                    <div>
                      <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">About the Shop</h3>
                      <div className="space-y-6">
                        <label className="flex flex-col">
                          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Brief Description</p>
                          <textarea 
                            className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent dark:border-accent-dark bg-background-light dark:bg-background-dark focus:border-primary min-h-36 placeholder:text-subtle dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal" 
                            placeholder="e.g., Specializes in handmade Warli paintings and Dokra metal crafts."
                          ></textarea>
                        </label>
                        <label className="flex flex-col">
                          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Cultural Significance</p>
                          <textarea 
                            className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-accent dark:border-accent-dark bg-background-light dark:bg-background-dark focus:border-primary min-h-36 placeholder:text-subtle dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal" 
                            placeholder="Describe why this shop is culturally important to the local community."
                          ></textarea>
                        </label>
                      </div>
                    </div>

                    {/* Upload Photos */}
                    <div>
                      <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Upload Photos</h3>
                      <div className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-lg border-accent dark:border-accent-dark bg-accent/20 dark:bg-accent-dark/20 text-center cursor-pointer hover:bg-accent/30 dark:hover:bg-accent-dark/30 transition-colors">
                        <span className="material-symbols-outlined text-5xl text-subtle dark:text-subtle-dark">cloud_upload</span>
                        <p className="mt-2 text-sm text-subtle dark:text-subtle-dark">
                          <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-subtle dark:text-subtle-dark">PNG, JPG, GIF up to 10MB</p>
                        <input className="hidden" multiple type="file" />
                      </div>
                      
                      {/* Image Previews */}
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <div className="relative group">
                          <img 
                            className="rounded-lg object-cover w-full h-24" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmnYtlZZ7UY0L_TROTey-AXWJAb4xlWxZjBGbcCJJbW5fMj8G9xc4kj36u3SNOz64RmvG5e9wcbFyL0gqCf9aRDcyQbWqzlB2IPThM9e9JNyHnw7AyeWYL7qIcU3oU9mSSZL-zVG3ofiocGFThJmKX7HJY4GOtmnp-N5hWS6zkc_j09H06o4Pxn8F8AgGzHmmSJaHJlOYRhT3uusIoA_ktc_ewW9sqLt0Wq7KVQCY5V7mgOvTR_6nS9sPirjnPwv8cRPHhvT7N8w" 
                            alt="Handcrafted tribal jewelry"
                          />
                          <button className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-base">close</span>
                          </button>
                        </div>
                        <div className="relative group">
                          <img 
                            className="rounded-lg object-cover w-full h-24" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnG_uLRZskb2dpGwaNSKEGhHWwizOhArE1z3D-MhL-75S6c_f1OD96bX_JgIAGKVW5ysQOTtu77xirZn5eri4kYJaeO9FFe0GvVXo_Pbt5TztA_BuUjmnYHbipShJrBW84C4u_uAQtVEcIUfwgLtnCPnWs8BgUlm15eFRfcEBXCxwp4p56aUw63z1IrzTZj34EIhxVp8QL0aY9eOulBHeDXv-BusNCe8fjMcMZjkEtb7OKDAvpHiY1YrpatJQD3RW0UO4WbhfW_w" 
                            alt="Woven textiles"
                          />
                          <button className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-base">close</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex items-center justify-end gap-4 pt-6 border-t border-accent dark:border-accent-dark">
                      <button 
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent dark:bg-accent-dark text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-accent/80 dark:hover:bg-accent-dark/80 transition-colors" 
                        type="button"
                      >
                        <span className="truncate">Cancel</span>
                      </button>
                      <button 
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" 
                        type="submit"
                      >
                        <span className="truncate">Submit for Review</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Sidebar - Credit System Info */}
                <aside className="lg:col-span-1 space-y-6">
                  <div className="bg-accent/50 dark:bg-accent-dark/50 p-6 rounded-lg sticky top-24">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-3xl text-primary">workspace_premium</span>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark">How Our Credit System Works</h3>
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-subtle dark:text-subtle-dark">
                      <p>Earn "credits" for every shop you submit. The more detailed and helpful your submission, the more credits you earn!</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>High-quality photos:</strong> +5 credits</li>
                        <li><strong>Detailed descriptions:</strong> +3 credits</li>
                        <li><strong>Complete contact info:</strong> +2 credits</li>
                      </ul>
                      <p>Redeem credits for exclusive discounts, special access to cultural events, and unique tribal art prints.</p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
