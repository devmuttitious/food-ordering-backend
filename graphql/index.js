// /graphql/index.js
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs/index.js'; 
import { resolvers } from './resolvers/index.js';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const createApolloServer = async () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      try {
        const authHeader = req.headers.authorization || '';
        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

        if (!token) return {};

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
          console.warn('User not found for decoded token');
          return {};
        }

        return { user };
      } catch (err) {
        console.error('Authentication error:', err.message);
        return {};
      }
    },
    introspection: true, 
    playground: true     
  });
};
