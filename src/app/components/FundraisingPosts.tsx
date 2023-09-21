import { getFundraisingPosts } from "@/app/fetchers/landing-page/getFundraisingPosts"
import { getStrapiAsset } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link";

export const FundraisingPosts = async () => {

    const { fundraisingPosts } = await getFundraisingPosts()

    return (
        <>
            <div className="flex flex-col gap-8 text-center text-2xl w-[1200px] my-32">
                <h2 className="uppercase text-6xl font-bold">Volunteer organizations</h2>
                <div className="flex justify-between items-center">
                    {fundraisingPosts.fundraisingPosts?.data.map((post) => (
                        <div className="w-48 flex flex-col gap-4" key={post.id}>
                            <Image src={getStrapiAsset(post.attributes?.fundraisingCoverPhoto.data?.attributes?.url!)} alt={post.attributes?.fundraisingName!} width={200} height={200} />
                            <div className="flex flex-col gap-4">
                                <p className="text-base uppercase font-bold w-48">{post.attributes?.fundraisingName}</p>
                                <div className="bg-[#BA181B] p-2 text-center rounded uppercase font-bold flex items-center justify-center hover:opacity-80 transition">
                                    <Link href={`https://${post.attributes?.fundraisingLink!}`}>
                                        Donate
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