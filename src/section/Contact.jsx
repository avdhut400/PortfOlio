
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully. I’ll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 w-full">

      
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h2>

          
          <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
            I am a fresher actively looking for entry-level opportunities and
            internships where I can learn, contribute, and grow as a developer.
          </p>

        
          <a
            href="#contact"
            className="inline-block text-sm font-medium
            text-[#9ACD8D] border border-[#9ACD8D]
            px-6 py-2 rounded-full hover:bg-[#9ACD8D]
            hover:text-black transition"
          >
            Open to Opportunities
          </a>
        </div>

      
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-10"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full bg-transparent border-b border-gray-700
            py-3 text-sm placeholder-gray-500
            focus:outline-none focus:border-[#9ACD8D]"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full bg-transparent border-b border-gray-700
            py-3 text-sm placeholder-gray-500
            focus:outline-none focus:border-[#9ACD8D]"
          />

          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="w-full bg-transparent border-b border-gray-700
            py-3 text-sm resize-none placeholder-gray-500
            focus:outline-none focus:border-[#9ACD8D]"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-10 py-3 bg-[#9ACD8D]
            text-black font-medium transition
            disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-sm text-gray-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
