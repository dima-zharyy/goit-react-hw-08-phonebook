import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    signUpUser: build.query({
      query() {
        return {
          url: `/users/signup`,
          method: 'POST',
        };
      },
    }),
    signInUser: build.query({
      query() {
        return {
          url: `/users/login`,
          method: 'POST',
        };
      },
    }),
    signOutUser: build.query({
      query() {
        return {
          url: `/users/logout`,
          method: 'POST',
        };
      },
    }),
    getCurrentUser: build.query({
      query() {
        return {
          url: `/users/current`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useSignInUserQuery,
  useSignOutUserQuery,
  useSignUpUserQuery,
  useGetCurrentUserQuery,
} = authApi;
