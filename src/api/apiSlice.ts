import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

export type LoginPageProps = {
  users: UserProps[] | Promise<UserProps[]> | [];
  logMessage: string;
};

export type UserProps = {
  firstName: string;
  role: boolean;
  password: string;
  email: string;
  loggedIn: boolean;
};

// Define our single api slice obj
export const apiSlice = createApi({
  // The cache reducer expects to be added at the "state.api"
  reducerPath: 'api',
  // All of our requests will have URLS starting with "https://dummyjson.com"
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  // * look into the docs for tagtypes/caching info
  tagTypes: ['Users'],
  // The "endpoints" represent operations and requests for this server
  // We create a function that takes in a builder param,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users', //https://dummyjson.com/users
      providesTags: ['Users'],
    }),
  }),
});

//RTK Query's React integration will automatically generate React hooks for every endpoint we define!
// Export the auto-generated hooks
export const { useGetUsersQuery } = apiSlice;

// now we need to hook up the API slice to our Redux store.
// ->> head to store.ts

/*
When we call createApi, there are two fields that are required:
  -baseQuery: a function that knows how to fetch data from the server.
  RTK Query includes fetchBaseQuery, a small wrapper around the standard fetch() function that handles typical processing of requests and responses. When we create a fetchBaseQuery instance, we can pass in the base URL of all future requests, as well as override behavior such as modifying request headers.

  -endpoints: a set of operations that we've defined for interacting with this server. Endpoints can be queries, which return data for caching, or mutations, which send an update to the server. The endpoints are defined using a callback function that accepts a builder parameter and returns an object containing endpoint definitions created with builder.query() and builder.mutation().
*/
