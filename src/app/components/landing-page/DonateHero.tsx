import Image from 'next/image'
import whattodobg from "../../public/whattodobg.png"
import donatebg from "../../public/donatebg.png"

export const DonateHero = () => {
    return (
        <div className="relative flex flex-col"  id="donations">
            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <h2 className="uppercase text-8xl font-bold z-40">What can we do <br /> to stop people <br /> suffering?</h2>
                <Image className="absolute left-0 top-0 w-[50%] z-0" src={whattodobg} alt="" width={2000} height={2000} />
            </div>
            <div className="relative w-full h-screen flex items-center justify-center text-center">
                <h2 className="uppercase text-8xl font-bold z-40 p-8 bg-[#BA181B]/70 w-[50%]">the best way to fight the enemy is donate to ukrainian army</h2>
                <Image className="absolute right-0 top-0 z-0" src={donatebg} alt="" width={2000} height={2000} />
            </div>
        </div>
    )
}