// // import { users, type UserProps } from './login-data';
// import { createSlice, current } from '@reduxjs/toolkit';
// import { useGetUsersQuery } from '../../../api/apiSlice';

// // let initialState = users;
// // console.log(users, ' from the LoginSlice');
// // const { data = [] } = useGetUsersQuery();
// // const initialState = data.users ? data.users : [];

// const usersSlice = createSlice({
//   const { data = [] } = useGetUsersQuery();
//   const initialState = data.users ? data.users : [];

//   name: 'users',
//   initialState,
//   reducers: {
//     authorizeUser: (state, action) => {
//       const authorizedUser = current(state.usersArr).find(
//         (user) => user.email === action.payload
//       );

//       console.log(authorizedUser, ' is authorized');

//       if (!authorizedUser) {
//         state.logMessage = 'User not authorized';
//       } else {
//         state.logMessage = `${authorizedUser.name} has access`;
//       }
//     },
//   },
// });

// export const { authorizeUser } = usersSlice.actions;

// export default usersSlice.reducer;
