'use client';

import { useEffect } from "react";

export default function ErrorExampleFallbackUI({
  error, 
  reset
}: {
  error: Error & { digest?: string }, 
  reset: () => void
}){
  useEffect( () => {
    // sent a report to your error 
  }, [error]);

  return (
    <div className="text-red-600 text-center flex flex-col items-center justify-center">
      {error?.message || 'An error occurred'}
      <button onClick={reset} className="bg-green-500 border-0 border-white p-3 text-white rounded-md mt-4">Try again</button>
    </div>
  )
}