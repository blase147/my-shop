import React from 'react';
import './contactUs.scss';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Newsletter from '../newsletterSub/newsletterSub';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';

const ContactUs = () => (
  <div className="contactUs">
    <div className="search_header">
      <Logo />
      <Search />
      <Header />
    </div>
    <Menu />

    <h2>Contact Us</h2>
    <div className="contactUs_top">
      <div className="google_map_cont">
        <iframe
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.442337146874!2d-73.98622768460322!3d40.69321297933163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
          1!3m3!1m2!1s0x89c259f4b9a8b7d3%3A0x6e4b9c6d3e0c6b2b!2sFlatiron%20School!5e0!3m2!1sen!2sus!4v1611831667814!5m2!1sen!2sus"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
        />
      </div>
    </div>
    <div className="contactUs_form">
      <form>
        <h2>GET IN TOUCH</h2>
        <p>
          Please enter the details of your request. A member of our support
          staff will respond as soon as possible.
        </p>
        <div className="form_group">
          <input
            type="text"
            className="form_control"
            id="fullname"
            placeholder="Your name here"
          />
          <input
            type="email"
            className="form_control"
            id="email"
            placeholder="Your email here"
          />
        </div>
        <div className="form_group">
          <input
            type="tel"
            className="form_control"
            id="phone"
            placeholder="Your phone number here"
          />
        </div>
        <div className="form_group">
          <textarea
            className="form_control"
            id="comment"
            rows="5"
            placeholder="Your comment here"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="address">
        <div className="address_item">
          <p>
            <b>Address:</b>
            123 Suspendis matti, Visaosang Building VST District, NY Accums,
            North American
          </p>
        </div>
        <div className="address_item">
          <p>
            <b>Email:</b>
            support@domain.com
          </p>
        </div>
        <div className="address_item">
          <p>
            <b>Call Us:</b>
            (012)-345-67890
          </p>
        </div>
        <div className="address_item">
          <p>
            <b>Opening time:</b>
            Our store has re-opened for shopping, exchanges every day 11 am to 7
            pm
          </p>
        </div>
      </div>
    </div>
    <Newsletter />
    <Footer />
    <CopyRight />
  </div>
);

export default ContactUs;
