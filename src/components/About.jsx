import PropTypes from 'prop-types';

const About = ({ setActiveButton }) => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
      onMouseEnter={() => setActiveButton('ABOUT')}
    >
      <div className="sticky top-0 z-20 -mx-3 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="block text-left text-gray-300 text-lg mb-4 space-y-1">

        <p>Hi, I am a Full-Stack Software Developer with a strong focus on backend development,
          particularly in the Elixir ecosystem for IoT-based applications. My primary expertise lies
          in designing, developing, and maintaining web applications using Phoenix, Elixir, Phoenix LiveView, and OTP.</p>

        <p>My journey in programming started back in 2009 with C/C++ before pursuing my bachelor&apos;s degree
          in Mechanical Engineering in 2010. Throughout my studies, I worked on diverse projects, including
          line-following robots and solving algorithms for numerical methods and machine design problems using C++ and Matlab.</p>

        <p>After graduation, I joined two different companies in their R&D departments, where I tackled challenges
          using C++, C#, and Visual Basic. However, my passion for programming grew, prompting me to switch to a
          career in Software Development. I began as an Application Support Engineer at a software development
          company, gaining experience in C#, VB, AutoLisp, ASP.NET, SQL, JavaScript, and other application-specific
          languages. Eventually, I was promoted to a Software Developer role, primarily working with C# and ASP.NET.</p>

        <p>To solidify my career change, I pursued a Post Graduate Diploma in IT from Jahangirnagar University,
          Bangladesh, graduating in 2019. Following that, I enrolled in a Masters in Software Engineering program
          at the University of Tartu, Estonia. During this program, I immersed myself in various areas of Software
          Engineering, such as Enterprise Software Integration, Big Data analysis, Machine learning, Game Development,
          Virtual Reality, Software Testing, Software Project Management, and Business Process Management.</p>

        <p>Throughout my academic journey, I worked on diverse projects involving technologies like Elixir, C#, F#, Go,
          Java, React, Vue.js, Blueprint Script for Unreal, and more. This experience significantly enhanced my
          adaptability to different technologies.</p>

        <p>Besides my academic pursuits, I also worked as a freelance developer, taking on interesting web and
          desktop-based projects. This exposure to different domains and technologies fueled my passion for continuously
          learning new technologies and solving complex problems with them.</p>

        <p>Overall, I bring a wealth of experience and a strong dedication to staying up-to-date with the latest trends
          and advancements in the software development world. I am always eager to embrace new challenges and contribute
          my expertise to innovative projects.</p>
      </div>
    </section>
  );
};


About.propTypes = {
  setActiveButton: PropTypes.func.isRequired
};

export default About;
