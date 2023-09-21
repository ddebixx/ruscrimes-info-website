import Image from 'next/image';
import map from "../../public/hero-section.png"

export const HeroSection = () => {
    return (
        <>
            <div className='w-full relative text-center'>
                <div className='absolute flex items-center justify-center w-full h-full'>
                    <h1 className='text-6xl font-bold text-center uppercase z-20 leading-snug'>we can't bring them back,<br/> but <span className='bg-[#BA181B]/70 p-2'>we must remember</span></h1>
                </div>
                <Image src={map} alt="hero-section" width={3000} height={3000} />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='bg-[#BA181B]/70 p-4 text-7xl uppercase font-bold'>#russiaisaterroriststate</h1>
                <p className='text-4xl text-center font-bold uppercase'>Our goal is not to let people forget the <br/> victims of the "Russian world" and show what <br/> it brings to civilized world </p>
            </div>
        </>
    )
}