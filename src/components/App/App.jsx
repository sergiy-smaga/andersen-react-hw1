import { Component } from 'react';
import { ContactForm } from '../Form/Form';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    persons: [],
  };

  handleFormData = data => {
    this.setState({
      persons: [
        ...this.state.persons,
        {
          ...data,
          id: nanoid(),
        },
      ],
    });
  };

  render() {
    return (
      <div className={css.app}>
        <h1 className={css.heading}>Создание анкеты</h1>
        <ContactForm onSubmit={this.handleFormData} />
      </div>
    );
  }
}
