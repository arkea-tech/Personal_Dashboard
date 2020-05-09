class Widget {

    constructor(name, description, params)
    {
        this.name = name;
        this.description = description;
        this.params = [];

        fillParams.call(this, params);
    }

    fillParams(params)
    {
        let values = [];

        for (const param of params) {
            values = Object.values(param);
            for (const value of values) {
                this.params.push({
                    name: value.name,
                    type: value.type
                });
            }
        }
    }

};

module.exports = {
    Widget: Widget
}
