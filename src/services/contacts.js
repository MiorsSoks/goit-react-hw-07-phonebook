import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626f94efc508beec4885c167.mockapi.io/contacts/',
  }),
  tageTypes: ['Todo'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Todo'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
        body: contactId,
      }),
      invalidatesTags: ['Todo'],
    }),
    createContact: builder.mutation({
      query: contactId => ({
        url: `contacts/`,
        method: 'POST',
        body: contactId,
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
