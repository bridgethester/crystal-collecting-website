import ExploreContent from "./ExploreContent";

const ContentBox = ({ activeTab }) => {
  const makeTabContent = () => {
    if (activeTab === 0) {
      return <ExploreContent></ExploreContent>;
    }
    if (activeTab === 1) {
    }
    if (activeTab === 2) {
    }
  };

  return <div style={{ backgroundColor: "white" }}>{makeTabContent()}</div>;
};
export default ContentBox;
