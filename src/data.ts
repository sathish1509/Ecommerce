export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isHot?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  discountPercent?: number;
  description?: string;
  specs?: Record<string, string>;
  stock: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Xbox Series S - 512GB SSD Console with Wireless Controller - Robot White",
    category: "Consoles",
    price: 299.99,
    oldPrice: 350.00,
    rating: 4.8,
    reviewsCount: 524,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=600&q=80",
    isHot: true,
    discountPercent: 14,
    description: "Experience next-gen speed and performance with Xbox Series S in Robot White. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS.",
    specs: {
      "Brand": "Microsoft",
      "Model": "Xbox Series S",
      "Color": "Robot White",
      "Storage": "512 GB NVMe SSD",
      "Resolution": "1440p up to 120 FPS"
    },
    stock: 28
  },
  {
    id: 2,
    name: "Bose Sport Earbuds - True Wireless Earphones - Triple Black",
    category: "Audio",
    price: 149.00,
    oldPrice: 179.00,
    rating: 4.5,
    reviewsCount: 312,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    isBestSeller: true,
    discountPercent: 17,
    description: "Bose Sport Earbuds are designed from the ground up to energize your exercise with acclaimed lifelike sound and a comfortably secure fit.",
    specs: {
      "Connectivity": "Bluetooth 5.1",
      "Battery Life": "Up to 5 hours (15 with case)",
      "Water Resistance": "IPX4 rated"
    },
    stock: 42
  },
  {
    id: 3,
    name: "2-Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS",
    category: "Wearables",
    price: 129.95,
    oldPrice: 149.95,
    rating: 4.2,
    reviewsCount: 189,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
    isHot: false,
    discountPercent: 13,
    description: "Optimize your workout routine with a Daily Readiness Score, key metrics like EDA scan app for stress management, and built-in GPS.",
    specs: {
      "Display": "Color AMOLED Touchscreen",
      "Sensors": "Optical Heart Rate, EDA, SpO2",
      "Battery": "Up to 7 days"
    },
    stock: 15
  },
  {
    id: 4,
    name: "Dell XPS 13 Laptop - 13.4\" FHD+ Touch - Intel Core i7 - 16GB - 512GB SSD",
    category: "Laptops",
    price: 1199.99,
    oldPrice: 1399.99,
    rating: 4.7,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    isFeatured: true,
    discountPercent: 14,
    description: "Designed for premium mobility and power. InfinityEdge 4-sided display gives an immersive viewing experience.",
    specs: {
      "Processor": "Intel Core i7 12th Gen",
      "RAM": "16 GB LPDDR5",
      "Storage": "512 GB PCIe NVMe SSD"
    },
    stock: 9
  },
  {
    id: 5,
    name: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    category: "Audio",
    price: 398.00,
    oldPrice: 449.99,
    rating: 4.9,
    reviewsCount: 890,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    isBestSeller: true,
    discountPercent: 11,
    description: "The WH-1000XM5 headphones rewrite the rules for distraction-free listening with two processors and 8 microphones for exceptional noise canceling.",
    specs: {
      "Noise Cancellation": "Dual Processor Auto NC Optimizer",
      "Battery Life": "30 Hours",
      "Microphone": "4 Beamforming Mics"
    },
    stock: 50
  },
  {
    id: 6,
    name: "Canon EOS R6 Full-Frame Mirrorless Camera with 4K Video",
    category: "Cameras",
    price: 2299.00,
    oldPrice: 2499.00,
    rating: 4.8,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    isFeatured: true,
    discountPercent: 8,
    description: "Match your vision with the Canon EOS R6. Featuring high speed shooting up to 20 fps, 4K video up to 60p, and 5-axis IBIS.",
    specs: {
      "Sensor": "20.1 MP Full-Frame CMOS",
      "Image Processor": "DIGIC X",
      "Video": "4K UHD 60fps 10-Bit"
    },
    stock: 6
  },
  {
    id: 7,
    name: "Apple iPad Air 10.9-inch (5th Gen) M1 Chip - 64GB - Space Gray",
    category: "Tablets",
    price: 559.00,
    oldPrice: 599.00,
    rating: 4.9,
    reviewsCount: 630,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    isHot: true,
    discountPercent: 7,
    description: "Supercharged by the Apple M1 chip. 12MP Ultra Wide front camera with Center Stage. Blazing-fast 5G available.",
    specs: {
      "Chip": "Apple M1",
      "Display": "10.9-inch Liquid Retina",
      "Storage": "64 GB"
    },
    stock: 31
  },
  {
    id: 8,
    name: "Logitech MX Master 3S Advanced Wireless Performance Mouse",
    category: "Accessories",
    price: 99.99,
    oldPrice: 119.99,
    rating: 4.8,
    reviewsCount: 710,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    isBestSeller: true,
    discountPercent: 16,
    description: "An iconic mouse remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8K DPI sensor.",
    specs: {
      "Sensor": "8,000 DPI Darkfield",
      "Connectivity": "Bluetooth & Logi Bolt",
      "Battery": "Up to 70 days"
    },
    stock: 60
  }
];

export const CATEGORIES = [
  { name: "Computer & Laptop", count: 184 },
  { name: "Computer Accessories", count: 320 },
  { name: "SmartPhone", count: 540 },
  { name: "Headphone", count: 210 },
  { name: "Mobile Accessories", count: 140 },
  { name: "Gaming Console", count: 95 },
  { name: "Camera & Photo", count: 112 },
  { name: "TV & Home Appliances", count: 88 },
  { name: "Watchs & Wearables", count: 165 },
];
