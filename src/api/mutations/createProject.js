import { gql } from '@apollo/client';

export default gql'mutation createProject
                  ($name: !string, $description: string)
                        {createProject(name: $name, description: $description)
  {
    description
    name
  }
}';
