import { getOfficials } from "@/app/fetchers/landing-page/getOfficials"
import { getStrapiAsset } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link"

export const Officials = async () => {

    const { officials } = await getOfficials()

    return (
        <>
            <div className="flex flex-col gap-8 p-8 text-center h-screen w-full text-2xl sticky top-0 max-[768px]:relative bg-[#0A0A0B] items-center justify-center overflow-hidden max-[768px]:h-full max-[768px]:py-8 max-[768px]:-mb-32">
                <h2 className="uppercase text-6xl font-bold max-[1024px]:text-4xl max-[768px]:text-2xl">Ukraine's officials</h2>
                <div className="flex gap-48 items-center max-[1024px]:gap-24 w-full max-[768px]:flex-col">
                    {officials.officials?.data.map((institution) => (
                        <div className="flex flex-col justify-center items-center gap-4 m-auto" key={institution.id}>
                            <Image className="max-[1024px]:w-[150px]" src={getStrapiAsset(institution.attributes?.institutionPhoto.data?.attributes?.url!)} alt={institution.attributes?.institutionName!} width={200} height={200} />
                            <div className="flex flex-col gap-4">
                                <p className="text-base uppercase font-bold max-[1024px]:w-[150px] max-[1024px]:text-sm">{institution.attributes?.institutionName}</p>
                                <div className="bg-[#BA181B] p-2 text-center rounded uppercase font-bold flex items-center justify-center hover:opacity-80 transition w-48 self-center max-[1024px]:w-[150px] max-[1024px]:text-base">
                                    <Link href={`https://${institution.attributes?.institutionLink}`}>
                                        Visit site
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}