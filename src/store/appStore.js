class AppStore {

    constructor() {
        this.user = null;
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    logout() {
        this.user = null;
    }

}

export const appStore = new AppStore();