import Image from 'next/image';
import map from "../../public/hero-section.png"

export const HeroSection = () => {
    return (
        <>
            <div className='w-full relative text-center max-[768px]:h-screen'>
                <div className='absolute flex items-center justify-center w-full h-full'>
                    <h1 className='p-4 text-6xl font-bold text-center uppercase z-20 leading-snug max-[1024px]:text-4xl max-[1024px]:leading-normal max-[768px]:text-3xl'>we can't bring them back,<br/> but <span className='bg-[#BA181B]/70 p-2 max-[768px]:p-1'>we must remember</span></h1>
                </div>
                <Image className='object-cover w-screen max-[768px]:h-screen' src={map} alt="hero-section" width={3000} height={3000} />
            </div>
            <div className='flex flex-col gap-4 px-8 text-center'>
                <h1 className='bg-[#BA181B]/70 p-4 text-7xl uppercase font-bold max-[1200px]:text-6xl max-[1024px]:text-5xl max-[768px]:text-4xl max-[768px]:p-2 max-[600px]:text-2xl max-[400px]:text-xl'>#russiaisaterroriststate</h1>
                <p className='text-4xl text-center font-bold uppercase max-[1200px]:text-3xl max-[1024px]:text-2xl max-[768px]:text-xl max-[600px]:text-base max-[400px]:text-sm'>Our goal is not to let people forget the <br/> victims of the "Russian world" and show what <br/> it brings to civilized world </p>
            </div>
        </>
    )
}