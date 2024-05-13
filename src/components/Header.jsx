import { brainwave } from "../assets";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
