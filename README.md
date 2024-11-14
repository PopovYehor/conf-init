## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Important constants!
#### These are important constants on which the main function of the site depends

| Constant  | Location | Function |
| ------------- | ------------- | ------------- |
| urlPage  | src\constants\apiUrls  | Page host |
| url  | src\constants\apiUrls  | Backend host |
| supportUrl  | src\constants\apiUrls  | Donate link |
| googleForm  | src\constants\apiUrls  | Google form link |

# Text and translation into different languages
#### All static text on the site is in the src/language file
##### If you need to make changes to the static text that cannot be changed through the admin panel - it is possible to change it in this file, the file is divided into languages, languages ​​are divided into site pages

# If you need to add a new language to the site
1. Add the locale to the file next.config.mjs.
```javascript
i18n: {
    locales: ["en", "ua", "Added language"],
    defaultLocale: "ua",
    localeDetection: false,
}
```
2. Add the language to the list in the constant "languageList"
3. Add the language to the list in the constant "locales"
4. Add a language to the enum list "ELanguage"

# If you need to change the default language of the site
1. Replace default locale in the file next.config.mjs.
```javascript
i18n: {
    locales: ["en", "ua"],
    defaultLocale: "your default locale",
    localeDetection: false,
}
```
2. Replace the constant "languageDefault"
3. Replace the selected language in the constant "languageList"
```javascript
 export const languageList : Array<ILanguageItem> = [
    {name: "ua", img: IconsUA, selected: false},
    {name: "en", img: IconsEN, selected: false},
    {name: "your language", img: IconLanguage, selected: true},
]
```
##### The reducer located in the heart/reducers/language folder is responsible for selecting the language

# Site navigation
#### All site navigation is in the files src/pages. The folder with the name of the page and the index.tsx file is responsible for displaying pages. The index.tsx files contain imported files from the src/view folder, which store all page components.
##### Navigation constants are stored in src/constants/navigation

# Default component values
#### If there is no response from the server, the values ​​that will be displayed on the page are stored in the files that are located src/constants/[pageName]ItemDefault

# Mobile adaptation
#### Most of the mobile adaptation is done using css media queries. But there are places where components are replaced by checking the width of the screen. The reducer located in the src/reducers/mobile folder is responsible for this.

# Media data
#### All static images are in the src/assets folder
#### All static icons on the site are located in the src/components/icons folder