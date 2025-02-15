import { DataType } from "../types";

interface CardProps {
  data: DataType;
  handleSetFilter: (badge: string) => void;
}

const Card = ({ data, handleSetFilter }: CardProps) => {
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

  return (
    <div className="border-desaturated-dark-cyan relative max-w-[1000px] rounded-lg border-l-4 bg-white p-4 shadow-2xl md:flex md:items-center md:justify-between md:gap-2">
      <div className="flex items-center gap-5">
        {/* Avatar */}
        <div className="absolute top-[-20px] h-12 min-w-12 md:sticky">
          <img src={logo} alt="Logo" className="top-[-38px] h-full w-full" />
        </div>
        <div className="space-y-3 py-5 md:space-y-1 md:p-0">
          {/* company & Status */}
          <div className="flex w-full items-center gap-4 font-bold text-white md:gap-2">
            <p className="text-desaturated-dark-cyan text-md">{company}</p>
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
          <h1 className="text-very-dark-grayish-cyan hover:text-desaturated-dark-cyan w-fit cursor-pointer font-bold">
            {position}
          </h1>
          {/* info */}
          <div className="border-desaturated-dark-cyan border-b pb-2 md:border-none">
            <ul className="text-dark-grayish-cyan flex list-disc gap-7">
              <li className="list-none">{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bagdes */}
      <div className="flex w-full flex-wrap gap-2 md:w-fit md:flex-nowrap">
        {badges.map((badge) => (
          <span
            key={badge}
            className="bg-light-grayish-cyan text-dark-grayish-cyan hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan h-fit cursor-pointer rounded-md px-2 py-1 font-bold"
            onClick={() => handleSetFilter(badge)}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
