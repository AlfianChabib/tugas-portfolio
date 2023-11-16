import { frontend, design } from "../skillsData";
import SkillsData from "./SkillsData";

export default function Skills() {
  return (
    <section className="container px-8 mt-20" id="skills">
      <div className="flex flex-col items-center justify-between mb-8">
        <h2 className="font-semibold text-3xl">Skills</h2>
        <p className="font-medium text-gray-700 text-sm">My Favorite Skills</p>
      </div>
      <div className="flex md:flex-nowrap flex-wrap w-full justify-between gap-x-12 gap-y-8">
        {/* Skills 1 */}
        <div className="w-full">
          <h3 className="skills-title">Frontend Developer</h3>
          <div className="flex flex-wrap md:gap-x-24 gap-x-6 md:gap-y-8 gap-y-4 justify-center">
            {frontend.map((skill, i) => (
              <SkillsData
                key={i}
                name={skill.name}
                img={skill.img}
                subtitle={skill.subtitle}
              />
            ))}
          </div>
        </div>
        {/* Skills 2 */}
        <div className="w-full">
          <h3 className="skills-title">Graphic Design</h3>
          <div className="flex flex-wrap md:gap-x-24 gap-x-6 md:gap-y-8 gap-y-4 justify-center">
            {design.map((skill, i) => (
              <SkillsData
                key={i}
                name={skill.name}
                img={skill.img}
                subtitle={skill.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
