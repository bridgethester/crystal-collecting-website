const CollectionBox = ({ collection, setCollection }) => {
  console.log("collection", collection);
  const handleDelete = (cry) => {
    const newCollection = [];
    let foundInst = false;
    collection.forEach((el) => {
      if (foundInst === false) {
        if (el.name === cry.name) {
          foundInst = true;
        } else newCollection.push(el);
      } else newCollection.push(el);
    });

    setCollection(newCollection);
  };
  return (
    <div id="ExploreContent" style={{ width: "calc(255px*3)" }}>
      <table style={{ width: "100%" }}>
        <tr>
          <th>type of crystal</th>
          <th>all of its benefits</th>
          <th>what to do??</th>
        </tr>
        {collection.map((cry) => {
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

export default CollectionBox;
