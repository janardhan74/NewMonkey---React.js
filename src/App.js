import React, {  useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App () {
  let apiKey = "3cbdee7cc20f42459638cfe0fde36b3e"
  const [progress , setProgress] = useState(10);
  // constructor() {
  //   super()
  //   this.state = {
  //     progress: 10,
  //   };
  // }

  // setProgress = (val) => {

  //   setProgress(val)
  // };
    // life cycle method -> it runs series of methods == 1) JSX copile 2) html render
    return (
      <BrowserRouter>
        <div>
          <LoadingBar
            color="#f11946"
            height={4}
            progress={progress}
          />
          <Navbar />
          {/* <News pageSize={6} category={"sports"} country={"in"} /> */}
          <Switch>
            <Route exact path="/general">
              <News
              apiKey={apiKey}
                setProgress={setProgress}
                key={"general"}
                pageSize={6}
                category={"general"}
                country={"in"}
              />
            </Route>
            <Route exact path="/business">
              <News
              apiKey={apiKey}
                setProgress={setProgress}
                key={"business"}
                pageSize={6}
                category={"business"}
                country={"in"}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
              apiKey={apiKey}
                setProgress={setProgress}
                key={"entertainment"}
                pageSize={6}
                category={"entertainment"}
                country={"in"}
              />
            </Route>
            <Route exact path="/health">
              <News
              apiKey={apiKey}
                setProgress={setProgress}
                key={"health"}
                pageSize={6}
                category={"health"}
                country={"in"}
              />
            </Route>
            <Route exact path="/science">
              <News
              apiKey={apiKey}
                setProgress={setProgress}
                key={"science"}
                pageSize={6}
                category={"science"}
                country={"in"}
              />
            </Route>
            <Route exact path="/sports">
              <News
              apiKey={apiKey}
                setProgress={setProgress}
                key={"sports"}
                pageSize={6}
                category={"sports"}
                country={"in"}
              />
            </Route>
            <Route exact path="/technology">
              <News
              apiKey={apiKey}
                setProgress={setProgress}
                key={"technology"}
                pageSize={6}
                category={"technology"}
                country={"in"}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
