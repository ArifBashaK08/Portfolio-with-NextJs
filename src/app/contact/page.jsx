"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const text = "Hello there!"


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return <motion.div className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="w-full h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 box-border">
      {/* TEXT CONTAINER */}
      <div className="h-1/3 lg:h-full lg:w-1/2 lg:text-6xl text-3xl md:text-5xl flex justify-center items-center">
        <div className="font-semibold">
          {text.split("").map((letter, index) => (
            <motion.span key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}>
              {letter}</motion.span>
          )
          )}
          😊
        </div>
      </div>
      {/* FORM CONTAINER */}
      <div className="h-2/3 lg:h-full lg:w-1/2  rounded-xl flex flex-col lg:justify-center lg:items-center p-4 sm:p-8 md:p-12 lg:p-16 bg-red-50 lg:bg-transparent">
        <form className="h-full w-full md:bg-red-50 rounded-xl flex flex-col justify-center gap-4 md:gap-6 lg:gap-10 p-4 sm:p-8 md:p-12 md:text-lg lg:text-xl" ref={form}
          onSubmit={sendEmail}>
          <strong className="text-xl font-semibold text-center uppercase underline">Send mail</strong>
          <span>Dear Arif Basha K.,</span>
          <div className="w-full flex lg:items-center gap-2 md:gap-4 lg:flex-row flex-col flex-wrap">
            <span>From : </span>
            <input placeholder="email@example.com" type="text" name="user_email" className=" flex-1 bg-transparent  border-b-2 outline-none focus:border-b-red-600" required />
          </div>
          <div className="w-full flex gap-2 md:gap-4 flex-col flex-wrap">
          <span>Message : </span>
          <textarea name="message" id="" cols="8" className="bg-transparent border-b-2 outline-none focus:border-b-red-600 resize-none" placeholder="Please, type your name and message here... will get back to you :)" required />
          </div>
          <span>Regards</span>
          <button className="text-sm bg-black rounded-lg font-semibold p-2 text-white">Send</button>
          <div className="h-6">
          {success && <h1 className="text-green-600 font-semibold text-sm text-center transition-all duration-200 ease-in-out">✅ Your mail has sent, successfully!</h1>}
          {error && <h1 className="text-red-600 font-semibold text-sm text-center transition-all duration-200 ease-in-out">❌ Unable to send your mail!</h1>}
          </div>
        </form>
      </div>
    </div>
  </motion.div>

}
export default Contact
