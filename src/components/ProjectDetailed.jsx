import { Link } from 'react-router-dom';
import ProjectDetailRow from './ProjectDetailRow';

const ProjectDetailed = () => {
  return (
    <>
      <div className="flex items-start justify-start flex-col my-11 px-3 lg:py-24 lg:w-full">
        <div className="flex justify-center lg:mx-28">
          <Link to="/" className='text-2xl font-medium
        text-white border border-transparent rounded-md shadow-sm hover:text-gray-400'>  {'<-- Home'}</Link>
        </div>

        <table className="table w-full py-10 lg:mx-28 lg:w-3/4 mt-10">
          <thead className="sticky top-0 z-10 px-6 py-5 text-left">
            <tr className="table-row font-bold border-b backdrop-blur backdrop-opacity-10">
              <th className="table-cell text-xl text-center py-1 ">Year</th>
              <th className="table-cell text-xl text-center py-1">Project</th>
              <th className="table-cell text-xl text-center py-1">Made with</th>
            </tr>
          </thead>

          <tbody className="bg-slate-800">
            <ProjectDetailRow />
            <ProjectDetailRow />
            <ProjectDetailRow />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProjectDetailed;