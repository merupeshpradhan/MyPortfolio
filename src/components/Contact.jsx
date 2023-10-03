import React, { useRef, useState } from "react";

import { motion } from "framer-motion";

import emailjs from '@emailjs/browser';

import { fadeIn } from "../variants";

const Contact = () => {

  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRequiredFieldEmpty, setIsRequiredFieldEmpty] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Check if any required fields are empty
    const requiredFields = ["from_name", "email_id", "message"];
    const formFields = form.current.elements;

    let isMissingRequiredField = false;

    requiredFields.forEach(fieldName => {
      if (!formFields[fieldName].value.trim()) {
        isMissingRequiredField = true;
      }
    });

    if (isMissingRequiredField) {
      setIsRequiredFieldEmpty(true);
      setIsButtonDisabled(true); // Disable the button immediately
      setTimeout(() => {
        setIsRequiredFieldEmpty(false);
        setIsButtonDisabled(false); // Enable the button after the timer expires
      }, 3000);
      return;
    }

    emailjs.sendForm('service_r2o3imk', 'template_o60z4m9', form.current, '16dZT24ZD2v0K0l4b')
      .then((result) => {
          console.log(result.text);
          setIsSuccess(true);

          // Reset isSuccess after 3 seconds (3000 milliseconds)
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className=" section  " id="contact">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase text-accent font-mediummb2
              tracking-wide"
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
          ref={form} onSubmit={sendEmail}
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              name="from_name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              name="email_id"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              name="message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none "
              placeholder="Your message"
            ></textarea>
            {/* <button className="btn btn-lg">Send message</button> */}
            {isRequiredFieldEmpty && <p className="text-red-500">Please fill in all required fields.</p>}
            {isSuccess && <p className="text-green-500">Message successfully sent!</p>}
            <input type="submit" value="Send message" className="btn btn-lg cursor-pointer" />

          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
