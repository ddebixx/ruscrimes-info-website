import { getOfficials } from "@/app/fetchers/landing-page/getOfficials"
import Image from "next/image"

export const Officials = async () => {

    const { officials } = await getOfficials()
    
    return (
        <>
            <div>
                {officials.officials.map((institution) => (
                    <div key={institution.id}>
                        <Image src={institution.institutionPhoto.url} alt={institution.institutionName} width={500} height={500} />
                        <p>{institution.institutionName}</p>
                        <div dangerouslySetInnerHTML={{__html: institution.institutionLink.html}} />
                    </div>
                ))}
            </div>
        </>
    )
}