export const userResolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new Error("Not authenticated");
      return user;
    },
  },
  User: {
    id: (user) => user._id.toString(),
  },
};
