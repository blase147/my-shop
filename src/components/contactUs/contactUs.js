import React from 'react';

const ContactUs = () => (
  <div className="contactUs">
    <div className="contactUs_inner">
      <div className="contactUs_title">
        <h2>Contact Us</h2>
      </div>
    </div>
    <div className="contactUs_button">
      <form>
        <div className="form-group">
          <label htmlFor="email">
            Email address
            <input type="email" className="form-control" id="email" placeholder="email" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="comment">
            Message
            <textarea className="form-control" id="comment" rows="3" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
);

export default ContactUs;
