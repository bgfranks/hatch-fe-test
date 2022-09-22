import Image from 'next/image'

export default function InfoCard({ imageUrl, heading }) {
  return (
    <div className='flex flex-col items-center justify-center bg-lightgray rounded-2xl w-[420px] h-[250px]'>
      <Image src={imageUrl.src} height='60' width='60' alt={heading} />
      <h3>{heading}</h3>
    </div>
  )
}
