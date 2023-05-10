import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa';
const AddItems = ({newItems , setNewItems , handleSumit}) => {

    const inputref = useRef();

  return (
    
    <form action="" onSubmit={handleSumit}>
        <label htmlFor="AddItems">AddItems : </label>
        <input 
            className='addItems'
            type="text" 
            autoFocus
            ref={inputref}
            required
            placeholder='Add Items'
            name='addItems'
            value={newItems}
            onChange={(e)=>setNewItems(e.target.value)}
            />
            <button type='submit' onClick={()=> inputref.current.focus()}>
                <FaPlus/>
            </button>
    </form>

  )
}

export default AddItems