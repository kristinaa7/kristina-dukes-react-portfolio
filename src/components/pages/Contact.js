import React from "react";

function ContactForm() {
  const [formStatus, setFormStatus] = React.useState('Send')
  const handleOnSubmit = (event) => {
    event.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let formElements = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(formElements)
  }

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    
    <section id="contact">

    </section>

return (
    <div>
    <h1>Contact Page</h1>
    <p>
      Contact me at kristina@pretend.com
    </p>
  </div>
);
}

export default Contact;