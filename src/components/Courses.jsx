import React from "react";
import CourseCard from "./CourseCard";

export default function Courses() {
  const courses = [
    {
      title: "Research Paper Writing - Coursera",
      link: "https://www.coursera.org/learn/research-paper-writing",
    },
    {
      title: "How to Write a Research Paper - edX",
      link: "https://www.edx.org/course/how-to-write-a-research-paper",
    },
    {
      title: "Academic Writing and Research - Udemy",
      link: "https://www.udemy.com/course/academic-writing-and-research/",
    },
    {
      title: "Research Paper Writing - FutureLearn",
      link: "https://www.futurelearn.com/courses/research-papers",
    },
    {
      title: "Introduction to Research Methods - Saylor Academy",
      link: "https://www.saylor.org/courses/intro-to-research-methods/",
    },
    {
      title: "OpenLearn - The Open University",
      link: "https://www.open.edu/openlearn/",
    },
    {
      title: "Georgia Tech Online Learning",
      link: "https://online.gatech.edu/courses",
    },
    { title: "MIT OpenCourseware", link: "https://ocw.mit.edu/" },
    {
      title: "Stanford Online",
      link: "https://online.stanford.edu/free-courses",
    },
    { title: "Yale Online Learning", link: "https://online.yale.edu/courses" },
    {
      title: "Research Methods - Coursera (University of California, Irvine)",
      link: "https://www.coursera.org/learn/research-methods",
    },
    {
      title: "Research Methods - edX (University of California, Irvine)",
      link: "https://www.edx.org/learn/research",
    },
    {
      title: "Scientific Research Methods: A Step-by-Step Guide - Udemy",
      link: "https://www.udemy.com/course/scientific-method-in-research-methodology/",
    },
    {
      title: "Research Methodology: From A to Z - Udemy (Dr. Vivek Bindra)",
      link: "https://www.udemy.com/course/research-methods/",
    },
    {
      title: "Science Section - Khan Academy",
      link: "https://www.khanacademy.org/science",
    },
    {
      title:
        "Research Methods for Business and Management - FutureLearn (University of London)",
      link: "https://www.futurelearn.com/courses/research-methods-in-business",
    },
    { title: "Research Methods - ed2Go", link: "https://www.ed2go.com/" },
    {
      title: "Introduction to Research - Alison",
      link: "https://alison.com/course/introduction-to-research-methods-and-frameworks",
    },
  ];

  return (
    <div className="bg-gray-100 p-10">
      {/* Course Dropdown */}
      <section className="dropdown mb-10">
        <h2 className="text-center text-3xl font-semibold text-blue-600 mb-4">
          Learn How to Write and Publish a Research Paper
        </h2>
      </section>

      {/* Course Cards Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((cours, index) => (
          <CourseCard key={index} title={cours?.title} link={cours?.link} />
        ))}
      </div>
    </div>
  );
}
