import PropTypes from "prop-types";

SkillsData.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  subtitle: PropTypes.string,
};

export default function SkillsData({ name, img, subtitle }) {
  return (
    <div className="skills-data flex flex-col items-center">
      <div className="skills-blob w-16 h-20 flex items-center justify-center bg-gray-300 rounded-2xl">
        <img src={img} alt={name} width={34} />
      </div>
      <h4 className="skills-name font-semibold leading-4 mt-2">{name}</h4>
      <p className="skills-subtitle text-sm">{subtitle}</p>
    </div>
  );
}
