import Image from 'next/image'
import { InstitucionalCardComponent } from '../../../components/institucional-component/institucional-component'
import Link from 'next/link'

interface LinksInterface {
  id: number
  title: string
  href: string
}

export default function Institucional() {
  const linksInstitucional: LinksInterface[] = [
    {
      id: 0,
      title: 'Estatutos',
      href: 'https://escoteiros.pt/wp-content/uploads/2018/07/Estatutos_AEP_2018.pdf',
    },
    {
      id: 1,
      title: 'Regulamento Geral 2021',
      href: 'https://escoteiros.pt/wp-content/uploads/2022/09/Regulamento-Geral-AEP2021.pdf',
    },
    {
      id: 2,
      title: 'Regulamento de Uniformes e Símbolos',
      href: 'https://escoteiros.pt/wp-content/uploads/2021/02/Regulamento-Uniformes-e-Simbolos-2019.pdf',
    },
    {
      id: 3,
      title: 'Política Ambiental',
      href: 'https://escoteiros.pt/wp-content/uploads/2017/04/Politica-Ambiental-AEP.pdf',
    },
    {
      id: 4,
      title: 'Programa para Jovens',
      href: 'https://escoteiros.pt/wp-content/uploads/2025/01/RegulamentoPPJ_2023.pdf',
    },
    {
      id: 5,
      title: 'Política de Recursos Adultos',
      href: 'https://escoteiros.pt/wp-content/uploads/2017/04/Politica-de-recursos-adultos-da-AEP.pdf',
    },
    {
      id: 6,
      title: 'Política de Proteção de Crianças e Jovens',
      href: 'https://escoteiros.pt/wp-content/uploads/2017/06/Pol%C3%ADtica-de-Prote%C3%A7%C3%A3o-de-Crian%C3%A7as-e-Jovens_2017.pdf',
    },
    {
      id: 7,
      title: 'Código de Conduta',
      href: 'https://escoteiros.pt/wp-content/uploads/2018/02/C%C3%B3digo-de-Conduta_2017.pdf',
    },
    {
      id: 8,
      title: 'Estatutos da Federação Escotista de Portugal',
      href: 'https://escoteiros.pt/wp-content/uploads/2017/04/estautos-FEP.pdf',
    },
    {
      id: 9,
      title:
        'Constituição e Regulamento da Organização Mundial do Movimento Escotista (OMME / WOSM)',
      href: 'https://escoteiros.pt/wp-content/uploads/2017/04/WOSM.pdf',
    },
  ]
  return (
    <section className="max-w-7xl p-6  text-justify text-base/7  mx-auto text-zinc-700 sm:text-base/8 pb-24">
      <h2 className="sm:text-base/normal text-center mb-25 mt-15">
        Aqui poderá encontrar parte da legislação referente aos escoteiros de
        Portugal e o link para o Site Nacional
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {linksInstitucional.map((card) => {
          const { id, href, title } = card
          return (
            <div key={id}>
              <InstitucionalCardComponent
                href={href}
                title={title}
              />
            </div>
          )
        })}
      </div>
      <div>
        <h2 className="sm:text-base/normal text-center mb-25 mt-34">
          Escoteiros de Portugal (link)
        </h2>
        <div className="flex justify-center">
          <Link
            href="https://escoteiros.pt/"
            target="_blank"
          >
            <Image
              src="/nacional-escotismo-para-todos.jpg"
              alt="Logo Escoteiros de Portugal"
              height={100}
              width={300}
              className="hover:scale-101 hover:shadow-sm transition-all delay-100"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
