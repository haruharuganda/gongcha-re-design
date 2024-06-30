const ListItems = ({ listItems }) => {
  const { hasLinkTag, items } = listItems;

  items.forEach((element, key) => {
    console.log(element, key);
  });
  return <></>;
};
export default ListItems;
