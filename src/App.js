import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {actionResetOne, actionDecOne, actionIncOne, actionResetTwo, actionDecTwo, actionIncTwo} from "./redux/action-creators";

function App() {
    const dispatch = useDispatch();
    const counterOne = useSelector(({counter1: {counter}}) => counter)
    const counterTwo = useSelector(({counter2: {counter}}) => counter);
    return (
        <div className="App">
            <div className="counterOne counter">
                <div className="title">
                    <h1>{counterOne}</h1>
                </div>
                <div className="counter_buttons">
                    <button onClick={() => dispatch(actionIncOne)}>Inc first counter</button>
                    <button onClick={() => dispatch(actionDecOne)}>Dec first counter</button>
                    <button onClick={() => dispatch(actionResetOne)}>Reset first counter</button>
                </div>
            </div>
            <div className="counterTwo counter">
                <div className="title">
                    <h1>{counterTwo}</h1>
                </div>
                <div className="counter_buttons">
                    <button onClick={() => dispatch(actionIncTwo)}>Inc first counter</button>
                    <button onClick={() => dispatch(actionDecTwo)}>Dec first counter</button>
                    <button onClick={() => dispatch(actionResetTwo)}>Reset first counter</button>
                </div>
            </div>
        </div>
    );
}

export default App;
