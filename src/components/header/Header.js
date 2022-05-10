const Header = () => {
  return (
    <div
      style={{
        height: 75,
        width: "100%",
        backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginLeft: 5 }}>***</div>
      <h3
        style={{ color: "white", padding: 0, margin: 0, textAlign: "center" }}
      >
        Crystal Collecting Community
      </h3>
      <div style={{ marginRight: 5 }}>***</div>
    </div>
  );
};

export default Header;
