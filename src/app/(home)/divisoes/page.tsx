import Image from 'next/image'
import Link from 'next/link'

export default function DivisoesPage() {
  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8">
      <h1 className="sm:text-base/normal text-center mb-9">
        {/* <span className="bg-linear-to-b from-white from-70% to-azul-scout/50 to-100% pb-0.5 px-6"> */}
        <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
          Divisões (etárias)
        </span>
      </h1>
      <div className="my-[100px] grid grid-cols-1 sm:grid-cols-2 gap-20 ">
        <div className=" p-4 bg-white rounded-md shadow-lg mx-auto w-full">
          <Link href="divisoes/alcateia">
            <Image
              src="/alcateia.png"
              alt="Logo Grupo 94"
              width={500}
              height={50}
            />
          </Link>
        </div>
        <div className=" p-4 bg-white rounded-md shadow-lg mx-auto w-full">
          <Link href="divisoes/tribo-de-escoteiros">
            <Image
              src="/tribo_escoteiros.png"
              alt="Logo Grupo 94"
              width={500}
              height={50}
            />
          </Link>
        </div>
        <div className=" p-4 bg-white rounded-md shadow-lg mx-auto w-full">
          <Link href="divisoes/tribo-de-exploradores">
            <Image
              src="/tribo_exploradores.png"
              alt="Logo Grupo 94"
              width={500}
              height={50}
            />
          </Link>
        </div>
        <div className=" p-4 bg-white rounded-md shadow-lg mx-auto w-full">
          <Link href="divisoes/cla">
            <Image
              src="/cla.png"
              alt="Logo Grupo 94"
              width={500}
              height={50}
            />
          </Link>
        </div>
        <div className="p-4 bg-white rounded-md shadow-lg mx-auto w-full h-[194.5px]">
          <Link
            href="divisoes/dirigentes"
            className="w-full h-full flex  items-center justify-center "
          >
            <h2 className="text-azul-scout text-xl font-bold text-center">
              Dirigentes
            </h2>
          </Link>
        </div>
      </div>
    </section>
  )
}
