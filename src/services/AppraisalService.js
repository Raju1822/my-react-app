import axios from 'axios';

const APPRAISAL_API_BASE_URL = "http://localhost:8080/api/appraisal";

// const ADMIN_API_BASE_URL = "https://spring2n23.herokuapp.com/api/admin";

class AppraisalService{

    getAppraisalById(AppraisalId){
        return axios.get(APPRAISAL_API_BASE_URL + '/' + AppraisalId);
    }


}

export default new AppraisalService()