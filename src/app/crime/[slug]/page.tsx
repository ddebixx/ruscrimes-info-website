import { FundraisingPosts } from "@/app/components/FundraisingPosts";
import { getCrime } from "@/app/fetchers/crime/getCrime";
import { getStrapiAsset } from "@/app/utils/utils";
import Image from "next/image";

export default async function CrimePage({
  params,
}: {
  params: {
    slug: string,
    locale: string,
  };
}) {

  const { crime } = await getCrime(params.slug, params.locale);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold mt-32 text-[#BA181B]/70 uppercase">{crime.crimes?.data[0].attributes?.crimeTitle}</h1>
        <div className="m-auto max-w-[1200px] flex relative top-32 mb-32 p-4 gap-8">
          <div className="w-[65%] sticky top-20 self-start flex flex-col gap-4">
            {crime.crimes?.data[0].attributes?.crimeInfo}
          </div>
          <div className="flex flex-col gap-8 w-[50%]">
            {crime.crimes?.data.map((sensitivePhoto) => (
              <div className="flex flex-col gap-8 blur hover:blur-none transition" key={sensitivePhoto.id}>
                {sensitivePhoto.attributes?.crimeContentSensitivePhotos?.data.map((crimeSensitivePhoto) => (
                  <Image
                    key={crimeSensitivePhoto.id}
                    src={getStrapiAsset(crimeSensitivePhoto.attributes?.url!)}
                    alt={sensitivePhoto.attributes?.crimeTitle!}
                    width={1000}
                    height={1000}
                  />
                ))}
              </div>
            ))}
            {crime.crimes?.data.map((photo) => (
              <div className="flex flex-col gap-8" key={photo.id}>
                      {photo.attributes?.crimeContentPhotos?.data.map((crimePhoto) => (
                  <Image
                    key={crimePhoto.id}
                    src={getStrapiAsset(crimePhoto.attributes?.url!)}
                    alt={photo.attributes?.crimeTitle!}
                    width={1000}
                    height={1000}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <FundraisingPosts />
      </div>
    </>
  );
}
