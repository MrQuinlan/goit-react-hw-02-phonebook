import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import s from './App.module.css';

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

    remove = delId => {
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(({ id }) => id !== delId),
        }));
    };

    render() {
        return (
            <div>
                <Container>
                    <h1 className={s.title}>Phonebook</h1>

                    <ContactForm onSubmit={this.addContact} />

                    <h2 className={s.title}>Contacts</h2>

                    <Filter
                        data={this.state.filter}
                        handleFilter={this.handleFilter}
                    />

                    <ContactList
                        contacts={this.filteredContacts()}
                        remove={this.remove}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
