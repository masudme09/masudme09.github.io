const ProjectDetailRow = () => {
  return (

    <tr className="border-b group hover:bg-secondary-dark last:border-none">
      <td className="py-4 pr-4 text-lg w-36 font-bold text-center align-middle group-hover:text-black">
        2021
      </td>
      <td className="py-4 pr-4 align-top text-sm">
        <div className="flex flex-col p-5 rounded-xl md:flex-row">

          <div className="w-full md:w-1/4 flex items-start py-3 px-3">
            {/* Image placeholder */}
            <img
              src="https://via.placeholder.com/150"
              alt="Project"
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-3/4 flex flex-col items-start justify-center">
            <h3 className="text-xl font-bold text-white group-hover:text-green-300">
              Personal Website With React
            </h3>
            <p className="text-secondary-dark text-left group-hover:text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam incidunt, quod veniam ab cumque voluptatem quidem provident,
              quas iste, dolores iusto ullam nam magnam voluptas pariatur quia dignissimos
              {' '}
              molestiae laudantium laborum explicabo esse ad neque.
            </p>
            <div className="mt-5 flex flex-col items-start">
              <span className="text-md text-white group-hover:text-green-300 font-bold">Link</span>
              <a href="#" className="inline-flex items-baseline font-medium leading-tight  hover:text-gray-500" > www.about.com </a>
            </div>
          </div>
        </div>
      </td>
      <td className="py-4 pr-4 align-center">
        <div className="flex flex-wrap mt-5 items-center justify-center">
          <div className="bg-green-500 rounded-full mb-3 mx-2 first:ml-0 last:mx-0">
            <span className="text-green-100 p-5">React</span>
          </div>
          <div className="bg-green-500 rounded-full mb-3 mx-2 first:ml-0 last:mx-0">
            <span className="text-green-100 p-5">Tailwind</span>
          </div>
          <div className="bg-green-500 rounded-full mb-3 mx-2 first:ml-0 last:mx-0">
            <span className="text-green-100 p-5">Javascript</span>
          </div>
          <div className="bg-green-500 rounded-full mb-3 mx-2 first:ml-0 last:mx-0 ">
            <span className="text-green-100 p-5">CSS</span>
          </div>
        </div>
      </td>
    </tr>







  );
}

export default ProjectDetailRow;