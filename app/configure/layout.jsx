import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import Steps from "../_components/Step";

const Layout = ({ children }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
