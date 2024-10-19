// declare module for components expose from remote_react
declare module "remote_react/Banner" {
  type BannerProps = {
    title?: string;
    description?: string;
  };

  const Banner: React.ComponentType<BannerProps>;

  export default Banner;
}
