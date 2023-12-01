import Image from "next/image"

export default function Article() {
    return (
      <>
        <section className="flex flex-col justify-around items-center bg-black h-[full] w-[full]">
           <img src="/v4.svg" className="flex h-[50vh] w-[50v]" />

            <div className="flex gap-2 items-center">
                <div className="border border-white h-5 w-5 border-b-amber-700 rounded-full animate-spin"/>
                <h1 className="text-white">
                    website under construction
                </h1>
            </div>
           
        </section>
      </>
    )
  }
  