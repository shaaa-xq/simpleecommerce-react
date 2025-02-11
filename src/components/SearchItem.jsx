import { useState, useCallback } from "react"
// import { products } from "../DummyData"

const SearchItem = () => {
  const [search, setSearch] = useState('')
  const [filterItem, setFilterItem] = useState('')

  const handleSearch = useCallback((e) => {
    const searchValue = e.target.value
    setSearch(searchValue)

    const filter = products.filter((item) => {
      item.product.toLowerCase().includes(searchValue.toLowerCase())
    })

    setFilterItem(filter)
  })

  return(
    <>
      <input 
        type="text"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filterItem.map((item) => (
          <li key={item.id}>{item.product} - Rp.{item.price}</li>
        ))}
      </ul>
    </>
  )
}

export default SearchItem