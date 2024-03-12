import Card from './Componentes/Card';
import './App.css';
import vehicles from "./data/vehicles";

function App() {
  const vehicleList = vehicles.map(v =>{
    return <Card title={v.name} description={v.description}/>
  })

  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <div className="container">
        {vehicleList}
      </div>
    </div>
  )

}

export default App
