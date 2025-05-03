import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';


const authOptions={
    viders:[
        GithubProvider({
            clientId:"Ov23li2faAmB2IjhhPrZ",
            clientSecret:"e09da3a3b36085a10ed815be84ed657bbe69869d",
        }),
    ],
};

export default NextAuth(authOptions)