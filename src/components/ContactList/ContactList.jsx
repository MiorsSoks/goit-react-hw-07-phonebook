// import { getFilter, getContacts } from 'redux/contactsSlice';
// import { useSelector } from 'react-redux';
import * as React from 'react'
import { useGetContactsQuery, useDeleteContactMutation } from '../../services/contacts'
import ContactListItem from '../ContactListItem';

export default function ContactList() {
  // const filter = useSelector(getFilter);
  // const contacts = useSelector(getContacts);
  const { data, error, isLoading } = useGetContactsQuery()
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation()

  // const filterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  console.log(data)
  return (
    <ul>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (data.map(({ id, name, phone }) => (
        <ContactListItem key={id} onDelete={deleteContact} name={name} number={phone} deleting={isDeleting} id={id}  />
      ))) : null}
    </ul>
  );
}
