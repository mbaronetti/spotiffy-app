// REDUCERS
import { SHOW_MODAL } from '../constants';

const initialState = {
  modalVisible: true
}

function rootReducer(state = initialState, action) {
    if(action.type === SHOW_MODAL){
        return {...state, modalVisible: action.value}
    }
  return state;
};

export default rootReducer;
