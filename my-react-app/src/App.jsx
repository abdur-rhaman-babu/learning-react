/* eslint-disable react/prop-types */
import './App.css'
function App() {

  return (
    <>
      <h1>Abdur Rhaman Babu</h1>
        <Developer/>
        <MobileCompany name = "Mobile"/>
        <MobileCompany name = "PC"/>
        <MobileCompany name = "Computer"/>
        <MobileCompany name = "Mouse"/>
    </>
  )
}

const Developer = () =>{
  return (
    <div>
        <h2>Mubin is a student</h2>
    </div>
  )
}

const MobileCompany = (props) =>{
  console.log(props)
  return (
    <>
      <h2>This is {props.name}</h2>
    </>
  )
}

export default App


