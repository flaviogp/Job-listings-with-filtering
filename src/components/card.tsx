interface CardProps {
  company: string;
  logo: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}

const Card = ({
  company,
  contract,
  featured,
  languages,
  level,
  location,
  logo,
  position,
  postedAt,
  role,
  tools,
  isNew,
}: CardProps) => {
  const badges = [...languages, ...tools, level, role];
  console.log(badges);
  return (
    <div className="rounded-lg bg-white p-4 shadow-2xl">
      {/* Avatar */}
      <div className="">
        <img src={logo} alt="" />
      </div>
      {/* company & Status */}
      <div className="">
        <p>{company}</p>
        {isNew && <span>NEW!</span>}
        {featured && <span>FEATURED</span>}
      </div>
      {/* Position */}
      <h1>{position}</h1>
      {/* info */}
      <div className="">
        <span>{postedAt}</span>
        <span>{contract}</span>
        <span>{location}</span>
      </div>
      {/* Bagdes */}
      <div className="">
        {badges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
