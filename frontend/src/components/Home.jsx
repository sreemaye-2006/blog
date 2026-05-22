import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl">
          Explore the world of Web Development, Artificial Intelligence,
          Programming, and Modern Technology.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="Web Development"
          className="w-[350px] h-[220px] object-cover rounded-2xl shadow-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="Artificial Intelligence"
          className="w-[350px] h-[220px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default Home
