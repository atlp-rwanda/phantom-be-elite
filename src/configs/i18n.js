import i18n from 'i18n';
import path from 'path'

const __dirname = path.resolve();


    i18n.configure({
      locales: ["en","fr","sw","kiny"],
      directory: path.join(__dirname, "locales"),
      defaultLocale: "en",
      headers: "Accept-Language"
   
    });

  export default i18n;
  
