import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function UserProfile() {
  // Mock user data
  const user = {
    name: "John Doe",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPUcQGqhn2VkXGZeknch4d2bh56OIOMcYKIi00A2xcOGBoktSoV686wqXcy6F6UAPergj1Ysygjxz7KE2GSIEe6GQEArnGjtGReTvggf0H5kaNmEBATBaTDsQx6lFNJ6_NNJySWEC0y7nTz2wkzIWkqorI5K4KG3xZ6gG_iARIAEIBDNkqz_km3aCCUObhsWW_wUC7ERETXyzKU1zskQZLCINwXYHrD-RXBkFMBTBkeJTbQIOnvEwmtVIjggD8WKCz4eywdY0lvg",
    points: 125,
    badges: 3,
    region: "Maharashtra"
  };

  const submittedShops = [
    { name: "Tribal Treasures", date: "2023-10-26", status: "Approved" },
    { name: "Artisan's Alley", date: "2023-10-24", status: "Pending" },
    { name: "Cultural Crafts", date: "2023-10-22", status: "Rejected" }
  ];

  const badges = [
    { icon: "store", name: "First Shop" },
    { icon: "rate_review", name: "Reviewer" },
    { icon: "map", name: "Explorer" }
  ];

  const rewards = [
    { name: "Digital Certificate", points: 50, available: true },
    { name: "10% Local Discount", points: 100, available: true },
    { name: "Featured Mention", points: 200, available: false }
  ];

  const leaderboard = [
    { rank: 1, name: "Aarav Patel", region: "Gujarat", points: 540, isCurrentUser: false },
    { rank: 2, name: "John Doe", region: "Maharashtra", points: 125, isCurrentUser: true },
    { rank: 3, name: "Priya Singh", region: "Rajasthan", points: 95, isCurrentUser: false }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        
        <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <div className="mb-6">
              <BackButton />
            </div>

            {/* Profile Header */}
            <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg">
              <div className="flex w-full flex-col gap-6 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                <div className="flex gap-6 items-center">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" 
                    style={{backgroundImage: `url("${user.avatar}")`}}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#1b120d] dark:text-white text-3xl font-bold leading-tight tracking-tight">{user.name}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span>
                        <p className="text-primary text-lg font-bold">{user.points} Points</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">emoji_events</span>
                        <p className="text-primary text-lg font-bold">{user.badges} Badges</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3ebe7] dark:bg-primary/20 text-[#1b120d] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto">
                  <span className="truncate">Edit Profile</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8">
              <div className="border-b border-[#e7d6cf] dark:border-primary/20">
                <div className="flex px-4 gap-8">
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4" href="#">
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Contributions</p>
                  </a>
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9a634c] dark:text-gray-400 pb-[13px] pt-4" href="#">
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Leaderboard</p>
                  </a>
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9a634c] dark:text-gray-400 pb-[13px] pt-4" href="#">
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Redeem Points</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {/* Submitted Shops */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-[#1b120d] dark:text-white mb-4">Submitted Shops</h2>
                <div className="px-4 py-3 @container">
                  <div className="overflow-hidden rounded-lg border border-[#e7d6cf] dark:border-primary/20 bg-background-light dark:bg-background-dark">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#fcf9f8] dark:bg-background-dark">
                          <th className="px-4 py-3 text-left text-[#1b120d] dark:text-white w-2/5 text-sm font-medium leading-normal">Shop Name</th>
                          <th className="px-4 py-3 text-left text-[#1b120d] dark:text-white w-1/4 text-sm font-medium leading-normal">Submission Date</th>
                          <th className="px-4 py-3 text-left text-[#1b120d] dark:text-white w-1/4 text-sm font-medium leading-normal">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {submittedShops.map((shop, idx) => (
                          <tr key={idx} className="border-t border-t-[#e7d6cf] dark:border-t-primary/20">
                            <td className="h-[72px] px-4 py-2 text-[#1b120d] dark:text-white text-sm font-normal leading-normal">{shop.name}</td>
                            <td className="h-[72px] px-4 py-2 text-[#9a634c] dark:text-gray-400 text-sm font-normal leading-normal">{shop.date}</td>
                            <td className="h-[72px] px-4 py-2">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(shop.status)}`}>
                                {shop.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* My Badges */}
                <div className="bg-[#f3ebe7] dark:bg-primary/10 p-6 rounded-lg">
                  <h2 className="text-[#1b120d] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">My Badges</h2>
                  <div className="flex flex-wrap gap-4">
                    {badges.map((badge, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 text-center">
                        <div className="p-3 rounded-full bg-primary/20">
                          <span className="material-symbols-outlined text-primary text-3xl">{badge.icon}</span>
                        </div>
                        <p className="text-xs font-medium text-[#1b120d] dark:text-gray-300">{badge.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Redeem Points */}
                <div className="bg-[#f3ebe7] dark:bg-primary/10 p-6 rounded-lg mt-8">
                  <h2 className="text-[#1b120d] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Redeem Points</h2>
                  <div className="space-y-4">
                    {rewards.map((reward, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-[#1b120d] dark:text-white">{reward.name}</p>
                          <p className="text-sm text-primary">{reward.points} Points</p>
                        </div>
                        <button 
                          className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-3 text-white text-xs font-bold leading-normal tracking-[0.015em] ${
                            reward.available ? 'bg-primary' : 'bg-primary/50 cursor-not-allowed'
                          }`}
                          disabled={!reward.available}
                        >
                          Redeem
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regional Leaderboard */}
              <div className="lg:col-span-3 mt-8">
                <div className="bg-[#f3ebe7] dark:bg-primary/10 p-6 rounded-lg">
                  <h2 className="text-[#1b120d] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Regional Leaderboard</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-b-primary/20">
                          <th className="px-4 py-3 text-left text-[#1b120d] dark:text-white text-sm font-medium leading-normal">Rank</th>
                          <th className="px-4 py-3 text-left text-[#1b120d] dark:text-white text-sm font-medium leading-normal">User</th>
                          <th className="px-4 py-3 text-left text-[#1b120d] dark:text-white text-sm font-medium leading-normal">Region</th>
                          <th className="px-4 py-3 text-left text-[#1b120d] dark:text-white text-sm font-medium leading-normal">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboard.map((entry, idx) => (
                          <tr key={idx} className={entry.isCurrentUser ? 'bg-primary/5 dark:bg-primary/10' : ''}>
                            <td className="h-[72px] px-4 py-2 text-[#1b120d] dark:text-white">{entry.rank}</td>
                            <td className="h-[72px] px-4 py-2 text-[#1b120d] dark:text-white font-medium">{entry.name}</td>
                            <td className="h-[72px] px-4 py-2 text-[#9a634c] dark:text-gray-400">{entry.region}</td>
                            <td className="h-[72px] px-4 py-2 text-primary font-bold">{entry.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
