import React, { useState } from "react";
import { projects, categories } from "../projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCategorySelect = () => {
    if (selectedCategory) {
      // Filter projects based on the selected category code
      const categoryCode = selectedCategory;
      const filtered = projects.filter(
        (project) => project.category === categoryCode
      );
      setFilteredProjects(...filtered);
    }
  };

  return (
    <div className="p-10">
      <section className="dropdown mb-10 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Project Categories
          </h2>

          {/* Dropdown for categories */}
          <select
            className="p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 hover:border-blue-400"

            value={selectedCategory || ""}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.code} value={category.code}>
                {category.title}
              </option>
            ))}
          </select>

          {/* Button to filter by category */}
          <button
            className="ml-4 p-2 bg-blue-500 text-white rounded-md"
            onClick={handleCategorySelect}
          >
            Select Category
          </button>
        </div>
      </section>

      {/* Project Cards Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Available Data In Selected Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects?.items && filteredProjects.items.length > 0 ? (
          filteredProjects?.items?.map((item, index) => (
            <ProjectCard
              key={index}
              title={item?.title}
              problem={item?.problem}
              solution={item?.solution}
              steps={item?.steps}
              materials={item?.materials}
              researchPaper={item?.researchPaper}
            />
          ))
        ) : (
          <h4 className="text-center text-xl font-semibold text-gray-700 col-span-full">
            No data available in this category.
          </h4>
        )}
      </div>
    </div>
  );
}
