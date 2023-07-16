import { getCrime } from "@/app/fetchers/crime/getCrime";

export default async function CrimePage({
    params,
}: {
    params: { slug: string };
}) {

    const { crime } = await getCrime(params.slug);

    return (
        <>
            <div>
                <h1>
                    {crime.crime?.crimeTitle}
                </h1>
            </div>
        </>
    )
}