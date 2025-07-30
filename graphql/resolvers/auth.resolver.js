import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';

export const authResolvers = {
  Mutation: {
    register: async (_, { input }) => {
      const { name, email, password } = input;
      const existing = await User.findOne({ email });
      if (existing) throw new Error("User already exists");

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar: `https://ui-avatars.com/api/?name=${name.replace(" ", "+")}`,
      });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return { token, user };
    },

    login: async (_, { input }) => {
      const { email, password } = input;
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error("Invalid credentials");

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return { token, user };
    },
  }
};
