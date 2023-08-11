import React from 'react'
import { useParams } from 'react-router-dom'
function Brand() {
    const {result} = useParams();
  return (
    <div>{
        result
    }</div>
  )
}

export default Brand