
import { useTranslations } from 'next-intl'
import React from 'react'

const Footer = () => {
  const t = useTranslations("footer")
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} KENNE TCHINDA Patrick. {t("droits_reserves")}.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/patrick-kenne-tchinda-3806391b9" target='_blank' className="hover:text-primary transition-colors"><i className="fab fa-linkedin text-2xl"></i></a>
            <a href="https://github.com/patson120" target='_blank' className="hover:text-primary transition-colors"><i className="fab fa-github text-2xl"></i></a>
            <a href="https://www.linkedin.com/in/patrick-kenne-tchinda-3806391b9" target='_blank' className="hover:text-primary transition-colors"><i className="fab fa-twitter text-2xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
