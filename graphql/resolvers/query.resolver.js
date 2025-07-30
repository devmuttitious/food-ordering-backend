import { userResolvers } from './user.resolver.js';
import { categoryResolvers } from './category.resolver.js';
import { customizationResolvers } from './customization.resolver.js';
import { menuResolvers } from './menu.resolver.js';

export const Query = {
  ...userResolvers.Query,
  ...categoryResolvers.Query,
  ...customizationResolvers.Query,
  ...menuResolvers.Query,
};
