import React, { useState } from 'react'

function NewItem({list, setList}) {
    const [newItem, setNewItem] = useState("")

    function handleAdd() {
        newItem && setList([...list, newItem])
        setNewItem("")
    }

    function handleNewItem(e) {
        setNewItem(e.target.value)
    }

  return (<>
    <input type="text" value={newItem} className='add-btn' onChange={handleNewItem} />
    <button onClick={handleAdd}>Add</button>
  </>)
}

export default NewItem