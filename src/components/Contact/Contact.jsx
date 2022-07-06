import React from 'react';
import './ContactStyles';
import Button from '../Buttons/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Inputs/Input.jsx';
import { addNewUserAction } from '../../store/userNameReducer';

const Contacts = () => {
  const userName = useSelector((state) => state.userName.name);
  const dispatch = useDispatch();

  const addName = (name) => {
    dispatch(addNewUserAction(name.trim()));
  };

  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>

      <div className="contact__content">
        <ul className="contact__social">
          <li>
            <a
              href="https://hh.ru/resume/ea203c29ff09e8ff200039ed1f6b524d675677"
              target="_blank"
            >
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
          method="post"
          encType="text/plain"
        >
          <label>
            <span>FROM:</span>

            <Input
              type="text"
              name="from"
              value={userName}
              onChange={(e) => addName(e.target.value)}
              className="contact__input  contact__form_item"
            />
          </label>

          <label>
            <span>SUBJECT:</span>

            <Input
              name="subject"
              type="text"
              className="contact__input  contact__form_item"
            ></Input>
          </label>

          <textarea
            className="contact__message  contact__form_item"
            name="message"
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
