import NextAuth from "next-auth/next";
import CredentialProviders from "next-auth/providers/credentials";

const handler= NextAuth({
    session: {
        strategy: 'JWT',
    },
    providers: [
        CredentialProviders({
            name: 'Credentials',
            credentials: {
                email: { label:'Email', type: 'email' },
                password: { label: 'Password', type:'password' }
            },
            async authorize(credentials, req) {
                // create dummy user
                // const user = { id:'1', email: 'jhon@gmail.com', password: '12345' }

                // if(user) {
                //     return user;
                // } else {
                //     return null;
                // }

                // if(email !== 'jhon@gmail.com' && password !== '12345') {
                //     return null;
                // }
                // else 
                // {
                    // }
                // return { id: '1', name: 'Jhon Deo', email: 'jhon@gmail.com' }
                
            }
            
        })
    ],
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST }