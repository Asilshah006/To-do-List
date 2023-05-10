import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState , useEffect } from "react";
import AddItems from "./AddItems";
import SearchItems from "./SearchItems";

function App() {

  const [items , setItems] = useState(JSON.parse(localStorage.getItem("ListItems")));

  const [search , setSearch] = useState("");
  const [newItems , setNewItems] = useState("");
  
  useEffect(()=>{
      localStorage.setItem("ListItems" , JSON.stringify(items))
  },[items])

  const handleCheck=(id)=>{
    const listItems = items.map((item)=>
      item.id === id ? {...item , checked : !item.checked } : item);    
    setItems(listItems)
  }

  const addNewItem =(item)=>{
      const id = items.length? items[items.length-1].id + 1 : 1;
      const mynewItem = {id , checked : false , item}
      const listItems = [...items , mynewItem];
      setItems(listItems);
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(!newItems) return
    addNewItem(newItems);
    setNewItems('');
  }
  
  
  const handleDelete =(id)=> {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  }

  return (
    <div className="App">
      <Header 
      title = "Groceries Store"
      />
      <AddItems
        newItems={newItems}
        setNewItems={setNewItems}
        handleSumit={handleSubmit} />

      <SearchItems
        search={search}
        setSearch={setSearch}
        />

      <Content
      items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()) )}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />

      <Footer/>
          
    </div>
  );
}

export default App;
