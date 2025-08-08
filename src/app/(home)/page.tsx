import { DestaquesComponents } from '@/components/destaques-components/destaques-components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="pb-28">
        <div className="">
          <Image
            src="/capa.png"
            alt="Capa Site Regiāo Madeira"
            width={50000}
            height={500}
          />
        </div>
        <div className="px-6 text-justify text-base/8 max-w-7xl mx-auto text-zinc-700 mb-10">
          <h2 className="text-center my-10">Escotismo para todos</h2>
          <p className="mb-2">
            Os Escoteiros de Portugal{' '}
            {/* <span className="bg-linear-to-b from-white  from-70% to-azul-scout/50 to-100% pb-0.5"> */}
            <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
              {' '}
              são uma associação educativa para jovens, sem fins lucrativos, de
              utilidade pública.
            </span>
          </p>

          <p className="mb-2">
            São os fundadores do Escotismo Português e a mais antiga organização
            juvenil portuguesa, representando em Portugal, o escotismo aberto a
            todos - independente, interconfessional e multiétnico.
          </p>

          <p className="mb-2">
            Os Escoteiros de Portugal são a segunda maior organização juvenil
            portuguesa e contam com mais de 13 mil jovens em 135 unidades locais
            espalhadas por todo o Continente e Regiões Autónomas.
          </p>

          <p className="mb-2">
            Mais de 300 mil pessoas já foram escoteiras em Portugal. Os
            Escoteiros de Portugal são membros fundadores da Federação Escotista
            Portuguesa, que é composta pelas duas únicas associações escotistas
            nacionais reconhecidas internacionalmente e estão inseridos no maior
            movimento para jovens de todo o mundo, através da Organização
            Mundial do Movimento Escotista (WOSM), que congrega mais de 25
            milhões de escoteiros, jovens e adultos, rapazes e raparigas, em 216
            países e territórios.
          </p>

          <p className="mb-2">
            Enquadram-se nas suas actividades e no método de educação não formal
            que utiliza, a protecção e o contacto com a natureza, a educação
            ambiental, a intervenção social, a cooperação para o
            desenvolvimento, a promoção para o voluntariado social, a educação
            para a paz, a cultura, o desporto, a educação para a saúde e a
            formação de adultos.
          </p>
        </div>
        <div className=" flex  flex-col px-6 gap-8 justify-center content-center w-screen my-10 lg:flex-row lg:gap-8">
          <Image
            className="mx-auto lg:mx-0"
            src="/escotismo-para-todos.jpg"
            alt="Três escoteiros contemplando o horizonte."
            width={500}
            height={100}
          />
          <Image
            className="mx-auto lg:mx-0"
            src="/escotismo-para-todos2.jpg"
            alt="Quatro escoteiros na cachoeira."
            width={400}
            height={200}
          />
        </div>
      </section>
      <DestaquesComponents />
    </>
  )
}
