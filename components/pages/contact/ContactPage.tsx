import { ContactHero } from '@/components/pages/contact/ContactHero'
import { ContactCallie } from '@/components/shared/ContactCallie'

export function ContactPage( props: any) {
  const {data} = props;

  return (
    <article className="bg-primary-dark">
      <ContactHero title={data.header} subtitle={data.subtitle} image={data.heroImage}/>
      <ContactCallie />
    </article>

  )
}

export default ContactPage
