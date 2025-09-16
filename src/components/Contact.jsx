import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, please fill out the form below:</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;