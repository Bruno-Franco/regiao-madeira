import Image from 'next/image'
import { PhoneCall, MailIcon, Facebook, MapIcon } from 'lucide-react'
import Link from 'next/link'

export default function Grupo24FunchalPage() {
  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8">
      <h1 className="sm:text-base/normal text-center mb-9 mt-10">
        {/* <span className="bg-linear-to-b from-white from-70% to-azul-scout/50 to-100% pb-0.5 px-6"> */}
        <span className="bg-azul-scout text-white pl-2 pr-4 py-2 font-bold border-l-8 border-verde-scout">
          Grupo 24 Funchal
        </span>
      </h1>
      <div className="flex flex-col sm:flex-row  my-15  sm:justify-start content-center gap-8 ">
        <div className="sm:w-1/3 md:w-1/4">
          <div className="min-w-[200px] w-[200px] p-4 bg-white rounded-md shadow-lg mx-auto sm:mr-auto">
            <Image
              src="/simao-pereira.png"
              alt="Imagem da Região Madeira"
              height={500}
              width={200}
            />
          </div>
        </div>
        <div className="sm:w-2/3  md:w-3/4 my-auto">
          <h3 className="font-bold">Contatos</h3>
          <Link
            href="https://www.google.com/maps/place/Caminho+do+Lombo+dos+Aguiares+73,+9020-095+Funchal/@32.6757394,-16.9412395,17z/data=!3m1!4b1!4m6!3m5!1s0xc605fb52afa501d:0xa1fb40d06c74816d!8m2!3d32.6757394!4d-16.9386646!16s%2Fg%2F11mcxlljwf?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
            className="flex gap-1 w-fit"
            target="_blank"
          >
            <MapIcon className="w-[20px]" /> Caminho do Lombo dos Aguiares, n.º
            73 , <br />
            Santo António, Madeira, Portugal, 9020-095 FUNCHAL
          </Link>

          <Link
            href="tel:00351963041668"
            className="flex gap-1 w-fit"
          >
            <PhoneCall className="w-[20px]" /> 963041668
          </Link>

          <Link
            href="mailto:grupo24@escoteiros.pt"
            className="flex gap-1 w-fit"
          >
            <MailIcon className="w-[20px]" /> grupo24@escoteiros.pt
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100064892162270"
            target="_blank"
            className="flex gap-1 w-fit"
          >
            <Facebook className="w-[20px]" /> Facebook
          </Link>
        </div>
      </div>
      <div className="my-7">
        <p className="mb-2">
          O Grupo 24 - Funchal foi fundado em 1931, tendo como Escoteiro-Chefe
          do Grupo Humberto Gomes de Freitas, um entusiasta do Escotismo.
        </p>
        <p className="mb-2">
          Em princípio de 1937 o Chefe Gomes de Freitas pediu uma licença
          ilimitada, tendo o Grupo 24 suspendido a sua atividade.
        </p>
        <p className="mb-2">
          Como pontos relevantes deste período é de assinalar a receção, no
          Funchal, de Hubert Martin, prestigioso diretor da Secretaria
          Internacional de Escotismo, que tinha então a Sede em Londres, a
          participação do grupo no Acampamento Nacional do Porto, em 1934, e a
          presença, em 1937, no Jamboree em Godolo, na Hungria, tendo sido os
          únicos escoteiros portugueses que ali estiveram presentes.{' '}
        </p>
        <p className="mb-2">
          Em 10 de junho de 1969, pela mão do Chefe António Pestana, um
          ex-dirigente do Corpo Nacional de Escutas, o Grupo foi reorganizado e
          reaberto, com o compromisso de honra de todo o seu efetivo.
        </p>
        <p className="mb-2">
          A partir da reabertura, e por não existir registo da data da sua
          fundação, o dia 10 de junho passou a ser comemorado como o dia do
          aniversário do Grupo.
        </p>
        <p className="mb-2">
          Em outubro de 1974, e após ter perdido as suas instalações devido ao
          25 de abril, o Grupo passou a ficar sedeado na Rua da Mouraria, 34.{' '}
        </p>
        <p className="mb-2">
          Com a saída, em 1975, do Chefe Pestana, foi eleito para Chefe de Grupo
          o caminheiro Filipe Manuel Abreu Faria, que lhe imprimiu um grande
          dinamismo e o tornou numa entidade da AEP ativa e empreendedora, que
          muito prestigiou o Movimento na Madeira.
        </p>
        <p className="mb-2">
          Desde então, naturalmente com alguns de menor dinâmica, o Grupo vem
          mantendo um funcionamento regular e ativo, sobretudo desde 2014,
          contando atualmente com um efetivo de cerca de 50 elementos e o grupo
          de dirigentes coeso e comprometido.
        </p>
      </div>
    </section>
  )
}
