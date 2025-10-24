import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function AmbassadorsList() {
  // Mock data for ambassadors
  const ambassadors = [
    {
      id: 1,
      name: "Ananya Sharma",
      region: "Rajasthan, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwB0d_GV9em_IwKAWoFT6oe0BUiF2H5pfvxHFhad90LLkPcgEqLPP_x2e0nPs6CfBYrVFD-mnA-JeBGIHxLYsO0vhNlOcnBCvxeLfwpDOwXQzmRbDasZL9BRNCn5oBHx71Y6kBLkNZBkKGw9-P1gduyrTWqbxGSCKduS7EYibty1DcM_0sKFuwJmA7quVQsVxuK6zfWTmn1Phm9ZYGs4IB8WXamLvhMo8GQGOhKkmX3sgg3L7_CHvu3vebMRkrvqkrhfRm7Ps7DA",
      shopsVerified: 42,
      reviews: 112,
      specialties: ["Textiles", "Pottery", "Jewelry"],
      verified: true
    },
    {
      id: 2,
      name: "Rohan Mehta",
      region: "Gujarat, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU320hYrwZGIreS1uoHGJdKmmPJcXx8yVARyNE19flIzHEXrP9X3Fm27I-cl4x1A51xMz5ieUPPqb3gzVmwOduxQtz8YqncSWYUjDSCPz7RkT9bwcQMhvtvQ0jS_5ZYeGL2wTREZNiOXDIdYjneNr-8ICl1M8agXmjbw094ftWA6Qb0yhNvlvRkXf_HNjwL2EGXjfS1_L_ad5stblNQD7h-wGBewgPu6ymcIufAERjyhzIuaZuFIE-ABhpX0lU-oxUVlcQuogU5g",
      shopsVerified: 35,
      reviews: 89,
      specialties: ["Handicrafts", "Textiles", "Folk Music"],
      verified: true
    },
    {
      id: 3,
      name: "Priya Singh",
      region: "Maharashtra, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_CE8qqtOmCHefhhSjFR2I8jsnrHEMOirqv7O8w2_cep3gJqJgrhECSJ2zDRFXY82_aY6mUMgbqMrk7ICGCNNtO8_NRggqmki-C-O0K7Eag2L4LRqV_w6JBTm_S1bEOx2BZ8TC3c9PwjOrWEcvyo82v-lZbP6C1J1dpnEpXlIVTYzirB0Ucib3R0yyLO1s8H_CDJsE3S3Ff-4VmaDYkNb6daO2XsCldsCcUUHsfbsEr637xMXOhdDCZjPsLD8-B5q2CJyHy-_wQ",
      shopsVerified: 28,
      reviews: 67,
      specialties: ["Warli Art", "Tribal Cuisine", "Folk Performances"],
      verified: true
    },
    {
      id: 4,
      name: "Aditya Kumar",
      region: "Kerala, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3VmaP6ggMTRl-snzLLFyWllVw3Qk8et5WsHPGSMJthWzhCJ_8XjH4cBwU7UY0Oe7wx9jUFEHjWpbyFYQ9YmN7EFH6Qdc6DfSdWBcrWNGcXdR6KYlUus5w3n4U_1N_9zYm2Jw6jVFQuHOA4Ov9kY0Lz5GqHAzWpeU17ByRRH5spjIWfE9BBzur0D40N8sgCEC8BZDq6sjAblbP4TRzA5EMfzQRQ63u_sDK7ICJTBGdFaFZKV6BSe81WfTMeBu-GFnlF4aYitVKEQ",
      shopsVerified: 31,
      reviews: 78,
      specialties: ["Spices", "Traditional Crafts", "Cultural Sites"],
      verified: true
    },
    {
      id: 5,
      name: "Meera Desai",
      region: "Odisha, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtB61SOr3odyNQ9nEWToJ63LU42l-5Peg2cEAR8eiTKYy8aUPx1dRz07G0w7CSeTpCfCppUAVsy57meK-ZOmUGDf4-sk4G9wTqIatQGtxCFf0LKG8l1To-KCQ_Ue4eoUVHcjmgiuo-YzbS7xb55cpxjHLlEVjbhzu5FcddpIavsmerybXcyW2FgWbRCyoNCa44Yrqr9_16CH1egh2oSmJ6zVaoFtahLQUkR3mOLZxKnDc48Ws-N0cR1dRi-A1SKqMEBpWyW4C4sA",
      shopsVerified: 39,
      reviews: 102,
      specialties: ["Pattachitra", "Handloom", "Tribal Jewelry"],
      verified: true
    },
    {
      id: 6,
      name: "Vikram Nair",
      region: "Tamil Nadu, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1SOjyMCX_-h8iYQ_rW5J6jw14VjPO1MZ6LLvxpeJjBdqSqj44ixH5xlf6yQ_K_gdoGRNlTalpfHVAqiIEl6PGda-awVfOuHjLGOAMW2WJ2glDLwY7KR21rva2rCcHh_xyCsHvW4z4Zqy4tVXrpEVktfStimekZiJk_fxF6tjPN-v0zCyoQ8blzr05EJ2LmCgdmXUUM7rN078uR5fjabPbmPOCB2M0Um6jPVQmBfJoYxemnOhLkP6x70zXUEFtAEutJ905D3WsCg",
      shopsVerified: 26,
      reviews: 54,
      specialties: ["Bronze Sculptures", "Temple Art", "Folk Dance"],
      verified: true
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

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark mb-2">
              Cultural Ambassadors
            </h1>
            <p className="text-lg text-muted-light dark:text-muted-dark">
              Meet our verified ambassadors who are dedicated to preserving and promoting India's rich cultural heritage
            </p>
          </div>

          {/* Ambassadors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambassadors.map((ambassador) => (
              <Link
                key={ambassador.id}
                to={`/ambassadors/${ambassador.id}`}
                className="flex flex-col p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 ring-4 ring-primary/20"
                      style={{ backgroundImage: `url("${ambassador.avatar}")` }}
                    ></div>
                    {ambassador.verified && (
                      <div className="absolute bottom-0 -right-1 bg-primary text-white p-1.5 rounded-full">
                        <span className="material-symbols-outlined text-lg">verified</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                    {ambassador.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mt-1">Verified Cultural Ambassador</p>
                  <p className="text-muted-light dark:text-muted-dark text-sm mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    {ambassador.region}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mt-4 w-full justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{ambassador.shopsVerified}</p>
                      <p className="text-xs text-muted-light dark:text-muted-dark">Shops</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{ambassador.reviews}</p>
                      <p className="text-xs text-muted-light dark:text-muted-dark">Reviews</p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex gap-2 flex-wrap mt-4 justify-center">
                    {ambassador.specialties.slice(0, 3).map((specialty, idx) => (
                      <div
                        key={idx}
                        className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3"
                      >
                        <p className="text-primary text-xs font-medium leading-normal">{specialty}</p>
                      </div>
                    ))}
                  </div>

                  {/* View Profile Button */}
                  <button className="mt-4 w-full flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">View Profile</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

