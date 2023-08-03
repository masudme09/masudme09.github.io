import PropTypes from 'prop-types';

const Experience = (props) => {
    return (
        <div className="flex flex-col group hover:bg-slate-800 p-5 rounded-xl md:flex-row">

            <div className="md:w-1/4 flex items-start">
                <span className="text-secondary-dark group-hover:text-primary-light">{props.job_span}</span>
            </div>
            <div className="md:w-3/4 flex flex-col items-start">
                <h3 className="text-xl font-bold text-white">{props.job_title}</h3>
                <span className=''>{props.company_name}</span>
                <span className='text-secondary-dark text-left '>{props.job_team}</span>
                <p className="text-secondary-dark text-left  mt-3">
                    {props.job_description}
                </p>

                <div className="flex flex-wrap mt-5">
                    {/* add stack tags by looping though the stack_tags */}

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
}
Experience.propTypes = {
    job_span: PropTypes.string,
    company_name: PropTypes.object,
    job_title: PropTypes.string,
    job_team: PropTypes.string,
    job_description: PropTypes.object,
    stack_tags: PropTypes.array
};


export default Experience;