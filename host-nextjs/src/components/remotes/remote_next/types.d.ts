// declare module for components expose from remote_next
declare module "remote_next/Banner" {
  type BannerProps = {
    title?: string;
    description?: string;
  };

  const Banner: React.ComponentType<BannerProps>;

  export default Banner;
}
