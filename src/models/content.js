class Content {
    constructor(title, date, address, description) {
        this.id = new Date().toDateString();
        this.title = title;
        this.date = date;
        this.address = address;
        this.description = description;
    }
}
