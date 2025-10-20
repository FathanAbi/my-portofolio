export default function Contact() {
  return (
    <section className="max-w-xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-gray-300 mb-6">
        I’d love to collaborate or chat about opportunities. You can reach me at:
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <a
          href="mailto:abikarami60@gmail.com"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
        >
          📧 Email
        </a>
        <a
          href="https://www.linkedin.com/in/fathan-abi-karami"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://www.instagram.com/abi__80_"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
        >
          📸 Instagram
        </a>
      </div>

      <p className="text-gray-400 mt-4">
        Or just drop me a message and I’ll get back to you!
      </p>
    </section>
  )
}
