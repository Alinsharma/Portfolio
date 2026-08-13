import { useEffect, useRef, useState } from 'react'
import NoteContact from './NoteContact'

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function AchievementCard({ image, imageAlt, title, children, imageContain = false }) {
  const base = import.meta.env.BASE_URL
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`achievement-card flex flex-col md:flex-row border border-black mb-5 sm:mb-6 rounded-lg overflow-hidden bg-white ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div
        className={`w-full md:w-1/2 shrink-0 overflow-hidden ${
          imageContain ? 'bg-white flex items-center justify-center p-4' : ''
        }`}
      >
        <img
          src={`${base}${image}`}
          alt={imageAlt}
          className={`achievement-img ${
            imageContain
              ? 'w-full max-h-48 sm:max-h-64 md:max-h-none h-auto object-contain'
              : 'w-full h-48 sm:h-56 md:h-full min-h-[12rem] object-cover'
          }`}
        />
      </div>
      <div className="w-full md:w-1/2 p-4 sm:p-6 transition-colors duration-300 ease-in-out md:hover:bg-gray-50">
        <h3 className="text-center text-lg sm:text-xl font-bold">{title}</h3>
        {children}
      </div>
    </div>
  )
}

function RevealCard({ children, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`achievement-card ${className} ${visible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  )
}

