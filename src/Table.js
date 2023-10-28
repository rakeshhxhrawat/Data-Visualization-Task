import React from 'react'
import Mean from './calculations/Mean'
import Meadian from './calculations/Median'
import Mode from './calculations/Mode'

export default function Table(props) {

  return (
    <table className='data-table'>
        <tbody>
            <tr>
                <th>Measure</th>
                <th>Class 1</th>
                <th>Class 2</th>
                <th>Class 3</th>
            </tr>
            <tr>
                <td>{props.name} Mean</td>
                <Mean data={props.class1}/>
                <Mean data={props.class2}/>
                <Mean data={props.class3}/>
            </tr>
            <tr>
                <td>{props.name} Median</td>
                <Meadian data={props.class1}/>
                <Meadian data={props.class2}/>
                <Meadian data={props.class3}/>
            </tr>
            <tr>
                <td>{props.name} Median</td>
                <Mode data={props.class1}/>
                <Mode data={props.class2}/>
                <Mode data={props.class3}/>
            </tr>
        </tbody>
    </table>
  )
}
