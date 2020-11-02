import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      contacts: []
    },
    actions: {
      addContact(contactData) {
        axios
          .post("api/contacts", {
            name: contactData.name,
            firstname: contactData.firstname,
            email: contactData.email,
            phone: contactData.phone,
            query: contactData.query
          })
          .catch(error => {
            if (error) {
              this.setError(error, "Une erreur s'est produite");
            }
          });
      }
    }
  })
}

export default createStore