import { useEffect } from "react";

interface Materials  {
    imageURL: string;
    name: string;
    description: string;
    price: string;
    
  }

  
  export const materials: Materials[] = [
    {
      imageURL: "/materialpic/pencil.png",  // Replace with actual image URL
      name: "Pencil",
      description: "High-quality pencils perfect for daily student use",
      price: "D10.00",
    },
    {
      imageURL: "/materialpic/book.png",  // Replace with actual image URL
      name: "Book",
      description: "Notebooks designed for students to take notes easily",
      price: "D50.00",
    },
    {
      imageURL: "/materialpic/eraser.png",  // Replace with actual image URL
      name: "Eraser",
      description: "Durable erasers ensuring clean and smooth corrections",
      price: "D5.00",
    },
    {
      imageURL: "/materialpic/calculator.png",  // Replace with actual image URL
      name: "Calculator",
      description: "Reliable calculators suitable for all educational levels.",
      price: "D150.00",
    },
    {
      imageURL: "/materialpic/pen.png",  // Replace with actual image URL
      name: "Pen",
      description: "Smooth-writing pens ideal for efficient note-taking",
      price: "D8.00",
    },
    {
      imageURL: "/materialpic/sharpener.png",  // Replace with actual image URL
      name: "Sharpener",
      description: "Compact sharpeners for easy and precise pencil sharpening.",
      price: "D6.00",
    },
    {
      imageURL: "/materialpic/ruler.png",  // Replace with actual image URL
      name: "Long Ruler",
      description: "Long rulers built for accurate measurements in class.",
      price: "D20.00",
    },
    {
      imageURL: "/materialpic/marker.png",  // Replace with actual image URL
      name: "Marker",
      description: "Vibrant markers, great for arts and school projects.",
      price: "D15.00",
    },
    {
      imageURL: "/materialpic/drawing-book.png",  // Replace with actual image URL
      name: "Drawing Book",
      description: "Books perfect for sketching and creative artistic ideas",
      price: "D40.00",
    }
  ];
  