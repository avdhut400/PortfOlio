
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setStatus("Message sent successfully ✅");
        formRef.current.reset();
      },
      () => {
        setStatus("Something went wrong ❌");
      }
    );
  };

  return (
    <section id="contact" className="bg-black text-white py-32 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold mb-6">Let’s work together</h2>
          <p className="text-gray-400 max-w-md">
            Have a project in mind or just want to connect?
            Drop a message and I’ll get back to you.
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-12">
          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none"
          />

          <button className="px-10 py-3 bg-[#9ACD8D] text-black">
            Submit
          </button>

          {status && <p className="text-sm mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
}
