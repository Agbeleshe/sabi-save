import React, { useState } from "react";
import MotionAnimation from "../motion/MotionAnimation";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <MotionAnimation motion="slide-down">
            <h2 className="text-3xl font-bold mb-4 text-dark">
              Stay Informed and Connected
            </h2>
          </MotionAnimation>
          <MotionAnimation motion="slide-up">
            <p className="mb-8 text-dark/80 text-center">
              Subscribe to our newsletter to receive the latest updates and news
              about SabiSave.
            </p>
          </MotionAnimation>

          {submitSuccess && (
            <MotionAnimation>
              <div className="bg-light/20 text-dark p-4 rounded-md mb-6 max-w-md mx-auto">
                Thank you for subscribing to our newsletter!
              </div>
            </MotionAnimation>
          )}

          <MotionAnimation>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-dark"
              />
              <button className="bg-black p-3 rounded-md hover:text-primary text-light border-dark">
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </MotionAnimation>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
