import ReactDOM from "react-dom";
import Home from "./View/Home/Home.js";
import About from "./View/About/About.js";
import Contact from "./View/Contact/Contact.js";
import Counter from "./View/Counter/Counter.js";
import Scoreboard from './View/Scoreboard/Scoreboard.js'



const root = ReactDOM.createRoot(document.getElementById("root"));
const name= "World";
const path = window.location.pathname;
if (path==="/"){
  root.render(<Home />);
}
else if(path ==="/about"){
  root.render(<About />);
}
else if(path ==="/contact"){
  root.render(<Contact />);
}
else if(path === "/counter"){
  root.render(<Counter />);
}
else if(path==="/scoreboard"){
  root.render(<Scoreboard/>)
}
else{
  root.render("Not Found")
}








/* root.render(
  <>
  <h1>Hello {path}</h1>
  <div className="parent">
  <Card name="Kiran" city="Nagpur"></Card>
  <Card name="Kartik" city="Pune"></Card>
  </div>
  <NormalButton></NormalButton>

  </>
); */
