import H3 from '../atoms/H3';
const Project = ({ projects }) => {
    return (
        <div className="project-sub-cont flex flex-wrap justify-between mb-20">
            {projects.map((project) => (
                <div className="project-item mt-8 w-3/12 mb-12 mx-6" key={project.id} >
                    <img src={project.img} />
                    <H3>{project.name}</H3>
                    <p className="text-neutral-500 my-4 dark:text-stone-100">{project.description}</p>
                    <div className="tool-link">
                        <div className="tools flex justify-start">
                            {project.tools.map((tool) => (
                                <a className="text-base font-normal text-indigo-700 flex justify-center dark:text-violet-300 dark:border-solid dark:border-violet-300 dark:bg-stone-800">{tool}</a>
                            ))}
                        </div>
                        <div className="links flex justify-between mt-4 mb-3 underline">
                            <a className="text-base font-semibold text-indigo-700 link dark:text-blue-100" href={project.repo}>Github</a>
                            <a className="text-base font-semibold text-indigo-700 link dark:text-blue-100" href={project.url}>View Site</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Project;