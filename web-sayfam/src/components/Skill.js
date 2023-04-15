import H3 from "../atoms/H3";
const Skill =({skills})=>{
    
    return(
        <div className="skills-sub-cont flex flex-wrap justify-between mt-5 mb-10 ">
        {skills.map((skill)=>(
            <div className="skill-item mb-4 w-12" key={skill.id}>
                <img src={skill.img} className="w-16 mx-0 mb-4"/>
                <p className="dark:text-gray-200 text-xl text-neutral-500 mt-1 text-left">{skill.text}</p>
                {/* <p className="text-neutral-500 text-sm dark:text-stone-50 mx-auto">{skill.description}</p> */}
                {/* <img src={skill.img}/> */}
            </div>
        ))}
        </div>
    )
}
export default Skill;