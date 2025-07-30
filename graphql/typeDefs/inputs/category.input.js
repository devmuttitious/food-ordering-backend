import { gql } from 'apollo-server-express';

export const categoryInput = gql`
  input CategoryInput {
    name: String!
    description: String
  }

  input UpdateCategoryInput {
    name: String
    description: String
  }
`;
