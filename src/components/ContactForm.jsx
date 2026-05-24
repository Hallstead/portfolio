import React, { useState } from 'react';

const ContactForm = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult('Sending...');

    const formData = new FormData(event.target);

    formData.append(
      'access_key',
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      'subject',
      'New Portfolio Contact Form Submission'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        event.target.reset();
      } else {
        console.error(data);
        setResult('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setResult('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form">
      <h2 className="contact-form__title">
        Contact Me
      </h2>

      <form
        className="contact-form__form"
        onSubmit={handleSubmit}
      >
        <label className="contact-form__label">
          Name

          <input
            type="text"
            name="name"
            className="contact-form__input"
            required
          />
        </label>

        <label className="contact-form__label">
          Email

          <input
            type="email"
            name="email"
            className="contact-form__input"
            required
          />
        </label>

        <label className="contact-form__label">
          Message

          <textarea
            name="message"
            className="contact-form__textarea"
            rows="5"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="contact-form__button button"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {result && (
          <p className="contact-form__result">
            {result}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;