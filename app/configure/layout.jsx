import MaxWidthWrapper from "../_components/MaxWidthWrapper";

const Layout = ({ children }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
