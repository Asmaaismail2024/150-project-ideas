import React from "react";

export default function CourseCard({ title, link }) {
  return (
    <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      {/* Header */}
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        Featured Course
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h5 className="mb-8 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-blue-500 px-6 py-2.5 text-xs font-medium text-white hover:bg-blue-600 focus:outline-none"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}
