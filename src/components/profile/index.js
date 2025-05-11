import Image from "next/image";

export default function Profile() {
  return (
    <div className="w-full md:w-[280px] md:h-screen bg-white md:fixed md:left-0 md:top-0 p-8 flex flex-col items-center shadow-lg md:shadow-lg md:z-10">
      <div className="size-[200px] rounded-full bg-gray-200 mb-6 overflow-hidden border-3 border-gray-100">
        <Image 
          src="/image.png"
          alt="Your Profile Picture" 
          className="w-full h-full object-cover"
          width={150}
          height={150}
        />
      </div>
      
      <h1 className="text-[1.6rem] font-semibold mb-2 text-gray-800">Justen Dorrance</h1>
      <p className="text-base text-gray-600 mb-6">Software Developer</p>

      <p className="text-center leading-relaxed text-gray-600 text-sm mt-6">
        Passionate developer with a love for all things tech. Currently based in Fort Collins, CO.
      </p>
      
      <div className="flex gap-4 mt-4 mb-6">
        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:-translate-y-0.5 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:-translate-y-0.5 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:-translate-y-0.5 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
        </a>
      </div>
    </div>
  );
}
