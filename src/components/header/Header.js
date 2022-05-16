import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const Header = () => {
  return (
    <div
      style={{
        height: 75,
        width: "100%",
        backgroundColor: "#6F4E37",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginLeft: 5 }}>***</div>
      <h3
        style={{ color: "white", padding: 0, margin: 0, textAlign: "center" }}
      >
        Crystal Collecting Catalog
        <br></br> ♡<br></br>- a place to keep track of your current & growing
        crystal collection -
      </h3>
      <div style={{ marginRight: 5 }}>***</div>
    </div>
  );
};

export default Header;
