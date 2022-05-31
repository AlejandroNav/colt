import { franc } from 'franc';
import langs from 'langs';
let frase = "Buongiorno io sono un amico"
const langCode = franc(frase);
const language = langs.where('3', langCode);
console.log(`The text "${frase  }" is in ${language.name}`);