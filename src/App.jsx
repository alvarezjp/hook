import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Office from './Context/Office'
import { MeasureLayout } from './UseEffectLayout/MeasureElement'
import ParentComponent from './UseCallBack/ParentComponent'
import ComponentBasic from './propTypes/componentBasic'
import ComponentAvanzado from './propTypes/ComponentAvanzado'
import ComponentConChildren from './propTypes/ComponentConChildren'
import DataRead from './UseQuery/DataRead'

const lista = [
  {id:1,name:"andres"},
  {id:2,name:"lucia"},
  {id:3,name:"carlos"},
  {id:4,name:"camila"}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Office/> */}
      {/* <MeasureLayout/> */}
      {/* <ParentComponent/> */}
      {/* <ComponentBasic title={4} description={'No existe descripcion para este componente'}/> */}
      {/* <ComponentAvanzado list={lista} title='Nombres' /> */}
      {/* <ComponentConChildren title={"Encabezado"}>   
        <p>soy un parrafo</p>
      </ComponentConChildren> */}

      <DataRead/>
     
    </>
  )
}

export default App
