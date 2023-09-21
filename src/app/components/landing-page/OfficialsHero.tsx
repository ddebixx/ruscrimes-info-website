import Image from 'next/image'
import officialsBg from "../../public/officialsbg.png"

export const OfficialsHero = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center" id="officials">
            <h2 className="uppercase text-8xl font-bold z-40">Where to Find <br /> information about <br /> russian crimes?</h2>
            <Image className="absolute right-0 top-0 w-[50%] z-0" src={officialsBg} alt="" width={2000} height={2000} />
        </div>
    )
}