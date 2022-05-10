const WishlistBox = ({ wishlist, setWishlist }) => {
  console.log("wishlist", wishlist);
  const handleDelete = (cry) => {
    const newWishlist = [];
    let foundInst = false;
    wishlist.forEach((el) => {
      if (foundInst === false) {
        if (el.name === cry.name) {
          foundInst = true;
        } else newWishlist.push(el);
      } else newWishlist.push(el);
    });

    setWishlist(newWishlist);
  };
  return (
    <div id="ExploreContent" style={{ width: "calc(255px*3)" }}>
      <table style={{ width: "100%" }}>
        <tr>
          <th>type of crystal</th>
          <th>all of its benefits</th>
          <th>what to do??</th>
        </tr>
        {wishlist.map((cry) => {
          return (
            <tr>
              <td>{cry.name}</td>
              <td>{cry.describe}</td>
              <td>
                <button onClick={() => handleDelete(cry)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WishlistBox;
