import { useState } from "react"
// import '../components.css'

const AddItem = () => {
  const [many, setMany] = useState(0)

  let hasDecrease = many > 0

  const handleIncrease = () => {
    setMany(many + 1)
  }

  const handleDecrease = () => {
    if(hasDecrease){
      setMany(many - 1)
    }
  }

  return(
    <>
      <div className="w-30 flex justify-evenly m-3">
        <button 
        onClick={handleDecrease}
        disabled={!hasDecrease}
        className="border-solid bg-blue-400 w-6 rounded-md font-medium"
        >-</button>
        <p>{many}</p>
        <button 
          className=" bg-blue-400 w-6 rounded-md font-medium"
          onClick={handleIncrease}>+</button>
      </div>
    </>
  )
}

export default AddItem