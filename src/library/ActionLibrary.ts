/** ActionLibrary **/
export class ActionLibrary {
    static actions = {}; //structure holding actions

    /**Create the stats object in the correct form**/
    static createStats() {
        let stats = [];
        //Loop through actions and put into array
        for (var key in this.actions) {
            let action = {};
            action[key] = this.actions[key];
            stats.push(action);
        }
        return stats;
    }

    /** getStats() function required for this library**/
    static async getStats() {
        let stats = await this.createStats();
        return stats;
    }

    /** addAction function required for this library **/
    /** @param item The item to add to actions **/
    static async addAction(item) {
        this.actions[item.action] = await item.time;
        //Check that it was added correctly, return status appropriately
        if (this.actions[item.action] == item.time) {
            return 200;
        }
        else {
            return 400;
        }
    }

}

export default ActionLibrary;
