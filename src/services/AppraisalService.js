import axios from 'axios';

const APPRAISAL_API_BASE_URL = "http://localhost:8080/api/appraisal";

// const ADMIN_API_BASE_URL = "https://spring2n23.herokuapp.com/api/admin";

class AppraisalService{

    getAllAppraisal(){
        return axios.get(APPRAISAL_API_BASE_URL);
    }

    createAppraisal(appraisal){
        return axios.post(APPRAISAL_API_BASE_URL, appraisal);
    }

    getAppraisalById(appraisalId){
        return axios.get(APPRAISAL_API_BASE_URL + '/' + appraisalId);
    }

}

export default new AppraisalService()