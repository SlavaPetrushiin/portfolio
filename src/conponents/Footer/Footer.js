import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer className={classes.footer}>
			<div className={classes.footerBlock}>
				<div className={classes.footerLogo}>
					<a href="#" target="_blank">Вячеслав Петрушин</a>
				</div>
				<ul className={classes.footerSocial}>
					<li className={classes.footerLink}>
						<a href="#" target="_blank" rel="noreferrer noopener">
							<FontAwesomeIcon icon={['fab', 'facebook']} />
						</a>
					</li>
					<li className={classes.footerLink}>
						<a href="https://vk.com/id58620112" target="_blank" rel="noreferrer noopener">
							<FontAwesomeIcon icon={['fab', 'vk']} />
						</a>
					</li>
					<li className={classes.footerLink}>
						<a href="#" target="_blank" rel="noreferrer noopener">
							<FontAwesomeIcon icon={['fab', 'instagram']}/>
						</a>
					</li>
					<li className={classes.footerLink}>
						<a href="#" target="_blank" rel="noreferrer noopener">
							<FontAwesomeIcon icon={['fab', 'telegram']}/>
						</a>
					</li>					
				</ul>	
			</div>
    </footer>
  );
}

export default Footer;
