import React from "react";
import "./Contact.css";
import { AiOutlineMan, AiOutlineWoman, AiOutlineQuestionCircle } from 'react-icons/ai';


const Contact = ({ gender, firstName, lastName, phone }) => (
  <li className="contact-single">
    <p>  
    {gender === "male" && 
    <span className="icon-gender"><AiOutlineMan /></span>}
    {gender === "female" && 
    <span className="icon-gender"><AiOutlineWoman /></span>}
    {!gender && 
    <span className="icon-gender"><AiOutlineQuestionCircle /></span>}
    {firstName} {lastName}
    </p>
    <p>{phone}</p>
  </li>
);

export default Contact;