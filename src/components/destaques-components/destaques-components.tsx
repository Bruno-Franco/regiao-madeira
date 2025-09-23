'use client'

import { useState } from 'react'

export function DestaquesComponents() {
  const [isOpen, setIsOpen] = useState<number | null>(null)

  function toggleArticle(id: number) {
    setIsOpen((prev) => (prev === id ? null : id))
  }

  return (
    <section className="p-6  text-justify text-base/7  mx-auto text-zinc-700 pb-28 bg-verde-scout/5 sm:text-base/8">
      <div>
        <h2 className="sm:text-base/normal text-center mb-20">
          {/* <span className="bg-linear-to-b from-white from-70% to-azul-scout/50 to-100% pb-0.5 px-6"> */}
          <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
            Destaques
          </span>
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        <article
          id="1"
          className={`${
            isOpen !== 1 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col transition-all`}
        >
          <h3 className=" border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Contrato-Programa com o Governo Regional da Madeira 2025
          </h3>
          <div className={`${isOpen !== 1 && 'line-clamp-7'} px-4 mt-4`}>
            <p>
              O reconhecimento do Governo Regional da Madeira, refletido no
              contrato-programa para 2025 assinado ontem no Centro de Juventude
              do Funchal, constitui um importantíssimo incentivo ao trabalho
              desenvolvido pelos Escoteiros de Portugal na região.
            </p>

            <p>
              Este apoio anual é fundamental para a prossecução dos propósitos
              do Movimento Escotista e para a realização das suas atividades.
              Trata-se de um dos principais fatores que, tal como em tantas
              outras áreas, contribuem para posicionar as crianças e os jovens
              associados a nível nacional e internacional.
            </p>

            <p>
              Tendo concretizado, no cômputo geral, um plano de cerca de 175
              atividades em 2024, o ano de 2025 apresenta-se como um novo
              desafio, prevendo-se que esse número seja ultrapassado.
            </p>

            <p>
              Com a intenção de abrir novos Grupos de Escoteiros e os esforços
              já em curso, este apoio permitirá alcançar ainda mais crianças e
              jovens em novas localidades.
            </p>
          </div>
          <div className=" flex flex-col justify-end  mt-auto   text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>
        <article
          id="2"
          className={`${
            isOpen !== 2 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col`}
        >
          <h3 className=" border-l-8  px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Conferência Nacional da Associação dos Escoteiros de Portugal 2025
          </h3>
          <div className={`${isOpen !== 2 && 'line-clamp-7'} px-4 mt-4`}>
            <p>
              No último fim de semana a Madeira marcou presença na Conferência
              Nacional dos Escoteiros de Portugal, em Faro. Uma presença que vem
              sendo constante nos últimos anos e uma representatividade
              importante para o Escotismo madeirense, numa sessão em que se
              discutem temas tão importantes como a revisão do uniforme!
            </p>

            <p>
              Um bem haja aos nossos dirigentes que assumem sempre
              &quot;prontidão&quot; nestas e noutras ocasiões, e à Direção
              Regional de Juventude que, através do programa &quot;Mais
              Mobilidade&quot;, permite-nos o acesso a eventos desta natureza em
              circunstâncias idênticas aos demais.
            </p>
          </div>
          <div className=" flex flex-col justify-end  mt-auto   text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>

        <article
          id="3"
          className={`${
            isOpen !== 3 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col`}
        >
          <h3 className=" border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Jubileu dos Jovens 2025
          </h3>
          <div className={`${isOpen !== 3 && 'line-clamp-7'} px-4 mt-4 `}>
            <p>
              O Escotismo, tal como concebido por Baden-Powell, é, na sua
              génese, um Movimento aberto a todos — interconfessional, plural e
              profundamente tolerante. Este é um princípio basilar para os
              Escoteiros de Portugal e constitui um dos pilares fundamentais da
              sua existência.
            </p>

            <p>
              É por isso que, inspirados por este valor essencial, incentivamos
              cada jovem a viver livremente e plenamente a sua fé, de forma
              ativa, consciente e autêntica.
            </p>
            <p>
              No passado sábado, os Grupos de Escoteiros da Região da Madeira,
              cujos elementos professam maioritariamente a fé católica, marcaram
              forte presença no Jubileu dos Jovens, promovido pela Diocese do
              Funchal. Este evento reuniu os escoteiros das três associações de
              cariz escotista da região e diversos grupos de jovens oriundos de
              várias paróquias, num ambiente de comunhão, alegria e esperança.
            </p>
            <p>
              Sob o lema &quot;Peregrinos de Esperança&quot;, os jovens
              participaram em dinâmicas e celebrações que reforçaram o seu
              compromisso com os valores da fé, do serviço e da fraternidade.
            </p>
            <p>
              A presença dos Escoteiros de Portugal neste encontro é reflexo do
              compromisso contínuo com a formação integral dos jovens, a
              vivência espiritual, o serviço e a integração comunitária.
            </p>
          </div>
          <div className=" flex flex-col justify-end mt-auto  text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>
        <article
          id="4"
          className={`${
            isOpen !== 4 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col`}
        >
          <h3 className=" border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Dia do Escoteiro 2025
          </h3>
          <div className={`${isOpen !== 4 && 'line-clamp-7'} px-4 mt-4 `}>
            <p>
              O escoteiro é, naturalmente, alguém que vive o encanto da Natureza
              e da vida ao ar livre. Então, para celebrar o Dia do Escoteiro,
              nada melhor do que juntar todos os escoteiros da Madeira no seu
              &quot;habitat&quot; natural!
            </p>

            <p>
              Foi isso que aconteceu no passado fim de semana grande, no dias 25
              e 26 de abril, onde, todos juntos no Montado do Pereiro, a nossa
              melhor e mais acarinhada &quot;Sede de Campo&quot;, não só
              celebramos o Movimento como conciliámos a atividade física com
              antigas tradições.
            </p>
            <p>
              Foram postos à prova os &quot;carrinhos de esferas&quot;
              (rolamentos) nas provas de perícia, e temos a dizer, estiveram
              todos muito bem! E nas provas de velocidade?
            </p>
            <p>
              Um fim de semana sem igual, de grande harmonia, diversão,
              camaradagem e tradição!
            </p>
          </div>
          <div className=" flex flex-col justify-end mt-auto  text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>
        <article
          id="5"
          className={`${
            isOpen !== 5 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col`}
        >
          <h3 className=" border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Dia Mundial da Atividade Física 2025
          </h3>
          <div className={`${isOpen !== 5 && 'line-clamp-7'} px-4 mt-4 `}>
            <p>
              A convite da Câmara Municipal do Funchal, pelo Departamento de
              Juventude e Desporto, para a celebração do Dia Mundial da
              Atividade Física 2025, os Escoteiros de Portugal dinamizaram uma
              das estações disponibilizadas no Parque Urbano da Nazaré.
            </p>

            <p>
              Numa abordagem mais escotista e tradicional, optamos por dar
              primazia aos jogos tradicionais com recurso aos materiais que,
              noutros tempos, as crianças e jovens tinham mais à mão e que tanto
              as deliciavam e que tanto as faziam &quot;mexer&quot;.
            </p>
            <p>
              Para além da estação dos Escoteiros de Portugal, os nossos jovens
              participaram e animaram grandemente todas as outras estações
              disponíveis.
            </p>
            <p>
              O nosso grande agradecimento ao Departamento de Juventude e
              Desporto por contarem sempre connosco!
            </p>
          </div>
          <div className=" flex flex-col justify-end mt-auto  text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>
        <article
          id="6"
          className={`${
            isOpen !== 6 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col`}
        >
          <h3 className=" border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Dia do Pensamento 2025
          </h3>
          <div className={`${isOpen !== 6 && 'line-clamp-7'} px-4 mt-4 `}>
            <p>UM DIA PARA RECORDAR!</p>
            <p>
              O Funchal encheu-se de cor, energia e espírito escutista e
              guidista neste Dia do Pensamento! De gincanas a corridas, de
              desafios a novas amizades, vivemos um dia repleto de paixão pelo
              escutismo e guidismo, honrando o legado do nosso fundador, Robert
              Baden-Powell.
            </p>

            <p>
              Há muito que não sentíamos um espírito escutista tão forte na
              nossa região! A união fantástica entre o Corpo Nacional de Escutas
              (CNE), a Associação de Escoteiros de Portugal (AEP) e a Associação
              Guias de Portugal (AGP) ficou bem evidente ao longo do dia. Cada
              associação, dentro das suas especificidades e tradições próprias,
              exaltou o que de mais valioso têm: o seu verdadeiro e único
              espírito escutista.
            </p>
            <p>
              A cerimónia oficial contou com a presença do Presidente do Governo
              Regional da Madeira, o Dr.Miguel Albuquerque, que destacou o papel
              essencial do escutismo na formação das crianças e jovens e na
              construção de uma sociedade mais justa e resiliente. Já a
              vereadora da Câmara Municipal do Funchal que detém a tutela da
              Juventude, Dra. Helena Leal, reforçou o compromisso do município
              em apoiar o desenvolvimento do escutismo e guidismo, garantindo
              condições para que continuem a criar impacto positivo na
              juventude.
            </p>
            <p>
              Agradecemos a Robert Baden-Powell por ter criado este movimento
              tão único, que continua a inspirar e a transformar gerações.
            </p>
            <p>O espírito escutista esteve mais vivo do que nunca.</p>
            <p>Até para o ano!</p>
          </div>
          <div className=" flex flex-col justify-end mt-auto  text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>
        <article
          id="7"
          className={`${
            isOpen !== 7 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col`}
        >
          <h3 className=" border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Conselho Regional | Fev
          </h3>
          <div className={`${isOpen !== 7 && 'line-clamp-7'} px-4 mt-4 `}>
            <p>
              Na verdade, o Escotismo acontece nos Grupos de Escoteiros, e esse
              é, e sempre terá que ser o foco, mas, para que isso aconteça com
              sucesso, os adultos voluntários têm muito a fazer!
            </p>
            <p>
              O Conselho Regional, Assembleia Geral da Região da Madeira, órgão
              máximo da região, reuniu-se no passado sábado, dia 1, para votar o
              Relatório de Atividades e Contas de 2024, bem como o Plano de
              Atividades e Orçamento de 2025, documentos estruturantes aprovados
              por unanimidade!
            </p>

            <p>
              lém disso, num compromisso de transparência para com os Grupos e
              seus dirigentes, a Chefia Regional apresentou o seu plano de ação
              para o mesmo período.
            </p>
            <p>
              Agradecendo a confiança e o retorno dos Grupos, que têm sido
              extremamente positivos e reforçam a motivação no trabalho, estamos
              convictos de que estamos no caminho certo!
            </p>
          </div>
          <div className=" flex flex-col justify-end mt-auto  text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>
        <article
          id="8"
          className={`${
            isOpen !== 8 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col`}
        >
          <h3 className=" border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Compromisso de Honra e Tomada de Posse
          </h3>
          <div className={`${isOpen !== 8 && 'line-clamp-7'} px-4 mt-4 `}>
            <p>Uma nova equipa, uma nova etapa e, espera-se, uma nova era!</p>
            <p>
              Na presença de Rafaela Fernandes, Secretária Regional da
              Agricultura, Pescas e Ambiente, André Alves, Diretor Regional da
              Juventude, em representação da Secretária Regional Inclusão,
              Trabalho e Juventude, de Filipa Gomes, Chefe de Divisão de
              Juventude em representação da Vereadora da Câmara Municipal do
              Funchal com o pelouro da juventude e de Manuel Filipe, Presidente
              do Instituto das Florestas e Conservação da Natureza, a
              Escoteira-Chefe Nacional Ana Proença, recebeu o Compromisso de
              Honra e empossou Paulo Renato Gomes como Presidente da Mesa do
              Conselho Regional e Hélder Jardim como Escoteiro-Chefe Regional.
              De seguida, este último, recebeu o Compromisso de Honra de cada
              membro da sua equipa, dando-lhes, igualmente posse nos respetivos
              cargos.
            </p>

            <p>
              Na sua intervenção, o Escoteiro-Chefe Regional agradeceu a
              presença de todos, em particular das entidades públicas
              representadas, pela demonstração de carinho, reconhecimento e
              incondicional apoio para com o Movimento, à Chefia Nacional pela
              constante proximidade, a todos os presentes e, naturalmente, à
              equipa que lidera nesta jornada, pela amizade e confiança.
            </p>
            <p>
              A Escoteira-Chefe Nacional, confirmou e reforçou a confiança que
              os Escoteiros de Portugal depositam nesta equipa e na Região
              Escotista da Madeira.
            </p>
            <p>
              O Diretor Regional de Juventude, de igual modo, referiu reconhecer
              a competência desta nova equipa e garantiu que, da parte da
              tutela, todos os apoios possíveis estão disponíveis, desejando os
              maiores êxitos para o árduo trabalho que se aproxima.
            </p>
            <p>
              Já Rafaela Fernandes, Secretária Regional da Agricultura, Pescas e
              Ambiente, louvou a dedicação e empenho dos Escoteiros de Portugal,
              os seus projetos e ações, sempre em prol da educação das crianças
              e jovens, e muito particularmente esta equipa, na qual tem o
              prazer de ter amigos de longa data. Referiu ainda que o Governo
              Regional está atento e incentiva fortemente os projetos escotistas
              na Madeira, estando as suas propostas contempladas em ações
              futuras, nomeadamente, na reabilitação do Montado do Pereiro.
            </p>
          </div>
          <div className=" flex flex-col justify-end mt-auto  text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>
        <article
          id="9"
          className={`${
            isOpen !== 9 && 'max-h-[550px] h-[550px]'
          } pb-6   bg-white rounded-xs shadow-sm flex flex-col`}
        >
          <h3 className=" border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold">
            Encontro Regional do Associativismo Juvenil e Estudantil
          </h3>
          <div className={`${isOpen !== 9 && 'line-clamp-7'} px-4 mt-4 `}>
            <p>
              A Região da Madeira esteve representada no Encontro Regional do
              Associativismo Juvenil e Estudantil! Iniciativa da Secretaria
              Regional da Inclusão, Trabalho e Juventude, através da Direção
              Regional de Juventude, da maior importância para a auscultação das
              associações e dos jovens!
            </p>
            <p>
              Jovens Escoteiros e jovens dirigentes, marcaram presença em ambos
              o temas abordados, dando conta das suas perspectivas e
              enriquecendo-as através das perspectivas dos demais.
            </p>
          </div>
          <div className=" flex flex-col justify-end mt-auto  text-center px-4 ">
            <button
              onClick={(e) => {
                const id = Number(e.currentTarget.parentNode?.parentElement?.id)
                toggleArticle(id)
              }}
              className="bg-verde-scout px-8 py-2 text-azul-scout font-medium hover:bg-azul-scout hover:text-white hover:font-medium transition"
            >
              Info...
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
