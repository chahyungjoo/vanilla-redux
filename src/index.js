import { createStore } from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
    //console.log(count, action);

    switch (action.type){
        case ADD :
            return count + 1;
        case MINUS :
            return count - 1;
        default :
            return count;
    }

    /*if(action.type === "ADD"){
        return count + 1;
    } else if(action.type === "MINUS"){
        return count - 1;
    } else {
        return count;
    }*/
};

const countStore = createStore(countModifier);

const changeState = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(changeState);

const handlerAdd = () => {
    countStore.dispatch({ type : "ADD"});
}

const handlerMinus = () => {
    countStore.dispatch({ type : "MINUS"});
}

add.addEventListener("click", handlerAdd);
minus.addEventListener("click", handlerMinus);