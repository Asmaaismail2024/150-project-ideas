import React from "react";
import "../styles/cardstep.css";

export default function CardStep({ title, description }) {
  return (
    <div className="card w-50">
      <div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
        <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-gray-800 flex items-center justify-center">
          <h2>{title}</h2>
        </div>
        <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-blue-600 flex items-center justify-center">
          <h2 className="text-lg text-slate-200">{description}</h2>
        </div>
      </div>
    </div>
  );
}
