import React from 'react'
import './App.scss';
import bar from './assets/images/bar.png'
import  folk1 from './assets/images/1.png'
import  folk2 from './assets/images/1.png'
import  folk3 from './assets/images/1.png'
import  folk4 from './assets/images/1.png'
import  folk5 from './assets/images/1.png'
import  folk6 from './assets/images/1.png'
import  folk7 from './assets/images/1.png'
import  folk8 from './assets/images/1.png'
import  folk9 from './assets/images/1.png'


function App() {
  return (
   <div className="App">
     <div className="bar">
        <img src={bar} alt="bar"/>
      <div  className="folk">
       <img src={folk1}/>
     </div>
     </div>
   
   <div>
   <input type="text" placeholder="please enter a letter"/>
   <button>submit</button>
   </div>
   
   </div>
  );
}

export default App;
