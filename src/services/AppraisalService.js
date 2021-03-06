import axios from 'axios';

// const APPRAISAL_API_BASE_URL = "http://localhost:8080/api/appraisal";

 const APPRAISAL_API_BASE_URL = "https://spring2n23.herokuapp.com/api/appraisal";

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

    deleteAppraisal(Id){
        return axios.delete(APPRAISAL_API_BASE_URL + "/" + Id);
    }

}

export default new AppraisalService()