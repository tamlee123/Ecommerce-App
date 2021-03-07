import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Cherry",
      email: "cherry123@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Cherry",
        logo: "/images/logo1.jpg",
        description: "best seller",
        rating: 4.5,
        numReviews: 200,
      },
    },
    {
      name: "Alvin",
      email: "alvin123@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Naked3 Eyeshadow Palette",
      category: "Eyes",
      image: "/images/n4.jpg",
      price: 131.25,
      countInStock: 20,
      brand: "Naked",
      rating: 4,
      numReviews: 9,
      description: "good",
    },

    {
      name: "Eczema + hand repair cream",
      category: "hand",
      image: "/images/h2.jpg",
      price: 20,
      countInStock: 15,
      brand: "SkinFix",
      rating: 4.2,
      numReviews: 8,
      description: "creamy and smell good",
    },

    {
      name: "Stunna Lip Paint Fluid Lip Color",
      category: "Lips",
      image: "/images/l1.jpg",
      price: 25,
      countInStock: 35,
      brand: "Fenty Beauty",
      rating: 4.5,
      numReviews: 10,
      description: "high quality",
    },
    {
      name: "Gucci Flora",
      category: "Perfume",
      image: "/images/p7.jpg",
      price: 118,
      countInStock: 0,
      brand: "Gucci",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "tarte Creaseless Concealer Brush",
      category: "Brush",
      image: "/images/f8.jpg",
      price: 24,
      countInStock: 20,
      brand: "Home Express",
      rating: 5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
