import LogoImage from "../assets/logo-white.png";

const Logo = (props) => {
  return <img alt="Logo" src={LogoImage} width={48} height={48} {...props} />;
};

export default Logo;
