// "use client"

// import * as Checkbox from '@radix-ui/react-checkbox';

// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useCallback, useState } from 'react';
// import { Control, useController } from "react-hook-form";
// import { twMerge } from 'tailwind-merge'

// type LanguageSelectModuleProps = {
//     options: {
//         value: string;
//         label: string;
//     }[];
//     control: Control<any>;
//     name: string;
//     className?: string,
//     onChangeLanguage?: (value: string) => void;
// }

// export const LanguageSelectModule = ({ options, name, control, className, onChangeLanguage }: LanguageSelectModuleProps) => {

//     const { field } = useController({
//         control,
//         name
//     });

//     const [values, setValues] = useState({
//         ...control._defaultValues,
//     });

//     const searchParams = useSearchParams();
//     const pathName = usePathname();
//     const router = useRouter();

//     const createQueryString = useCallback(
//         (name: string, value: string) => {
//             const params = new URLSearchParams(searchParams);
//             params.set(name, value);
//             return params.toString();
//         },
//         [searchParams]
//     )

//     return (
//         <>
//             {options.map((option) => (
//                 <Checkbox.Root
//                     onCheckedChange={(checked) => {
//                         field.onChange(checked);

//                         const localeValue = typeof checked === "boolean" ? checked : false;

//                         setValues({
//                             ...values,
//                             [option.value]: localeValue,
//                         });

//                         router.push(pathName + "?" + createQueryString(option.value, localeValue.toString()));
//                     }}
//                     key={option.value}
//                     checked={values[option.value]}
//                     value={option.value}
//                     className={twMerge(className, "shadow-[0_0_5px_rgba(0,0,0,0.1)] w-full whitespace-nowrap font-medium bg-white p-2 text-[#163172] rounded data-[state=checked]:text-white data-[state=checked]:bg-[#163172] transition-all duration-200 ease-in-out")}>
//                     <label className="cursor-pointer" htmlFor={option.value}>
//                         {option.label}
//                     </label>
//                 </Checkbox.Root>
//             ))}
//         </>
//     )
// }