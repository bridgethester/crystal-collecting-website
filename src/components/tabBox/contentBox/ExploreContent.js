import { crystals } from "../../../constants/constants";

const ExploreContent = () => {
  return (
    <div>
      {crystals.map((cry) => {
        return (
          <div>
            <span>{cry.name}</span>
            <span>{cry.describe}</span>
          </div>
        );
      })}
    </div>
  );
};
export default ExploreContent;
