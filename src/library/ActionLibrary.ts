/** ActionLibrary **/
export class ActionLibrary {
    static actions = {}; //structure holding actions

    /**Create the stats object in the correct form**/
    static createStats() {
        let stats = [];
        //Loop through actions and put into array
        for (var key in this.actions) {
            let action = {};
            action["action"] = key;
            action["avg"] = this.actions[key].average;
            stats.push(action);
        }
        //So a string is returned, we stringify it
        return JSON.stringify(stats);
    }

    /** getStats() function required for this library**/
    static async getStats() {
        let stats = await this.createStats();
        return stats;
    }

    /** addAction function required for this library **/
    /** @param item The item to add to actions **/
    static async addAction(item) {
        try {
            //Check if action is in array yet, add it if not
            if(!(this.actions.hasOwnProperty(item.action))) {
                this.actions[item.action] = {"average": 0.0, "total": 0.0, "number": 0};
            }

            //Calculate average time and save it
            let currAction = await this.actions[item.action];
            let number = await currAction.number+1;
            let totalTime = await (item.time+currAction.total);
            let average = await totalTime / number;
            this.actions[item.action] = {"average": average, "total": totalTime, "number": number};
            return 200;
        } catch(e) {
            //Return 400 if any error occurs
            console.log(e)
            return 400;
        }

    }

}

export default ActionLibrary;
