import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
			<div className={classes.footerBlock}>
				<div className={classes.footerLogo}>
					<a href="#">Вячеслав</a>
				</div>
				<ul className={classes.footerSocial}>
					<li className={classes.footerLink}>
						<a href="#">Facebook</a>
					</li>
					<li className={classes.footerLink}>
						<a href="#">VK</a>
					</li>
					<li className={classes.footerLink}>
						<a href="#">Instagram</a>
					</li>
					<li className={classes.footerLink}>
						<a href="#">Ok</a>
					</li>															
				</ul>	
			</div>
    </footer>
  );
}

export default Footer;
