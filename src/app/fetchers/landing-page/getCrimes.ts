import { client } from "@/app/apollo-client"
import { GetCrimesDocument } from "@/app/queries/landing-page/GetCrimes.generated"
import { GetCrimesQuery } from "@/types"

export const getCrimes = async () => {
    const { data: crimes } = await client.query<GetCrimesQuery>({
        query: GetCrimesDocument
    })

    return {
        crimes
    }
}