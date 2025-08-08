import Link from 'next/link'

interface InstitucionalProps {
  title: string
  href: string
}

export function InstitucionalCardComponent({
  href,
  title,
}: InstitucionalProps) {
  console.log(href, title)

  return (
    <article className="h-full">
      <Link
        href={href}
        target="_blank"
      >
        <p className="sm:text-base/normal flex items-center h-full border-l-8 px-4 border-verde-scout py-6 bg-azul-scout text-white font-bold hover:border-azul-scout hover:bg-verde-scout hover:text-azul-scout transition-all delay-75">
          {title}
        </p>
      </Link>
    </article>
  )
}
