import { client } from "@/app/apollo-client"
import { GetCrimeDocument } from "@/app/queries/crime/GetCrime.generated"
import { GetCrimeQuery } from "@/types"

export const getCrime = async (slug: string) => {
    const { data: crime } = await client.query<GetCrimeQuery>({
        query: GetCrimeDocument, variables: {slug}
    })

    return {
        crime
    }
}