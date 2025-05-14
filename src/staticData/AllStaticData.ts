// NavBar Data
export const navBarData=[
    {
        id:1,
        path:"/shop",
        title:"Shop",
        submenu:[
            {
                id:11,
                path:"/casual",
                title:"Casual"
            },
            {
                id:12,
                path:"/formal",
                title:"Formal"
            },
            {
                id:13,
                path:"/party",
                title:"Party"
            },
            {
                id:14,
                path:"/gym",
                title:"Gym"
            },
        ]
    },
    {
        id:2,
        path:"/onSale",
        title:"On Sale"
    },
    {
        id:3,
        path:"/newArrival",
        title:"New Arrivals"
    },
    {
        id:4,
        path:"/brands",
        title:"Brands"
    },
    
]

// HeroSectionStatisticsData 
export const StatisticsData = [
    { id: 1, value: '150', label: 'International Brands' },
    { id: 2, value: '2,000', label: 'High-Quality Products' },
    { id: 3, value: '30,000', label: 'Happy Customers' },
  ];


// // ArrivalSectionData
// export const NewArrivalSData = [
//     {
//         id:1,
//         img:"/assets/dressImages/img1.png",
//         name: "T-shirt with Tape Details",
//         rating: 4.5,
//         price: 120,
//         originalPrice: null,
//         discount: null,
//       },
//       {
//         id:2,
//         img:"/assets/dressImages/img2.png",
//         name: "Skinny Fit Jeans",
//         rating: 3.5,
//         price: 240,
//         originalPrice: 260,
//         discount: "-20%",
//       },
//       {
//         id:3,
//         img:"/assets/dressImages/img3.png",
//         name: "Checkered Shirt",
//         rating: 4.5,
//         price: 180,
//         originalPrice: null,
//         discount: null,
//       },
//       {
//         id:4,
//         img:"/assets/dressImages/img5.png",
//         name: "Sleeve Striped T-shirt",
//         rating: 4.5,
//         price: 130,
//         originalPrice: 160,
//         discount: "-30%",
//       },

// ]

// // New Arrival Data Props
// export type NewArrivalsDataProps = {
//     id:number,
//     img: string;
//     name: string;
//     rating: number;
//     price: number;
//     originalPrice: number | null;
//     discount: string | null;
//   };

 
export type NewArrivalsDataProps = {
  id: number;
  img: string;
  name: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: string;
};

//   Star Rating Props
export type StarRatingProps = {
    rating: number;
  }

// // TopSectionSectionData
// export const TopSellingsData = [
//     {
       
//         img: "/assets/dressImages/img5.png",
//         name: "Vertical Striped Shirt",
//         rating: 5.0,
//         price: 212,
//         originalPrice: 232,
//         discount: "-20%",
//       },
//       {
        
//         img: "/assets/dressImages/img6.png",
//         name: "Courage Graphic T-shirt",
//         rating: 4.0,
//         price: 145,
//         originalPrice: null,
//         discount: null,
//       },
//       {
       
//         img: "/assets/dressImages/img7.png",
//         name: "Loose Fit Bermuda Shorts",
//         rating: 3.0,
//         price: 80,
//         originalPrice: null,
//         discount: null,
//       },
//       { 

//         img: "/assets/dressImages/img8.png",
//         name: "Faded Skinny Jeans",
//         rating: 4.5,
//         price: 210,
//         originalPrice: null,
//         discount: null,
//       },
// ]

// // Top Sellings Data Props
// export type TopSellingsDataProps = {
//     img: string;
//     name: string;
//     rating: number;
//     price: number;
//     originalPrice: number | null;
//     discount: string | null;
//   };

export type TopSellingsDataProps = {
      id:number,
      img: string;
      name: string;
      rating: number;
      price: number;
      originalPrice?: number;
      discount?: string;
    };

