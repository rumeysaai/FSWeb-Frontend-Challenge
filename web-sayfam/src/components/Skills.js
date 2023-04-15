import { useSelector, useDispatch } from "react-redux";
import Skill from "./Skill";
import { useEffect } from "react";
import { getData } from "../actions/action";
import '../style/style.css';
import H2 from "../atoms/H2";

const Skills = () => {
    const skills = useSelector((store) => store.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [])

    return (
        <>
        <div className="skills-container text-left my-10 mx-auto flex flex-col max-w-screen-xl" id="skills">
            <H2>Skills</H2> 
            <Skill skills={skills} />
            <hr></hr>
        </div>
        </>
    )
}
export default Skills;