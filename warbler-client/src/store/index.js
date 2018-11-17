import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux"; //compose is going to allow us to combine functions together.
import thunk from "redux-thunk"; // This will allow us to delay the evaluation of some expression and it is essential for working with asynchronous.

export function configureStore(){
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        ); 

    return store;

};
