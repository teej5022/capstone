import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faLinkedin, faGithub, faInstagram);

const Contact = () => {
    return (
        <div className="contact">
            <p>Visit my LinkedIn page</p>
            <a href="https://www.linkedin.com/in/tj-schultz-72653356/" target="_blank">
                <div>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </div>
            </a>
            <div>
                <hr />
            </div>
            <p>Add me on Facebook</p>
            <a href="https://www.facebook.com/tj.schultz.3" target="_blank">
                <div>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </div>
            </a>
            <div>
                <hr />
            </div>
            <p>Check out my GitHub account</p>
            <a href="https://github.com/teej5022" target="_blank">
                <div>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </div>
            </a>
            <div>
                <hr />
            </div>
            <p>Look at my photos on Instagram.</p>
            <a href="https://www.instagram.com/strateejery5022/?hl=en" target="_blank">
                <div>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </div>
            </a>
        </div>
    )
};

export default Contact;