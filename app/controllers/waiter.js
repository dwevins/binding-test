import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        storeClient() {
            let firstName = document.querySelector('[name="first-name"]').value;
            let lastName = document.querySelector('[name="last-name"]').value;

            this.get('store').push({
                data: [{
                    id: 1,
                    type: 'client',
                    attributes: {
                        firstName: firstName,
                        lastName: lastName
                    }
                }]
            })

            console.log(this.get('store').findRecord('client', 'asdf'));
        }
    }
});
