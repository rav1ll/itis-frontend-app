import { useMutation } from '@apollo/client';
import updateProject from 'api/mutations/updateProject';
import getCurrentUser from 'api/query/getCurrentUser';

const useUpdateProject = () => {
	const [mutation, { data }] = useMutation(updateProject, {
		refetchQueries: [{ query: getCurrentUser }]
	});

	const edit = async (name, description) => {
		await mutation({ variables: { name, description } });
	};

	return {
		edit,
		data
	};
};

export default useUpdateProject;
