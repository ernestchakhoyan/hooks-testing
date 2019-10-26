import React, {useReducer} from "react";
import ContextExample from "./components/useContext/ContextExample";
// import CounterWithReducer from "./components/useReducer/CounterWithReducer";
// import CounterWithComplexReducer from "./components/useReducer/CounterWithComplexReducer";
import ComponentA from "./components/nestedComponents/ComponentA";
import ComponentB from "./components/nestedComponents/ComponentB";
import ComponentC from "./components/nestedComponents/ComponentC";
import "./App.css";
import DataFetchingWithUseReducer from "./components/DataFetchingWithUseState/DataFetchingWithUseReducer";
import CounterWithMemo from "./components/useMemo/CounterWithMemo";
import InputField from "./components/useRef/InputField";
import CounterInterval from "./components/useRef/CounterInterval";
import DocTitleUpdateOne from "./components/DocTitleUpdateOne/DocTitleUpdateOne";
import DocTitleUpdateTwo from "./components/DocTitleUpdateOne/DocTitleUpdateTwo";

export const FirstContext = React.createContext();
export const SecondContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return null;
    }
};

const context = React.createContext();

function App() {
    const [ count, dispatch ] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <FirstContext.Provider value={{countState: count, countDispatch: dispatch}}>
                <SecondContext.Provider value={"second"}>
                    {/*<ContextExample />*/}
                    {/*<CounterWithComplexReducer />*/}
                    {/*<ComponentA/>*/}
                    {/*<ComponentB/>*/}
                    {/*<ComponentC/>*/}
                    {/*<DataFetchingWithUseReducer />*/}
                    {/*<CounterWithMemo />*/}
                    {/*<InputField />*/}
                    {/*<CounterInterval />*/}
                    <DocTitleUpdateOne />
                    <DocTitleUpdateTwo />
                </SecondContext.Provider>
            </FirstContext.Provider>
        </div>
    );
}

export default App;
