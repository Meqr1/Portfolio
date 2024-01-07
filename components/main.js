import Image from "next/image"

const Main = () => {
  return (
    <main className="overflow-hidden">
      <div id="minimalist" className="h-screen w-screen bg-black flex items-center justify-between pl-4">
        <h3 className="text-white text-3xl">With Minimalist</h3>
        <Image src={'/profile.png'} width={500} height={500} className="translate-x-[200px] xl:translate-x-[0px] xl:hover:translate-x-[0px] hover:translate-x-[100px] transition-all"/>
      </div>

      <div id="seperator" className="w-screen h-20 bg-gradient-to-b from-black to-blue"/>

      <div id="modern" className="h-screen w-screen bg-blue flex items-center justify-between pl-4">
        <div>
        <h3 className="text-white text-3xl">And Modern</h3>
        <p className="text-white">Ui / Application / Website</p>
        </div>
        <Image src={'/profile.png'} width={500} height={500} className="translate-x-[200px] xl:translate-x-[0px] xl:hover:translate-x-[0px] hover:translate-x-[100px] transition-all"/>
      </div>
    </main>
  )
}

export default Main
