import React from 'react'
import DestinationData from './DestinationData'
import img2 from '../Assets/images/image2.avif'
import img3 from '../Assets/images/image3.avif'
import img4 from '../Assets/images/image4.avif'
import img5 from '../Assets/images/image5.avif'

const Destination = () => {
  return (
    <main className='destination'>
      <h1>Popular Destination</h1>
      <p>Tour gives the oppertunity to see  dfgs sf time frame</p>
      {/* kerla */}
      <DestinationData
        heading ="Kerala: Embrace Nature's Symphony in God's Own Country"
        text ="Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is one of the prominent tourist destinations of India, with coconut-lined sandy beaches, backwaters, hill stations, Ayurvedic tourism and tropical greenery as its major attractions. Abundant coconut and palm trees, dense forests, paddy fields and lofty peaks adorn this landscape with a great deal of scenic beauty in Kerala. This place is much popular among adventure enthusiasts who like to gratify their adrenaline rush."
        img1={img2}
        img2={img3}
        DestinationClassName="first-des"
      />

      <DestinationData
        heading ="Rajasthan: Where History Paints Itself in Royal Hues"
        text ="Rajasthan, the' Land of Kings' in northwestern India, unfolds a tapestry of regal history and cultural splendor. From the Pink City of Jaipur's architectural marvels to the desert landscapes of Jodhpur and the lakes of Udaipur, each corner resonates with royal grandeur. Camel safaris in the Thar Desert, vibrant festivals, traditional dances, and bustling markets offer a sensory journey through valor, romance, and regality. With spicy cuisine and intricate handicrafts, Rajasthan encapsulates a timeless and enchanting experience."
        img1={img4}
        img2={img5}
        DestinationClassName="first-des-reverse"
      />
    </main>
  )
}

export default Destination