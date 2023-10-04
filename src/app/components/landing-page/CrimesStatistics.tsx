import { getCrimesStatistics } from "@/app/fetchers/landing-page/getCrimesStatistics"

export const CrimesStatistics = async () => {

    const { crimesStatistics } = await getCrimesStatistics()
    
    return (
        <>
            <div className="grid grid-cols-2 gap-36 m-auto max-[1200px]:gap-24 self-center text-center px-8 max-[768px]:gap-16 overflow-hidden max-[768px]:flex max-[768px]:overflow-x-scroll max-[768px]:w-full">
                {crimesStatistics.crimesStatistics?.data.map((statistic) => (
                    <div className="w-full" key={statistic.id}>
                        <p className="text-9xl font-bold uppercase max-[1200px]:text-7xl max-[768px]:text-6xl">{statistic.attributes?.crimeNumber}</p> <br />
                        <p className="text-5xl uppercase text-[#BA181B]/70 font-bold max-[1200px]:text-4xl max-[768px]:text-3xl max-[768px]:w-[300px]">{statistic.attributes?.crimeTypes}</p>
                    </div>
                ))}
            </div>
        </>
    )
}