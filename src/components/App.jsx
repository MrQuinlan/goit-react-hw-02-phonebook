import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = ({ name, number }) => {
        const contacts = this.state.contacts;
        const newContact = {
            id: nanoid(),
            name,
            number,
        };

        const isContact = contacts.find(({ name }) => name === newContact.name);

        isContact
            ? alert(`${name} is already in contacts`)
            : this.setState(({ contacts }) => ({
                  contacts: [...contacts, newContact],
              }));
    };

    handleFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    filteredContacts = () => {
        const { filter, contacts } = this.state;
        const normalizFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizFilter)
        );
    };

    remove = e => {
        const itemId = e.target.id;
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(({ id }) => id !== itemId),
        }));
    };

    render() {
        return (
            <div
                style={{
                    // height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 40,
                    color: '#010101',
                }}
            >
                <h1>Phonebook</h1>

                <ContactForm onSubmit={this.addContact} />

                <h2>Contacts</h2>

                <Filter
                    data={this.state.filter}
                    handleFilter={this.handleFilter}
                />

                <ContactList
                    contacts={this.filteredContacts()}
                    remove={this.remove}
                />
            </div>
        );
    }
}

export default App;
