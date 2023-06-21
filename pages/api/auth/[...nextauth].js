import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // pages: {
    //     signIn: '/'
    // },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
        name: "Credentials",
        // credentials: {
        //   username: { label: "Username", type: "text", placeholder: "jsmith" },
        //   password: { label: "Password", type: "password" }
        // },
        async authorize(credentials, req) {
            if (credentials.username === "abc") {
                return {
                    user:{
                        name: "ABC"
                    }
                }
            }
            return null
        }
      })
  ],
});
