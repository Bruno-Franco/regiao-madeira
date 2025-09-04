import Image from 'next/image'
import Link from 'next/link'

export default function GruposPage() {
  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8">
      <h1 className="sm:text-base/normal text-center mb-9">
        {/* <span className="bg-linear-to-b from-white from-70% to-azul-scout/50 to-100% pb-0.5 px-6"> */}
        <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
          Grupos
        </span>
      </h1>
      <div className="my-[100px] grid grid-cols-1 sm:grid-cols-2 gap-20 ">
        <div className=" p-4 bg-white rounded-md shadow-lg mx-auto">
          <Link href="grupos/grupo-24-funchal">
            <Image
              src="/24_cor_1.png"
              alt="Logo Grupo 94"
              width={500}
              height={50}
            />
          </Link>
        </div>
        <div className=" p-4 bg-white rounded-md shadow-lg mx-auto">
          <Link href="grupos/grupo-92-funchal">
            <Image
              src="/92-cor.png"
              alt="Logo Grupo 94"
              width={500}
              height={50}
            />
          </Link>
        </div>
        <div className=" p-4 bg-white rounded-md shadow-lg mx-auto">
          <Link href="grupos/grupo-101-santa-luzia">
            <Image
              src="/101cor.png"
              alt="Logo Grupo 94"
              width={500}
              height={50}
            />
          </Link>
        </div>
        <div className=" p-4 bg-white rounded-md shadow-lg mx-auto">
          <Link href="grupos/grupo-159-monte">
            <Image
              src="/159_cor_1.png"
              alt="Logo Grupo 94"
              width={500}
              height={50}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
