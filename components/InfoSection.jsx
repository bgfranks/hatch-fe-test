//components
import InfoCard from './InfoCard'

// images
import SunriseAlarmIcon from '../assets/sunrise-alarm.svg'
import SunshineHeartIcon from '../assets/sunshine-heart-icon.svg'
import WavyLinesIcon from '../assets/wavy-lines-icon.svg'

export default function InfoSection() {
  const images = [
    { imageUrl: WavyLinesIcon, heading: 'Soothing' },
    { imageUrl: SunshineHeartIcon, heading: 'Relaxing' },
    { imageUrl: SunriseAlarmIcon, heading: 'Calming' },
  ]

  return (
    <div className='text-darkblue mt-10 mb-12 mx-16'>
      <h3 className='text-center pb-8 text-2xl'>What We Do</h3>
      <div className='flex justify-around'>
        {images.map((image) => (
          <InfoCard
            key={image.id}
            imageUrl={image.imageUrl}
            heading={image.heading}
          />
        ))}
      </div>
    </div>
  )
}
