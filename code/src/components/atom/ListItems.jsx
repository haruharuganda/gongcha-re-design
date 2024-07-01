const ListItems = ({ listItems }) => {
  return (
    <>
      {listItems.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </>
  );
};

export default ListItems;
