
import './App.css'
import { useState } from 'react'

function App() {

  let [count,setCount] = useState(0)
  



  let student = {
    name:"Toni",
    languages:["English","Spansish"]
  }

  let {name, languages} = student
  console.log(languages)


  let myStudents = ["Judi","Toni","Lee"]
  let [student1,student2,student3] = myStudents
  console.log(student2)
  return (
    <>
      
    </>
  )
}

export default App
