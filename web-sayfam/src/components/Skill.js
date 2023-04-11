import H3 from "../atoms/H3";
const Skill =({skills})=>{
    
    return(
        <div className="skills-sub-cont flex flex-wrap justify-between mt-5 mb-10 ">
        {skills.map((skill)=>(
            <div className="skill-item mb-4" key={skill.id}>
                <H3>{skill.text}</H3>
                <p className="text-neutral-500 text-sm dark:text-stone-50">{skill.description}</p>
                {/* <img src={skill.img}/> */}
            </div>
        ))}
        </div>
    )
}
export default Skill;