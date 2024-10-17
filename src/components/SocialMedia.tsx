import { FC } from 'react'

type Props = {
    containerStyle?: string
}

const SocialMedia: FC<Props> = ({ containerStyle }) => {
    return (
        <div className={`flex text-center space-x-4 mt-4 md:mt-0  ${containerStyle}`}>
            <a href="https://www.linkedin.com/in/patrick-kenne-tchinda-3806391b9" target='_blank' className="hover:text-primary transition-colors"><i className="fab fa-linkedin text-2xl"></i></a>
            <a href="https://github.com/patson120" target='_blank' className="hover:text-primary transition-colors"><i className="fab fa-github text-2xl"></i></a>
            <a href="https://x.com/patrick1kenne" target='_blank' className="hover:text-primary transition-colors"><i className="fab fa-twitter text-2xl"></i></a>
        </div>
    )
}
export default SocialMedia