import Image from 'next/image'

export default function ARegiaoDaMadeiraPage() {
  return (
    <>
      <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8">
        <div className="relative w-full">
          <Image
            src="/ilha-da-madeira.jpg"
            alt="Imagem da Região Madeira"
            height={500}
            width={1280}
            objectFit="cover"
            className="mx-auto"
          />
        </div>
      </section>
      <section className="max-w-7xl px-6  text-justify text-base/8  mx-auto text-zinc-700 sm:text-base/8 pb-24">
        <h2 className="sm:text-base/normal text-center mb-9">
          <span className="bg-linear-to-b from-white from-70% to-azul-scout/50 to-100% pb-0.5 px-6">
            A Região da Madeira
          </span>
        </h2>
        <div>
          <p className="mb-2">
            Os Grupos de Escoteiros agrupam-se em Regiões nos termos do
            Regulamento Geral, com o propósito de contribuir para uma maior
            eficiência da sua ação e têm como órgão máximo deliberativo o
            Conselho Regional e como órgão executivo a Chefia Regional.
          </p>

          <p className="mb-2">
            As Regiões são as estruturas associativas intermédias, de âmbito
            regional, reguladas nos Estatutos.
          </p>
          <p className="mb-2">
            A criação de Regiões, designadamente o seu número, área geográfica e
            o número mínimo de Grupos, é definida em Conferência Nacional, para
            um período mínimo de 3 anos e de forma a garantir que todo o
            território nacional está abrangido por Regiões.
          </p>
          <p className="mb-2">
            O número mínimo para a existência e funcionamento de uma Região é de
            três Grupos e cada uma adota o nome que a própria decida na altura
            da sua criação, desde que reflita a abrangência geográfica.
          </p>
          <p className="mb-2">
            A Região da Madeira corresponde ao arquipélago da Madeira e, embora
            tenhamos evidências de escotismo na Madeira desde 1917, foi criada
            oficialmente em 1982, com a abertura dos Grupos 92, 101 e 102, que
            se juntaram ao Grupo 24 que reabriu em 1968.
          </p>
          <p className="mb-2">
            Despois daqueles, a Região da Madeira já contou com os Grupos 106,
            108, 161, 194, 198, 201, 228, 241 e 247
          </p>
        </div>
      </section>
      <section className="max-w-7xl px-6  text-justify text-base/8  mx-auto text-zinc-700 sm:text-base/8 pb-24">
        <h2 className="sm:text-base/normal text-center mb-9 mt-15">
          A Chefia Regional
        </h2>
        <div>
          <p className="mb-2">
            Os Grupos de Escoteiros agrupam-se em Regiões nos termos do
            Regulamento Geral, com o propósito de contribuir para uma maior
            eficiência da sua ação e têm como órgão máximo deliberativo o
            Conselho Regional e como órgão executivo a Chefia Regional.
          </p>

          <p className="mb-2">
            As Regiões são as estruturas associativas intermédias, de âmbito
            regional, reguladas nos Estatutos.
          </p>
          <p className="mb-2">
            A criação de Regiões, designadamente o seu número, área geográfica e
            o número mínimo de Grupos, é definida em Conferência Nacional, para
            um período mínimo de 3 anos e de forma a garantir que todo o
            território nacional está abrangido por Regiões.
          </p>
          <p className="mb-2">
            O número mínimo para a existência e funcionamento de uma Região é de
            três Grupos e cada uma adota o nome que a própria decida na altura
            da sua criação, desde que reflita a abrangência geográfica.
          </p>
          <p className="mb-2">
            A Região da Madeira corresponde ao arquipélago da Madeira e, embora
            tenhamos evidências de escotismo na Madeira desde 1917, foi criada
            oficialmente em 1982, com a abertura dos Grupos 92, 101 e 102, que
            se juntaram ao Grupo 24 que reabriu em 1968.
          </p>
          <p className="mb-2">
            Despois daqueles, a Região da Madeira já contou com os Grupos 106,
            108, 161, 194, 198, 201, 228, 241 e 247
          </p>
        </div>
      </section>
    </>
  )
}
