import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const Footer = () => (
    <footer>
        <div className='bottom-bar clearfix'>
            <div className='bottom-bar-content footer-wrapper clearfix'>
                <div className='bottom-bar-desc clearfix'>
                    <h3>OpenDumpster</h3>
                    <h4>Welcome to OpenDumpster, a clone of OpenTable created using Rails, Postgresql, and React/Redux.</h4>
                </div>


                <div className='bottom-bar-nav clearfix'>
                    <span>
                        <a href="http://www.github.com/kikicat-meows/opendumpster">
                            <FontAwesomeIcon icon={faGithub} className='font-awesome-icon' />
                        </a>
                    </span>
                    <span>
                        <a href="http://www.linkedin.com/in/helenkeicheung/">
                            <FontAwesomeIcon icon={faLinkedin} className='font-awesome-icon' />
                        </a>
                    </span>
                    <span>
                        <a href="mailto:helenkei.cheung@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className='font-awesome-icon' />
                        </a>
                    </span>
                </div>
            </div>
            
            <div className='bottom-bar-disc clearfix footer-wrapper'>
                <p>All images and information used on this site are sourced from various sites. I do not own the copyrights to any of them and do not use them for individual gains. OpenDumpster is meant to be a non-profit personal project.</p>
            </div>

        </div>
    </footer>
);

export default Footer;