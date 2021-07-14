import Globe from "./Globe";

const Layout = ({ children }) => {
  return (
    <>
      <Globe />
      <div>{children}</div>
    </>
  );
};

export default Layout;
