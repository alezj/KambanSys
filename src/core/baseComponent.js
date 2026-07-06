import { eventBus } from "./eventBus.js";

export class BaseComponent {

    constructor() {

        this.element = null;

        this.subscriptions = [];

    }

    subscribe(event, callback) {

        eventBus.subscribe(event, callback);

        this.subscriptions.push({
            event,
            callback
        });

    }

    unsubscribeAll() {

        this.subscriptions.forEach(subscription => {

            eventBus.unsubscribe(
                subscription.event,
                subscription.callback
            );

        });

        this.subscriptions = [];

    }

    destroy() {

        this.unsubscribeAll();

        if (this.element) {

            this.element.remove();

        }

    }

}