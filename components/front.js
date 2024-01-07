import { useEffect } from "react";
import { useState } from "react";

const Front = () => {
  const [val, setVal] = useState('people')

  const [scrollY, setScroll] = useState(0)
  const arrayVal = ['People', 'You', 'Buisness']

  useEffect(() => {
    const handleScroll = () => {
      setScroll(parseInt(window.scrollY / 7))
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setVal(arrayVal[Math.floor(Math.random()*arrayVal.length)])
  }, [scrollY])

  return (
  <div>
      <div className="flex">
        <div className="bg-black h-screen w-[50%]"/>
        <div className="bg-white h-screen w-[50%]"></div>
        <div className="absolute flex items-center justify-center h-screen w-screen">
          <p className="text-white text-2xl md:text-4xl lg:text-6xl translate-x-[-50px] md:translate-x-[-60px] lg:translate-x-[-100px]">
            Conecting
          </p>
          <p className="text-black text-2xl md:text-4xl lg:text-6xl">
            {val}
          </p>
        </div>
      </div>
      hi
    </div>
  )
}

export default Front;

