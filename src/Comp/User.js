import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const id = useParams()
    const newId = id.id
  return (
    <div>All  Available here.....User and ...{newId}</div>
  )
}

export default User