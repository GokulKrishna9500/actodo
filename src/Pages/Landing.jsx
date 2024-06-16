import React from 'react';
import Header from '../Component/Header'
import Card from '../Component/Card'
import TodoContainer from '../Component/TodoContainer';

function App() {
  return (
    <div className='bg-slate-900 p-16'>
      <div className='bg-white p-10 border rounded-md'>
        {/* header */}
        <Header />

        {/* card */}
        <div className='flex gap-10 my-5 flex-wrap'>
          <Card bgcolor={"#fb923c"} title={"23"} subtitle={"Chennai"}/>

          <Card bgcolor={"#2dd4bf"} title={"June"} subtitle={"14-6-2024"}/>

          <Card bgcolor={"#c084fc"} title={"Build Using"} subtitle={"React"}/> 
        </div>

        <hr className='my-3'/>

        {/* Todo */}
        <TodoContainer/>
      </div>
    </div>
  );
}

export default App;