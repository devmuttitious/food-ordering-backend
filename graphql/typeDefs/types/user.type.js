import { gql } from 'apollo-server-express';

export const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;
