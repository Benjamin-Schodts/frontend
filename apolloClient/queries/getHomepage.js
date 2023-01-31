import { gql } from '@apollo/client';

export const getHomepage = gql`
	query {
		homepage {
			id
			hero {
				title
				subtitle
				image {
					id
					filename
					originalFilename
					mimetype
					encoding
					publicUrl
				}
			}
			size
			notification {
				text
				buttonText
				buttonLink
			}
			categories {
				id
				title
				summary
				coverImage {
					id
					filename
					originalFilename
					mimetype
					encoding
					publicUrl
				}
			}
		}
	}
`;
