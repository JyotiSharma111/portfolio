import React from "react";
import img3 from "../Assets/prioritize.png"
import hearing_q from "../Assets/hearing_q_form.png"
import form_img from "../Assets/f1.png"

/* ─── Case Study Card ────────────────────────────────────── */
function CaseStudyCard({
  visualSrc,
  visualStyle,
  tags,
  title,
  description,
  metrics,
  accentColor,
}) {
  return (
    <article className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      <div className="grid md:grid-cols-[240px_1fr]">
        
        {/* LEFT VISUAL */}
        <div className={`${visualStyle} flex items-center justify-center p-6 md:p-8`}>
          <div className="w-full max-w-[180px] transition-transform duration-300 group-hover:scale-105">
            <img
              src={visualSrc}
              alt={title}
              className="w-full h-auto rounded-lg shadow-sm object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] md:text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-serif text-gray-900 mb-3 leading-snug">
              {title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-xl mb-6">
              {description}
            </p>

            {/* Divider */}
            <div className="w-8 h-px bg-gray-200 my-6" />

            {/* Metrics */}
            <div className="flex gap-8 flex-wrap">
              {metrics.map(({ value, label }) => (
                <div key={label}>
                  <div
                    className="text-xl md:text-2xl font-semibold"
                    style={{ color: accentColor }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-gray-400 tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

      
        </div>

      </div>
    </article>
  );
}

/* ─── Case Studies Component ─────────────────────────────── */
export default function CaseStudies() {
  const caseStudies = [
    {
      visualSrc: form_img,
      visualStyle: "bg-[#F0EDF8]",
      tags: ["Form design", "Conversion", "UX research"],
      title: "Long-form to grid layout — reducing form abandonment",
      description:
        "Restructured a long form into a focused multi-step experience, reducing cognitive load and significantly increasing completion rates.",
      metrics: [
        { value: "+38%", label: "form completions" },
        { value: "−52%", label: "drop-off rate" },
      ],
      accentColor: "#7F77DD",
    },
    {
      visualSrc: hearing_q,
      visualStyle: "bg-[#E4F0F8]",
      tags: ["Quiz UX", "Mobile", "CRO"],
      title: "Hearing quiz progression — improved lead quality",
      description:
        "Introduced progress visibility and optimized lead capture, increasing engagement and improving lead quality.",
      metrics: [
        { value: "+61%", label: "completion rate" },
        { value: "+29%", label: "lead quality" },
      ],
      accentColor: "#378ADD",
    },
    {
      visualSrc: img3,
      visualStyle: "bg-[#F0F5E4]",
      tags: ["Landing pages", "CRO", "UX"],
      title: "Campaign redesign — clarity, urgency, conversion",
      description:
        "Refined layout, messaging, and hierarchy to reduce friction and drive stronger engagement and conversions.",
      metrics: [
        { value: "+42%", label: "CTR" },
        { value: "−31%", label: "bounce rate" },
      ],
      accentColor: "#3B6D11",
    },
  ];

  return (
    <section className="px-4 md:px-8 py-16 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
          Selected Work
        </p>
        <h1 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
          Design that <em className="text-gray-400 italic">moves</em> the needle
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.title} {...cs} />
        ))}
      </div>

    </section>
  );
}