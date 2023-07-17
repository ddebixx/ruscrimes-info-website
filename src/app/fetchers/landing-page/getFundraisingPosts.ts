import { client } from "@/app/apollo-client"
import { GetFundrasingPostsDocument } from "@/app/queries/landing-page/GetFundraisingPosts.generated"
import { GetFundrasingPostsQuery } from "@/types"


export const getFundraisingPosts = async () => {
    const { data: fundraisingPosts } = await client.query<GetFundrasingPostsQuery>({
        query: GetFundrasingPostsDocument
    })

    return {
        fundraisingPosts
    }
}