import PropTypes from 'prop-types';
import Experience from "./Experience";
import Resume from '../assets/resume.pdf';

const ExperienceSection = ({ setActiveButton }) => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 w-full md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work Experinece"
      onMouseEnter={() => setActiveButton('EXPERIENCE')}
    >
      <div className="sticky top-0 z-20 -mx-3 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="flex flex-col items-start space-y-10">
        <Experience
          job_span={'2021 - Present'}
          job_title='Full Stack Software Developer'
          company_name={
            <a href="https://www.globalreader.eu" target="_blank"
              rel="noreferrer" className='text-blue-400 hover:text-blue-500'>GlobalReader OÜ</a>}
          job_team=''
          job_description={
            <div>
              <p>
                At GlobalReader OU, I am working to create and maintain IoT-based real-time
                applications with Elixir based Phoenix MVC Framework, LiveView, and Ecto. My contributions include
                developing efficient real-time dashboards for multiple IoT devices, automating invoicing services, and
                implementing live help support. I actively monitor system performance and collaborate in code
                reviews, bug fixing, and providing custom features for clients.
              </p>
            </div>
          }
          stack_tags={["Elixir", "Phoenix", "Ecto", "Phoenix LiveView", "Erlang OTP", "TDD"]} />
        <Experience
          job_span={'Feb 2020 - Aug 2021'}
          job_title={'Software Engineer'}
          company_name={
            <a href="https://bjitgroup.com/" target="_blank"
              rel="noreferrer" className='text-blue-400 hover:text-blue-500'>BJIT Ltd</a>
          }
          job_team={'Software Tools Development'}
          job_description={
            <div>
              <p>
                I have played a crucial role in enhancing productivity and data processing for mechanical designers.
                Notably, I had worked to optimize the Flow Sheet Builder tool (utilized for creating mechanical process flow drawings
                in AutoCAD) by 60% reducing its running time through redesign, strategic code restructuring using C# and VBA. I excelled
                in software
                testing, debugging, and seamless integration with application-provided APIs, working proficiently with MSSQL
                and PostgreSQL databases. Additionally, I took pride in guiding and mentoring fellow
                teammates on technical aspects to ensure project success. My time at BJIT Ltd. was marked by valuable contributions
                and a dedication to innovative software solutions.
              </p>
            </div>
          }
          stack_tags={["C#", "VB", "ASP.NET", ".NET Core", ".NET Framework", "WPF",
            "WFA", "MVVM", "OOP", "JavaScript", "XML", "TDD"]}
        />
        <Experience
          job_span={'Feb 2018 - Jan 2020'}
          job_title={'Application Support Engineer'}
          company_name={
            <a href="https://bjitgroup.com/" target="_blank"
              rel="noreferrer" className='text-blue-400 hover:text-blue-500'>BJIT Ltd</a>
          }
          job_team={'Application Support'}
          job_description={
            <div>
              <p>
                As an Application Support Engineer, my primary responsibility is to provide comprehensive support
                and enhance productivity for modern CAD software. I achieve this by developing valuable tools and
                add-ins that bring about significant improvements in productivity for our clients. These enhancements
                aim to streamline workflows and optimize the overall user experience with the CAD software. Through my
                technical expertise and dedication to delivering efficient solutions, I ensure that our clients can
                make the most of their CAD software, ultimately leading to enhanced productivity and a seamless user
                experience.
              </p>
            </div>
          }
          stack_tags={["C#", "VB", ".NET Framework", "WPF",
            "WFA", "MVVM", "OOP", "XML", "ServiceNow", "AutoCAD API", "Solidworks API"]}
        />
        {/* add full resume link button */}

        <a href={Resume} target='_blank' rel="noreferrer" className="px-4 py-2 text-lg font-medium
        text-white border border-transparent rounded-md shadow-sm hover:bg-secondary-dark hover:text-green-300
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"> Show Full Resume{'-->'} </a>
      </div>

    </section>
  );
}

ExperienceSection.propTypes = {
  setActiveButton: PropTypes.func.isRequired
};

export default ExperienceSection;