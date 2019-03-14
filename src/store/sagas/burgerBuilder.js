import axios from '../../services/BurgerService';

import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* initIngredientsSaga(action) {
    try {
        const reponse = yield axios.get('ingredients.json');
        yield put(actions.setIngredients(reponse.data));
    } catch(error) {    
        yield put(actions.fetchIngredientsFailed());
    }
}