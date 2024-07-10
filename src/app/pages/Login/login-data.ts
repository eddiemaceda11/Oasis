

// const initialData = async () => {
//   const response = await fetch('https://dummyjson.com/users');
//   const data = await response.json();
//   const usersInfoArray = data.users.map((user: UserProps) => {
//     return {
//       firstName: user.firstName,
//       role: user.role,
//       password: user.password,
//       email: user.email,
//       loggedIn: Math.random() > 0.5,
//     };
//   });
//   return usersInfoArray;
// };

// export const users: LoginPageProps = {
//   usersArr: await initialData(),
//   logMessage: 'Enter your login information',
// };
