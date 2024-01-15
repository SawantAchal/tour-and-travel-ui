import React from 'react'
import '../Assets/CSS/Trip.css'
import TripData from './TripData'
import Trip1 from '../Assets/images/image6.avif'
import Trip2 from '../Assets/images/image7.avif'
import Trip3 from '../Assets/images/image8.avif'

const Trip = () => {
  return (
    <section className='trip'>
        <h1>Recent Trips</h1>
        <p>you can discover unique destination using google maps.</p>
        <div className='tripcard'>
            <TripData
                timage={Trip1}
                theading = "Trip to delhi"
                ttext ="Delhi, India's capital, seamlessly blends ancient heritage with modern vibrancy. Historic landmarks like the Red Fort and Qutub Minar coexist with the bustling lanes of Old Delhi, epitomized by Jama Masjid and Chandni Chowk. New Delhi's wide boulevards showcase contemporary architecture, including the Lotus Temple and Akshardham. The city's diverse culture thrives in its street food scene, eclectic markets like Dilli Haat, and cultural events. As the political and cultural hub, Delhi embodies a captivating fusion of tradition and modern dynamism."
            />

            <TripData
                timage={Trip2}
                theading = "Trip to gujarat"
                ttext ="Gujarat, on India's western coast, is a vibrant blend of culture, history, and natural beauty. From Mahatma Gandhi's birthplace in Porbandar to Ahmedabad's UNESCO-listed old city, the state is steeped in historical significance. Architectural wonders include the temples in Palitana and the sun temple of Modhera. The Rann of Kutch, especially during the Rann Utsav, showcases the region's rich culture. Gujarat's cuisine, featuring dhokla and thepla, is a treat, and the Gir Forest National Park is home to the majestic Asiatic lions, adding a touch of wildlife to the state's diverse offerings. Gujarat is a compelling destination, weaving together history, culture, and natural wonders."
            />

            <TripData
                timage={Trip3}
                theading = "Trip to manali"
                ttext ="Nestled in the Himalayas, Manali is a captivating hill station surrounded by snow-capped peaks and lush pine forests. A hub for adventure, it offers trekking, paragliding, and the scenic Rohtang Pass. Charming cafes, vibrant markets, and the Hidimba Devi Temple add cultural richness, while Old Manali exudes a laid-back vibe. Whether seeking adventure or tranquility, Manali is a beloved destination with alpine beauty and diverse experiences for nature enthusiasts and adventure seekers."
            />
        </div>
    </section>
  )
}

export default Trip