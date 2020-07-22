import axios from 'axios';
import config from '../config/config';

export default{
    getStations: function(){
        return axios.get(`${config.serviceURL}/station/read.php`)
    },
    
    getTicketTypes: function(args){
        return axios.get(`${config.serviceURL}/ticket_type/read.php`, args);
    }
}