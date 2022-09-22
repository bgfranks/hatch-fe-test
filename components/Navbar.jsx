import Image from 'next/image'

// images
import SunriseAlarm from '../assets/sunrise-alarm.svg'

export default function Navbar() {
  return (
    <div className='flex justify-center py-2.5'>
      <Image src={SunriseAlarm} alt='sunrise' height='50px' width='50px' />
    </div>
  )
}
