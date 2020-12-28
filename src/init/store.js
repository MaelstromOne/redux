import { createStore } from "redux";
import { rootReducer } from './rootReducer';
import { save } from './../comments/reducer';

export const store = createStore(rootReducer);

store.subscribe(() => {
    save(store.getState().comments)
});