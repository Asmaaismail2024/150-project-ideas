import React from "react";
import CardStep from "./CardStep";

export default function About() {
  const researchSteps = [
    {
      title: "1. Identify the Problem",
      description:
        "Start by clearly defining the problem or research question you want to address. This is the foundation of your entire study.",
    },
    {
      title: "2. Conduct Background Research",
      description:
        "Gather information from books, journals, articles, and other credible sources to understand existing knowledge on the topic.",
    },
    {
      title: "3. Formulate a Hypothesis",
      description:
        "Based on your background research, propose a testable hypothesis or prediction that can be investigated through experiments or data collection.",
    },
    {
      title: "4. Design and Perform Experiments",
      description:
        "Create an experiment or research methodology that will allow you to test your hypothesis under controlled conditions.",
    },
    {
      title: "5. Analyze Data",
      description:
        "Collect, organize, and analyze the data gathered during your experiment. Look for trends and relationships that support or refute your hypothesis.",
    },
    {
      title: "6. Draw Conclusions",
      description:
        "Based on your analysis, conclude whether your hypothesis was correct or if new theories need to be explored. Interpret the meaning of your findings.",
    },
    {
      title: "7. Communicate Results",
      description:
        "Share your findings with the scientific community through research papers, presentations, and reports.",
    },
  ];

  return (
    <div className="bg-gray-100 p-10">
      {/* Question and Answer Section */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          What is Scientific Research?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Scientific research is the process of systematic investigation,
          designed to discover new facts, develop new theories, and establish
          scientific knowledge. It is the foundation of progress in our world,
          addressing the most pressing challenges of humanity, from health to
          sustainability, technology to education.
        </p>
        <p className="text-lg text-gray-700">
          Without scientific research, we would not have the advances that shape
          our modern world. It provides us with the tools to understand the
          universe around us, solve problems, and create innovations that
          improve the quality of life.
        </p>
      </section>

      {/* Research Steps Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Scientific Research Steps
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchSteps.map((step, index) => (
          <CardStep key={index} title={step?.title} description={step?.description} />
        ))}
      </div>

     
    </div>
  );
}
