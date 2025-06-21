import React,{useState} from 'react';
import data from './data';
import List from './list';
import './App.css';


function App() {
 const[people,setPeople] = useState(data)
      return<main>
        <section className='container'>
        <div className='box'>
          <h3 className='days'>{people.length} birthdays today</h3>
        


          <List people={people}/>
          <button className='btn1' onClick={() => setPeople([]) }>Clear All</button>
          <button className='btn2' onClick={() => setPeople(data)}> Refresh</button>
          </div>
        </section>
        </main >
}

export default App;
