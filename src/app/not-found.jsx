import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <div className="text-center min-h-screen">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">Oops! Page Not Found</p>
        <p className="text-gray-500 mt-2">The page you're looking for doesn't exist.</p>
        <Link href="/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Go Home
        </Link>
    </div>
    </div>
  )
}
