import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import Image from "next/image";
import { perspective, slideIn } from "./anim";
import clsx from "clsx";

export default function Index() {
	return (
		<div className={styles.mainNav}>
			<div className={styles.nav}>
				<div className={clsx(styles.body)}>
					{links.map((link, i) => {
						const { title, href } = link;
						const isExternal = href.startsWith('http');
						return (
							<div key={`b_${i}`} className={styles.linkContainer}>
								<motion.a
									href={href}
									target={isExternal ? "_blank" : "_self"}
									rel={isExternal ? "noopener noreferrer" : ""}
									custom={i}
									variants={slideIn}
									initial="initial"
									animate="enter"
									exit="exit"
									className={styles.link}
								>
									{title}
									{isExternal && <span className="ml-1 text-xs">↗</span>}
								</motion.a>
							</div>
						);
					})}
				</div>
				<motion.div className={styles.footer}>
					{footerLinks.map((link, i) => {
						const { title, href } = link;
						return (
							<motion.a
								variants={slideIn}
								custom={i}
								initial="initial"
								animate="enter"
								exit="exit"
								key={`f_${i}`}
								href={href} // Ensure that href is included
								className={styles.footerLink}
							>
								{title}
							</motion.a>
						);
					})}
				</motion.div>
			</div>
			<div className="relative block w-[100vw] h-[50vh] pt-[100px]">
				<Image
					src="/b5.jpg"
					alt="Creative workspace background"
					objectFit="cover"
					width={1280}
					height={1080}
				/>
			</div>
		</div>
	);
}
