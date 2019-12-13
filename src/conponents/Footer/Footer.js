import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer className={classes.footer}>
			<div className={classes.footerBlock}>
				<div className={classes.footerLogo}>
					<a href="#">Вячеслав Петрушин</a>
				</div>
				<ul className={classes.footerSocial}>
					<li className={classes.footerLink}>
						<a href="#">
							<FontAwesomeIcon icon={['fab', 'facebook']} />
						</a>
					</li>
					<li className={classes.footerLink}>
						<a href="#">
							<FontAwesomeIcon icon={['fab', 'vk']} />
						</a>
					</li>
					<li className={classes.footerLink}>
						<a href="#">
							<FontAwesomeIcon icon={['fab', 'instagram']}/>
						</a>
					</li>
				</ul>	
			</div>
    </footer>
  );
}

export default Footer;