function Achievements() {
  const base = import.meta.env.BASE_URL

  return (
    <section
      id="Achievement"
      className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
        {/* Left: Achievements */}
        <div className="lg:col-span-2 min-w-0">
      <h2 className="achievement-title text-2xl sm:text-3xl uppercase text-center font-bold text-gray-900 mb-8 sm:mb-12">
        Achievement
      </h2>

      <AchievementCard image="skit.jpg" imageAlt="skit prize" title="|| 🏆 SKIT ||">
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          Thrilled to share that we secured <strong>3rd place</strong> in the{' '}
          <strong>Skit Competition</strong> at the <strong>Startup Expo</strong>, held on{' '}
          <strong>March 11, 2024</strong>!
        </p>
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          A big shoutout to our amazing team for their creativity, hard work, and passion that
          brought our performance to life. The event was filled with inspiring ideas and incredible
          talent from across colleges, and we&apos;re proud to have been part of it.
        </p>
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          Here&apos;s to many more performances, achievements, and memories ahead! ✨
        </p>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 italic break-words">
          #SkitSuccess #StartupExpo2024 #ThirdPlaceWin #Teamwork #CollegeAchievements
        </p>
      </AchievementCard>

      <AchievementCard image="his.jpg" imageAlt="Hack It Sapiens" title="|| 🏆 HACK IT SAPIENS ||">
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          Thrilled to share that we secured <strong>3rd place</strong> in the{' '}
          <strong>Skit Competition</strong> at the <strong>Startup Expo</strong>, held on{' '}
          <strong>March 11, 2024</strong>!
        </p>
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          A big shoutout to our amazing team for their creativity, hard work, and passion that
          brought our performance to life. The event was filled with inspiring ideas and incredible
          talent from across colleges, and we&apos;re proud to have been part of it.
        </p>
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          Here&apos;s to many more performances, achievements, and memories ahead! 💫
        </p>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 italic break-words">
          #SkitSuccess #StartupExpo2024 #ThirdPlaceWin #Teamwork #CollegeAchievements
        </p>
      </AchievementCard>

      <AchievementCard image="interpe.jpg" imageAlt="InternPe" title="|| 🏆 InternPE ||">
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          I successfully completed a <strong>Web Development Internship</strong> at InternPe from{' '}
          <strong>7th August 2023 to 23rd August 2023</strong>. The internship was conducted
          remotely and focused on sharpening my front-end development skills, real-world coding
          practices, and professional communication.
        </p>
        <ul className="mt-3 sm:mt-4 text-gray-700 leading-relaxed list-disc list-outside pl-5 space-y-1 text-sm sm:text-base">
          <li>
            <strong>Role:</strong> Web Development Intern
          </li>
          <li>
            <strong>Duration:</strong> 2.5 Weeks
          </li>
          <li>Strengthened HTML, CSS, JavaScript, and responsive design skills</li>
          <li>Understood team workflows, deadlines, and client requirements</li>
          <li>Maintained a professional attitude while managing tasks independently</li>
        </ul>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 italic">
          📄 I&apos;m proud to have been appreciated for my dedication, knowledge, and contribution
          during this internship.
        </p>
      </AchievementCard>

      <AchievementCard
        image="samyak.png"
        imageAlt="Samyak Logo"
        title="|| 🏆 SAMYAK ||"
        imageContain
      >
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          🌟 Proud to share that I&apos;ve achieved an <strong>A++ grade</strong> in both{' '}
          <strong>C</strong> and <strong>C++ programming languages</strong> from{' '}
          <strong>Samyak Computer Classes, Vaishali Nagar</strong>!
        </p>
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          Grateful for the guidance of my mentors and the supportive learning environment that
          helped me build strong programming fundamentals. These languages form the backbone of
          modern programming, and mastering them has given me a solid foundation in logic building,
          memory management, and structured coding.
        </p>
        <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          This journey wasn&apos;t just about grades — it was about challenging myself, solving real
          problems, and growing as a programmer. A big thank you to my instructors and peers who
          made learning enjoyable and pushed me to do better every day.
        </p>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 italic">
          🚀 This milestone has motivated me to dive deeper into software development and pursue
          even more advanced technologies in the future.
        </p>
      </AchievementCard>

      <RevealCard className="grid grid-cols-1 sm:grid-cols-2 w-full mt-5 border border-black rounded-lg overflow-hidden bg-white">
        <div className="overflow-hidden border-b sm:border-b-0 sm:border-r border-black">
          <img
            src={`${base}udemy1.png`}
            alt="Udemy 1"
            className="achievement-img w-full h-48 sm:h-56 md:h-64 object-cover"
          />
        </div>
        <div className="overflow-hidden border-b sm:border-b-0 border-black">
          <img
            src={`${base}udemy2.png`}
            alt="Udemy 2"
            className="achievement-img w-full h-48 sm:h-56 md:h-64 object-cover"
          />
        </div>
        <div className="col-span-1 sm:col-span-2 border-t border-black p-4 sm:p-6 text-gray-700 leading-relaxed text-sm sm:text-base sm:text-justify">
          <p>
            To expand my technical expertise beyond academics, I pursued and successfully completed
            two professional certifications on <strong>Udemy</strong> 🎓. The first, titled{' '}
            <em>&quot;Microsoft 365 | Ultimate Guide&quot;</em> 💼, was a comprehensive 22.5-hour
            course instructed by Josh Werner and Learn Tecc. This course provided me with in-depth
            knowledge of Microsoft&apos;s productivity suite, including essential tools like Word,
            Excel, PowerPoint, Outlook, and Teams 📊.
          </p>
          <br />
          <p>
            In addition, I completed a focused course on{' '}
            <em>&quot;Learn Java and Artificial Intelligence Programming Tools&quot;</em> 🤖, taught
            by Srinidhi Ranganathan, Sowmya Sundararajan, and Saranya Srinidhi. Although shorter in
            duration (2.5 hours), this course introduced me to the integration of Java programming
            with various AI tools. It sparked my interest in AI development 💡 and gave me a clearer
            understanding of how core programming languages like Java play a crucial role in
            building intelligent systems 🧠💻.
          </p>
        </div>
      </RevealCard>

      <RevealCard className="flex flex-col md:flex-row border border-black mt-5 rounded-lg overflow-hidden bg-white">
        <div className="w-full md:w-1/2 overflow-hidden">
          <img
            src={`${base}regex.png`}
            alt="regex"
            className="achievement-img w-full h-48 sm:h-56 md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6">
          <h3 className="text-center text-lg sm:text-xl font-bold">|| 🏆 REGex - MERN ||</h3>
          <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            I&apos;m excited to share that I have been selected as a{' '}
            <strong>MERN Stack Intern</strong> at <strong>REGex Software Services</strong>, one of
            India&apos;s leading Ed-Tech and software companies.
          </p>
          <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            This <strong>45-day academic internship</strong>, starting from{' '}
            <strong>June 9, 2025</strong>, will allow me to work under the guidance of{' '}
            <strong>Mr. Prajjal Dhar</strong>, contributing to real-world development projects.
          </p>
          <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            This opportunity will enhance my full-stack skills and provide valuable industry
            exposure. I&apos;m grateful for this learning journey, and I&apos;m looking forward to
            applying my knowledge in a professional environment while embracing innovation,
            collaboration, and continuous growth.
          </p>
        </div>
      </RevealCard>
        </div>

        {/* Right: Note + Contact + Hobby */}
        <div className="lg:col-span-1">
          <NoteContact />
        </div>
      </div>
    </section>
  )
}

export default Achievements
