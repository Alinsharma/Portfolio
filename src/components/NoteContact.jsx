const places = [
  { name: 'Mathura', note: 'Birthplace of Lord Krishna, spiritual vibes.' },
  { name: 'Vrindavan', note: 'Divine temples and peaceful devotion.' },
  { name: 'Alwar', note: 'Forts, palaces, and Rajasthani heritage.' },
  { name: 'Jammu & Kashmir', note: 'Mountains, snow, and unmatched serenity.' },
  { name: 'Gurugram', note: 'Tech city life with fast pace.' },
  { name: 'Gwalior', note: 'Forts, history, and royal legacy.' },
  { name: 'Gujarat – Ahmedabad', note: 'Heritage city, culture, and vibrant urban life.' },
]

function NoteContact() {
  const base = import.meta.env.BASE_URL

  return (
    <aside className="w-full lg:self-start space-y-4 animate-fade-in">
      {/* Note + Contact */}
      <div className="p-4 sm:p-5 bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-4">
          Note
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed text-left sm:text-justify">
          <span className="font-semibold text-black">
            To those with experience in MERN or general web development —
          </span>{' '}
          My goal with this website is to maintain a simple, clean, and minimalistic design.
          I&apos;ve deliberately kept the codebase easy to follow, prioritizing readability and
          structure over flashy visuals.
          <br />
          <br />
          While I have the skills to implement advanced styling, animations, and effects (like hover
          states, dynamic themes, or colorful UI components), I&apos;ve chosen to keep things
          straightforward to focus on functionality, user experience, and clarity.
          <br />
          <br />I believe simplicity often leads to better understanding and maintainability, and I
          hope this approach resonates with you.
        </p>

        <div
          id="Contact"
          className="scroll-mt-24 mt-8 pt-6 border-t border-gray-200 text-center text-gray-800"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-2">Contact Me</h3>
          <p className="text-sm sm:text-base">Your Feedback Means a Lot!</p>
          <p className="mt-3 text-sm break-all">
            📧 <strong>Email:</strong>{' '}
            <a
              href="mailto:alinsharma1199@gmail.com"
              className="hover:text-purple-600 transition"
            >
              alinsharma1199@gmail.com
            </a>
          </p>
          <p className="mt-2 text-sm sm:text-base">
            📱 <strong>Mobile:</strong>{' '}
            <a href="tel:8239128383" className="hover:text-purple-600 transition">
              8239128383
            </a>
          </p>
        </div>
      </div>

      {/* Hobby — right column */}
      <div className="p-4 sm:p-5 bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-purple-700 mb-3">Hobby</h3>
        <p className="text-sm text-gray-700">
          I love <span className="font-bold text-black">traveling</span> and exploring new places.
        </p>
        <p className="mt-2 text-sm text-gray-700 italic">
          &quot;Passion fuels my code and creativity. Whether it&apos;s exploring places or building
          interfaces — I find beauty in the journey.&quot;
        </p>
        <p className="mt-2 text-sm">
          Exploring historic UK cities, castles, culture, charm{' '}
          <span className="text-2xl text-black inline-block animate-bounce">↓</span>
        </p>

        <div className="overflow-hidden rounded-xl shadow-md mt-3">
          <img
            src={`${base}t1.jpg`}
            alt="Trekking in Snow"
            className="w-full h-40 sm:h-48 object-cover md:hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={`${base}t.2.png`}
              alt="Exploring"
              className="w-full h-28 sm:h-32 object-cover md:hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={`${base}t3.jpg`}
              alt="Nature Walk"
              className="w-full h-28 sm:h-32 object-cover md:hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl shadow-md mt-2">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-40 object-cover md:hover:scale-105 transition-transform duration-500"
          >
            <source src={`${base}v1.MOV`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-5">
          <h4 className="font-bold text-center text-black text-lg sm:text-xl">
            Delhi <span className="text-2xl inline-block animate-bounce">↓</span>
          </h4>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              { src: 'd2.JPG', alt: 'Delhi Photo 1' },
              { src: 'd.4.png', alt: 'Delhi Photo 2' },
              { src: 'd3.jpg', alt: 'Delhi Photo 3' },
              { src: 'd1.JPG', alt: 'Delhi Photo 4' },
            ].map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={`${base}${photo.src}`}
                  alt={photo.alt}
                  className="w-full h-24 sm:h-28 object-cover md:hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h4 className="font-bold text-center text-black text-lg sm:text-xl">
            Pushkar <span className="text-2xl inline-block animate-bounce">↓</span>
          </h4>
          <div className="overflow-hidden rounded-xl shadow-md mt-2">
            <img
              src={`${base}p2.jpg`}
              alt="Pushkar"
              className="w-full h-32 object-cover md:hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {['p3.mp4', 'm4.mp4'].map((video) => (
              <div key={video} className="overflow-hidden rounded-lg shadow-md">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-28 object-cover md:hover:scale-105 transition-transform duration-500"
                >
                  <source src={`${base}${video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-3 sm:p-4 bg-white border border-gray-300 rounded-xl">
          <ul className="list-disc list-outside pl-5 text-gray-800 text-sm space-y-1.5">
            {places.map((place) => (
              <li key={place.name}>
                <span className="font-semibold text-black">{place.name}</span> – {place.note}
              </li>
            ))}
          </ul>
          <p className="text-center text-gray-700 mt-3 italic text-sm">
            Many more places... and trust me —{' '}
            <span className="font-bold text-black">the world is all yours to explore.</span>
          </p>
        </div>
      </div>
    </aside>
  )
}

export default NoteContact
