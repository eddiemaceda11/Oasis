export type UserProps = {
  firstName: string;
  role: boolean;
  password: string;
  email: string;
  loggedIn: boolean;
};

export const authorizeUser = (
  arr: UserProps[] | [],
  email: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const usersInfoArray = arr.map((user: UserProps) => {
    return {
      firstName: user.firstName,
      role: user.role,
      password: user.password,
      email: user.email,
      loggedIn: false,
    };
  });

  const authorizedUser = usersInfoArray.find((user) => user.email === email);
  console.log(authorizedUser);
  if (!authorizedUser) {
    setMessage('No access');
    return;
  }

  setMessage(`${authorizedUser.firstName} has access`);
  return {
    ...authorizedUser,
    loggedIn: !authorizedUser.loggedIn,
  };
};
