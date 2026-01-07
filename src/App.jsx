import React from "react";
import Includes from "./components/stringMethods/Includes";
import StartsWith from "./components/stringMethods/StartsWith";
import EndsWith from "./components/stringMethods/EndsWith";
import Split from "./components/stringMethods/Split";
import Join from "./components/stringMethods/Join";
import Trim from "./components/stringMethods/Trim";
import Reduce from "./components/arrayMethods/Reduce 01";
import Some from "./components/arrayMethods/Some 02";
import CharAt from "./components/stringMethods/CharAt";
import Slice from "./components/stringMethods/Slice";
import PadStart from "./components/stringMethods/PadStart";
import PadEnd from "./components/stringMethods/PadEnd";
import ToUpperCase from "./components/stringMethods/ToUpperCase";
import ToLowerCase from "./components/stringMethods/ToLowerCase";
import Replace from "./components/stringMethods/Replace";
import Repeat from "./components/stringMethods/Repeat";
import SubString from "./components/stringMethods/SubString";
import IndexOf from "./components/stringMethods/IndexOf";
import LastIndexOf from "./components/stringMethods/LastIndexOf";
import Length from "./components/stringMethods/Length";
import ChainedLogic from "./components/stringMethods/ChainedLogic";
import { AllArray } from "./components/arrayMethods/AllArray";
import AllObjects from "./components/objectMethods/AllObjects";

const App = () => {
  return (
    <div>
      {/* <Includes /> */}
      {/* <StartsWith /> */}
      {/* <EndsWith /> */}
      {/* <Split /> */}
      {/* <Join /> */}
      {/* <Trim /> */}
      {/* <CharAt />       */}
      {/* <Slice /> */}
      {/* <PadStart /> */}
      {/* <PadEnd /> */}
      {/* <ToUpperCase /> */}
      {/* <ToLowerCase /> */}
      {/* <Replace /> */}
      {/* <ChainedLogic /> */}

      {/* Array Methods  */}
      {/* <AllArray /> */}
      {/* <Reduce /> */}
      {/* <Some /> */}
      {/* <Repeat /> */}
      {/* <SubString /> */}
      {/* <IndexOf /> */}
      {/* <LastIndexOf /> */}
      {/* <Length /> */}

      {/* Object Methods  */}
      <AllObjects />
    </div>
  );
};

export default App;
