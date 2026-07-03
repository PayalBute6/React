import Gallery from "./pages/gallary";
import FilterableProductTable from "./pages/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/products" element={<FilterableProductTable />}></Route>
      </Routes>
    </Router>
  );
}




// function Greeting ({ name }){
//   return <h1> Hello {name} </h1>;

// }

// function UserProfile({name, job}){
//   return <h2>Job Profile of {name} {job}</h2>
// }

// export default function App(){
//   return <UserProfile name = "John" job = "Software Engineer"/>
// }




// import { useMemo, useCallback, memo } from 'react';

// const ExpensiveComponent = memo ( function ExpenciveComponent({ data, onClick }) {
//   const processedData = useMemo(() => {
//     return expensiveProcessing(data);
//   }, [data]);

//   const handleClick = useCallback((item) => {
//     onClick(item.id);
//   }, [onClick]);

//   return(
//     <div>
//       {processedData.map(item => (
//         <Item key = {item.id} onClick={() => handleClick(item)} />
//       ))}
//     </div>
//   );
// });



// function ExpensiveComponent({ data, onClick }) {
//   const processedData = expensiveProcessing(data);

//   const handleClick = (item) => {
//     onClick(item.id);
//   };

//   return (
//     <div>
//       {processedData.map(item => (
//         <Item key={item.id} onClick={() => handleClick(item)} />
//       ))}
//     </div>
//   );
// }