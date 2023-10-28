import React, { useEffect, useState } from 'react'
import {calculateMode} from '../utils'

export default function Mode(props) {
    const [modeData,setModeData] = useState();
    useEffect(() =>{
        setModeData(calculateMode(props.data))
    },[])
  return (
    <td>{modeData}</td>
  )
}
