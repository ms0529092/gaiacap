class Singleton {
    constructor() {
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
    }
}

const singleton = new Singleton;
export default singleton;