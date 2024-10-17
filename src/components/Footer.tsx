
import { useTranslations } from 'next-intl'
import SocialMedia from './SocialMedia'

const Footer = () => {
  const t = useTranslations("footer")
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} KENNE TCHINDA Patrick. {t("droits_reserves")}.</p>
          {/* Social Media */}
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}

export default Footer
