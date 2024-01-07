import Image from "next/image"

const Main1 = () => {
  return (
    <>
    <main className="h-[55vh] w-screen bg-green p-10">
        <h3 className="text-2xl m-4 mb-12 mt-12">Helping you and your brand to always stand out in the competition</h3>
      <div className="flex justify-between">
        <p className="m-4  ml-9">
          The combination of design, code <br />
          & interaction always stands out <br />
        </p>
        <Image src={'/profile.png'} width={120} height={80}/>
      </div>
    </main>
    <div className="h-[20vh]">
        <h3 className="text-center text-2xl">Works</h3>
        <a className="p-4 grid grid-row-3 md:grid-cols-3 hover:cursor-pointer" href="/works">
          <div className="shadow h-[200px] m-2">
            <Image />
          </div>

          <div className="shadow h-[200px] m-2">
            <Image />
          </div>

          <div className="shadow h-[200px] m-2">
            <Image />
          </div>
        </a>
    </div>
    </>
  )
}

export default Main1
