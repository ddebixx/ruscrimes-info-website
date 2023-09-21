import Image from "next/image"
import { Crimes } from "./components/landing-page/Crimes"
import { CrimesStatistics } from "./components/landing-page/CrimesStatistics"
import { FundraisingPosts } from "./components/FundraisingPosts"
import { Officials } from "./components/landing-page/Officials"
import map from "./public/crimes-map.png"
import { HeroSection } from "./components/landing-page/HeroSection"
import { DonateHero } from "./components/landing-page/DonateHero"
import { OfficialsHero } from "./components/landing-page/OfficialsHero"

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-32">
      <HeroSection />
      <CrimesStatistics />
      <Image src={map} alt="crimes-map" width={2000} height={2000} />
      <Crimes />
      <OfficialsHero />
      <Officials />
      <DonateHero />
      <FundraisingPosts />
    </main>
  )
}
