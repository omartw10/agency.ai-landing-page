import React from "react";

const CTA = () => {
  return (
    <div
      className="
        rounded-xl
        p-10
        text-center
        transition-colors
        duration-300

        bg-gradient-to-r
        from-[#0F1C2E]
        to-[#13263D]

        dark:from-[#081220]
        dark:to-[#0C1A2B]

        text-white
      "
    >
      <h3 className="text-2xl font-bold">Ready to Automate Your Business?</h3>

      <p className="mt-3 text-gray-300">
        Talk to us about n8n automations, inbox systems and custom integrations.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/218926467332"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-[#00C2D1]
            text-[#0B1F3B]
            px-6 py-2.5
            rounded-lg
            font-semibold
            hover:bg-[#00A8B5]
            transition-all
            duration-300
            shadow-lg
            shadow-[#00C2D1]/30
          "
        >
          WhatsApp
        </a>

        {/* Email Button */}
        <button
          onClick={() => {
            const section =
              document.getElementById("contact-inboxpilot") ||
              document.getElementById("contact-us");

            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
    border border-[#00C2D1]
    text-[#00C2D1]
    px-6 py-2.5
    rounded-lg
    font-semibold
    hover:bg-[#00C2D1]
    hover:text-[#0B1F3B]
    transition-all
    duration-300
  "
        >
          Email
        </button>
      </div>
    </div>
  );
};

export default CTA;
