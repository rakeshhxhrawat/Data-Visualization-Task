import React, { useEffect, useState } from 'react'
import {calculateMean} from '../utils'

export default function Mean(props) {
    const [meanData,setMeanData] = useState();
    useEffect(() =>{
        setMeanData(calculateMean(props.data))
    },[])
  return (
    <td>{meanData}</td>
  )
}
