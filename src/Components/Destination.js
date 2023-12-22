import React from 'react'
import DestinationData from './DestinationData'
import img11 from '../Assets/images/hero1.jpg'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tour gives the oppertunity to see  dfgs sf time frame</p>
      <DestinationData
        heading ="Tour gives the oppertunity to see"
        text ="Tour gives the oppertunity to see  dfgs sf time frameTour gives the oppertunity to see  dfgs sf time frame .Tour gives the oppertunity to see  dfgs sf time frame.Tour gives the oppertunity to see  dfgs sf time frameTour gives the oppertunity to see  dfgs sf time frame.Tour gives the oppertunity to see  dfgs sf time frame. Tour gives the oppertunity to see  dfgs sf time frame.Tour gives the oppertunity to see  dfgs sf time frame.Tour gives the oppertunity to see  dfgs sf time frame"
        img1={img11}
        img2={img11}
        DestinationClassName="first-des"
      />

      <DestinationData
        heading ="Mt Deguldal batangas"
        text ="Tour gives the oppertunity to see  dfgs sf time frameTour gives the oppertunity to see  dfgs sf time frame .Tour gives the oppertunity to see  dfgs sf time frame.Tour gives the oppertunity to see  dfgs sf time frameTour gives the oppertunity to see  dfgs sf time frame.Tour gives the oppertunity to see  dfgs sf time frame. Tour gives the oppertunity to see  dfgs sf time frame.Tour gives the oppertunity to see  dfgs sf time frame.Tour gives the oppertunity to see  dfgs sf time frame"
        img1={img11}
        img2={img11}
        DestinationClassName="first-des-reverse"
      />
    </div>
  )
}

export default Destination