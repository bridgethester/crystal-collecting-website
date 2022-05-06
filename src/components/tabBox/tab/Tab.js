const Tab = ({ text, onClick, isActive }) => {
  return (
    <button
      style={{
        width: 255,
        height: 45,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        backgroundColor: isActive ? "rgba(0,0,0,.2)" : "white",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Tab;
