function Hero() {
  return (
    <>
      <div className="bg-white text-black font-sans px-4 sm:px-6">
        <div className="max-w-4xl mx-auto border border-black mt-8 sm:mt-10">
          <div className="w-full overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}w.jpg`}
              alt="Book Hand"
              className="w-full h-auto max-h-[280px] sm:max-h-[360px] md:max-h-none object-cover"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 leading-snug">
              Hey! Hi, I&apos;m Alin Sharma
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              I&apos;m a Full Stack Developer, Technical Trainer, and Product Enthusiast, currently
              working at Kaiten Software across development and product. I work with the MERN stack,
              Python, Data Science, and Machine Learning — and I enjoy turning ideas into products
              people can actually use.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
              On the web side, I build applications with HTML, CSS, JavaScript, React.js, Node.js,
              Express.js, MongoDB, and REST APIs, styled with Tailwind CSS and Bootstrap. In Python
              and ML, I work with NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn, and I&apos;m
              exploring GenAI and Agent AI.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
              My everyday toolkit includes Git, GitHub, VS Code, Cursor, Jupyter Notebook, and
              Google Colab. As a trainer, I help learners connect these tools to real projects —
              from writing clean code to understanding how the pieces fit together.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-black font-sans">
        <section className="max-w-6xl mx-4 sm:mx-6 lg:mx-auto my-5 border border-black relative">
          <div className="absolute -top-3 sm:-top-4 left-3 sm:left-4 bg-white px-2 sm:px-3 py-1 border border-black text-[10px] sm:text-xs tracking-widest uppercase">
            Hey!!
          </div>

          <div className="w-full bg-white flex items-center justify-center overflow-hidden px-2">
            <img
              src={`${import.meta.env.BASE_URL}hero.jpg`}
              alt="Book"
              className="w-full max-h-[220px] sm:max-h-[350px] md:max-h-[500px] object-contain transition-all duration-300"
            />
          </div>

          <div className="p-3 sm:p-4 mt-1 sm:mt-2">
            <h3 className="text-center text-base sm:text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
              Just a curious soul,
              <br />
              learning something new every day,
              <br />
              chasing dreams with a smile... 🙂
            </h3>
          </div>
        </section>

        <section className="border-t border-b my-8 sm:my-10 py-5 sm:py-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-relaxed break-words">
              <span className="inline sm:hidden">
                Creative · Reliable · Passionate · Innovative · Focused · Problem Solver · Team
                Player · Adaptable · Curious · Fast Learner
              </span>
              <span className="hidden sm:inline">
                Creative || Reliable || Passionate || Innovative || Focused || Detail-Oriented ||
                Problem Solver <br className="hidden md:block" />
                Team Player || Adaptable || Curious || Self-Motivated || Fast Learner || Tech-Savvy
                || Communicative <br className="hidden md:block" />
                Analytical || Visionary || Resourceful || Strategic
              </span>
            </h2>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero
