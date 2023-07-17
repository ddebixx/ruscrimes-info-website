import { client } from "@/app/apollo-client"
import { GetOfficialsDocument } from "@/app/queries/landing-page/GetOfficials.generated"
import { GetOfficialsQuery } from "@/types"


export const getOfficials = async () => {
    const { data: officials } = await client.query<GetOfficialsQuery>({
        query: GetOfficialsDocument
    })

    return {
        officials
    }
}