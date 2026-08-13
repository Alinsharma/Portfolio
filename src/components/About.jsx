function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 sm:px-6">
      <h3 className="text-2xl sm:text-3xl uppercase text-center font-bold text-gray-900 mb-8 sm:mb-12 md:mb-16">
        About Me
      </h3>

      <img
        src={`${import.meta.env.BASE_URL}about.jpg`}
        alt="Alin Sharma"
        className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full mx-auto mb-6 border-4 border-gray-900"
      />

      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4 sm:p-6 text-gray-800">
        <p className="text-center text-xs sm:text-sm md:text-base font-semibold text-gray-500 tracking-wide mb-4 leading-relaxed">
          Full Stack Developer | Technical Trainer | Python &amp; Machine Learning | Product
          Enthusiast
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base sm:text-justify">
          Hi! I&apos;m <strong>Alin Sharma</strong>, a Computer Science graduate currently working
          at <strong>Kaiten Software</strong> in Full Stack Development and Product Management. I
          also bring experience as a Technical Trainer across the MERN stack, Python, Data Science,
          and Machine Learning — including GenAI and Agent AI. I enjoy turning ideas into products
          and technical concepts into practical, understandable learning.
          <br />
          <br />
          As a developer, I build clean, responsive web applications with HTML, CSS, JavaScript,
          React.js, Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS, and Bootstrap. I work
          daily with Git, GitHub, VS Code, and Cursor. As a trainer, I mentor learners through
          coding sessions, projects, debugging, and assessments — bridging theory with real-world
          practice using Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Jupyter Notebook,
          and Google Colab.
          <br />
          <br />
          I&apos;ve also gained diverse experiences beyond the classroom, such as working on RTO
          vehicle data entry systems, contributing to the Rajasthan Agriculture Fest (RAF)—a unique
          auction event showcasing innovation—and participating in the G-20 Summit 2024 in Delhi.
          These opportunities have shaped my communication, adaptability, and teamwork.
          <br />
          <br />
          In 2024, I completed a Live Project Based Internship cum Training in C &amp; C++
          Programming from Samyak IT Solutions Pvt Ltd, an NSDC-authorized institute (August 24 –
          November 5), earning an A+ grade. That experience strengthened my logic-building,
          problem-solving, and foundational programming skills.
          <br />
          <br />
          In March 2024, I secured 3rd position in the Startup Expo held during Pravah 2024 at Swami
          Keshvanand Institute of Technology, Management &amp; Gramothan (SKIT). The experience
          refined my ability to communicate ideas, work under pressure, and collaborate effectively.
          <br />
          <br />
          At Kaiten Software I get to work on both sides of a product — building the technology and
          understanding the product behind it. Whether shipping features or helping others learn, I
          care about practical Full Stack work, clear technical communication, and continuous
          growth.
        </p>

        <a
          href="#experience"
          className="text-sm text-purple-700 underline mt-4 inline-block hover:text-purple-900 transition"
        >
          Read More →
        </a>

        <div className="flex justify-center flex-wrap gap-5 sm:gap-6 text-xl sm:text-2xl text-gray-700 mt-5">
          <a
            href="https://github.com/Alinsharma"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="mailto:alinsharma1199@gmail.com"
            className="hover:text-red-600"
            aria-label="Email"
          >
            <i className="fas fa-envelope" />
          </a>
          <a
            href="https://www.instagram.com/alinsharma11/?__pwa=1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-600"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
