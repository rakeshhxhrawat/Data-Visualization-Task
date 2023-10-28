import React, { useEffect, useState } from 'react'
import {calculateMedian} from '../utils'

export default function Meadian(props) {
    const [medianData,setMedianData] = useState();
    useEffect(() =>{
        setMedianData(calculateMedian(props.data))
    },[])
  return (
    <td>{medianData}</td>
  )
}
