import "./App.css";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { FaUser, FaArrowRight, FaFacebook, FaGithub } from "react-icons/fa";
// register Swiper custom elements
register();

const urlImagePizza = "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80";
const urlImageBurga = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80";
const urlImageAsado = "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
const urlImageEmpanada = "https://images.unsplash.com/photo-1609525313344-a56b96f20718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
const urlImagePapasFritas = "https://images.unsplash.com/photo-1605262157780-8910063b2bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
const urlImageMilanesas = "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80";

const get = window.screen.width;
let viewCard = "1";
if(get > 830){
  viewCard = "3";
}else if(get > 700){
  viewCard = "2";
}else {
  viewCard = "1";
}
console.log(viewCard);

function User(urlImage, title) {
  
  return (
    <div className="comida-container">
      <div className="comida-item">
        <div className="comida-image">
          <img src={urlImage} alt={`${title} food`} />
        </div>
        <p>{title}</p>
        <p>Prueba la mejor comida</p>
        <button>Ver mas Info <FaArrowRight /></button>
      </div>
    </div>
  );
}

function App() {
  return (
    <swiper-container slides-per-view={viewCard} speed="500" pagination="true">
      <swiper-slide>{User(urlImageBurga,"#1 Burga")}</swiper-slide>
      <swiper-slide>{User(urlImagePizza,"#2 Pizza")}</swiper-slide>
      <swiper-slide>{User(urlImageMilanesas,"#3 Sandwitch")}</swiper-slide>
      <swiper-slide>{User(urlImagePapasFritas,"#4 Papas Fritas")}</swiper-slide>
      <swiper-slide>{User(urlImageAsado,"#5 Asado")}</swiper-slide>
      <swiper-slide>{User(urlImageEmpanada,"#6 Empanada")}</swiper-slide>
    </swiper-container>
  );
}

export default App;
