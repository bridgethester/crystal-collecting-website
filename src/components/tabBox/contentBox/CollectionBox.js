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
      <table style={{ width: "100%", border: "1px solid black" }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>type of crystal</th>
          <th style={{ border: "1px solid black" }}>purpose</th>
          <th style={{ border: "1px solid black" }}>all of its benefits</th>
          <th style={{ border: "1px solid black" }}>what to do??</th>
        </tr>
        {collection.map((cry) => {
          return (
            <tr>
              <td style={{ border: "1px solid black" }}>{cry.name}</td>
              <td style={{ border: "1px solid black" }}>{cry.purp}</td>
              <td style={{ border: "1px solid black" }}>{cry.describe}</td>
              <td style={{ border: "1px solid black" }}>
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
