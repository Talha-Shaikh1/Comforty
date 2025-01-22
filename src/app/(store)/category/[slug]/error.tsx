'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-xl font-semibold text-red-500">Something went wrong!</h2>
      <p className="mt-2 text-gray-500">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
