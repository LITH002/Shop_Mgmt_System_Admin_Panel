import React, { use, useState } from 'react'
import './List.css'

const List = () => {

  const [list,setList] = useState ([]);

  const fetchList = async () => {
    const response = await axios.get()
  }

  return (
    <div>
        
    </div>
  )
}

export default List