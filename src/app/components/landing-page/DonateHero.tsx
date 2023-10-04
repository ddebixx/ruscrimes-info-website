import Image from 'next/image'
import whattodobg from "../../public/whattodobg.png"
import donatebg from "../../public/donatebg.png"

export const DonateHero = () => {
    return (
        <>
            <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-[#0A0A0B] overflow-hidden">
                <h2 className="uppercase text-8xl font-bold z-40 max-[1200px]:text-6xl max-[768px]:text-4xl">What can we do <br /> to stop people <br /> suffering?</h2>
                <Image className="absolute left-0 top-0 h-screen w-full z-0 object-cover" src={whattodobg} alt="" width={2000} height={2000} id="donations" />
            </div>
            <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-[#0A0A0B]">
                <h2 className="uppercase text-8xl font-bold z-40 max-[1200px]:text-6xl text-center bg-[#BA181B]/70 p-2 max-[768px]:text-4xl max-[480px]:text-3xl">the best way to fight <br /> the enemy is donate <br /> to ukrainian army</h2>
                <Image className="absolute left-0 top-0 h-screen w-full z-0 object-cover" src={donatebg} alt="" width={2000} height={2000} />
            </div>
        </>
    )
}