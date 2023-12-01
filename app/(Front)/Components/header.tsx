import Image from "next/image"

export default function Header() {
    return (
      <>
        <header className="flex justify-around items-center bg-black h-[20vh] w-[full]">
{/* Ir para home */}
            <button className="animate-bounce">
                <img src="/logotipo.svg" className="flex h-[15vh] w-[15vw]"/>
            </button>
            
            <div className="flex gap-10 text-white text-[1.6vw]">
                <button>Mission and vision</button>
                <button>services</button>
                <button>Contact</button>
            </div>
        </header>
      </>
    )
  }
  