class Widget {

    constructor(name, description, params)
    {
        this.name = name;
        this.description = description;
        this.params = [];

        this.fillParams(params);
    }

    fillParams(params)
    {
        let values = [];

        for (const param of params) {
            values = Object.values(param);
            this.params.push({
                name: values[0],
                type: values[1]
            });
        }
    }

};

module.exports = {
    Widget: Widget
}
