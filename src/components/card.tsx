import { DataType } from "../types";

interface CardProps {
  data: DataType;
}

const Card = ({ data }: CardProps) => {
  const {
    company,
    contract,
    featured,
    isNew,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = data;
  const badges = [...languages, ...tools, level, role];
  console.log(badges);
  return (
    <div className="border-desaturated-dark-cyan relative space-y-2 rounded-lg border-l-4 bg-white p-4 shadow-2xl">
      {/* Avatar */}
      <div className="absolute top-[-20px] h-12 w-12">
        <img src={logo} alt="Logo" className="top-[-38px] h-full w-full" />
      </div>
      {/* company & Status */}
      <div className="mt-5 flex w-full items-center gap-4 font-bold text-white">
        <p className="text-desaturated-dark-cyan text-lg">{company}</p>
        {isNew && (
          <span className="bg-desaturated-dark-cyan rounded-full px-3 pt-1 text-center">
            NEW!
          </span>
        )}
        {featured && (
          <span className="bg-very-dark-grayish-cyan rounded-full px-3 pt-1 text-center">
            FEATURED
          </span>
        )}
      </div>
      {/* Position */}
      <h1 className="text-very-dark-grayish-cyan font-bold">{position}</h1>
      {/* info */}
      <div className="border-desaturated-dark-cyan border-b pb-2">
        <ul className="text-dark-grayish-cyan flex list-disc gap-7">
          <li className="list-none">{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>
      {/* Bagdes */}
      <div className="flex w-full flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="bg-light-grayish-cyan text-dark-grayish-cyan rounded-md px-2 py-1 font-bold"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
