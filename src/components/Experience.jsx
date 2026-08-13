const experiences = [
  {
    id: 'kaiten',
    roleLabel: 'Full Stack & Product',
    company: 'Kaiten Software',
    title: 'Full Stack Development & Product Management',
    duration: 'August 2026 – Present',
    summary:
      'Started a new chapter at Kaiten Software, working across both Full Stack Development and Product Management. The role sits between product vision and technical implementation — understanding what to build, then building it.',
    photos: [
      {
        src: 'kaiten.png',
        alt: 'Alin Sharma at Kaiten Software',
      },
    ],
    responsibilities: [
      'Understanding product requirements and translating them into technical solutions',
      'Contributing to product planning, feature development, and ongoing improvements',
      'Building and maintaining scalable full-stack applications',
      'Working across frontend, backend, APIs, databases, and integrations',
      'Collaborating with the team to turn ideas into practical, user-focused products',
      'Bridging the gap between product vision and technical implementation',
    ],
  },
  {
    id: 'fingertips',
    roleLabel: 'Technical Trainer',
    company: 'Fingertips Data Intelligence Solutions Pvt. Ltd.',
    title: 'Technical Trainer — Full Stack Development & Python/ML',
    duration: '1 Year',
    summary:
      'Worked as a Technical Trainer specializing in Full Stack Development, MERN Stack, Python, Data Science and Machine Learning. Delivered practical, project-oriented training, mentored students through coding challenges and projects, and developed hands-on learning material and assessments.',
    photos: [
      {
        src: 'fingertips-work.png',
        alt: 'Alin Sharma at Fingertips workspace',
      },
      {
        src: 'fingertips-team.png',
        alt: 'Fingertips team celebration',
      },
    ],
    responsibilities: [
      'Trained students in Full Stack Development, MERN Stack, Python, Data Science and Machine Learning',
      'Taught Python libraries such as NumPy, Pandas, Matplotlib and Seaborn',
      'Conducted practical coding sessions on web development, JavaScript and React',
      'Created datasets, exercises and assessments; evaluated assignments, tests and projects',
      'Debugged student code and explained technical concepts in a clear, approachable way',
    ],
  },
]

function ExperienceCard({ experience, delay = 0 }) {
  const base = import.meta.env.BASE_URL
  const { roleLabel, company, title, duration, summary, photos, responsibilities } =
    experience
  const stackedPhotos = photos.length > 1

  const photoImages = photos.map((photo, index) => (
    <div
      key={photo.src}
      className={`overflow-hidden experience-photo h-full ${
        stackedPhotos && index === 0 ? 'border-r md:border-r-0 md:border-b border-black' : ''
      }`}
      style={{ animationDelay: `${0.15 + delay + index * 0.12}s` }}
    >
      <img
        src={`${base}${photo.src}`}
        alt={photo.alt}
        className={`experience-img w-full h-full object-cover ${
          stackedPhotos ? '' : 'object-top'
        }`}
      />
    </div>
  ))

  const textBlock = (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-purple-700 font-semibold text-center sm:text-left">
          {roleLabel}
        </p>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-semibold text-center sm:text-left">
          {duration}
        </p>
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug text-center sm:text-left break-words">
        {company}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 mb-4 text-center sm:text-left">
        {title}
      </p>
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4 sm:text-justify">
        {summary}
      </p>
      <ul className="list-disc list-outside pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
        {responsibilities.map((item, index) => (
          <li
            key={item}
            className="experience-bullet pl-1"
            style={{ animationDelay: `${0.35 + delay + index * 0.06}s` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div
      className="max-w-4xl mx-auto border border-black rounded-lg overflow-hidden bg-white experience-card animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col-reverse md:flex-row md:items-stretch">
        <div className="w-full md:flex-1 min-w-0">{textBlock}</div>
        <div className="w-full md:w-[11.7rem] lg:w-[13.5rem] shrink-0 border-b md:border-b-0 md:border-l border-black">
          <div
            className={
              stackedPhotos
                ? 'grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 h-36 sm:h-44 md:h-full'
                : 'h-52 sm:h-56 md:h-full'
            }
          >
            {photoImages}
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 max-w-6xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6 mb-16 sm:mb-20"
    >
      <h2 className="text-2xl sm:text-3xl uppercase text-center font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in">
        Professional Experience
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base animate-fade-in px-1">
        Building products, shipping full-stack software, and training others along the way.
      </p>

      <div className="space-y-6 sm:space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} delay={index * 0.12} />
        ))}
      </div>
    </section>
  )
}

export default Experience
