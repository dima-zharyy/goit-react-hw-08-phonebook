import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'redux/axiosSetup';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query() {
        return {
          url: `/contacts`,
          method: 'GET',
        };
      },
    }),
    getContactById: build.query({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'GET',
        };
      },
    }),
    editContact: build.query({
      query(body) {
        return {
          url: `/contacts`,
          method: 'PATCH',
          body,
        };
      },
    }),
    addContact: build.mutation({
      query(body) {
        return {
          url: `/contacts`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactQuery,
} = contactsApi;
