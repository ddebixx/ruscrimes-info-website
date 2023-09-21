import { getOfficials } from "@/app/fetchers/landing-page/getOfficials"
import { getStrapiAsset } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link"

export const Officials = async () => {

    const { officials } = await getOfficials()

    return (
        <>
            <div className="flex flex-col gap-8 text-center text-2xl w-[1200px]">
                <h2 className="uppercase text-6xl font-bold">Ukraine's officials</h2>
                <div className="flex justify-between items-center">
                    {officials.officials?.data.map((institution) => (
                        <div className="flex flex-col justify-center items-center gap-4" key={institution.id}>
                            <Image src={getStrapiAsset(institution.attributes?.institutionPhoto.data?.attributes?.url!)} alt={institution.attributes?.institutionName!} width={200} height={200} />
                            <div className="flex flex-col gap-4">
                                <p className="text-base uppercase font-bold w-48">{institution.attributes?.institutionName}</p>
                                <div className="bg-[#BA181B] p-2 text-center rounded uppercase font-bold flex items-center justify-center hover:opacity-80 transition">
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