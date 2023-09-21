import { getCrimesStatistics } from "@/app/fetchers/landing-page/getCrimesStatistics"

export const CrimesStatistics = async () => {

    const { crimesStatistics } = await getCrimesStatistics()
    
    return (
        <>
            <div className="grid grid-cols-2 gap-36 max-w-[1200px] m-auto">
                {crimesStatistics.crimesStatistics?.data.map((statistic) => (
                    <div key={statistic.id}>
                        <p className="text-9xl font-bold uppercase">{statistic.attributes?.crimeNumber}</p> <br />
                        <p className="text-5xl uppercase text-[#BA181B]/70 font-bold">{statistic.attributes?.crimeTypes}</p>
                    </div>
                ))}
            </div>
        </>
    )
}