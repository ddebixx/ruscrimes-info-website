import { getCrimes } from "@/app/fetchers/landing-page/getCrimes"
import { getStrapiAsset } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link"
import { IconComponent } from "../IconComponent";

export const Crimes = async () => {

    const { crimes } = await getCrimes();

    return (
        <>
            <div className="max-w-[1200px] flex flex-col gap-32 px-8 overflow-hidden">
                {crimes.crimes?.data.map((crime) => (
                    <div className="flex w-full justify-between gap-8 max-[768px]:flex-col" key={crime.id} id="crimes">
                        <div className="flex flex-col gap-8 max-[1024px]:gap-4 max-[768px]:text-center max-[768px]:gap-8">
                            <p className="text-4xl uppercase font-bold text-[#BA181B]/70 max-[900px]:text-3xl max-[768px]:text-5xl max-[480px]:text-3xl">
                                {crime.attributes?.crimeTitle}
                            </p>
                            <div className="text-base max-[1024px]:text-sm max-[768px]:text-lg max-[480px]:text-base">
                                {crime.attributes?.crimeInfo.slice(0, 400) + "..."}
                            </div>
                            <>
                                <div className="max-[768px]:flex max-[768px]:w-full max-[768px]:justify-between text-2xl max-[480px]:text-xl">
                                    <div className="flex gap-4 font-bold min-[768px]:my-4">
                                        <p className="flex items-center justify-center gap-2"><IconComponent icon="mdi:cross" color="#BA181B" />{crime.attributes?.victims_dead}</p>
                                        <p className="flex items-center justify-center gap-2"><IconComponent icon="fa6-solid:crutch" color="#BA181B" />{crime.attributes?.victims_injured}</p>
                                    </div>
                                    <Link className="font-bold uppercase self-start border-b-2 border-[#BA181B]/70 hover:opacity-80 transition" href={`/crime/${crime.attributes?.slug}`}>
                                        Read more
                                    </Link>
                                </div>
                            </>
                        </div>
                        <Image className="saturate-[.2] max-[1024px]:w-2/5 max-[768px]:w-full" src={getStrapiAsset(crime.attributes?.crimeCoverPhoto.data?.attributes?.url!)} alt={crime.attributes?.crimeTitle!} width={500} height={500} />
                    </div>
                ))}
            </div>
        </>
    )
}