import { gql } from '@apollo/client';

export const getHomepage = gql`
	query {
		pages {
			id
			title
		}
	}
`;
