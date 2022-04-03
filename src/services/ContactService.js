import axios from 'axios';

// const CONTACT_API_BASE_URL = "http://localhost:8080/api/contact";

 const CONTACT_API_BASE_URL = "https://spring2n23.herokuapp.com/api/contact";

class ContactService{

    getContact(){
        return axios.get(CONTACT_API_BASE_URL);
    }

    createContact(mails){

        return axios.post(CONTACT_API_BASE_URL, mails);
    }


}

export default new ContactService()