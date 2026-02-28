import React from "react";
import listView from "../assets/list_view.png";
import emailView from "../assets/email_view.png";

const PoweredByInboxPilot = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#060D18] via-[#071827] to-[#060D18]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/5 blur-[180px] rounded-full -z-10" />

      {/* Container Centered */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Powered by <span className="text-[#00C2D1]">InboxPilot</span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Every inquiry submitted through NeuraSync is processed by our
          proprietary AI engine. Messages are classified, prioritized, and
          intelligently routed before a human ever sees them.
        </p>

        {/* Grid */}
        <div className="mt-24 grid md:grid-cols-2 gap-20 items-center justify-center">
          {/* LEFT BLOCK */}
          <div className="text-left max-w-md mx-auto md:mx-0">
            <h3 className="text-2xl font-semibold mb-4">
              Intelligent Classification
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              InboxPilot analyzes incoming inquiries, detects intent, calculates
              urgency, and ensures no opportunity is overlooked.
            </p>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• AI intent detection</li>
              <li>• Lead scoring (0–100)</li>
              <li>• Automatic urgency assignment</li>
              <li>• Spam filtering & noise control</li>
            </ul>
          </div>

          {/* RIGHT IMAGE - LIST VIEW */}
          <div className="flex justify-center">
            <div className="group perspective relative w-[520px] max-w-full">
              {/* subtle glow */}
              <div className="absolute -inset-4 bg-cyan-400/10 blur-2xl rounded-3xl opacity-30 group-hover:opacity-50 transition duration-500" />

              <img
                src={listView}
                alt="InboxPilot List View"
                className="
                  relative
                  rounded-2xl
                  border border-white/10
                  shadow-xl
                  transition-all
                  duration-500
                  transform-gpu
                  group-hover:-translate-y-3
                  group-hover:rotate-1
                  group-hover:scale-[1.03]
                "
              />
            </div>
          </div>
        </div>

        {/* SECOND GRID */}
        <div className="mt-32 grid md:grid-cols-2 gap-20 items-center justify-center">
          {/* LEFT IMAGE - EMAIL VIEW */}
          <div className="flex justify-center md:order-1 order-2">
            <div className="group perspective relative w-[520px] max-w-full">
              <div className="absolute -inset-4 bg-cyan-400/10 blur-2xl rounded-3xl opacity-30 group-hover:opacity-50 transition duration-500" />

              <img
                src={emailView}
                alt="InboxPilot Email View"
                className="
                  relative
                  rounded-2xl
                  border border-white/10
                  shadow-xl
                  transition-all
                  duration-500
                  transform-gpu
                  group-hover:-translate-y-4
                  group-hover:-rotate-1
                  group-hover:scale-[1.04]
                "
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-left max-w-md mx-auto md:mx-0 md:order-2 order-1">
            <h3 className="text-2xl font-semibold mb-4">
              Smart Decision Dashboard
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Every message becomes structured intelligence. InboxPilot
              calculates SLA, assigns priority, and routes conversations
              automatically.
            </p>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Category classification</li>
              <li>• SLA & response commitment</li>
              <li>• Confidence scoring</li>
              <li>• Structured AI summaries</li>
            </ul>
          </div>
        </div>

        {/* Footer Line */}
        <p className="mt-28 text-sm tracking-wide uppercase text-[#00C2D1] max-w-xl mx-auto">
          No Message Is Lost. No Lead Is Ignored.
        </p>

        <p className="mt-4 text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          InboxPilot ensures structured decision-making, priority awareness, and
          response intelligence across every interaction.
        </p>
      </div>
    </section>
  );
};

export default PoweredByInboxPilot;
