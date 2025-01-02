export default function Education() {
  return (
    <section id="education" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">Education</h2>
      <ul className="space-y-4">
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full">
          <h3 className="font-semibold text-lg">PhD in Computer Science</h3>
          <p className="text-gray-400">University of Jaffna, Sri Lanka (2018-2022)</p>
          <p className="text-sm text-gray-300 mt-1">Title of thesis: Deep Learning Based Fine-Grained Diabetic Retinopathy Image Grading.</p>
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full">
          <h3 className="font-semibold text-lg">Bachelor of Science (Specialisation in Computer Science)</h3>
          <p className="text-gray-400">University of Jaffna, Sri Lanka (2013–2017)</p>
          <p className="text-sm text-gray-300 mt-1">OGPA – 3.82 out of 4.00, First Class, Medium - English</p>
        </li>
      </ul>
    </section>
  )
}

