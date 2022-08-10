import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export class ContactForm extends Component {
  nameId = nanoid();
  surnameId = nanoid();
  dateId = nanoid();
  numberId = nanoid();
  website = nanoid();
  selfInfo = nanoid();
  stack = nanoid();
  project = nanoid();

  state = {
    name: '',
    surname: '',
    date: '',
    number: '',
    website: '',
    selfInfo: '',
    stack: '',
    project: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
      surname: '',
      date: '',
      website: '',
      selfInfo: '',
      stack: '',
      project: '',
    });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameId}>
          Имя
        </label>
        <input
          className={css.input}
          onChange={this.handleChange}
          id={this.nameId}
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Введите имя"
          required
        />

        <label className={css.label} htmlFor={this.surnameId}>
          Фамилия
        </label>
        <input
          className={css.input}
          onChange={this.handleChange}
          id={this.surnameId}
          value={this.state.surname}
          type="text"
          name="surname"
          placeholder="Введите фамилию"
          required
        />

        <label className={css.label} htmlFor={this.dateId}>
          Дата рождения
        </label>
        <input
          className={css.input}
          onChange={this.handleChange}
          id={this.dateId}
          value={this.state.date}
          type="date"
          name="date"
          required
        />

        <label className={css.label} htmlFor={this.numberId}>
          Телефон
        </label>
        <input
          className={css.input}
          onChange={this.handleChange}
          id={this.numberId}
          type="tel"
          value={this.state.number}
          name="number"
          placeholder="+3805000000000"
          required
        />

        <label className={css.label} htmlFor={this.websiteId}>
          Сайт
        </label>
        <input
          className={css.input}
          onChange={this.handleChange}
          id={this.websiteId}
          value={this.state.website}
          type="url"
          name="website"
          placeholder="https://your-web-site"
        />

        <label className={css.label} htmlFor={this.selfInfoId}>
          О себе
        </label>
        <textarea
          className={css.textarea}
          onChange={this.handleChange}
          id={this.selfInfoId}
          value={this.state.selfInfo}
          rows="7"
          name="selfInfo"
          placeholder="Опишите свои достижения и итересы"
          required
        />

        <label className={css.label} htmlFor={this.stackId}>
          Стек технологий
        </label>
        <textarea
          className={css.textarea}
          onChange={this.handleChange}
          id={this.stackId}
          value={this.state.stack}
          rows="7"
          name="stack"
          placeholder="Перечислите технологии, с которыми вы работали"
        />

        <label className={css.label} htmlFor={this.projectId}>
          Описание последнего проекта
        </label>
        <textarea
          className={css.textarea}
          onChange={this.handleChange}
          id={this.projectId}
          value={this.state.project}
          rows="7"
          name="project"
          placeholder="Опишите коротко свой последний проект и Вашу роль в нем"
        />

        <button className={css.button} type="button" onClick={this.reset}>
          Отмена
        </button>
        <button className={css.button} type="submit">
          Сохранить
        </button>
      </form>
    );
  }
}
