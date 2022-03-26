import {combineReducers} from 'redux';
import DashboardReducer from './dasboardReducer';
import LoginReducer from './loginReducer'
import Layout from '../../store/layout/reducer';
import Calendar from "../../store/calendar/reducer";
import Ecommerce from "../../store/e-commerce/reducer";
import chat from "../../store/chat/reducer"
export default combineReducers({
    Layout,
    Calendar,
    Ecommerce,
    chat,
    dasboardItem:DashboardReducer,
    loginResponse:LoginReducer

})