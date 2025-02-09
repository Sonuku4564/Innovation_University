import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3> Send Us a Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non mollitia ipsum eius suscipit commodi, 
                deleniti explicabo ipsam a neque laborum magni error rem. Soluta optio odio ad aliquid nemo
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" />info@innovationuniv.in</li>
                <li> <img src={phone_icon} alt="" />+1 234567898</li>
                <li><img src={location_icon} alt="" /> Bangalore, India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label > Your Name </label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>

                <label > Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>

                <label > Write your Message Here </label>
                <textarea name="message" rows='6' placeholder='Enter Your Message' required></textarea>

                <button type='submit' className='btn dark-btn'> Submit Now  <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result} </span>
        </div>

    </div>
  )
}

export default Contact