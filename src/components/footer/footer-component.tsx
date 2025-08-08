import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-screen border-t-verde-scout border-t-4 bg-azul-scout">
      <div className="w-full max-w-screen-xl mx-auto px-1 py-4 md:py-8">
        <div className="max-sm:flex-col max-sm:flex sm:flex sm:items-center sm:justify-between  max-sm:items-center">
          <Link href="/">
            <Image
              src="/madeira-logo.jpeg"
              alt="Logo AEP Madeira"
              width={180}
              height={60}
              priority
            />
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 max-sm:mt-6">
            <li>
              <Link
                href={'/sobre-nos'}
                className="hover:underline me-4 md:me-6"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href={'/missao-valores'}
                className="hover:underline me-4 md:me-6"
              >
                Missão e Valores
              </Link>
            </li>
            <li>
              <Link
                href={'/ficha-de-inscricao'}
                className="hover:underline"
              >
                Ficha de Inscrição
              </Link>
            </li>
          </ul>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <hr className="my-6 border-t-1 sm:mx-auto border-t-gray-600 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center max-sm:text-center">
          © 2025{' '}
          <Link
            href="https://www.linkedin.com/in/bruno-santos-webdeveloper/"
            target="_blank"
            className="hover:underline"
          >
            Feito por, Bruno-Franco
          </Link>
          . Sempre Pronto ❤️.
        </span>
      </div>
    </footer>
  )
}
