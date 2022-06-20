import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import List from './List'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
function App() {
  const[currentItem,setCurrentItem] = useState(null);
  const[itemList,updateItemList] = useState([]);
  const onChangeHandler=(e)=>{
    console.log("current value",e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemToList = () =>{
      updateItemList([...itemList, {item :currentItem, key :Date.now()}]);
      setCurrentItem("");
      console.log("list items", itemList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
              <input placeholder ="Add Item" value={currentItem} onChange={onChangeHandler}/>
              <button onClick={addItemToList}>+</button>
          </div>
          <List itemList= {itemList} updatItemList={updateItemList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
