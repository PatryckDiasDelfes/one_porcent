export default function Footer() {
    return (
      <>
        <section className="flex justify-around items-center bg-black h-[full] w-[full] text-white text-[1.6vw]">
            <div className="flex flex-col gap-1">
                <h1>institucional</h1>
                <ol className="text-[1.3vw]">
                    <li>about One%</li>
                </ol>
            </div>
            <div className="flex flex-col gap-1">
                <h1>support</h1>
                <ol className="text-[1.3vw]">
                    <li>email</li>
                    <li>whatsapp</li>
                </ol>
            </div>
        </section>
      </>
    )
  }
  