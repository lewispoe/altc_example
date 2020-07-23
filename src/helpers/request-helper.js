import axios from 'axios';
import config from '../config/config';

export default{
    getStations: function(){
        return axios.get(`${config.serviceURL}/stations`)
    },
    
    getTicketTypes: function(args){
        return axios.get(`${config.serviceURL}/ticket_types`, args);
    }
}