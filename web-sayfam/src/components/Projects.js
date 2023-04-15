import { useDispatch, useSelector } from "react-redux";
import Project from "./Project";
import { useEffect } from "react";
import { getData } from "../actions/action";
import H2 from "../atoms/H2";

const Projects = () => {
    const projects = useSelector((store) => store.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])
    return (
        <div className="projects-container mx-auto text-left max-w-screen-xl" id="projects">
            <H2>Projects</H2>
            <Project projects={projects} />
        </div>
    )
}
export default Projects;