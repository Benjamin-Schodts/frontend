import { getConf, getPages } from '../apolloClient/gqlQuery';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import Hero from './components/hero';
import HomepageCategories from './components/homepageCategories';
import Image from 'next/image';
import Link from 'next/link';
import Notification from './components/notification';
import client from '../apolloClient';
import getConfig from 'next/config';
import { getHomepage } from '../apolloClient/queries/getHomepage';
import styles from '../styles/Index.module.scss';
import { useRouter } from 'next/router';

export default function Home({ homepage }: any) {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>The Cheese Rebel</title>
				<meta name="description" content="The Cheese Rebel" />
			</Head>

			{homepage.homepage.notification ? (
				<Notification notification={homepage.homepage.notification} />
			) : null}
			{homepage.homepage.hero ? (
				<Hero
					hero={homepage.homepage.hero}
					size={homepage.homepage.size}
				/>
			) : null}

			<main className={styles.container}>
				{homepage.homepage.categories ? (
					<HomepageCategories
						categories={homepage.homepage.categories}
					/>
				) : null}
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const { data: homepage } = await client.query({
		query: getHomepage,
	});

	return { props: { homepage: homepage } };
}
