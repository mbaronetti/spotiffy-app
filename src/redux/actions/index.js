//ACTIONS
import { SHOW_MODAL , SET_DATA , SET_IMAGES} from '../constants';

export const showModal = value => {
    return {
        type: SHOW_MODAL,
        value
    }
}
