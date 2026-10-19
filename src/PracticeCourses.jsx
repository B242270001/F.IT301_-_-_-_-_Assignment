import React, { useEffect, useState } from 'react';

export default function PracticeCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses/practice')
      .then(res => res.json())
      .then(data => setCourses(data.data || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Дадлага хичээл сонгох</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map(course => (
          <div key={course.id} className="border p-5 rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Нийт нэгж: {course.totalUnits}</span>
              <a href={`/practice/${course.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Эхлэх
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

