


import { useState } from 'react'

import './App.css'

function App() {
const [todos, setTodos]=useState([]);
const [value, setValue]=useState('');
  return (
    <>
<div>
  {value}
  <ul>
    {todos.map((v,i)=> <li key={i}>

      {v.edit ? (
        <input type="text" onChange={(e)=> {
          const arrFirst =[...todos];
          todos[i].value = e.target.value ;
          setTodos(arrFirst)
        }} defaultValue={v.value}/>
      ): v.value}

   {v.edit ? (
    <button onClick={()=> {
      const arrSec =[...todos];
      arrSec[i].edit =false;
      setTodos(arrSec)
    }}>Update</button>
   ) : (

    <button onClick={()=> {
      const arrThird = [...todos];
      arrThird[i].edit= true;
      setTodos(arrThird)
    }}>edit</button>
   )}

      <button onClick={()=> {
        const delTode=[...todos];
        delTode.splice(i, 1);
        setTodos(delTode)
      }}>delete</button>

      </li>)}
   
   <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
   <button onClick={()=> { setTodos([{value , edit:false}, ...todos])
     setValue('')}}>add</button>
  <button onClick={()=> setTodos([])}>DeleteAll</button>

  </ul>

  </div>      

    </>
  )
}

export default App


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [value, setValue] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleDelete = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchClick = () => {
//     // You can perform additional actions when the search button is clicked
//     // For now, let's just log the search term to the console
//     console.log("Search button clicked with term:", searchTerm);
//   };

//   const filteredTodos = todos.filter((todo) =>
//     todo.value.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={searchTerm}
//           placeholder="Search todos"
//           onChange={handleSearch}
//         />
//         <button onClick={handleSearchClick}>Search</button>
//         <ul>
//           {filteredTodos.map((v, i) => (
//             <li key={i}>
//               {v.edit ? (
//                 <input
//                   type="text"
//                   onChange={(e) => {
//                     const updatedTodos = [...todos];
//                     updatedTodos[i].value = e.target.value;
//                     setTodos(updatedTodos);
//                   }}
//                   defaultValue={v.value}
//                 />
//               ) : (
//                 v.value
//               )}

//               {v.edit ? (
//                 <button
//                   onClick={() => {
//                     const updatedTodos = [...todos];
//                     updatedTodos[i].edit = false;
//                     setTodos(updatedTodos);
//                   }}
//                 >
//                   Update
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     const updatedTodos = [...todos];
//                     updatedTodos[i].edit = true;
//                     setTodos(updatedTodos);
//                   }}
//                 >
//                   Edit
//                 </button>
//               )}

//               <button onClick={() => handleDelete(i)}>Delete</button>
//             </li>
//           ))}
//         </ul>

//         <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             setTodos([{ value, edit: false }, ...todos]);
//             setValue('');
//           }}
//         >
//           Add
//         </button>
//         <button onClick={() => setTodos([])}>Delete All</button>
//       </div>
//     </>
//   );
// }

// export default App;



