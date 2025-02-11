import AddItem from "./buttons/AddItem"
// import './components.css'

const Card = () => {
  return(
    <>
      <div className='border-solid bg-pink-300 m-8 rounded-2xl h-auto p-3'>
        <div className="h-3 border-solid bg-amber-100">
          <img src="" alt="" />
        </div>
        <div >
          <h3 className='text-left'>Nama produk</h3>
        </div>
        <div className="flex justify-between">
          <h4>Harga</h4>
          <AddItem />
        </div>
      </div>
    </>
    
  )
}

export default Card