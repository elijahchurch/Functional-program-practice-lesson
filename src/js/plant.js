import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";



//function that stores state
const storeState = () => {
    let currentState = {};
    return (stateChangeFunction) => {
        const newState = stateChangeFunction(currentState);
        currentState = { ...newState };
        return newState;
    }
}

const stateControl = storeState();

//This is a function factory.
//Now you can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
const changeState = (prop) => {
    return (value) => {
        return (state) => ({
            ...state,
            [prop]: (state[prop] || 0) + value
        })
    }
}

//Some function that have been created using the funciton factory.
const feed = ChangeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = ChangeState("water")(1);
const superWater = changeSate("water")(5);

//UI

window.onload = function () {
    document.getElementById('feed').onclick = function () {
        const newState = stateControl(blueFood);
        document.getElementById('soil-value').innerText = 'Soil: ${newState.soil}'
    };

    // This function doesn't actually do anything useful in this application 
    // — it just demonstrates how we can "look" at the current state 
    // (which the DOM is holding anyway). 
    // However, students often do need the ability to see the current state 
    // without changing it so it's included here for reference.
    document.getElementById('show-state').onclick = function () {
        // We just need to call stateControl() without arguments 
        // to see our current state.
        const currentState = stateControl();
        document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
    };


}