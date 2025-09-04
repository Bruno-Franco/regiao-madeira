import Image from 'next/image'
import { PhoneCall, MailIcon, Facebook, MapIcon } from 'lucide-react'
import Link from 'next/link'

export default function Grupo101SantaLuziaPage() {
  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8">
      <h1 className="sm:text-base/normal text-center mb-9 mt-10">
        {/* <span className="bg-linear-to-b from-white from-70% to-azul-scout/50 to-100% pb-0.5 px-6"> */}
        <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
          Grupo 101 Santa Lusia
        </span>
      </h1>
      <div className="flex flex-col sm:flex-row  my-15  sm:justify-start content-center gap-8 ">
        <div className="sm:w-1/3 md:w-1/4">
          <div className="min-w-[200px] w-[200px] p-4 bg-white rounded-md shadow-lg mx-auto sm:mr-auto">
            <Image
              src="/fernando-vieira.png"
              alt="Imagem da Região Madeira"
              height={500}
              width={200}
            />
          </div>
        </div>
        <div className="sm:w-2/3  md:w-3/4 my-auto">
          <h3 className="font-bold">Contatos</h3>
          <Link
            href="https://www.google.com/maps/place/Grupo+101+Escoteiros+de+Portugal/@32.6552398,-16.9032155,17z/data=!3m1!4b1!4m6!3m5!1s0xc60614a891137cb:0xa40c86da4e2cb218!8m2!3d32.6552398!4d-16.9006406!16s%2Fg%2F11j0qxgryw?hl=pt-PT&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
            className="flex gap-1 w-fit"
            target="_blank"
          >
            <MapIcon className="w-[20px]" /> Rua do Matadouro, n.º 4 ,
            <br />
            Santa Luzia, Madeira, Portugal, 9050-100 FUNCHAL
          </Link>

          <Link
            href="tel:00351931018608"
            className="flex gap-1 w-fit"
          >
            <PhoneCall className="w-[20px]" /> 931018608
          </Link>

          <Link
            href="mailto:grupo101@escoteiros.pt"
            className="flex gap-1 w-fit"
          >
            <MailIcon className="w-[20px]" /> grupo101@escoteiros.pt
          </Link>

          <Link
            href="https://web.facebook.com/grupo101santaluzia?_rdc=1&_rdr#"
            target="_blank"
            className="flex gap-1 w-fit"
          >
            <Facebook className="w-[20px]" /> Facebook
          </Link>
        </div>
      </div>
      <div className="my-7">
        <p className="mb-2">
          Fundado oficialmente a 5 de dezembro de 1982, data do Compromissos de
          Honra dos elementos e dirigentes fundadores, na freguesia de Santa
          Luzia, com Sede nas instalações da Associação Cristã da Mocidade
          (ACM), e com o apoio daquela, no concelho do Funchal, conta já com
          mais de 40 anos de serviço ininterrupto ao serviço da juventude da
          Madeira e muito particularmente da juventude do concelho do Funchal,
          através do Escotismo e sua metodologia.
        </p>
        <p className="mb-2">
          o longo destes anos tem funcionado exclusivamente pelo voluntariado de
          adultos que, solenemente comprometidos com o Movimento, se dedicam à
          causa, principalmente, por crerem que constitui uma grande valia na
          educação dos jovens da nossa Região e da nossa cidade.
        </p>
        <p className="mb-2">
          Atualmente com cerca de 70 elementos, pelo Grupo já passaram mais de
          1000 escoteiros e mais de 60 dirigentes. Hoje, colocados nas mais
          diversas áreas profissionais e sociais, não esquecem os importantes
          momentos vividos nos acampamentos, nas atividades, na Sede e no
          Escotismo em geral, com amigos que levam para a vida.
        </p>
        <p className="mb-2">
          inal dessa importância é muitos deles trazerem, hoje, os filhos e
          sobrinhos e aconselharem os amigos a trazerem também os deles.
        </p>
        <p className="mb-2">
          O Grupo 101 – Santa Luzia sustenta-se na sinergia, esforço e dedicação
          dos vários adultos que compõem o seu corpo dirigente e das famílias
          que se identificam com a proposta educativa. Crianças, jovens,
          dirigentes e pais constituem aquilo que se designa carinhosamente de
          “A comunidade do Grupo”.
        </p>
        <p className="mb-2">
          No entanto, não deixa de ser, sempre, pretensão do Grupo atingir
          patamares sempre mais elevados e mais marcantes na educação de cada um
          dos seus elementos. O Grupo entende que a educação e a proposta
          Escotista tem de ser dinâmica e constantemente um processo
          “inacabado”. Daí que os novos projetos e os desafios constantes que se
          procuram, fazem do Grupo uma das unidades mais dinâmicas, mais
          sustentada e que das melhores ofertas tem, mesmo considerando as
          diferentes associações de índole escotista presentes na Madeira.
        </p>
        <p className="mb-2">
          O Grupo 101 – Santa Luzia recusa e combate arduamente a inércia que se
          observa atualmente nas crianças e jovens, propondo-lhes e
          desafiando-os a propor e preparar as mais diversas atividades, sejam
          de que caráter forem: cultural; ambiental; social; comunitário; lazer;
          etc…
        </p>
        <p className="mb-2">
          {' '}
          assim que se procura alcançar o objetivo primordial do Escotismo – a
          formação integral do jovem. Expor e proporcionar, dentro das mais
          estritas condições de segurança e acompanhamento, às crianças e
          jovens, as mais variadas experiências, obedecendo à metodologia da
          corresponsabilização própria do Movimento.
        </p>
      </div>
    </section>
  )
}
