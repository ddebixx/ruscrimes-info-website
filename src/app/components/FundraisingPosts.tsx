import { getFundraisingPosts } from "@/app/fetchers/landing-page/getFundraisingPosts"
import { getStrapiAsset } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link";

interface Props {
    title: string
}

export const FundraisingPosts = async (title: Props) => {
    const { fundraisingPosts } = await getFundraisingPosts()
    const fundraisingPostsTitle = title.title

    return (
        <>
            <div className="flex flex-col gap-8 p-8 text-center h-screen w-full text-2xl sticky top-0 max-[768px]:relative bg-[#0A0A0B] items-center justify-center overflow-hidden max-[768px]:h-full max-[768px]:py-8 max-[768px]:mb-36 max-[400px]:mb-0">
                <h2 className="uppercase text-6xl font-bold max-[1024px]:text-4xl max-[768px]:text-2xl max-[900px]:w-3/4 max-[400px]:text-xl">{fundraisingPostsTitle}</h2>
                <div className="flex gap-48 items-center max-[1024px]:gap-24 w-full max-[768px]:flex-col">
                    {fundraisingPosts.fundraisingPosts?.data.map((post) => (
                        <div className="flex flex-col justify-center items-center gap-4 m-auto" key={post.id}>
                            <Image className="max-[1024px]:w-[150px]" src={getStrapiAsset(post.attributes?.fundraisingCoverPhoto.data?.attributes?.url!)} alt={post.attributes?.fundraisingName!} width={200} height={200} />
                            <div className="flex flex-col gap-4">
                                <p className="text-base uppercase font-bold max-[1024px]:w-[150px] max-[1024px]:text-sm">{post.attributes?.fundraisingName}</p>
                                <div className="bg-[#BA181B] p-2 text-center rounded uppercase font-bold flex items-center justify-center hover:opacity-80 transition w-48 self-center max-[1024px]:w-[150px] max-[1024px]:text-base">
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