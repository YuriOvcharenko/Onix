import logo from '../../assets/images/logo.svg'

const Logo = ({ className, width = 135, height = 25 }) => (
  <a className={className} href="/">
    <img
      src={logo} 
      alt="Kropp Logo"
      width={width}
      height={height}
      loading="lazy"
    />
  </a>
);

export default Logo;