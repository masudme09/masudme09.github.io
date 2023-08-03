import PropTypes from 'prop-types';
import Project from "./Project";

import QC from "../assets/QC.png";
import Monitor from "../assets/monitor.png";
import Buddi from "../assets/buddi.png";
import LiveHelp from "../assets/livehelp.png";

const ProjectSection = ({ setActiveButton }) => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Projects"
      onMouseEnter={() => setActiveButton('PROJECT')}
    >
      <div className="sticky top-0 z-20 mb-4 -mx-3 bg-slate-900/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>


      </div>
      {/* Project Listing:

      1. Quality Check Manager
      2. Real-time integration with Monitor ERP system
      3. Live help support
      4. Buddi
      5. Exbanking
      6. RentalServiceApi
      6. PowerpointStudio
      7. Flow Sheet Builder
      8. AdvertDetectionWithAudioFingerPrints */}

      <div className="flex flex-col items-start space-y-10">

        <Project
          project_image={QC}
          project_title={"Quality Check Manager"}
          project_description={
            <div>
              <p>
                Quality Check is a crucial step in the manufacturing industry that ensures products meet the
                required standards of quality.
                To streamline this process, GlobalReader has developed the Quality Check Manager, an add-in feature for their operator
                or shopfloor feedback application.
                This tool empowers users to create and manage quality checklists tailored for different workstations.
              </p>
              <p>
                The Quality Check Manager offers a flexible range of triggers for initiating quality checks.
                These triggers can be based on various factors such as the number of manual production entries,
                the count of sensor inputs, specific time intervals, or predetermined times of the day.
                As the system evolves, additional trigger types can be easily incorporated to cater to specific client needs.
              </p>
              <p>
                As the primary architect and implementer of this feature, I utilized Elixir, GenServer, Supervisor, Registry, Phoenix, LiveView, and Ecto in the implementation process.
              </p>
            </div>
          }
          stack_tags={["Elixir", "GCP", "Phoenix Pubsub", "Google Pubsub", "Phoenix", "LiveView", "Ecto", "PostgreSQL", "TDD"]}
        />
        <Project
          project_image={Monitor}
          project_title={"Real-time integration with Monitor ERP system"}
          project_description={
            <div>
              <p>
                Monitor ERP is a popular ERP system used by many manufacturing companies.
                GlobalReader has developed an integration with Monitor ERP that allows users to
                use GlobalReader&apos;s ecosystem and
                view real-time production data in the Monitor ERP system.
                This integration is achieved by using the Monitor ERP API to send production data to the Monitor ERP system.
              </p>
              <p>
                As the primary architect and implementer of this feature, I utilized Elixir, GenServer, Phoenix MVC API, LiveView, and Ecto in the implementation process.
              </p>
            </div>
          }
          stack_tags={["Elixir", "GCP", "Phoenix Pubsub", "Google Pubsub", "Phoenix", "LiveView", "Ecto", "PostgreSQL", "TDD"]}

        />
        <Project
          project_image={LiveHelp}
          project_title={"Live help support"}
          project_description={
            <div>
              <p>
                GlobalReader&apos;s Operator is a shopfloor feedback application widely adopted by more than 200 companies.
                This application serves as an interface with the production equipment, enabling operators to input essential
                production data.
                However, it also offers a helpful feature for operators in case they require assistance from other departments.
                For instance, if there is a shortage of materials, operators can seek help through this feature, ensuring a
                smooth workflow.
              </p>
              <p>

                When an operator needs assistance, they can send a customized message via the Operator application.
                The system is configured in advance to direct these messages to the relevant departments.
                The messages can be dispatched through various communication channels, such as SMS, email,
                or app push notifications, ensuring that the right people receive the information promptly.
              </p>
              <p>
                To implement this feature, I utilized Elixir, LiveView, and Ecto in the implementation process.
              </p>
            </div>
          }
          stack_tags={["Elixir", "Phoenix Pubsub", "Google Pubsub", "Phoenix", "LiveView", "Ecto", "PostgreSQL", "TDD"]}

        />
        <Project
          project_image={Buddi}
          project_title={"Buddi"}
          project_description={
            <div>
              <p>
                Buddi is a utility application designed to support day-to-day educational needs.
                Initially inspired by my research on &nbsp;
                <a
                  href='https://comserv.cs.ut.ee/home/files/Open+and+Accessible+Education+With+Virtual+Reality.pdf?study=ATILoputoo&reference=92F3B4C35D65C25713BC38A37E5A463A96FF6274'
                  className='text-blue-500 hover:text-blue-700'
                >
                  Open and accessible education with Virtual Reality (VR)
                </a> ,
                the tool has been expanded to function effectively as a web application,
                catering to a broader user base. The primary purpose of Buddi is to facilitate seamless
                note-taking, editing, and updating, allowing users to organize their educational content efficiently.
                It will also offer options to export notes, share them on social media, and engage in
                collaborative learning through private chat channels with peers and institutions.
                As fureplan, Buddi will further enhance the learning experience by enabling users to
                include images and voice notes, promoting visual and audio-based learning.
              </p>
              <p>
                This project is currently under development and not yet ready for public release.
                I have plan to release it in mid 2024.
              </p>
              <p>
                I utilized Elixir, Phoenix, LiveView, and Ecto in the implementation process.
              </p>

              <p className='font-bold '>
                Github Project Link: <a href='https://github.com/masudme09/Buddi'
                  className='text-blue-500 hover:text-blue-700'
                >https://github.com/masudme09/Buddi</a>
              </p>

            </div>
          }

          stack_tags={["Elixir", "Phoenix", "LiveView", "Ecto", "PostgreSQL", "TDD"]}
        />
      </div>

      <Project
        // add placeholder image
        project_image={"https://via.placeholder.com/150"}
        project_title={"Exbanking"}
        project_description={
          <div>
            <p>
              This is an attempt to implement in-memory banking like solution.
              Basically, I have played through different OTP behaviours like GenServers, Superviors etc.
            </p>

            <p className='font-bold '>
              Github Project Link: <a href='https://github.com/masudme09/ExBanking'
                className='text-blue-500 hover:text-blue-700'
              >https://github.com/masudme09/ExBanking</a>
            </p>

          </div>
        }
        stack_tags={["Elixir", "Elixir OTP", "GenServer", "Supervisor", "TDD"]}

      />

      <Project
        // add placeholder image
        project_image={"https://via.placeholder.com/150"}
        project_title={"PowerPointStudio"}
        project_description={
          <div>
            <p>
              This project was built to automate the process of creating online presentations.
              So, the idea was to take powerpoint opjects and convert them into JSON objects.
              And later on feed that JSON to React application to generate similar looking light-weight web friendly presentation.
              With this application, it is possible to convert a powerpoint presentation with commonly used shape into JSON or HTML.
              This was really fun and challenging project due to shortcomings of OpenXML documentation.
            </p>

            <p className='font-bold '>
              Github Project Link: <a href='https://github.com/masudme09/PowerPointStudio'
                className='text-blue-500 hover:text-blue-700'
              >https://github.com/masudme09/PowerPointStudio</a>
            </p>
          </div>
        }
        stack_tags={["C#", ".NET", "PowerPoint", "JSON", "HTML"]}
      />

      <Project
        project_image={"https://via.placeholder.com/150"}
        project_title={"KaiBank"}
        project_description={
          <div>
            <p>
              This is a open source API project to implement banking like solution. I have contributed to this project along with
              other developers. Main goal of this project is to implement barebone
              features of banking system and make it public for future enhancement by the community.
              I have contributed to this project from brainstorming, design, implementation and testing.
            </p>

            <p className='font-bold '>
              Gitlab Project Link: <a href='https://gitlab.com/pabasarajw/kaibank-backend'
                className='text-blue-500 hover:text-blue-700'
              >https://gitlab.com/pabasarajw/kaibank-backend</a>
            </p>
          </div>
        }

        stack_tags={["Java 11", "Spring Boot", "Maven", "Apache Tomcat", "MySQL", "TDD"]}

      />

    </section>
  );
}
ProjectSection.propTypes = {
  setActiveButton: PropTypes.func.isRequired
};

export default ProjectSection;