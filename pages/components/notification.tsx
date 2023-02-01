import styles from '../../styles/Notification.module.scss';

export default function Home({ notification }: any) {
	return (
		<div className={styles.notificationWrapper}>
			<p className={styles.notificationText}>{notification?.text}</p>
			{notification?.buttonText && notification?.buttonLink ? (
				<a
					href={notification?.buttonLink}
					className={styles.notificationButton}
				>
					{notification?.buttonText}
				</a>
			) : null}
		</div>
	);
}
