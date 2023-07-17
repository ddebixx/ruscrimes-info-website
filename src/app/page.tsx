import { Crimes } from "./components/landing-page/Crimes"
import { CrimesStatistics } from "./components/landing-page/CrimesStatistics"
import { FundraisingPosts } from "./components/landing-page/FundraisingPosts"
import { Officials } from "./components/landing-page/Officials"

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CrimesStatistics />
      <Crimes />
      <Officials /> 
      <FundraisingPosts />
    </main>
  )
}
