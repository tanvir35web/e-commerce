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
