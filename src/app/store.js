import {seedData} from './seed.js';

export const store = {
    state: {
        seedData
    },
    /**
     *  return the day object that has active: true
     **/
    getActiveDay(){
        return this.state.seedData.find(day => day.active);
    },
    /**
     * sets the selected day to active: true 
     * and all other day objects to active: false
     **/
    setActiveDay(dayId){
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    },

    submitEvent(eventDetails){
        const activeDay= this.getActiveDay();
        activeDay.events.push({"details": eventDetails, "edit": false });
    },
    /**
     * 
     * @param {int} dayId 
     * @param {string} eventDetails
     * Change the edit boolean of the intended event object from false to true
     */
    editEvent(dayId, eventDetails){
        const day = this.state.seedData.find(day => dayId === day.id);
        const event = day.events.find(event => events.details === eventDetails);
        event.edit = true;
    }
}