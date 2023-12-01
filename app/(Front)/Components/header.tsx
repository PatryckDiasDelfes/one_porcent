import Image from "next/image"

export default function Header() {
    return (
      <>
        <section className="flex justify-around items-center bg-black h-[40vh] w-[full]">
            
            <img src="/logotipo.svg" className="flex h-[15vh] w-[15vw]"/>
            
            <div className="flex gap-10 text-white text-[1.6vw]">
                <button>Missão & visão</button>
                <button>Serviços</button>
                <button>Contato</button>
            </div>
        </section>
      </>
    )
  }
  