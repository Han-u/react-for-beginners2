import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello(){
  function destroyFn(){
    console.log("destroyed :(");
  }

  function effectFn(){
    console.log("created :)");
    return destroyFn;
  }

  useEffect(effectFn, []);

  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick2 = () => setShowing((prev) => !prev);

  console.log("I run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    // if(keyword !=="" && keyword.length > 5){
    //   console.log("Search for", keyword);
    // }
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]);

  return (
    <div>
      <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
      </div>
      <br/>
      <div>
        <input
          value={keyword}
          onChange={onChange} 
          type="text" 
          placeholder="Search here" 
        />
        <h1>{counter}</h1>
        <button onClick={onClick}>Click me!</button>
      </div>
      <br/>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick2}>{showing ? "Hide": "Show"}</button>
      </div>
    </div>
  );
}

export default App;
