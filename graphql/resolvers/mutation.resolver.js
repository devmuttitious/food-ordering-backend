import { authResolvers } from './auth.resolver.js';
import { categoryResolvers } from './category.resolver.js';
import { customizationResolvers } from './customization.resolver.js';
import { menuResolvers } from './menu.resolver.js';

export const Mutation = {
  ...authResolvers.Mutation,
  ...categoryResolvers.Mutation,
  ...customizationResolvers.Mutation,
  ...menuResolvers.Mutation,
};
