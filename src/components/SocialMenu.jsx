import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faLinkedin)


function SocialMenu() {
    return (
        <div className="flex justify-center items-center">
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0 delay-75">
                <a href="https://github.com/masudme09"
                    target='_blank' rel="noreferrer"
                    className="hover:text-secondary-dark text-purple-50">
                    <FontAwesomeIcon className="p-2 text-3xl" icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/masud-rana-60b325a6/"
                    target='_blank' rel="noreferrer"
                    className="hover:text-secondary-dark text-purple-50">
                    <FontAwesomeIcon className="p-2 text-3xl" icon={faLinkedin} /></a>
            </div>
        </div>
    )
}

export default SocialMenu;