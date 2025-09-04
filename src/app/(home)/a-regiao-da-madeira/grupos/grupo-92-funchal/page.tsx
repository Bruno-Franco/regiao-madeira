import Image from 'next/image'
import { PhoneCall, MailIcon, GlobeIcon, Facebook, MapIcon } from 'lucide-react'
import Link from 'next/link'

export default function Grupo92FunchalPage() {
  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8">
      <h1 className="sm:text-base/normal text-center mb-9 mt-10">
        {/* <span className="bg-linear-to-b from-white from-70% to-azul-scout/50 to-100% pb-0.5 px-6"> */}
        <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
          Grupo 92 Funchal
        </span>
      </h1>
      <div className="flex flex-col sm:flex-row  my-15  sm:justify-start content-center gap-8 ">
        <div className="sm:w-1/3 md:w-1/4">
          <div className="min-w-[200px] w-[200px] p-4 bg-white rounded-md shadow-lg mx-auto sm:mr-auto">
            <Image
              src="/marta-luis.png"
              alt="Imagem da Região Madeira"
              height={500}
              width={200}
            />
          </div>
        </div>
        <div className="sm:w-2/3  md:w-3/4 my-auto">
          <h3 className="font-bold">Contatos</h3>
          <Link
            href="https://www.google.com/maps/place/Grupo+92+AEP+-+Funchal/@32.6471163,-16.9001343,17z/data=!3m1!4b1!4m6!3m5!1s0xc6061003ff3a3bd:0xc9826d2220404f69!8m2!3d32.6471163!4d-16.8975594!16s%2Fg%2F11mc9f8y1_?hl=pt-PT&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
            className="flex gap-1 w-fit"
            target="_blank"
          >
            <MapIcon className="w-[20px]" /> Largo do Socorro, n.º 1,
            <br />
            Santa Maria Maior, Portugal, 9060-305 FUNCHAL
          </Link>

          <Link
            href="tel:00351962812390"
            className="flex gap-1 w-fit"
          >
            <PhoneCall className="w-[20px]" /> 962812390
          </Link>

          <Link
            href="mailto:grupo92@escoteiros.pt"
            className="flex gap-1 w-fit"
          >
            <MailIcon className="w-[20px]" /> grupo92@escoteiros.pt
          </Link>

          <Link
            href="https://www.facebook.com/Grupo92aep"
            target="_blank"
            className="flex gap-1 w-fit"
          >
            <Facebook className="w-[20px]" /> Facebook
          </Link>
          <Link
            href="https://grupo92.vercel.app/"
            target="_blank"
            className="flex gap-1 w-fit"
          >
            <GlobeIcon className="w-[20px]" /> grupo92.vercel.app
          </Link>
        </div>
      </div>
      <div className="my-7">
        <p className="mb-2">
          Grupo 92 da Associação dos Escoteiros de Portugal foi fundado,
          oficialmente, a 22 de fevereiro de 1982. Mas, a primeira das reuniões
          aconteceu a 13 de fevereiro, na casa do então chefe de grupo, Saúl
          Tomás Ribeiro de Sousa, que na companhia de dirigentes como Jacinta
          Sousa e Maria José Sousa, deu origem a um projeto que iria continuar
          até aos dias de hoje.
        </p>
        <p className="mb-2">
          Os primeiros elementos do Grupo eram, na sua maioria lobitos, mas,
          também existiam alguns elementos da tribo júnior que acabariam por dar
          origem às quatro primeiras patrulhas, Moby-Dick, Foca, Tubarão e
          Espadarte. Nomes em acordo com a sua génese, Grupo Marítimo, que
          durante largos anos vestiu uniforme de cor azul.
        </p>
        <p className="mb-2">
          Ao longo dos seus 43 anos de existência, o Grupo 92 participou em
          diversas atividades nacionais e regionais da AEP regionais do CNE e em
          intercâmbios realizados com grupos continentais.
        </p>
        <p className="mb-2">
          Sendo o lenço o principal elemento do uniforme dos grupos da AEP, não
          só pelo seu simbolismo, mas porque representa a identidade de cada
          grupo, o Grupo 92 tem o seu lenço, de cor branca, que representa a
          honra e a pureza de espírito que o Escotismo procura desenvolver, e
          azul, que representa o mar que nos rodeia e o céu que nos ilumina.
        </p>
        <p className="mb-2">
          Conforme atrás referimos, a primeira reunião do Grupo decorreu a 13 de
          fevereiro de 1982 na casa do Chefe Saúl Sousa, e durante este ano de
          1982 e março de 1985, o grupo utilizou as instalações da antiga FAOJ
          como sede, tendo se mudado nessa altura para o Ateneu Comercial do
          Funchal, onde participa em diversas atividades organizadas por aquela
          instituição, como sejam a Festa da Flor, a Mostra do Sapatinho e a
          Mostra do Antúrio, entre outras atividades.
        </p>
        <p className="mb-2">
          Em janeiro de 1988, o Grupo deixa o Ateneu Comercial do Funchal e
          muda-se para as suas actuais instalações, ao Largo do Socorro nº1,
          junto ao Socorro. A partir daí passa a ter um papel activo na
          comunidade, não só participando em actividades de paróquia como em
          outros encontros sociais, colaborando ainda com diversas instituições
          particulares de solidariedade social, com destaque para o Patronato de
          Nossa Senhora das Dores, bem como com associações beneméritas, desde a
          Cruz Vermelha à Liga Portuguesa Contra o Cancro, passando pela
          Fundação Portuguesa de Cardiologia, e pala Cáritas que nos distinguiu
          com a Ordem de Benemérito da Caritas em 2009.
        </p>
        <p className="mb-2">
          Ao longo destes 43 anos, de um pequeno grupo tornou-se um dos maiores
          do país nos anos 90, com um efetivo de quase 200 elementos, a
          desenvolver toda a atividade escotista numa pequena sala cedida pela
          paróquia do Socorro. Atualmente, com um efetivo de 54 elementos, o
          espírito mantém-se e continuamos com a ambição de continuar a trilhar
          o caminho de BP, procurando cumprir com o que ele mais pretendia:
          divulgar o Escotismo e promover o convívio entre os jovens.
        </p>
        <p className="mb-2">Acima de tudo somos ESCOTEIROS!</p>
      </div>
    </section>
  )
}
