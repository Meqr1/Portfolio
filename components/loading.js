import { useEffect, useState } from "react"

const Loading = () => {
  const [play, setPlay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlay(true)
    }, 2500);
  }, [])
  return (
    <div className={`flex h-screen justify-center items-center bg-black transition-all duratoin-1000 ${ play ? 'translate-x-[-100%]' : ''}`}>
      <h1 className={`text-5xl text-white`}>
        Hi, I am MQuery
      </h1>
    </div>
  )
}

export default Loading
