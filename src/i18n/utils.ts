import { ui, defaultLang } from './ui';

export function getLangFromUrl(lang: string) {
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof typeof ui[typeof defaultLang]) {
		return key in ui[lang] ? (ui[lang] as Record<string, string>)[key] : ui[defaultLang][key];
	}
}