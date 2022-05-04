import PropTypes from 'prop-types';
// import { deleteItems } from 'redux/contactsSlice';
// import { useDispatch } from 'react-redux';
import { ButtonFilter, ListItem } from './ContactListItem.styled';

export default function ContactListItem({ id, name, number, onDelete, deleting }) {
  // const dispatch = useDispatch();

  // const deleteContact = event => {
  //   event.preventDefault();
  //   const idDeletedContact = event.currentTarget.id;
  //   // dispatch(deleteItems(idDeletedContact));
  // };

  return (
    <ListItem key={id}>
      {name} {number}
      <ButtonFilter type="button" id={id} onClick={()=>onDelete(id)}>
        {deleting ? 'Deleting...' : 'Delete'}
      </ButtonFilter>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
