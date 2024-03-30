import React,{useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import diflanguage from '../../Util/util';
import './home.css';

function Home() {
  const[lang,setLang]=useState("eng");
  return (
    <div>
      <Navbar />
      <select defaultValue={localStorage.getItem("lang")} className='menu' onChange={(e)=>{
        localStorage.setItem("lang",e.target.value);
        window.location.reload();
      }}>
        <option value="eng">English</option>
        <option value="mar">Marathi</option>
        <option value="hind">Hindi</option>
      </select>
      <h1>{diflanguage({ keyword:"welcomemessage"})}</h1>
      <p>{diflanguage({ keyword:"normmessage"})}</p>
      <h1>{diflanguage({ keyword:"wishmessage"})}</h1>
      <h2>{diflanguage({ keyword:"greetmessage"})}</h2>
      <Footer></Footer>
    </div>
    
  )
}

export default Home;
