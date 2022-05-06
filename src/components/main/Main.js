import Header from "../header/Header";
import TabBox from "../tabBox/TabBox";

const Main = () => {
  return (
    <div
      id="maindiv"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "plum",
      }}
    >
      <Header />
      <TabBox />
    </div>
  );
};

export default Main;
