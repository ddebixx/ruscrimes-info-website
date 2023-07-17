import { getFundraisingPosts } from "@/app/fetchers/landing-page/getFundraisingPosts"
import Image from "next/image"

export const FundraisingPosts = async () => {

    const { fundraisingPosts } = await getFundraisingPosts()
    
    return (
        <>
            <div>
                {fundraisingPosts.fundraisingPosts.map((post) => (
                    <div key={post.id}>
                        <Image src={post.fundraisingCoverPhoto.url} alt={post.fundraisingName} width={500} height={500} />
                        <p>{post.fundraisingName}</p>
                        <div dangerouslySetInnerHTML={{__html: post.fundraisingLink.html}} />
                    </div>
                ))}
            </div>
        </>
    )
}