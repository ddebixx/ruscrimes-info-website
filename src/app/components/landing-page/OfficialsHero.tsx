import Image from 'next/image'
import officialsBg from "../../public/officialsbg.png"

export const OfficialsHero = () => {
    return (
        <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
            <h2 className="uppercase text-8xl font-bold z-40 max-[1200px]:text-6xl max-[768px]:text-4xl max-[480px]:text-3xl">Where to Find <br /> information about <br /> russian crimes?</h2>
            <Image className="absolute right-0 top-0 w-full z-0 h-screen object-cover" src={officialsBg} alt="" width={2000} height={2000}  id="officials" />
        </div>
    )
}