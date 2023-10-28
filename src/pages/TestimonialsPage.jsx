import React from 'react';
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
      name: "Jane Smith",
      company: "TESLA Corp.",
      text: "It was a big pleasure working with Arber, not only friendly but also professional. I recommend it to everyone.",
      image: woman, // Image file name or URL
    },
    {
      name: "Jane Smith",
      company: "TESLA Corp.",
      text: "It was a big pleasure working with Arber, not only friendly but also professional. I recommend it to everyone.",
      image: woman, // Image file name or URL
    },
    {
      name: "Jane Smith",
      company: "TESLA Corp.",
      text: "It was a big pleasure working with Arber, not only friendly but also professional. I recommend it to everyone.",
      image: woman, // Image file name or URL
    },  {
      name: "Jane Smith",
      company: "TESLA Corp.",
      text: "It was a big pleasure working with Arber, not only friendly but also professional. I recommend it to everyone.",
      image: woman, // Image file name or URL
    },  {
      name: "Jane Smith",
      company: "TESLA Corp.",
      text: "It was a big pleasure working with Arber, not only friendly but also professional. I recommend it to everyone.",
      image: woman, // Image file name or URL
    },
    // Add more testimonials here
  ];

  return (
    <div id='testimonials' className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">Testimonials:</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-500 rounded-lg p-4 shadow-md">
            <div className="mb-2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">{testimonial.name}</h3>
            <p className="text-white">{testimonial.company}</p>
            <p className="mt-2 text-white">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
