import {
  useGetUsersQuery,
  type LoginPageProps,
  type UserProps,
} from '../../../api/apiSlice';
import { authorizeUser } from './loginHelperFunctions';
import { useState } from 'react';

const LoginPage = () => {
  const [currentUserMessage, setCurrentUserMessage] = useState('');

  const { data, isLoading, error } = useGetUsersQuery({});
  const usersArray: UserProps[] = data ? data.users : [];

  return (
    <div>
      <h1>Login page</h1>
      <button
        onClick={async () => {
          await authorizeUser(
            usersArray,
            'emily.johnson@x.dummyjson.com',
            setCurrentUserMessage
          );
        }}
      >
        Login
      </button>
      <p>{currentUserMessage}</p>
    </div>
  );
};

export default LoginPage;
