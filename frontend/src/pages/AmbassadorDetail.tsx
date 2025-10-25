import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Toast from '../components/Toast';

export default function AmbassadorDetail() {
  const { id } = useParams();
  const ambassadorId = parseInt(id || '1');
  const [showToast, setShowToast] = useState(false);

  const handleComingSoon = () => {
    setShowToast(true);
  };

  // Mock data for ambassadors
  const ambassadorsData: Record<number, any> = {
    1: {
      name: "Ananya Sharma",
      title: "Verified Cultural Ambassador",
      region: "Karnataka, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwB0d_GV9em_IwKAWoFT6oe0BUiF2H5pfvxHFhad90LLkPcgEqLPP_x2e0nPs6CfBYrVFD-mnA-JeBGIHxLYsO0vhNlOcnBCvxeLfwpDOwXQzmRbDasZL9BRNCn5oBHx71Y6kBLkNZBkKGw9-P1gduyrTWqbxGSCKduS7EYibty1DcM_0sKFuwJmA7quVQsVxuK6zfWTmn1Phm9ZYGs4IB8WXamLvhMo8GQGOhKkmX3sgg3L7_CHvu3vebMRkrvqkrhfRm7Ps7DA",
      about: "Ananya is a passionate textile historian and cultural preservationist with over 12 years of experience documenting traditional Indian weaving techniques. Having grown up in a family of weavers in Karnataka, she combines her academic background in textile arts with hands-on experience to authenticate and promote genuine handloom traditions. Her work has helped preserve dying art forms like Ilkal sarees and Lambani embroidery, connecting rural artisans with urban markets while ensuring fair compensation and cultural integrity.",
      stats: {
        shopsVerified: 38,
        reviewsWritten: 124,
        culturalSitesMapped: 15
      },
      specialties: ["Handwoven Textiles", "Bandhani", "Patola Silk", "Ilkal Sarees", "Lambani Embroidery"],
      verifiedShops: [
        {
          id: 1,
          name: "Gujarat Textiles",
          location: "Chikmagalur, Karnataka",
          description: "Authentic handwoven textiles with intricate Bandhani work. The artisans here have mastered the traditional tie-dye technique passed down through seven generations.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa0OYD4KcLRBBuwCaMAKI8ROAojBH_29r7Tzhdb8PGq2dwuEEw3jWnE81jcLMPedEQMfaMEF6vqcmP7ORpSQ_83XM0ihYR06vkz4JmK3DJxAcLYDejfap_8IAY8byX0eXFDdnsxFK3q7V6ujyJvy1huJeHda3iBEBHfKU9C4BCwwlnoruiZxgScvsBaoQOLnWe3M2lNNvHUmTcpQcqlPjkIs7e0ws7axIzx577rV0yH5kfmwkxpkwaOiyI9N693-stcYLLpkXfVg"
        },
        {
          id: 2,
          name: "Ilkal Handloom Cooperative",
          location: "Ilkal, Karnataka",
          description: "Traditional Ilkal sarees woven on pit looms. Each saree takes 15-20 days to complete and features the distinctive Tope Teni border design.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2jJF_z-PTGv9XB7Il2RsgMrcEY9G_EkWGqY15VlSiJ90NIUpn6QihhMKTvDniPn7qnOACPF3jnsZvna1VYiNy9qOMvoJCUft5VaUE-8aKi9DQKlY2nLtmF35yxJVSUPXIDoo1Cawuvj5ysZUOgdAw2rYbQardsGTQHfWwyn5SddPlsw7DKhbrJy5TtjeLT2j-cu5rVrZu3Gc1Gy_TmlxBUc62vhPVY95BUZIIps485SQPNw32XsIs4GXpTIH3z12VcGTCRC4Wg"
        },
        {
          id: 3,
          name: "Sandur Lambani Emporium",
          location: "Sandur, Karnataka",
          description: "Vibrant Lambani embroidery work on cushions, bags, and garments. Supporting the nomadic Lambani women's community through their stunning needlework.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2AgtTGDlEBPwy46B3sbwWdrHecRtcLb782_Ur-CDQh1PZJgOGNGG5D6VLSOMo0CETt4t7sZxDTMMU03KJ6xaP5Ufxht9oqf9pxZncgaDk5AA8wDGUJt_fPDFhx_HUGy05to5VPJEyJaoTxA0nNzCugYnIwstKh9ofrghSnPrUXaf_gIF7KBG7sZbjUR4k5iGfxJw1Dgc6kJCr-EWEC1b5A9_c5h3LZuyp3fjWbcZnnUaBbbLna7CwDn0VQgxBBBrO8TrebMBnqw"
        },
        {
          id: 4,
          name: "Mysore Silk Weavers Cooperative",
          location: "Mysore, Karnataka",
          description: "Genuine Mysore silk sarees with pure zari work. Witnessed the entire process from silk reeling to the final weaving on traditional jacquard looms.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP8ptciwYWwuDpRVoRwl9JZtet3PnKijZ5R1fGQnfN2gVP9Hls2koK4yFJcgz4WgQ4LWpzLe2Wjd9750e-di06MgRIGcXyCc4eDZfictEBWnOtbq92sQjLVPt7HeH7Y9GN-Y0bT0joet3msBhiqnWqJX3qUITIp898RqnJUidv-kbLCeFe-z90VNcTPmC5NR6TqUrbuJkAGVReIRu6HkHgthVUv9FGkzWwR3HA4FKDZIyvHXmDWKfcJc9HRHyjIlUo7-zNZBkqIg"
        }
      ]
    },
    2: {
      name: "Rohan Mehta",
      title: "Verified Cultural Ambassador & Ceramics Expert",
      region: "Rajasthan & Karnataka, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU320hYrwZGIreS1uoHGJdKmmPJcXx8yVARyNE19flIzHEXrP9X3Fm27I-cl4x1A51xMz5ieUPPqb3gzVmwOduxQtz8YqncSWYUjDSCPz7RkT9bwcQMhvtvQ0jS_5ZYeGL2wTREZNiOXDIdYjneNr-8ICl1M8agXmjbw094ftWA6Qb0yhNvlvRkXf_HNjwL2EGXjfS1_L_ad5stblNQD7h-wGBewgPu6ymcIufAERjyhzIuaZuFIE-ABhpX0lU-oxUVlcQuogU5g",
      about: "Rohan is a renowned ceramics expert and cultural preservationist with a master's degree in Applied Arts from MS University, Baroda. For the past 15 years, he has been documenting and promoting traditional Indian pottery techniques, from Rajasthan's iconic blue pottery to Karnataka's Channapatna terracotta. His research on natural glazing techniques used by tribal potters has been published in several international journals. Rohan has trained over 200 young artisans in traditional methods while helping them adapt to contemporary market demands. He serves as a consultant for the Ministry of Textiles' pottery revival programs and has curated exhibitions at the National Crafts Museum in New Delhi.",
      stats: {
        shopsVerified: 45,
        reviewsWritten: 156,
        culturalSitesMapped: 22
      },
      specialties: ["Blue Pottery", "Traditional Ceramics", "Terracotta Art", "Artisan Crafts", "Natural Glazing"],
      verifiedShops: [
        {
          id: 2,
          name: "Rajasthan Pottery",
          location: "Jaipur, Rajasthan",
          description: "Stunning blue pottery crafted using traditional Persian techniques brought to India by Mughal artisans. Each piece is hand-painted with intricate floral and geometric patterns using cobalt oxide.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHJNIw_y2BDDIy7x-N-lG6rOB5W6jClHkC0FAqA27Ea-oMGUvzWFfpWf34n4zrRYBsix7wu-6MnX4AaxV7AXvYNByAVLRSaLDc4ZX9W_p9QaVdnkiEF27SiFGgECsh_SZkF4BqY4VK9Mwu9vHNXGA5rrtYF7boMUGxqb-zrrmcP6HO_9Xfhv_tHWy7n72vfKOZq1HMbHxHPYtnS1zeej2_X2z89EukuKehwM_ALzagonFqSt3M27qs3vEzz3_gjwxefq_HVUtVuA"
        },
        {
          id: 5,
          name: "Molela Terracotta Village",
          location: "Molela, Rajasthan",
          description: "Home to India's unique votive terracotta plaques depicting gods and goddesses. The entire village practices this 400-year-old tradition using local red clay and natural pigments.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFY7IjLRwnl_ogusfcZYA1T3fSNWHoMot4WhN4Q_WLsv9X6H9Xsl1a30Gi0226wYa7-hau_dhaOrGGZAgo2j9CDSY3zSf8BXH9Xvru3h5QZ1xd5I25BP6s7SHqa8G89s2GWP-jOZ3fLHHr2hKiRim3Vjr8P1yZqPCBFrs7njrqdK6N9Ys2iDwc0iM-YEnwDJElDVEJ8XrraLUnRYG7vBEsZF1IYbBuuCjaVc-Iy6vmpW_W2b4QMT2xWW7rIz8xGJHDwgq4VLJpjw"
        },
        {
          id: 6,
          name: "Kumhar Colony Pottery Hub",
          location: "Bangalore, Karnataka",
          description: "Traditional potter community creating everyday terracotta items and decorative pieces. Their eco-friendly clay pots and planters are made using age-old coiling techniques.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqRIeWflue75UcRKqoAcKQhSIXMKK-VXtwZSgOcS-6jJHJkGGV-CetwG0r7uG5nly5fK9OjCJjMU_lxooOrnaWr6I-TmZgyfgNFPXvHcwAP1xiWpomPCjy1UELLht_TnB1L05Ns-iyFndxVgbxRF5oWBQNnHQYvftE8XiFWZBd14JJwyrUtSf-RzTdsCeqxjElWz-lmbwbYNl9TAxjk_fRXS968s8koBcPSEs7jXSt9ZANrDOmZNn4Y3Y9xjdQe6EJ-Cj-x7o8pQ"
        },
        {
          id: 7,
          name: "Longpi Black Pottery",
          location: "Manipur (Verified Remotely)",
          description: "Rare black pottery from Northeast India made without a potter's wheel. The unique black color comes from serpentine rock mixed with weathered rock from local hills.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2AgtTGDlEBPwy46B3sbwWdrHecRtcLb782_Ur-CDQh1PZJgOGNGG5D6VLSOMo0CETt4t7sZxDTMMU03KJ6xaP5Ufxht9oqf9pxZncgaDk5AA8wDGUJt_fPDFhx_HUGy05to5VPJEyJaoTxA0nNzCugYnIwstKh9ofrghSnPrUXaf_gIF7KBG7sZbjUR4k5iGfxJw1Dgc6kJCr-EWEC1b5A9_c5h3LZuyp3fjWbcZnnUaBbbLna7CwDn0VQgxBBBrO8TrebMBnqw"
        }
      ]
    },
    3: {
      name: "Priya Deshmukh",
      title: "Verified Cultural Ambassador & Tribal Art Specialist",
      region: "Maharashtra, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_CE8qqtOmCHefhhSjFR2I8jsnrHEMOirqv7O8w2_cep3gJqJgrhECSJ2zDRFXY82_aY6mUMgbqMrk7ICGCNNtO8_NRggqmki-C-O0K7Eag2L4LRqV_w6JBTm_S1bEOx2BZ8TC3c9PwjOrWEcvyo82v-lZbP6C1J1dpnEpXlIVTYzirB0Ucib3R0yyLO1s8H_CDJsE3S3Ff-4VmaDYkNb6daO2XsCldsCcUUHsfbsEr637xMXOhdDCZjPsLD8-B5q2CJyHy-_wQ",
      about: "Priya is an acclaimed art historian and Warli art specialist who has dedicated her career to preserving and promoting India's rich tribal art traditions. With a PhD in Tribal Art Forms from the University of Mumbai, she has spent over 10 years living with and learning from Warli artists in the Thane and Palghar districts of Maharashtra. Her doctoral thesis on the evolution of Warli art from ritualistic floor paintings to contemporary art forms has been recognized internationally. Priya has established art education programs in 25 tribal villages, trained over 150 tribal artists in sustainable art practices, and organized exhibitions across India and abroad. She serves on the advisory board of the Tribal Art Museum in Bhopal and collaborates with UNESCO on indigenous art preservation projects.",
      stats: {
        shopsVerified: 32,
        reviewsWritten: 98,
        culturalSitesMapped: 18
      },
      specialties: ["Warli Art", "Tribal Paintings", "Folk Art", "Madhubani", "Gond Art"],
      verifiedShops: [
        {
          id: 4,
          name: "Warli Art Studio",
          location: "Dahanu, Maharashtra",
          description: "Authentic Warli paintings by the Warli tribal community. These geometric designs tell stories of daily life, nature, and celebrations using rice paste on mud walls, now adapted to paper and canvas.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbZI6wfIUULZDm4FDx1ZSk5fJCeS7oY_h7-XLjwMUdh4Hn6RqQCKhAK-LbHLGKDhOvz6Xq7R9-hYZrfSHxYrR5xHh3D7PwX_aISKXZvH6FQ7qT7rH5_GqYLvCmR0eH7p8zL0xK5GhMq5LqYw7T_R0p7X5qHKLx5H7WqRvHxT5LqY0Q8pKLH5qRYxT7p8zLqH7R5X0qL"
        },
        {
          id: 8,
          name: "Jivya Soma Mashe Art Gallery",
          location: "Mumbai, Maharashtra",
          description: "Gallery showcasing works by descendants of legendary Warli artist Jivya Soma Mashe (Padma Shri awardee). Features both traditional and contemporary interpretations of the 3000-year-old art form.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2jJF_z-PTGv9XB7Il2RsgMrcEY9G_EkWGqY15VlSiJ90NIUpn6QihhMKTvDniPn7qnOACPF3jnsZvna1VYiNy9qOMvoJCUft5VaUE-8aKi9DQKlY2nLtmF35yxJVSUPXIDoo1Cawuvj5ysZUOgdAw2rYbQardsGTQHfWwyn5SddPlsw7DKhbrJy5TtjeLT2j-cu5rVrZu3Gc1Gy_TmlxBUc62vhPVY95BUZIIps485SQPNw32XsIs4GXpTIH3z12VcGTCRC4Wg"
        },
        {
          id: 9,
          name: "Gond Art Collective",
          location: "Bhopal, Madhya Pradesh",
          description: "Stunning Gond tribal art created by artists from the Gond community of Central India. Known for their intricate dot and line work depicting flora, fauna, and mythological stories.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2AgtTGDlEBPwy46B3sbwWdrHecRtcLb782_Ur-CDQh1PZJgOGNGG5D6VLSOMo0CETt4t7sZxDTMMU03KJ6xaP5Ufxht9oqf9pxZncgaDk5AA8wDGUJt_fPDFhx_HUGy05to5VPJEyJaoTxA0nNzCugYnIwstKh9ofrghSnPrUXaf_gIF7KBG7sZbjUR4k5iGfxJw1Dgc6kJCr-EWEC1b5A9_c5h3LZuyp3fjWbcZnnUaBbbLna7CwDn0VQgxBBBrO8TrebMBnqw"
        },
        {
          id: 10,
          name: "Madhubani Art House",
          location: "Darbhanga, Bihar",
          description: "Traditional Madhubani (Mithila) paintings by women artists from Bihar. Natural dyes and vibrant colors create intricate patterns and mythological scenes passed down through generations.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP8ptciwYWwuDpRVoRwl9JZtet3PnKijZ5R1fGQnfN2gVP9Hls2koK4yFJcgz4WgQ4LWpzLe2Wjd9750e-di06MgRIGcXyCc4eDZfictEBWnOtbq92sQjLVPt7HeH7Y9GN-Y0bT0joet3msBhiqnWqJX3qUITIp898RqnJUidv-kbLCeFe-z90VNcTPmC5NR6TqUrbuJkAGVReIRu6HkHgthVUv9FGkzWwR3HA4FKDZIyvHXmDWKfcJc9HRHyjIlUo7-zNZBkqIg"
        }
      ]
    },
    4: {
      name: "Rajesh Nair",
      title: "Verified Cultural Ambassador & Spice Trade Expert",
      region: "Kerala, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3VmaP6ggMTRl-snzLLFyWllVw3Qk8et5WsHPGSMJthWzhCJ_8XjH4cBwU7UY0Oe7wx9jUFEHjWpbyFYQ9YmN7EFH6Qdc6DfSdWBcrWNGcXdR6KYlUus5w3n4U_1N_9zYm2Jw6jVFQuHOA4Ov9kY0Lz5GqHAzWpeU17ByRRH5spjIWfE9BBzur0D40N8sgCEC8BZDq6sjAblbP4TRzA5EMfzQRQ63u_sDK7ICJTBGdFaFZKV6BSe81WfTMeBu-GFnlF4aYitVKEQ",
      about: "Rajesh is a fourth-generation spice trader and Ayurvedic expert from Kerala, India's spice capital. With a degree in Ayurvedic Medicine from Kerala University and 15 years of hands-on experience in the spice trade, he has become one of India's foremost authorities on authentic spice sourcing and quality verification. Growing up in his family's spice gardens in Wayanad, Rajesh learned to identify spices by sight, smell, and taste from childhood. He has established direct trade relationships with over 100 organic spice farmers across Kerala, Karnataka, and Tamil Nadu, ensuring fair prices and sustainable farming practices. Rajesh serves as a quality consultant for the Spices Board of India and has written extensively about the medicinal properties of Indian spices. His expertise spans cardamom, black pepper (the 'King of Spices'), cinnamon, turmeric, and countless other aromatics that have made Kerala the spice haven of the world for over 3000 years.",
      stats: {
        shopsVerified: 41,
        reviewsWritten: 134,
        culturalSitesMapped: 19
      },
      specialties: ["Spices", "Ayurveda", "Traditional Agriculture", "Organic Farming", "Spice Processing"],
      verifiedShops: [
        {
          id: 3,
          name: "Kerala Spices",
          location: "Kochi, Kerala",
          description: "Premium quality Kerala spices sourced directly from organic farms in Wayanad and Idukki districts. Their cardamom, black pepper, and cinnamon are exceptional - you can smell the freshness the moment you enter.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfD8b4XUVLfGIBW0yqbR6LqH5_RmZGJy0xLvGWyRx5Hq8T6KxJ7LqH5_GqYLvCmR0eH7p8zL0xK5GhMq5LqYw7T_R0p7X5qHKLx5H7WqRvHxT5LqY0Q8pKLH5qRYxT7p8zLqH7R5X0qL8H5qRYxT7p8zLqH7R5X0qL"
        },
        {
          id: 11,
          name: "Wayanad Spice Garden",
          location: "Wayanad, Kerala",
          description: "Family-owned organic spice plantation offering farm tours and fresh spices. Walk through cardamom hills, pepper vines, and vanilla orchards while learning about sustainable spice cultivation from the farmers themselves.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFY7IjLRwnl_ogusfcZYA1T3fSNWHoMot4WhN4Q_WLsv9X6H9Xsl1a30Gi0226wYa7-hau_dhaOrGGZAgo2j9CDSY3zSf8BXH9Xvru3h5QZ1xd5I25BP6s7SHqa8G89s2GWP-jOZ3fLHHr2hKiRim3Vjr8P1yZqPCBFrs7njrqdK6N9Ys2iDwc0iM-YEnwDJElDVEJ8XrraLUnRYG7vBEsZF1IYbBuuCjaVc-Iy6vmpW_W2b4QMT2xWW7rIz8xGJHDwgq4VLJpjw"
        },
        {
          id: 12,
          name: "Kumily Spice Market",
          location: "Kumily, Kerala (near Periyar)",
          description: "Authentic spice market in the heart of Kerala's spice country. Everything from fresh pepper and cardamom to rare herbs and medicinal plants. The owners personally source from local tribal farmers ensuring authenticity.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2jJF_z-PTGv9XB7Il2RsgMrcEY9G_EkWGqY15VlSiJ90NIUpn6QihhMKTvDniPn7qnOACPF3jnsZvna1VYiNy9qOMvoJCUft5VaUE-8aKi9DQKlY2nLtmF35yxJVSUPXIDoo1Cawuvj5ysZUOgdAw2rYbQardsGTQHfWwyn5SddPlsw7DKhbrJy5TtjeLT2j-cu5rVrZu3Gc1Gy_TmlxBUc62vhPVY95BUZIIps485SQPNw32XsIs4GXpTIH3z12VcGTCRC4Wg"
        },
        {
          id: 13,
          name: "Coorg Coffee & Spice Estate",
          location: "Coorg, Karnataka",
          description: "Beautiful estate growing coffee alongside traditional spices like cardamom, pepper, and vanilla. Their homestay program lets you experience plantation life while learning about intercropping techniques that have sustained these lands for centuries.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2AgtTGDlEBPwy46B3sbwWdrHecRtcLb782_Ur-CDQh1PZJgOGNGG5D6VLSOMo0CETt4t7sZxDTMMU03KJ6xaP5Ufxht9oqf9pxZncgaDk5AA8wDGUJt_fPDFhx_HUGy05to5VPJEyJaoTxA0nNzCugYnIwstKh9ofrghSnPrUXaf_gIF7KBG7sZbjUR4k5iGfxJw1Dgc6kJCr-EWEC1b5A9_c5h3LZuyp3fjWbcZnnUaBbbLna7CwDn0VQgxBBBrO8TrebMBnqw"
        }
      ]
    },
    5: {
      name: "Kavita Borgohain",
      title: "Verified Cultural Ambassador & Bamboo Craft Specialist",
      region: "Assam & Northeast India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtB61SOr3odyNQ9nEWToJ63LU42l-5Peg2cEAR8eiTKYy8aUPx1dRz07G0w7CSeTpCfCppUAVsy57meK-ZOmUGDf4-sk4G9wTqIatQGtxCFf0LKG8l1To-KCQ_Ue4eoUVHcjmgiuo-YzbS7xb55cpxjHLlEVjbhzu5FcddpIavsmerybXcyW2FgWbRCyoNCa44Yrqr9_16CH1egh2oSmJ6zVaoFtahLQUkR3mOLZxKnDc48Ws-N0cR1dRi-A1SKqMEBpWyW4C4sA",
      about: "Kavita is a passionate advocate for sustainable bamboo crafts and indigenous handicrafts from Northeast India's Seven Sisters states. Born and raised in Assam's Majuli island, the world's largest river island, she grew up surrounded by the region's rich bamboo weaving traditions. With a degree in Environmental Studies from Gauhati University and specialized training in sustainable craft development, Kavita has spent 12 years working with tribal communities across Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, and Tripura. She has established bamboo craft cooperatives in 18 villages, training over 300 artisans in modern design techniques while preserving traditional skills passed down through generations. Kavita's work focuses on eco-friendly, zero-waste bamboo products - from intricate Assamese jaapi (traditional hats) to contemporary furniture and home décor. She collaborates with the Cane and Bamboo Technology Centre and has been instrumental in obtaining GI (Geographical Indication) tags for several Northeast handicrafts. Her efforts have helped create sustainable livelihoods for remote tribal communities while promoting environmental conservation.",
      stats: {
        shopsVerified: 29,
        reviewsWritten: 87,
        culturalSitesMapped: 16
      },
      specialties: ["Bamboo Crafts", "Northeast Handicrafts", "Sustainable Crafts", "Cane Weaving", "Traditional Textiles"],
      verifiedShops: [
        {
          id: 5,
          name: "Northeast Bamboo Crafts",
          location: "Shillong, Meghalaya",
          description: "Authentic bamboo and cane products from the Seven Sisters states. Everything from traditional Assamese jaapi hats to innovative home décor. Each piece supports remote tribal artisan communities practicing centuries-old weaving techniques.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0vads5uIFbKKorG_DiY3Lgj8siTMyw--GjePg8jgHDLI7XkzfLkXtmuaDTtpGIH6wKOwOb2s4Q8a39hLUk5GdAKX2j1_CUd3uqo5rO11PqXHeJr_cRIS6c0PTOEXbdFhflSh8q8N7eEqB7ggQrzKSkDS3rsBexTBvZwaBT7OxiWUat0jTs4yjIxr2f7-cA5S53VJS2o1qu_nag-fVYUvUWFh9ihuyAi3WXUgnrzkgnwvLQttTNRVOoDmZYtZ7D0Iv5chQIyrzEw"
        },
        {
          id: 14,
          name: "Majuli Handicraft Emporium",
          location: "Majuli Island, Assam",
          description: "Located on the world's largest river island, this cooperative showcases exquisite mask-making and bamboo crafts from Majuli's Mishing tribe. Their traditional pottery and terracotta work is equally remarkable, all made using sustainable techniques.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFY7IjLRwnl_ogusfcZYA1T3fSNWHoMot4WhN4Q_WLsv9X6H9Xsl1a30Gi0226wYa7-hau_dhaOrGGZAgo2j9CDSY3zSf8BXH9Xvru3h5QZ1xd5I25BP6s7SHqa8G89s2GWP-jOZ3fLHHr2hKiRim3Vjr8P1yZqPCBFrs7njrqdK6N9Ys2iDwc0iM-YEnwDJElDVEJ8XrraLUnRYG7vBEsZF1IYbBuuCjaVc-Iy6vmpW_W2b4QMT2xWW7rIz8xGJHDwgq4VLJpjw"
        },
        {
          id: 15,
          name: "Naga Heritage Village Crafts",
          location: "Kohima, Nagaland",
          description: "Stunning Naga tribal handicrafts including intricate bamboo baskets, colorful shawls, and traditional beadwork. This shop works directly with 12 Naga tribes, each with their distinct weaving patterns and craft traditions dating back millennia.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2jJF_z-PTGv9XB7Il2RsgMrcEY9G_EkWGqY15VlSiJ90NIUpn6QihhMKTvDniPn7qnOACPF3jnsZvna1VYiNy9qOMvoJCUft5VaUE-8aKi9DQKlY2nLtmF35yxJVSUPXIDoo1Cawuvj5ysZUOgdAw2rYbQardsGTQHfWwyn5SddPlsw7DKhbrJy5TtjeLT2j-cu5rVrZu3Gc1Gy_TmlxBUc62vhPVY95BUZIIps485SQPNw32XsIs4GXpTIH3z12VcGTCRC4Wg"
        },
        {
          id: 16,
          name: "Khasi Bamboo & Cane Centre",
          location: "Mawlynnong, Meghalaya",
          description: "From Asia's cleanest village comes exceptional eco-friendly bamboo furniture and home accessories. The Khasi tribal artisans here have perfected the art of sustainable bamboo harvesting and processing, creating beautiful products that last generations.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2AgtTGDlEBPwy46B3sbwWdrHecRtcLb782_Ur-CDQh1PZJgOGNGG5D6VLSOMo0CETt4t7sZxDTMMU03KJ6xaP5Ufxht9oqf9pxZncgaDk5AA8wDGUJt_fPDFhx_HUGy05to5VPJEyJaoTxA0nNzCugYnIwstKh9ofrghSnPrUXaf_gIF7KBG7sZbjUR4k5iGfxJw1Dgc6kJCr-EWEC1b5A9_c5h3LZuyp3fjWbcZnnUaBbbLna7CwDn0VQgxBBBrO8TrebMBnqw"
        }
      ]
    },
    6: {
      name: "Vikram Patel",
      title: "Verified Cultural Ambassador & Heritage Consultant",
      region: "Gujarat, India",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1SOjyMCX_-h8iYQ_rW5J6jw14VjPO1MZ6LLvxpeJjBdqSqj44ixH5xlf6yQ_K_gdoGRNlTalpfHVAqiIEl6PGda-awVfOuHjLGOAMW2WJ2glDLwY7KR21rva2rCcHh_xyCsHvW4z4Zqy4tVXrpEVktfStimekZiJk_fxF6tjPN-v0zCyoQ8blzr05EJ2LmCgdmXUUM7rN078uR5fjabPbmPOCB2M0Um6jPVQmBfJoYxemnOhLkP6x70zXUEFtAEutJ905D3WsCg",
      about: "Vikram is a distinguished cultural tour guide and heritage consultant specializing in Gujarat and Western India's rich historical and cultural landscape. With a master's degree in Heritage Management from M.S. University of Baroda and certifications from the Ministry of Tourism, he has spent 14 years creating authentic cultural routes that showcase India's living traditions. Born in Ahmedabad's old city, Vikram grew up immersed in Gujarat's vibrant folk culture, from Navratri's garba dances to the intricate crafts of Kutch. He has personally mapped over 150 heritage sites across Gujarat, Rajasthan, and Maharashtra, documenting everything from ancient step-wells (vav) to living craft villages. Vikram specializes in experiential cultural tourism, designing routes that allow travelers to participate in local festivals, learn traditional crafts, and stay with artisan families. He has authored two guidebooks on Gujarat's temple architecture and textile traditions, and regularly conducts heritage walks in Ahmedabad's UNESCO World Heritage old city. His work with the Gujarat Tourism Board and Indian National Trust for Art and Cultural Heritage (INTACH) has helped revive interest in forgotten crafts and architectural gems, creating sustainable tourism opportunities for rural communities.",
      stats: {
        shopsVerified: 36,
        reviewsWritten: 102,
        culturalSitesMapped: 28
      },
      specialties: ["Cultural Routes", "Heritage Sites", "Folk Traditions", "Temple Architecture", "Experiential Tourism"],
      verifiedShops: [
        {
          id: 17,
          name: "Kutch Handicraft Village",
          location: "Bhuj, Gujarat",
          description: "A living museum of Kutch's incredible craft traditions. From intricate Rogan art painting to mirror work embroidery, bandhani tie-dye, and block printing. Each artisan family has been practicing their craft for generations, surviving even the devastating 2001 earthquake.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa0OYD4KcLRBBuwCaMAKI8ROAojBH_29r7Tzhdb8PGq2dwuEEw3jWnE81jcLMPedEQMfaMEF6vqcmP7ORpSQ_83XM0ihYR06vkz4JmK3DJxAcLYDejfap_8IAY8byX0eXFDdnsxFK3q7V6ujyJvy1huJeHda3iBEBHfKU9C4BCwwlnoruiZxgScvsBaoQOLnWe3M2lNNvHUmTcpQcqlPjkIs7e0ws7axIzx577rV0yH5kfmwkxpkwaOiyI9N693-stcYLLpkXfVg"
        },
        {
          id: 18,
          name: "Patan Patola House",
          location: "Patan, Gujarat",
          description: "Home to the world-renowned double ikat Patola silk sarees that take 6 months to create. Only three families in the world still practice this 700-year-old technique. Witnessing the weaving process is mesmerizing - every thread is individually dyed before weaving begins.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFY7IjLRwnl_ogusfcZYA1T3fSNWHoMot4WhN4Q_WLsv9X6H9Xsl1a30Gi0226wYa7-hau_dhaOrGGZAgo2j9CDSY3zSf8BXH9Xvru3h5QZ1xd5I25BP6s7SHqa8G89s2GWP-jOZ3fLHHr2hKiRim3Vjr8P1yZqPCBFrs7njrqdK6N9Ys2iDwc0iM-YEnwDJElDVEJ8XrraLUnRYG7vBEsZF1IYbBuuCjaVc-Iy6vmpW_W2b4QMT2xWW7rIz8xGJHDwgq4VLJpjw"
        },
        {
          id: 19,
          name: "Ahmedabad Heritage Walk Crafts",
          location: "Ahmedabad, Gujarat",
          description: "Located in the historic pols (traditional neighborhoods) of old Ahmedabad's UNESCO World Heritage site. This cooperative sells authentic wooden toys, traditional kite-making materials, and beautiful brass work. The shop itself is in a restored 16th-century haveli.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2jJF_z-PTGv9XB7Il2RsgMrcEY9G_EkWGqY15VlSiJ90NIUpn6QihhMKTvDniPn7qnOACPF3jnsZvna1VYiNy9qOMvoJCUft5VaUE-8aKi9DQKlY2nLtmF35yxJVSUPXIDoo1Cawuvj5ysZUOgdAw2rYbQardsGTQHfWwyn5SddPlsw7DKhbrJy5TtjeLT2j-cu5rVrZu3Gc1Gy_TmlxBUc62vhPVY95BUZIIps485SQPNw32XsIs4GXpTIH3z12VcGTCRC4Wg"
        },
        {
          id: 20,
          name: "Saurashtra Folk Art Gallery",
          location: "Rajkot, Gujarat",
          description: "Showcasing the vibrant folk arts of Saurashtra region - colorful puppets, traditional musical instruments, Kathiawar embroidery, and beautifully painted terracotta horses used in local rituals. Each piece tells a story of Gujarat's rich cultural tapestry.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2AgtTGDlEBPwy46B3sbwWdrHecRtcLb782_Ur-CDQh1PZJgOGNGG5D6VLSOMo0CETt4t7sZxDTMMU03KJ6xaP5Ufxht9oqf9pxZncgaDk5AA8wDGUJt_fPDFhx_HUGy05to5VPJEyJaoTxA0nNzCugYnIwstKh9ofrghSnPrUXaf_gIF7KBG7sZbjUR4k5iGfxJw1Dgc6kJCr-EWEC1b5A9_c5h3LZuyp3fjWbcZnnUaBbbLna7CwDn0VQgxBBBrO8TrebMBnqw"
        }
      ]
    }
  };

  const ambassador = ambassadorsData[ambassadorId] || ambassadorsData[1];
  const verifiedShops = ambassador.verifiedShops;

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
                    <button 
                      onClick={handleComingSoon}
                      className="flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-stone-200 dark:hover:bg-stone-700/50 transition-colors shadow-sm"
                    >
                      <span className="truncate">Follow</span>
                    </button>
                    <button 
                      onClick={handleComingSoon}
                      className="flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm"
                    >
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
                    <button className="bg-background-light dark:bg-background-dark text-primary px-4 py-2 text-sm font-bold rounded-md">
                      Verified Shops
                    </button>
                    <button 
                      onClick={handleComingSoon}
                      className="text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark px-4 py-2 text-sm font-medium rounded-md transition-colors"
                    >
                      Reviews
                    </button>
                    <button 
                      onClick={handleComingSoon}
                      className="text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark px-4 py-2 text-sm font-medium rounded-md transition-colors"
                    >
                      Cultural Routes
                    </button>
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
                    <button 
                      onClick={handleComingSoon}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-stone-200 dark:hover:bg-stone-700/50 transition-colors shadow-sm"
                    >
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
      
      {showToast && (
        <Toast 
          message="This feature will be added soon!" 
          onClose={() => setShowToast(false)} 
        />
      )}
    </div>
  );
}

