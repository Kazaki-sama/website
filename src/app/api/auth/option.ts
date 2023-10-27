import type { NextAuthOptions  } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions={
    providers: [

        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,        }),
        
        CredentialsProvider({
            name:"credentials",
            credentials:{
                username:{
                    label:"Username:",
                    type:"text",
                    placeholder:"your name"
                },
                password:{
                    label:"password",
                    type:"password",
                    placeholder:"your password"
                }
            },
           async authorize(credentials) {
                const user={id:"12", name:"subham", password:"12345678"}
                if(credentials?.username===user.name && credentials?.password===user.password){
                    return user;
                }else{
                    return null;
                }
            },
        })
    ],
    
  

}