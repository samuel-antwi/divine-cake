// import React, { useState, useEffect, useContext, createContext } from 'react';
// import { auth } from './firebase';

// const provider = new auth.GoogleAuthProvider();

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const authUser = useProvideAuth();
//   return (
//     <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const useProvideAuth = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const signin = (email, password) => {
//     return auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((response) => {
//         setUser(response.user);
//         return response.user;
//       });
//   };

//   const signup = (email, password) => {
//     return auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((response) => {
//         setUser(response.user);
//         return response.user;
//       });
//   };

//   const signout = () => {
//     return auth()
//       .signOut()
//       .then(() => {
//         setUser(false);
//       });
//   };

//   const sendPasswordResetEmail = (email) => {
//     return auth()
//       .sendPasswordResetEmail(email)
//       .then(() => {
//         return true;
//       });
//   };

//   const logInWithGoogle = () => {
//     auth()
//       .signInWithPopup(provider)
//       .then((reponse) => {
//         setUser(reponse.user);
//         return response.user;
//       })
//       .catch((error) => console.log(error));
//   };

//   return {
//     user,
//     signin,
//     signup,
//     signout,
//     sendPasswordResetEmail,
//     logInWithGoogle,
//   };
// };
