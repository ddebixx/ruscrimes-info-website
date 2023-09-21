"use client"

import { getCrimes } from "@/app/fetchers/landing-page/getCrimes"
import { getStrapiAsset } from "@/app/utils/utils"
import { Icon } from '@iconify/react';
import Image from "next/image"
import Link from "next/link"

export const Crimes = async () => {

    const { crimes } = await getCrimes();

    return (
        <>
            <div className="max-w-[1200px] flex flex-col gap-32" id="crimes">
                {crimes.crimes?.data.map((crime) => (
                    <div className="flex w-full justify-between gap-4" key={crime.id}>
                        <div className="flex flex-col gap-8">
                            <p className="text-5xl uppercase font-bold text-[#BA181B]/70">
                                {crime.attributes?.crimeTitle}
                            </p>
                            <div className="text-base">
                                {crime.attributes?.crimeInfo.slice(0, 500) + "..."}
                            </div>
                            <div className="flex gap-4 text-2xl font-bold">
                                <p className="flex items-center justify-center gap-2"><Icon icon="mdi:cross" color="#BA181B" />{crime.attributes?.victims_dead}</p>
                                <p className="flex items-center justify-center gap-2"><Icon icon="fa6-solid:crutch" color="#BA181B" />{crime.attributes?.victims_injured}</p>
                            </div>
                            <Link className="text-2xl font-bold uppercase self-start border-b-2 border-[#BA181B]/70 hover:opacity-80 transition" href={`/crime/${crime.attributes?.slug}`}>
                                Read more
                            </Link>
                        </div>
                        <Image className="saturate-[.2]" src={getStrapiAsset(crime.attributes?.crimeCoverPhoto.data?.attributes?.url!)} alt={crime.attributes?.crimeTitle!} width={500} height={500} />
                    </div>
                ))}
            </div>
        </>
    )
}