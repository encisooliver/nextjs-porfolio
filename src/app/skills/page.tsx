import React from 'react';
import { useState } from 'react';

export default function Skills() {
  const images = [
    "/rust.png",
    "/substrate-framework.png",
    "/ink.png",
    "/nodejs.png",
    "/fastify.png",
    "/nestjs.png",
    "/expressjs.png",
    "/angular.png",
    "/ionic.png",
    "/aspdotnet.jpeg",
    "/laravel.png",
    "/ionic.png",
  ];
  return (
    <section className="overflow-hidden pb-10 pt-20 lg:pt-[120px] lg:pb-[90px] bg-white">
       <div className="container">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Technology Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
