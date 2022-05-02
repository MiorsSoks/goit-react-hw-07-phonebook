import { getFilter, getContacts } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import * as React from 'react'
import { useGetContactsQuery } from '../../services/contacts'
import ContactListItem from '../ContactListItem';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const { data, error, isLoading } = useGetContactsQuery()

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(data)
  return (
    <ul>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (data.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone}  />
      ))) : null}
    </ul>
  );
}
