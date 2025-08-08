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
        <div className="pt-15 pb-6">
          <h2 className="sm:text-base/normal text-center mb-9">
            {/* <span className="bg-linear-to-b from-white from-70% to-azul-scout/50 to-100% pb-0.5 px-6"> */}
            <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
              A Região da Madeira
            </span>
          </h2>
        </div>

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
            Despois daqueles, a Região da Madeira já contou com os Grupos{' '}
            <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
              106, 108, 161, 194, 198, 201, 228, 241 e 247
            </span>
          </p>
        </div>
      </section>
      <div className="bg-verde-scout/10 pt-20">
        <section className="max-w-7xl px-6  text-justify text-base/8  mx-auto text-zinc-700 sm:text-base/8 pb-24">
          <div className="flex flex-col gap-4 mb-20">
            <h2 className="sm:text-base/normal text-center">A Nossa Equipa</h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2  gap-8 mb-9 max-w-[1000px] mx-auto">
            <div className="w-[180px] p-4 bg-white rounded-md shadow-lg md:col-span-3  col-span-2 mx-auto">
              <Image
                src="/helder-jardim.png"
                alt="Imagem da Região Madeira"
                height={500}
                width={200}
              />
            </div>
            <div className="min-w-[160px] w-[160px] p-4 bg-white rounded-md shadow-lg mx-auto">
              <Image
                src="/simao-pereira.png"
                alt="Imagem da Região Madeira"
                height={500}
                width={200}
              />
            </div>
            <div className="min-w-[160px] w-[160px] p-4 bg-white rounded-md shadow-lg mx-auto">
              <Image
                src="/marta-luis.png"
                alt="Imagem da Região Madeira"
                height={500}
                width={200}
              />
            </div>
            <div className="min-w-[160px] w-[160px] p-4 bg-white rounded-md shadow-lg mx-auto">
              <Image
                src="/fernando-vieira.png"
                alt="Imagem da Região Madeira"
                height={500}
                width={200}
              />
            </div>
            <div className="min-w-[160px] w-[160px] p-4 bg-white rounded-md shadow-lg mx-auto">
              <Image
                src="/cristina-lopes.png"
                alt="Imagem da Região Madeira"
                height={500}
                width={200}
              />
            </div>
            <div className="min-w-[160px] w-[160px] p-4 bg-white rounded-md shadow-lg mx-auto">
              <Image
                src="/jose-simao.png"
                alt="Imagem da Região Madeira"
                height={500}
                width={200}
              />
            </div>
            <div className="min-w-[160px] w-[160px] p-4 bg-white rounded-md shadow-lg mx-auto">
              <Image
                src="/debora-franco.png"
                alt="Imagem da Região Madeira"
                height={500}
                width={200}
              />
            </div>
          </div>
          <div>
            <h3 className="sm:text-base/normal text-left mb-4">
              Nossas Responsabilidades...
            </h3>
            <p className="mb-10">
              A Chefia Regional é o órgão executivo da região e é constituída
              pelo Escoteiro-Chefe Regional e os Escoteiros-Chefes Regionais
              Adjuntos, eleitos por lista, com uma composição de três, cinco ou
              sete Dirigentes e tem por atribuições:
            </p>

            <ul className="grid sm:grid-cols-2 gap-8 ">
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Prestar todo o apoio e suporte aos Grupos e Dirigentes da
                Região;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Executar as deliberações do Conselho Regional;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Promover a qualidade do escotismo, o crescimento da Região,
                abertura de novos Grupos, organização de Núcleos e colaborar no
                recrutamento de novos elementos;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Apoiar e fiscalizar a gestão pedagógica, administrativa e
                financeira dos Grupos de Escoteiros e dos Núcleos da Região;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Assegurar a gestão administrativa, financeira e patrimonial da
                Região;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Representar a Região;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Coordenar as atividades regionais;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Organizar os Conselhos Regionais;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Elaborar anualmente e até fevereiro o Plano de Atividades e
                Orçamento da Região e submeter o mesmo ao Conselho Regional, que
                depois de aprovado, deverá ser enviado à Chefia Nacional;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Participar no processo de homologação de admissão, exoneração e
                de nomeação dos Dirigentes dos Grupos de Escoteiros na sequência
                de processo eleitoral ou por designação direta do órgão
                competente nos termos do Regulamento Geral;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Manter contacto assíduo com a Chefia Nacional, informando-a
                periodicamente do desenvolvimento do Escotismo na Região;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Apoiar as ações de formação da ENFIM (Escola Nacional de
                Formação de Insígnia de Madeira) na Região;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Incentivar a formação dos Dirigentes da Região nas funções que
                desempenham;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Homologar o Regulamento Interno dos Grupos de Escoteiros.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="bg-verde-scout/10 pt-20  bg-linear-to-b from-azul-scout from-20% sm:from-28%  to-verde-scout/10 to-20% sm:to-28% ">
        <section className="max-w-7xl px-6  text-justify text-base/8  mx-auto text-zinc-700 sm:text-base/8 pb-24">
          <div className="flex flex-col gap-4 mb-20">
            <h2 className="sm:text-base/normal text-center text-white font-bold">
              Conselho Regional
            </h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2  gap-8 mb-9 max-w-[1000px] mx-auto">
            <div className="w-[180px] p-4 bg-white rounded-md shadow-lg md:col-span-3  col-span-2 mx-auto">
              <Image
                src="/renato-gomes.png"
                alt="Imagem da Região Madeira"
                height={500}
                width={200}
              />
            </div>
          </div>
          <div>
            <p className="mb-2">
              O Conselho Regional é o órgão máximo deliberativo da região e é
              composto pela Mesa do Conselho Regional, que preside, pelos
              membros da Chefia Regional, pelas Chefias dos Grupos de Escoteiros
              e dois representantes membros da ENFIM (Escola Nacional de
              Formação de Insígnia de Madeira).
            </p>
            <p className="mb-10">Ao Conselho Regional compete:</p>

            <ul className="grid sm:grid-cols-2 gap-8 ">
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Definir a orientação geral da Região, em conformidade com o
                plano estratégico da AEP;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Discutir e votar, até ao final de fevereiro o Plano de
                Atividades e Orçamento e o Relatório de Atividades e Contas
                elaborados pela Chefia Regional;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Eleger e demitir a Chefia Regional e a Mesa do Conselho
                Regional;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Apreciar a atividade regional e os atos da Chefia Regional;
              </li>
              <li className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
                Definir os regulamentos da Região.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
