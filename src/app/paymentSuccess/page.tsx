import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
    <p className="text-xl mt-4">Thank you for your purchase. Your order is being processed.</p>
    <a
      href="/"
      className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-800"
    >
      Continue Shopping
    </a>
  </div>
  )
}

export default page
