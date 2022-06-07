import './App.css';
import Testimonio from "./componentes/Testimonio.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen algunos de nuestros integrantes en la biblioteca de los planos</h1>
        <Testimonio 
          nombre="Emma Bostian"
          clase="Artificier@"
          setting="Eberron"
          descripcion="nacio mujer pero luego se convirtio en una persona muy buena, gracias a poder verse como el viejo que siempre quiso ser, descubrio su pasion por los artilugios al ver a sus hermanos gnomos, pero al enterarse que venian de otro planeta fue impulsad@ hasta niveles increibles, por esto fue la primera persona en lograr que los galeones voladores flotaran fuera de sharn"
          imagen="emma"
        />
        <Testimonio 
          nombre="Shawn wang"
          clase="Druid@"
          setting="Forgoten Realms"
          descripcion="nacio en la naturaleza, se unio al circulo de la magia, pero se dio cuenta que para un druida es mas comodo ser una ninfa, esto le resulto muy util, gracias a lo facil que es manipular a viajeros y aventureros al tener las capacidades magicas de un druida mas el atractivo fisico de una ninfa, sin contar con el respeto que infunde a las conocedores de las capacidades magicas caracteristicas de las ninfas"
          imagen="shawn"
        />
        <Testimonio
          nombre="Sarah chima"
          clase="picar@"
          setting="Ravnica"
          descripcion="una joven orca que decidio explorar la tumba de los horrores, pero al experimentar una de las primeras trampas del necromago acererak termino como un joven halfling, en ese momento se dio cuenta que lo mejor era huir y asumir su nuevo rol en su nueva vida"
          imagen="sarah"
        />
      </div>
    </div>
  );
}

export default App;
