import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import PricingCards from '@/components/PricingCards'
import ContactForm from '@/components/ContactForm'
import PackagesPreview from '@/components/PackagesPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PackagesPreview />
      <ServicesGrid />
      <PricingCards />
      <ContactForm />
    </>
  )
}
