import React from 'react';
import classes from './Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <footer className={classes.footer}>
            <Fade bottom>
                <div className={classes.footerBlock}>
					<h2 className={classes.footerTitle}>Вячеслав Петрушин</h2>
					<div className={classes.socialLinks}>
						<div className={classes.footerLink}>
							<a href="https://www.facebook.com/profile.php?id=100014479392445" target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon icon={['fab', 'facebook']}/>
							</a>
						</div>
						<div className={classes.footerLink}>
							<a href="https://vk.com/id58620112" target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon icon={['fab', 'vk']}/>
							</a>
						</div>
						<div className={classes.footerLink}>
							<a href="https://www.instagram.com/slava_petrushin_91/" target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon icon={['fab', 'instagram']}/>
							</a>
						</div>
						<div className={classes.footerLink}>
							<a href="#" target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon icon={['fab', 'telegram']}/>
							</a>
						</div>
					</div>
                </div>
            </Fade>
        </footer>
    );
}

export default Footer;
