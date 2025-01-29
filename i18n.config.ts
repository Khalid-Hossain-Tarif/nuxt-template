export const i18nConfig = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "lang",
    alwaysRedirect: false,
  },
  defaultLocale: "en",
  locales: [
    {
      code: "en",
      name: "English",
      file: "home/en.json",
      iso: "en-US",
      dir: "ltr",
    },
    {
      code: "bn",
      name: "বাংলা",
      file: "home/bn.json",
      iso: "bn-BD",
      dir: "rtl",
    },
    {
      code: "en",
      name: "English",
      file: "about/en.json",
      iso: "en-US",
      dir: "ltr",
    },
    {
      code: "bn",
      name: "বাংলা",
      file: "about/bn.json",
      iso: "bn-BD",
      dir: "rtl",
    },
    {
      code: "en",
      name: "English",
      file: "contact/en.json",
      iso: "en-US",
      dir: "ltr",
    },
    {
      code: "bn",
      name: "বাংলা",
      file: "contact/bn.json",
      iso: "bn-BD",
      dir: "rtl",
    },
  ],
  langDir: "locales",
};
