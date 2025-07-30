import { gql } from 'apollo-server-express';

export const userInput = gql`
  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;
