import { Query } from './query.resolver.js';
import { Mutation } from './mutation.resolver.js';
import { userResolvers } from './user.resolver.js';
import { menuResolvers } from './menu.resolver.js';
import { categoryResolvers } from './category.resolver.js';
import { customizationResolvers } from './customization.resolver.js';

export const resolvers = {
  Query,
  Mutation,
  User: userResolvers.User,
  Menu: menuResolvers.Menu,
  Category: categoryResolvers.Category,
  Customization: customizationResolvers.Customization,
};
