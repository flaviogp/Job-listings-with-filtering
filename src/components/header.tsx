import Headerimage from "/images/bg-header-desktop.svg";

const Header = () => {
  return (
    <header className={`bg-desaturated-dark-cyan w-full h-28 relative `}>
      <img
        src={Headerimage}
        className="absolute right-0 w-full h-full"
        alt="Header image"
      />
    </header>
  );
};

export default Header;
