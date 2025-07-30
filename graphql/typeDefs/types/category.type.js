import { gql } from 'apollo-server-express';

export const categoryType = gql`
  type Category {
    id: ID!
    name: String!
    description: String
  }
`;