// HappyCustomerData
export const HappyCustomerData = [
  {
    id: 1,
    rating: 3,
    title: "Sarah M.",
    desc: "I'm blown away by the quality and style of the clothes I received from fabrix.io. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    rating: 3,
    title: "Alex K.",
    desc: "fabrix.io has become my go-to for all my fashion needs. The variety of styles and the quality of the materials are unmatched. I’m always excited to see what’s new!",
  },
  {
    id: 3,
    rating: 4,
    title: "James L.",
    desc: "I love how fabrix.io keeps up with the latest trends. Their collection is always fresh, and the clothes fit perfectly. I’ve never been disappointed with a purchase.",
  },
  {
    id: 4,
    rating: 5,
    title: "Moco P.",
    desc: "The shopping experience at fabrix.io is seamless. From browsing to delivery, everything is top-notch. The clothes are stylish and well-made—I’m a loyal customer!",
  },
  {
    id: 5,
    rating: 4.5,
    title: "Emily R.",
    desc: "I’ve been shopping at fabrix.io for years, and they never fail to impress. The dresses are elegant, the casual wear is comfy, and the prices are reasonable. Highly recommend!",
  },
  {
    id: 6,
    rating: 4,
    title: "Liam T.",
    desc: "fabrix.io makes it so easy to find clothes that match my style. Their selection is diverse, and the quality is exceptional. I always get compliments on my outfits!",
  },
  {
    id: 7,
    rating: 3.5,
    title: "Olivia S.",
    desc: "I was hesitant to shop online for clothes, but fabrix.io changed my mind. The sizing is accurate, the designs are beautiful, and the customer service is fantastic.",
  },
  {
    id: 8,
    rating: 2.5,
    title: "Noah B.",
    desc: "Every piece I’ve bought from fabrix.io feels like it was made just for me. The attention to detail in their clothing is incredible, and I’m always excited for my next order.",
  },
  {
    id: 9,
    rating: 5,
    title: "Ava C.",
    desc: "fabrix.io has the best selection of trendy clothes I’ve ever seen. Whether I need something for a party or a casual day out, they always have the perfect outfit.",
  },
  {
    id: 10,
    rating: 4.5,
    title: "Ethan D.",
    desc: "I’ve recommended fabrix.io to all my friends because of how amazing their clothes are. The quality, style, and fit are perfect every time. I’m a very happy customer!",
  },
];


export type HappyCustomerDataProps = {
  id: number;
  rating: number;
  title: string;
  desc: string;
};

// Footer main Social media Links 
export const SocialMediaLinks = [
  {
    href: "https://x.com/",
    src: "/assets/images/logo-twitter.svg",
    alt: "Twitter",
    width: 15,
    height: 15,
    bg: "bg-white"
  },
  {
    href: "https://en-gb.facebook.com/", 
    src: "/assets/images/logo-facebook.svg",
    alt: "Facebook",
    width: 9,
    height: 9,
    bg: "bg-primary"
  },
  {
    href: "https://www.instagram.com/",
    src: "/assets/images/logo-instagram.svg",
    alt: "Instagram",
    width: 15,
    height: 15,
    bg: "bg-white"
  },
  {
    href: "https://github.com/",
    src: "/assets/images/logo-github.svg",
    alt: "GitHub",
    width: 15,
    height: 15,
    bg: "bg-white"
  },
]

// FooterMain data
export const footerData = [
  {
    section: 'Company',
    links: [
      { id: 1, path: '/about', title: 'About' },
      { id: 2, path: '/features', title: 'Features' },
      { id: 3, path: '/works', title: 'Works' },
      { id: 4, path: '/career', title: 'Career' },
    ],
  },
  {
    section: 'Help',
    links: [
      { id: 1, path: '/customer-support', title: 'Customer Support' },
      { id: 2, path: '/delivery-details', title: 'Delivery Details' },
      { id: 3, path: '/terms-conditions', title: 'Terms & Conditions' },
      { id: 4, path: '/privacy-policy', title: 'Privacy Policy' },
    ],
  },
  {
    section: 'FAQ',
    links: [
      { id: 1, path: '/account', title: 'Account' },
      { id: 2, path: '/manage-deliveries', title: 'Manage Deliveries' },
      { id: 3, path: '/orders', title: 'Orders' },
      { id: 4, path: '/payments', title: 'Payments' },
    ],
  },
  {
    section: 'Resources',
    links: [
      { id: 1, path: '/free-ebooks', title: 'Free eBooks' },
      { id: 2, path: '/development-tutorials', title: 'Development Tutorial' },
      { id: 3, path: '/how-to-blog', title: 'How to - Blog' },
      { id: 4, path: '/youtube-playlist', title: 'Youtube Playlist' },
    ],
  },
];

export const dummyReviews = [
  { username: "Alice", rating: 5, comment: "Absolutely love this!" },
  { username: "Bob", rating: 4, comment: "Pretty good for the price." },
  { username: "Charlie", rating: 3, comment: "It’s okay, not amazing." },
  { username: "Daisy", rating: 5, comment: "Perfect quality and fast delivery!" },
  { username: "Eve", rating: 4, comment: "Very nice product overall." },
  { username: "Frank", rating: 5, comment: "Highly recommended!" }
];

