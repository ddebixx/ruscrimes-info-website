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
        { href: '/', text: 'home page' },
        { href: '#crimes', text: 'war crimes' },
        { href: '#officials', text: 'officials' },
        { href: '#donations', text: 'donations' },
    ];

    // const { control } = useForm<Input>({
    //     defaultValues,
    // });

    return (
        <>
            <nav className="w-screen fixed top-0 left-0 backdrop-blur-lg border-b-[.5px] border-white/30 z-[222222] p-6 max-[1024px]:p-2">
                <div className={`justify-self-center lg:block ${menu ? 'block' : 'hidden'}`}>
                    <ul className="text-sm flex items-center justify-center gap-36 transition-all ease-in max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-screen max-lg:bg-[#0A0A0B] max-lg:backdrop-blur-3xl max-lg:-z-[10] max-lg:flex-col max-lg:gap-10 max-lg:text-3xl">
                        {links.map((link) => (
                            <li>
                                <Link className='uppercase' onClick={() => setMenu(!menu)} href={link.href}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <LanguageSelectModule name="select" control={control} options={LOCALES} /> */}
                <button
                    className="outline-none focus:border-0 hidden max-lg:block"
                    onClick={() => setMenu(!menu)}
                >
                    {menu ? (
                        <MenuRoundedIcon />
                    ) : (
                        <MenuRoundedIcon />
                    )}
                </button>
            </nav>
        </>
    );
}