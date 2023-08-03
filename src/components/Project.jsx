import PropTypes from 'prop-types';

const Project = (props) => {
  return (
    <div className="flex flex-col group hover:bg-slate-800 p-5 rounded-xl md:flex-row">

      <div className="w-full flex items-start py-3 px-3 md:w-1/4">
        {/* Image placeholder */}
        {<img
          src={props.project_image}
          alt="Project"
          className={"rounded-xl bg-cyan-950 h-auto" + " " + props.image_class}
        />}
      </div>
      <div className="w-full md:w-3/4 flex flex-col items-start">
        <h3 className="text-xl font-bold text-white">
          {props.project_title}
        </h3>
        <p className="text-secondary-dark text-left mt-3">
          {props.project_description}
        </p>

        <div className="flex flex-wrap mt-5">

          {
            props.stack_tags && props.stack_tags.map((tag, index) => (
              <div key={index} className="bg-green-500 rounded-full mb-3 mr-2 last:mx-0">
                <span className="text-green-100 p-5">{tag}</span>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  );
};

Project.propTypes = {
  project_image: PropTypes.string,
  image_class: PropTypes.string,
  project_title: PropTypes.string,
  project_description: PropTypes.object,
  stack_tags: PropTypes.array
};


export default Project;
