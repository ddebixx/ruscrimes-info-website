import { getCrime } from "@/app/fetchers/crime/getCrime";
import Image from "next/image";

export default async function CrimePage({
  params,
}: {
  params: { slug: string };
}) {
  
    const { crime } = await getCrime(params.slug);

  return (
    <>
      <div>
        <h1>{crime.crime?.crimeTitle}</h1>
        <div>
          {crime.crime?.crimeContentPhotos.map((photo) => (
            <div key={photo.id}>
              <Image src={photo.url} alt="" width={500} height={500} />
            </div>
          ))}
          {crime.crime?.crimeContentSensitivePhotos.map((sensitivePhoto) => (
            <div key={sensitivePhoto.id}>
              <Image
                src={sensitivePhoto.url}
                alt=""
                width={500}
                height={500}    
              />
            </div>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{__html: crime.crime?.crimeInfo.html}} />
      </div>
    </>
  );
}
