const skillCategories = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    priority: 1,
    icon: 'fa-layer-group',
    accent: 'border-purple-600',
    iconColor: 'text-purple-700',
    description: 'End-to-end web applications with the MERN stack and REST APIs.',
    skills: [
      { name: 'HTML5', icon: 'fa-html5', brand: true },
      { name: 'CSS3', icon: 'fa-css3-alt', brand: true },
      { name: 'JavaScript', icon: 'fa-js', brand: true },
      { name: 'React.js', icon: 'fa-react', brand: true },
      { name: 'Node.js', icon: 'fa-node-js', brand: true },
      { name: 'Express.js', icon: 'fa-server', brand: false },
      { name: 'MongoDB', icon: 'fa-database', brand: false },
      { name: 'MERN Stack', icon: 'fa-cubes', brand: false },
      { name: 'REST APIs', icon: 'fa-plug', brand: false },
      { name: 'Git', icon: 'fa-git-alt', brand: true },
      { name: 'GitHub', icon: 'fa-github', brand: true },
    ],
  },
  {
    id: 'python',
    title: 'Python & Data Science',
    priority: 2,
    icon: 'fa-python',
    brandIcon: true,
    accent: 'border-green-600',
    iconColor: 'text-green-700',
    description: 'Practical Python for data analysis, visualization, and training workflows.',
    skills: [
      { name: 'Python', icon: 'fa-python', brand: true },
      { name: 'NumPy', icon: 'fa-calculator', brand: false },
      { name: 'Pandas', icon: 'fa-table', brand: false },
      { name: 'Matplotlib', icon: 'fa-chart-line', brand: false },
      { name: 'Seaborn', icon: 'fa-chart-area', brand: false },
      { name: 'Jupyter Notebook', icon: 'fa-book', brand: false },
      { name: 'Google Colab', icon: 'fa-laptop-code', brand: false },
      { name: 'Exploratory Data Analysis', icon: 'fa-magnifying-glass-chart', brand: false },
      { name: 'Data Cleaning', icon: 'fa-broom', brand: false },
      { name: 'Data Preprocessing', icon: 'fa-filter', brand: false },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    priority: 3,
    icon: 'fa-brain',
    accent: 'border-indigo-600',
    iconColor: 'text-indigo-700',
    description: 'Classical ML concepts taught and applied with Scikit-learn.',
    skills: [
      { name: 'Scikit-learn', icon: 'fa-robot', brand: false },
      { name: 'Supervised Learning', icon: 'fa-graduation-cap', brand: false },
      { name: 'Unsupervised Learning', icon: 'fa-diagram-project', brand: false },
      { name: 'Regression', icon: 'fa-chart-line', brand: false },
      { name: 'Classification', icon: 'fa-tags', brand: false },
      { name: 'Feature Engineering', icon: 'fa-gears', brand: false },
      { name: 'Model Training', icon: 'fa-dumbbell', brand: false },
      { name: 'Model Evaluation', icon: 'fa-clipboard-check', brand: false },
      { name: 'Data Preprocessing', icon: 'fa-filter', brand: false },
      { name: 'GenAI', icon: 'fa-wand-magic-sparkles', brand: false },
      { name: 'Agent AI', icon: 'fa-robot', brand: false },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    priority: 4,
    icon: 'fa-desktop',
    accent: 'border-blue-600',
    iconColor: 'text-blue-700',
    description: 'Responsive interfaces and UI development with modern web tech.',
    skills: [
      { name: 'HTML', icon: 'fa-html5', brand: true },
      { name: 'CSS', icon: 'fa-css3-alt', brand: true },
      { name: 'JavaScript', icon: 'fa-js', brand: true },
      { name: 'React.js', icon: 'fa-react', brand: true },
      { name: 'Responsive Web Design', icon: 'fa-mobile-screen', brand: false },
      { name: 'UI Development', icon: 'fa-palette', brand: false },
      { name: 'Tailwind CSS', icon: 'fa-wind', brand: false },
      { name: 'Bootstrap', icon: 'fa-bootstrap', brand: true },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Development Workflow',
    priority: 5,
    icon: 'fa-toolbox',
    accent: 'border-gray-700',
    iconColor: 'text-gray-800',
    description: 'Everyday tools for coding, collaboration, and learning delivery.',
    skills: [
      { name: 'Git', icon: 'fa-git-alt', brand: true },
      { name: 'GitHub', icon: 'fa-github', brand: true },
      { name: 'VS Code', icon: 'fa-code', brand: false },
      { name: 'Cursor', icon: 'fa-i-cursor', brand: false },
      { name: 'Jupyter Notebook', icon: 'fa-book', brand: false },
      { name: 'Google Colab', icon: 'fa-laptop-code', brand: false },
      { name: 'C', icon: 'fa-code', brand: false },
      { name: 'C++', icon: 'fa-code', brand: false },
    ],
  },
  {
    id: 'professional',
    title: 'Professional & Product Skills',
    priority: 6,
    icon: 'fa-briefcase',
    accent: 'border-amber-600',
    iconColor: 'text-amber-700',
    description: 'Communication, mentoring, and product-oriented delivery from training work.',
    skills: [
      { name: 'Problem Solving', icon: 'fa-lightbulb', brand: false },
      { name: 'Technical Communication', icon: 'fa-comments', brand: false },
      { name: 'Student Mentoring', icon: 'fa-chalkboard-user', brand: false },
      { name: 'Project Guidance', icon: 'fa-compass', brand: false },
      { name: 'Requirement Understanding', icon: 'fa-list-check', brand: false },
      { name: 'Debugging', icon: 'fa-bug', brand: false },
      { name: 'Product Thinking', icon: 'fa-bullseye', brand: false },
      { name: 'Technical Documentation', icon: 'fa-file-lines', brand: false },
    ],
  },
]

function SkillIcon({ icon, brand }) {
  if (!icon) return null
  return (
    <i
      className={`${brand ? 'fab' : 'fas'} ${icon} text-sm shrink-0`}
      aria-hidden="true"
    />
  )
}

function Skills() {
  return (
    <section
      id="skill"
      className="scroll-mt-20 max-w-6xl mx-auto mt-10 px-4 sm:px-6 mb-16 sm:mb-20"
    >
      <div className="border border-black rounded-xl p-4 sm:p-6 md:p-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center animate-fade-in uppercase tracking-wide">
            My Skills
          </h2>
          <p className="text-center text-purple-700 font-semibold text-xs sm:text-sm md:text-base mb-2 animate-fade-in leading-relaxed px-1">
            Full Stack Developer + Python/ML Professional + Technical Trainer + Product-Oriented
            Developer
          </p>
          <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in">
            Skills shaped by hands-on development and technical training across Full Stack, MERN,
            Python, Data Science, and Machine Learning — including modern GenAI and Agent AI
            workflows.
          </p>

          {/* Priority focus strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-10">
            {[
              { label: 'Full Stack / MERN', icon: 'fa-layer-group' },
              { label: 'Python & Data', icon: 'fa-python', brand: true },
              { label: 'Machine Learning', icon: 'fa-brain' },
              { label: 'Training & Mentoring', icon: 'fa-chalkboard-user' },
            ].map((item) => (
              <div
                key={item.label}
                className="skill-focus-card border border-black rounded-lg px-2 py-3 sm:px-3 sm:py-4 text-center bg-white"
              >
                <i
                  className={`${item.brand ? 'fab' : 'fas'} ${item.icon} text-purple-700 text-lg sm:text-xl mb-1.5`}
                  aria-hidden="true"
                />
                <p className="text-[11px] sm:text-xs font-semibold text-gray-800 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Category skill cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-left">
            {skillCategories.map((category, index) => (
              <article
                key={category.id}
                className={`skill-category-card border border-black rounded-lg bg-white p-4 sm:p-5 border-t-4 ${category.accent} ${
                  category.id === 'fullstack' || category.id === 'professional'
                    ? 'md:col-span-2'
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 border border-black rounded-md ${category.iconColor} shrink-0`}
                  >
                    <i
                      className={`${category.brandIcon ? 'fab' : 'fas'} ${category.icon}`}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={`${category.id}-${skill.name}`}
                      className="skill-chip inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-gray-300 rounded-md text-xs sm:text-sm font-medium text-gray-800 bg-white max-w-full"
                    >
                      <SkillIcon icon={skill.icon} brand={skill.brand} />
                      <span className="break-words">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Highlight cards — keep design language, no fake % */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="p-4 sm:p-6 border border-black rounded-lg bg-white hover:bg-green-50 transition duration-300 ease-in-out">
              <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2 flex items-center gap-2">
                <i className="fab fa-react" aria-hidden="true" />
                MERN Stack Focus
              </h3>
              <p className="text-gray-800 mb-3 text-sm sm:text-base">
                Building full-stack web applications with:
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
                <li>
                  <strong>MongoDB</strong> — flexible data storage
                </li>
                <li>
                  <strong>Express.js</strong> — REST API backends
                </li>
                <li>
                  <strong>React.js</strong> — component-based UIs
                </li>
                <li>
                  <strong>Node.js</strong> — server-side runtime
                </li>
              </ul>
            </div>

            <div className="p-4 sm:p-6 border border-black rounded-lg bg-white hover:bg-blue-50 transition duration-300 ease-in-out">
              <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                <i className="fas fa-chalkboard-user" aria-hidden="true" />
                Training + Product Mindset
              </h3>
              <p className="text-gray-800 mb-3 text-sm sm:text-base">
                Experience bridging development and teaching:
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
                <li>Hands-on Full Stack &amp; Python/ML sessions</li>
                <li>Mentoring students through projects and debugging</li>
                <li>Clear technical communication and documentation</li>
                <li>Product-oriented thinking in practical builds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
