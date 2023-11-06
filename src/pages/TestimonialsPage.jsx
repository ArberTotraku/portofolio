import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import man from "../images/testimonialsimages/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg"
import woman from "../images/testimonialsimages/woman.jpg"
const TestimonialPage = () => {
  const testimonials = [
    {
      name: "John Doe Msc.",
      company: "World Inc.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: man, // Image file name or URL
    },
    {
      name: "Emily Smith",
      company: "TESLA Corp.",
      text: "It was a big pleasure working with Arber, not only friendly but also professional. I recommend it to everyone.",
      image: woman, // Image file name or URL
    },
    {
      name: "Jane Smith",
      company: "Amazon Corp.",
      text: "I don't know wheere to start, this guy changed my life. He loves espresso and loves to be in a good mood",
      image: woman, // Image file name or URL
    },
    {
      name: "Arnold Smith",
      company: "FORD",
      text: "Arber not only was super helpful on the job, but such a creative mind and he made everyone feel great",
      image: woman, // Image file name or URL
    },  {
      name: "Elizabeth Doe",
      company: "Coca Cola",
      text: "Arber is the best!!",
      image: woman, // Image file name or URL
    },  {
      name: "Jane Smith",
      company: "TESLA Corp.",
      text: "It was a big pleasure working with Arber, not only friendly but also professional. I recommend it to everyone.",
      image: woman, // Image file name or URL
    },
    // Add more testimonials here
  ];  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="testimonials" className="container mx-auto p-3">
      <h1 className="text-3xl font-semibold mb-4 text-center">Testimonials:</h1>
      <p className='text-1xl text-center italic'> 
        Please note that this a joke :D
        
        
        </p>

      <Slider {...sliderSettings} className="mb-3 mt-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-500 rounded-lg p-9 mx-auto space-between shadow-md">
            <div className="mb-2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black text-center">{testimonial.name}</h3>
            <p className="text-white font-semibold text-center">Current affiliation: {testimonial.company}</p>
            <p className="mt-2 text-white">"{testimonial.text}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialPage;