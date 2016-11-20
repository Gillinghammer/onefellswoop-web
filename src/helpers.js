var axios = require('axios');

function getEmployers(){
  return axios.get("http://localhost:8888/api/employers");
};

function getCandidates(){
  return axios.get("http://localhost:8888/api/candidates");
};

var helpers = {
  updateEmployer: function(employer) {
    return axios.put("http://localhost:8888/api/employers/" + employer._id, employer);
  },
  getEmployer: function(employerid){
    return axios.get("http://localhost:8888/api/employers/" + employerid);
  },
  getAll: function(){
    return axios.all([getEmployers(), getCandidates()])
      .then(function(arr){
        return {
          employers: arr[0].data,
          candidates: arr[1].data
        }
      });
  }
}

module.exports = helpers;