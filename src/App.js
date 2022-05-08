import React, { useState, useEffect } from 'react';
import { useGetContactsQuery } from './services/contacts';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContats] = useState(null);
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useGetContactsQuery();

  useEffect(() => {
    if (data) {
      setContats(data);
    }
  }, [contacts, data]);

  const addFilter = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm data={data}></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} addFilter={addFilter} />
      <ContactList
        error={error}
        isLoading={isLoading}
        filterContacts={filterContacts()}
      />
    </div>
  );
}

export default App;
