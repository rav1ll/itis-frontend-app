import { gql } from '@apollo/client';

export default gql`mutation destroyProject($id: ID!)
  
      {destroyProject(projectid: $id)}
';
