import * as React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../services/contacts';
import ContactListItem from '../ContactListItem';

export default function ContactList({
  error,
  isLoading,
  filterContacts,
}) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ul>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : filterContacts ? (
        filterContacts.map(({ id, name, phone }) => (
          <ContactListItem
            key={id}
            onDelete={deleteContact}
            name={name}
            number={phone}
            deleting={isDeleting}
            id={id}
          />
        ))
      ) : null}
    </ul>
  );
}

ContactList.propTypes = {
 filterContacts: PropTypes.array,
};