export function LanguageSelector(translation: any, key: typeof translation, language: "EN" | "PTBR") {
  return translation[key][language];
}
