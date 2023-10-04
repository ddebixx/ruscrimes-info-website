import { FundraisingPosts } from "@/app/components/FundraisingPosts";
import { getCrime } from "@/app/fetchers/crime/getCrime";
import { getStrapiAsset } from "@/app/utils/utils";
import Image from "next/image";
import crimesbg from "@/app/public/crimesbg.png"
import { Icon } from "@iconify/react";
import { IconComponent } from "@/app/components/IconComponent";

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
        <h1 className="text-8xl font-bold mt-32 text-[#BA181B]/70 uppercase max-[768px]:text-6xl max-[768px]:mt-16">{crime.crimes?.data[0].attributes?.crimeTitle}</h1>
        <div className="max-w-[1200px] m-auto flex relative top-32 mb-32 p-4 gap-8 max-[1024px]:flex-col-reverse max-[768px]:top-16">
          <div className="w-[65%] sticky top-20 self-start flex flex-col gap-4 max-[768px]:w-full max-[768px]:text-lg">
            {crime.crimes?.data[0].attributes?.crimeInfo}
          </div>
          <div className="flex flex-col gap-8 w-[50%] max-[1024px]:flex-row max-[1024px]:overflow-scroll max-[1024px]:overflow-y-hidden max-[1024px]:snap-x max-[1024px]:w-full ">
            {crime.crimes?.data.map((sensitivePhoto) => (
             <>
                {sensitivePhoto.attributes?.crimeContentSensitivePhotos?.data.map((crimeSensitivePhoto) => (
                      <Image className="object-cover blur-md hover:blur-0 transition duration-300 "
                        key={crimeSensitivePhoto.id}
                        src={getStrapiAsset(crimeSensitivePhoto.attributes?.url!)}
                        alt={sensitivePhoto.attributes?.crimeTitle!}
                        width={1000}
                        height={1000}
                      />
                ))}
              </>
            ))}
            {crime.crimes?.data.map((photo) => (
              <>
                {photo.attributes?.crimeContentPhotos?.data.map((crimePhoto) => (
                  <Image
                    key={crimePhoto.id}
                    src={getStrapiAsset(crimePhoto.attributes?.url!)}
                    alt={photo.attributes?.crimeTitle!}
                    width={1000}
                    height={1000}
                  />
                ))}
              </>
            ))}
          </div>
        </div>
        <div className="h-screen sticky top-0 flex justify-center items-center mt-32">
          <div className="absolute">
            <div className="relative w-full h-screen flex items-center justify-center">
              <IconComponent className="absolute top-60 -left-64 -z-1 text-[#BA181B]/70 text-[256px] max-[480px]:text-[200px] max-[480px]:-left-48 max-[480px]:top-64" icon="mdi:cross" />
              <h1 className="uppercase text-8xl font-bold text-left z-20 absolute max-[480px]:text-6xl">
                ~{crime.crimes?.data[0].attributes?.victims_dead} <br />
                people <br />
                <span className="text-[#BA181B]">died</span>
              </h1>
            </div>
          </div>
          <Image className="h-screen object-cover" src={crimesbg} alt="crimesbg" width={1920} height={1080} />
        </div>
        <div className="h-full relative top-0 bg-[#0A0A0B] w-full flex flex-col items-center justify-center">
          <FundraisingPosts title={`Make a donation to stop people suffering from russian aggression`} />
        </div>
      </div>
    </>
  );
}
