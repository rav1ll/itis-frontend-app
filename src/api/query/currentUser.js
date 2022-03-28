import { gql } from '@apollo/client';
import project from '../fragments/project';

const USER_ME_QUERY = gql`
	query currentUser {
		me {
			avatarUrl
			email
			firstName
			id
			lastName
			projects {
				...ProjectFragment
			}
		}
	}
`;

export default async function currentUserQuery(client) {
	const {
		data: { me }
	} = await client.query({ query: USER_ME_QUERY });
	return me;
}
