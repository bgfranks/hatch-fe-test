export default function HeroSection() {
  return (
    <div className='bg-[url("../assets/hero-image.png")] h-90v p-[12%]'>
      <div className='max-w-[350px] text-darkblue'>
        <h1 className='text-5xl'>Rise & Shine</h1>
        <p className='text-xl leading-7 py-5'>
          Coffe cortado, qui beans galão froth to go. Blue mountain et single
          origin aged flavour variety affagato.
        </p>
        <button
          className='uppercase bg-blue py-3.5 px-16 text-white tracking-widest rounded-sm hover:bg-darkblue transition ease-in delay-100'
          onClick={() => console.log('click')}
        >
          Learn More
        </button>
      </div>
    </div>
  )
}
