angular.module('starter.services',[])

.service('UserService', function ($http) {
  getUsers = function(data)
  {
    console.log(data);
    var link = 'http://epicsoft.esy.es/customer_feedback.php';
    return $http.post(link).then(function (res){
      console.log(res.data);
      return res.data;
    });
  };
  return{
    getUsers: getUsers
  };
});
