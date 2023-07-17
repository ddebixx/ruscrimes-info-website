import { getCrimesStatistics } from "@/app/fetchers/landing-page/getCrimesStatistics"

export const CrimesStatistics = async () => {

    const { crimesStatistics } = await getCrimesStatistics()
    
    return (
        <>
            <div>
                {crimesStatistics.crimesStatistics.map((statistic) => (
                    <div key={statistic.id}>
                        <p>{statistic.crimeNumber}</p>
                        <p>{statistic.crimeTypes}</p>
                    </div>
                ))}
            </div>
        </>
    )
}