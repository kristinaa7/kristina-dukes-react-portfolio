import React from "react";

function ContactForm() {
  const [formStatus, setFormStatus] = React.useState('Send')
  const handleOnSubmit = (event) => {
    event.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = event.target.elements
    let formElements = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(formElements)
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-3"> Contact Form </h2>
      <form handleOnSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}

export default ContactForm;