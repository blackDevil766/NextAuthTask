import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  // pages: {
  //     signIn: '/'
  // },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      authorize: async (credentials) => {
        const { email, password } = credentials;
        if (email == "ahmedallam0101560@gmail.com" && password == "15603786") {
          return credentials;
        } else {
          throw new Error("Credentials Error");
        }
      },
    }),
  ],
  secret: "test",
  
  jwt: {
    secret: "test",
  },
});
