// declare module for components expose from remoteReact
declare module "remoteReact/Nav" {
  type NavProps = {};

  const Nav: React.ComponentType<NavProps>;

  export default Nav;
}

declare module "remoteReact/Button" {
  type ButtonProps = {};

  const Button: React.ComponentType<ButtonProps>;

  export default Button;
}
