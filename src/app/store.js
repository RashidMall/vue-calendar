import {seedData} from './seed.js';

export const store = {
    state: {
        seedData
    },
    /**
     *  return the day object that has active: true
     */
    getActiveDay(){
        return this.state.seedData.find(day => day.active);
    },
    /**
     * sets the selected day to active: true 
     * and all other day objects to active: false
     */
    setActiveDay(dayId){
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    }
}