import React from 'react';
import './ContactStyles';
import Button from '../Buttons/Button.jsx';
import { useSelector } from 'react-redux';
import Input from '../Inputs/Input.jsx';

const Contacts = () => {
  const userName = useSelector((state) => state.userName.name);

  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>

      <div className="contact__content">
        <ul className="contact__social">
          <li>
            <a href="https://hh.ru" target="_blank">
              <Button className="contact__social_button">GET RESUME</Button>
            </a>
          </li>
          <li>
            <a href="https://vk.com/id206831020" target="_blank">
              <Button className="contact__social_button">VKONTAKTE</Button>
            </a>
          </li>
          <li>
            <a href="whatsapp://send?phone=79146490801" target="_blank">
              <Button className="contact__social_button">WHATSAPP</Button>
            </a>
          </li>
          <li>
            <a href="tg://resolve?domain=@kimutir" target="_blank">
              <Button className="contact__social_button">TELEGRAM</Button>
            </a>
          </li>
          <li>
            <a href="tel:+79146490801" target="_blank">
              <Button className="contact__social_button">
                +7(914)649-08-01
              </Button>
            </a>
          </li>
        </ul>
        <form
          className="contact__form"
          action="mailto:kimutir@gmail.com"
          method="GET"
        >
          <p className="conatct__user contact__form_item">
            FROM: {userName ? userName : 'Anonymus'}
          </p>

          <Input
            name="subject"
            type="text"
            placeholder="Subject"
            className="contact__subject  contact__form_item"
          ></Input>
          <textarea
            className="contact__message  contact__form_item"
            name="body"
          ></textarea>
          <input
            className="contact__send  contact__form_item"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
