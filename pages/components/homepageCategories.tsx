import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/HomepageCategories.module.scss';

export default function Home({ categories }: any) {
	return (
		<div className={styles.categoriesList}>
			{categories?.map((category: any) => {
				return (
					<div key={category.id} className={styles.categoryContainer}>
						<Link
							href={`/${category.id}`}
							className={styles.categoryLink}
						>
							<div className={styles.categoryImageContainer}>
								<Image
									src={category.coverImage.publicUrl}
									alt={category.summary}
									className={styles.categoryImage}
									fill
								/>
							</div>
							<h2 className={styles.categoryTitle}>
								{category.title}
							</h2>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
