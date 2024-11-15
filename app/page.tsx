import Image from "next/image";

export default function Home() {
   return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
         Started Working at Arohi Software
      </h1>
      
      {/* Content Container */}
      
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-4xl">
        
        {/* Left Section: Info */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-semibold text-black mb-4">My Info</h2>
          
          <p className="text-gray-500 leading-relaxed mb-5">
          
          Hi, I'm Atharva Lachake. I'm excited to begin my journey with Aarohi Software, where I’ll apply my expertise in software development and project management.
          </p>
          <ul className="space-y-2">
            <li ><span className="font-semibold text-gray-500">Position : Software Developer Intern </span></li>
            <li><span className="font-semibold text-gray-500">Start Date: 15th Nov 2024 </span></li>
            <li><span className="font-semibold text-gray-500">Skills:Java, Python,HTML, CSS, JavaScript, MySQL, </span></li>
            <li><span className="font-semibold text-gray-500">Educational Background:Persuing B.Tech in Computer Science and Design at MET's Institute of Technology,Nashik</span></li>
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-99  border-2 border-white rounded overflow-hidden shadow-md">
            <Image
              src="/Atharva Resume.png"  // Replace with the actual path to your image
              alt="Atharva Lachke"
              width={450}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}