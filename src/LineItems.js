import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItems = ({  item , handleCheck, handleDelete}) => {
  return (
    <li  className='listItems'>
        <input type="checkbox"
            onChange={()=>handleCheck(item.id)}
            checked = {item.checked}
        />
        <label style={(item.checked) ?{textDecoration : "line-through"} : null }>{item.item}</label>
        <FaTrashAlt className='Delete' onClick={()=>handleDelete(item.id)} role={'button'} tabIndex={0} />
    </li>
  )
}

export default LineItems