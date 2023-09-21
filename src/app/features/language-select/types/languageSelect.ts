import { LOCALES } from "../constants/languageSelect";

type LanguageKey = typeof LOCALES[number]["value"];

export type LanguageSelectProps = Record<LanguageKey, boolean>;