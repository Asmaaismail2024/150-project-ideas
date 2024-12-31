import { useState } from "react";

export default function ProjectCard({
  title,
  problem,
  solution,
  steps,
  materials,
  researchPaper,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewSolutionClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {title}
      </h5>
      <p className="mb-4 text-base text-red-600 dark:text-red-400">{`Problem: ${problem}`}</p>
      <button
        type="button"
        className="inline-block rounded bg-blue-500 px-8 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
        onClick={handleViewSolutionClick}
      >
        View Solution
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-2/3 max-w-lg bg-white rounded-lg p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to overlay
          >
            {/* Close Button */}
            <button
              className="absolute text-3xl top-2 right-2 text-gray-600 hover:text-red-800"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="mb-4 text-red-600">
              <span className="font-semibold">Problem: </span> {problem}
            </p>
            <p className="mb-4 text-green-600">
              <span className="font-semibold">Solution: </span>
              {solution}
            </p>

            {/* Steps */}
            <div className="mb-4">
              <h4 className="font-semibold">Steps:</h4>
              <ul className="list-disc ml-5">
                {steps && steps.length > 0 ? (
                  steps.map((step, index) => (
                    <li key={index} className="mb-2">{`(${
                      index + 1
                    }) : ${step}`}</li>
                  ))
                ) : (
                  <p>No steps provided.</p>
                )}
              </ul>
            </div>
 
            <div className="mb-4">
              <h4 className="font-semibold">Materials:</h4>
              <ul className="list-disc ml-5">
                {materials && materials.length > 0 ? (
                  materials.map((material, index) => (
                    <li key={index} className="mb-1">
                     {material}
                    </li>
                  ))
                ) : (
                  <p>No materials provided.</p>
                )}
              </ul>
            </div>

            <a
              href={researchPaper}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-500 underline"
            >
              View Research Paper
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
