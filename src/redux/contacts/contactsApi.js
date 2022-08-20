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
      providesTags: ['Contacts'],
    }),

    editContact: build.mutation({
      query(id, data) {
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['Contacts'],
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
  useEditContactMutation,
} = contactsApi;
