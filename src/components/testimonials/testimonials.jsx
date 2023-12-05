import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import ImageSlider from './ImageSlider';
import './testimonials.scss';
import Rating from './rating';

const Testimonials = () => {
  const images = [
    { desc: 'I have been using ABC Fitness for the past six months, and I can confidently say it has been a game-changer for my health and fitness journey. The variety of classes they offer keeps me motivated, and the trainers are incredibly supportive and knowledgeable.', name: 'Emeka Okoro', rating: <Rating rating={4} /> },
    { desc: 'I v been using ABC Fitness for the past six months, and I can confidently say it has been a game-changer for my health and fitness journey. The variety of classes they offer keeps me motivated, and the trainers are incredibly supportive and knowledgeable.', name: 'Stan Mowell', rating: <Rating rating={3} /> },
    { desc: 'I v been using ABC Fitness for the past six months, and I can confidently say  has been a game-changer for my health and fitness journey. The variety of classes they offer keeps me motivated, and the trainers are incredibly supportive and knowledgeable.', name: 'Chukwuma Mosanya', rating: <Rating rating={5} /> },

  ];

  return (
    <div className="testimonials">
      <FaQuoteLeft size={60} style={{ color: 'grey' }} />
      <h2 className="testimonials_label">What customers say about us</h2>
      <ImageSlider images={images} />
    </div>
  );
};

export default Testimonials;
