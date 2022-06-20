import "./List.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
function List (props){
  const deleteItemfromList = key => {
    const newList = props.itemList.filter(itemObj =>{
        return itemObj.key !== key;
      });
      props.updateItemList(newList);
  };
  return <div>
    {props.itemList.map(itemObj =>{
      return (
      <div key ={itemObj.key}className="Item">
        <p>(itemObj.item)</p>
        <button onClick={deleteItemfromList(itemObj.key)}>x</button>
      </div>
      );
    })}
    </div>
  };

export default List;