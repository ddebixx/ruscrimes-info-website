import { client } from "@/app/apollo-client"
import { GetCrimesStatisticsDocument } from "@/app/queries/landing-page/GetCrimesStatistics.generated"
import { GetCrimesStatisticsQuery } from "@/types"

export const getCrimesStatistics = async () => {
    const { data: crimesStatistics } = await client.query<GetCrimesStatisticsQuery>({
        query: GetCrimesStatisticsDocument
    })

    return {
        crimesStatistics
    }
}