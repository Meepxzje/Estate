import React from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "8add0636-f3bd-4792-81a2-51e2474885d0");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 font-light under ml-2">
          With Us
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 w-full mx-auto">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form
        className="max-w-2xl mx-auto text-gray-600 pt-8"
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Name"
              type="text"
              placeholder="Your Name?"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Email"
              type="email"
              placeholder="Your Email?"
              required
            />
          </div>
        </div>
        <div className="w-full text-left my-6">
          Message
          <textarea
            className="w-full border rounded border-gray-300 py-3 px-4 mt-2 h-48 resize-none"
            placeholder="Message"
            name="message"
            required
          />
        </div>
        <input
          type="hidden"
          name="access_key"
          value="8add0636-f3bd-4792-81a2-51e2474885d0"
        ></input>
        <button
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
          type="submit"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
