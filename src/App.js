import './App.css';
import { useState } from 'react';
import { photos } from './models/photos';
import Card from "./components/Card";
import Button from "./components/Button";
import { symbols } from './models/symbols';


function App() {
  let [count, setCount] = useState(0);
  let [currentImage, setCurrentImage] = useState(photos[count]);
 //-----(var)-------[functionToUpdate var]------default val for var

  const changePic = () =>{
    setCount((count ++));
    console.log("Current Count: ", count);
    setCurrentImage(photos[count])
    console.log("Current Image: ", currentImage);
    //--> [0], [1], [2] = count++
    
  };
//----> Cycle forward through our array of pics

  const reversePic = () => {
    setCount(count--);

    console.log("Current Count: ", count)
    setCurrentImage(photos[count])
    console.log("Current Image: ", currentImage)
  };
//----> CYcle Backwards through our array of pics

 //------------------------------------- [State]
  return (
    <div className="App">
      <h1> City Directory </h1>

      <Card currentImg={currentImage}/>
      <div className="btnContainer">
      <Button action={reversePic}icon={symbols.left}/>
      <Button action={changePic} icon={symbols.right}/>
      </div>
    </div>
  );
}

export default App;