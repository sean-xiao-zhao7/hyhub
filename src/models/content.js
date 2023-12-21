class Content {
    constructor(title, date, address, description) {
        this.id = new Date().toISOString(true);
        this.title = title;
        this.date = date;
        this.address = address;
        this.description = description;
    }
}

export default Content;
