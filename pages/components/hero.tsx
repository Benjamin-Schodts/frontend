import Image from 'next/image';
import styles from '../../styles/Hero.module.scss';

export default function Home({ hero, size }: any) {
	return (
		<div className={`${styles.heroWrapper} ${styles[size]}`}>
			<div className={styles.imageWrapper}>
				<Image
					priority
					src={hero?.image.publicUrl}
					fill
					className={styles.image}
					alt="hero image example"
				/>
			</div>

			<div className={styles.content}>
				<h1 className={styles.title}>{hero?.title}</h1>
				<p className={styles.subtitle}>{hero?.subtitle}</p>
			</div>
		</div>
	);
}
