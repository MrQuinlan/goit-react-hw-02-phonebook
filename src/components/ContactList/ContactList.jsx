import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, remove }) => {
    return (
        <ul className={s.list}>
            {contacts.map(contact => {
                const { id, name, number } = contact;

                return (
                    <li className={s.item} key={id}>
                        <span className={s.span}>
                            {name}: {number}
                        </span>

                        <button
                            id={id}
                            type="button"
                            className={s.btn}
                            onClick={() => {
                                remove(id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
};
