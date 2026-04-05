import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToogler from "./components/ThemeToogler"

function Navigation (){
  const isDark = true;

  const sections = [
    {ud : "basic" , label : "Basic Props" , },
    {ud : "ref" , label : "ref Props"},
    {ud : "children" , label : "children Props"},
    {ud : "complex" , label : "complex Props"},
    {ud : "theme" , label : "theme Props"},
  ]

  return (
    <nav className={` sticky top-0 z-50`}>

    </nav>
  )
}

function App() {
  return (
    <> 
    </>
  )
}

export default App
