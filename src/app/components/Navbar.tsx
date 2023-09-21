"use client"

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import Link from 'next/link';
import { useState } from 'react';
// import { LanguageSelectModule } from '../navbar/LanguageSelectModule';
import { LOCALES } from '@/app/features/language-select/constants/languageSelect';
import { useForm } from 'react-hook-form';
import { LanguageSelectProps } from '@/app/features/language-select/types/languageSelect';
import { Input } from '@mui/base';

type Input = LanguageSelectProps;

type LocalesProps = {
    defaultValues: Input;
}

export const Navbar = (
    // {defaultValues}: LocalesProps
    ) => {
    const [menu, setMenu] = useState(false);

    const links = [
        { href: '#crimes', text: 'war crimes' },
        { href: '/about', text: 'war criminals' },
        { href: '#officials', text: 'officials' },
        { href: '#donations', text: 'donations' },
    ];

    // const { control } = useForm<Input>({
    //     defaultValues,
    // });

    return (
        <>
            <header className="w-full fixed backdrop-blur-lg border-b-[.5px] border-white/30 z-[222222]">
                <nav className="p-4 bg-blur">
                    <div
                        className={`justify-self-center lg:block lg:pb-0 lg:mt-0 ${menu ? 'block' : 'hidden'}`}>
                        <ul className="flex items-center justify-center gap-36 transition-all duration-500 ease-in max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:h-[100vh] max-lg:w-[100vw] max-lg:bg-[#fff] max-lg:-z-[10] max-lg:flex-col max-lg:gap-10 max-lg:text-3xl">
                            {links.map((link) => (
                                <li>
                                    <Link className='uppercase' href={link.href}>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <LanguageSelectModule name="select" control={control} options={LOCALES} /> */}
                    <button
                        className=" outline-none focus:border-0 hidden max-lg:block"
                        onClick={() => setMenu(!menu)}
                    >
                        {menu ? (
                            <MenuRoundedIcon />
                        ) : (
                            <MenuRoundedIcon />
                        )}
                    </button>
                </nav>
            </header>
        </>
    );  
}