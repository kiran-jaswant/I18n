import langconfig from './lang.json';

const diflanguage = ({keyword})=>{
    const lang=localStorage.getItem("lang") || "eng";
    return langconfig[lang][keyword];

};
export default diflanguage;