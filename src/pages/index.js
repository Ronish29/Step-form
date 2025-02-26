import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import HomePageBanner from "@/components/HomePageBanner";
import HomePageBrands from "@/components/HomePageBrands";
import Benefits from "@/components/Benefits";
import BriefIntro from "@/components/BriefIntro";
import Story from "@/components/Story";
import HomePageBannerSecond from "@/components/HomePageBannerSecond";


export default function Home() {
  return (
    <div
      className="overflow-hidden"
    >
      <Header />
      <HomePageBanner/>
      <HomePageBrands/>
      <Benefits/>
      <BriefIntro/>
      <Story/>
      <HomePageBannerSecond/>
      
    </div>
  );
}
