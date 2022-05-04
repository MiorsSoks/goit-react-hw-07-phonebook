import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItems: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addItems, deleteItems, addFilter } = contactsSlice.actions;

//Selectors

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
