
import { getCrimes } from "@/app/fetchers/landing-page/getCrimes"
import Image from "next/image"
import Link from "next/link"

export const Crimes = async () => {

    const { crimes } = await getCrimes()
    
    return (
        <>
            <div>
                {crimes.crimes.map((crime) => (
                    <div key={crime.id}>
                        <Link href={`/crime/${crime.crimeSlug}`}>
                            {crime.crimeTitle}
                        </Link>
                        <Image src={crime.crimeCoverPhoto.url} alt={crime.crimeTitle} width={500} height={500} />
                    </div>
                ))}
            </div>
        </>
    )
}