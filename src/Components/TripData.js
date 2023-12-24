import React from 'react'

const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img src={props.timage} />
        </div>
        <h4>{props.theading}</h4>
        <p>{props.ttext}</p>
    </div>
  )
}

export default TripData