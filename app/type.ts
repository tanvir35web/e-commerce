import { StaticImageData } from "next/image";

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  discount?: string;
  image: string | StaticImageData;
  bgColor?: string;
}

export interface Product {
  id: number;
  vendorName: string;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  link: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}
