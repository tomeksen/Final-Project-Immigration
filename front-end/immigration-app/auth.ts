// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// // Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       credentials: {
//         email: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         let user = null;

//         // logic to salt and hash password
//         const pwHash = saltAndHashPassword(credentials.password);

//         // logic to verify if the user exists
//         user = await getUserFromDb(credentials.email, pwHash);

//         if (!user) {
//           // No user found, so this is their first attempt to login
//           // meaning this is also the place you could do registration
//           throw new Error("User not found.");
//         }

//         // return user object with their profile data
//         return user;
//       },
//     }),
//   ],
// });

// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";
// import credentials from "next-auth/providers/credentials";

// // auth: Next.jsアプリでNextAuth.jsとやりとりするための汎用メソッド。auth.ts(このファイル)でNextAuth.jsを初期化した後、Middleware、ServerComponents、Route Handler（app router）でこのメソッドを使う
// //
// // signIn: providerを指定してサインインすることができる。指定されていない場合、ユーザはサインインページにリダイレクトされる。デフォルトでは、ユーザはサインイン後に現在のページにリダイレクトされます。redirectToオプションに相対パスを設定することで、この動作をオーバーライドできる。
// //
// // signOut: ユーザーをサインアウトする。セッションがデータベース戦略を使用して作成された場合、セッションはデータベースから削除され、関連するクッキーは無効になります。セッションがJWTを使用して作成された場合、クッキーは無効になる．デフォルトでは、サインアウト後、ユーザーは現在のページにリダイレクトされます。redirectTo オプションに相対パスを設定することで、この動作をオーバーライドできます。
// //
// // handlers: 今回は使用しない
// // NextAuth.jsのRouteHandlerメソッド。これらは、OAuth/Emailプロバイダー用のエンドポイント、および(`/api/auth/session`のような)クライアントから接続できるREST APIエンドポイントを公開するために使用されます。
// export const { auth, signIn, signOut, handlers } = NextAuth({
//   ...authConfig,
//   providers: [
//     credentials({
//       // signInが呼ばれた際にこの関数が呼び出される
//       async authorize({ email, password }) {
//         console.log("authorize:", email, password);
//         // 実際にはここでバックエンドにリクエストを送信して認証を行う
//         const url = process.env.API_URL + "/auth/login";
//         const res = await fetch(url, {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         });
//         const data = await res.json();
//         const backendToken = data.accessToken;
//         const user = { backendToken };

//         console.log("token:", backendToken);
//         if (!backendToken) {
//           // 認証に失敗した場合は nullを返すか，エラーを投げることが期待される
//           // CredentialsSignin がスローされた場合、または null が返された場合、以下の 2 つのことが起こる：
//           // 1. URL に error=CredentialsSignin&code=credentials を指定して、ユーザーをログインページにリダイレクトする。
//           // 2. フォームアクションをサーバーサイドで処理するフレームワークでこのエラーを投げる場合(例えばserver actionsでsignInを呼び出す場合)、このエラーはログインフォームアクションによって投げられるので、そこで処理する必要がある。
//           return null;
//         }
//         return user;
//       },
//     }),
//   ],
// });

import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// 認証APIのベースパス
export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      // 認証フォームのフィールド
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      // 認証処理
      async authorize(credentials): Promise<User | null> {
        // ユーザー情報のダミーデータ
        const users = [
          {
            id: "test-user-1",
            userName: "test1",
            name: "Test 1",
            password: "qk5lSJ3maQ0pqmOyadTQRgN1K",
            email: "test1@example.com",
          },
          {
            id: "test-user-2",
            userName: "test2",
            name: "Test 2",
            password: "T2GapYCYK6wp8mJ1YUUnYpBMc",
            email: "test2@example.com",
          },
        ];
        // ユーザー情報の検索
        const user = users.find(
          (user) =>
            user.userName === credentials.username &&
            user.password === credentials.password
        );
        // ユーザー情報の返却
        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),
  ],
  // 認証APIのベースパス
  basePath: BASE_PATH,
  // シークレットキーの設定
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
