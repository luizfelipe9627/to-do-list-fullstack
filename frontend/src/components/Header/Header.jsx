import Logo from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-center items-center bg-gray-700 py-20">
      <img src={Logo} alt="ToDo logo" />
    </header>
  );
};

export default Header;
