"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [growlMessage, setGrowlMessage] = useState<string | null>(null);
  const [growlType, setGrowlType] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Send data to Formspree
    try {
      const res = await fetch("https://formspree.io/f/mdkgglvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setGrowlMessage("Thank you! Your love note was sent. 💌");
        setGrowlType("success");
        setFormData({ name: "", email: "", message: "" });

        // Set timeout to remove growl message after 5 seconds
        setTimeout(() => {
          setGrowlMessage(null); // Remove the growl message
        }, 5000);
      } else {
        setGrowlMessage("Oops, something went wrong. Please try again. 😕");
        setGrowlType("error");

        // Set timeout to remove growl message after 5 seconds
        setTimeout(() => {
          setGrowlMessage(null); // Remove the growl message
        }, 5000);
      }
    } catch (error) {
      setGrowlMessage("Oops, something went wrong. Please try again. 😕");
      setGrowlType("error");

      // Set timeout to remove growl message after 5 seconds
      setTimeout(() => {
        setGrowlMessage(null); // Remove the growl message
      }, 5000);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-white text-red-800 font-[family-name:var(--font-geist-sans)] px-6 sm:px-12 lg:px-24 py-16">
        <section className="max-w-4xl mx-auto text-center mb-24">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl font-light leading-tight mb-6">
            Let’s create something impossible.
          </h1>
          <p className="text-lg sm:text-xl text-red-700 mb-12">
            Big ideas. Unlikely collaborations. Little love notes. We’re all
            ears.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4">
            <a
              href="mailto:hello@theconceptny.com"
              className="text-sm sm:text-base text-red-600 underline hover:text-red-700"
            >
              info@twotwelve.studio
            </a>

            {/* Growl Notification */}
            {growlMessage && (
              <div
                className={`growl-notification ${growlType} py-2 px-4 rounded-md`}
                style={{
                  backgroundColor:
                    growlType === "success" ? "#28a745" : "#dc3545",
                  color: "white",
                }}
              >
                {growlMessage}
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="text-left max-w-2xl mx-auto space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-red-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-red-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-red-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Send us a love note..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-800 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
            >
              Send Love Note
            </button>
          </form>
        </section>
      </main>

      {/* Add Growl Animation CSS */}
      <style jsx>{`
        .growl-notification {
          font-size: 16px;
          text-align: center;
          display: inline-block;
        }

        .growl-notification.success {
          background-color: #28a745; /* Green for success */
        }

        .growl-notification.error {
          background-color: #dc3545; /* Red for error */
        }
      `}</style>
    </>
  );
}
