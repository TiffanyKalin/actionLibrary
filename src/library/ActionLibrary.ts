export class ActionLibrary {
    private actions = {
        "run": "100",
        "jump": "2"
    };

    //TODO: create a json array of right format
    async getStats() {
        let stats = await this.actions;
        return stats;
    }

    //TODO: implement
    async addActions(item) {

    }
}

export default ActionLibrary;
