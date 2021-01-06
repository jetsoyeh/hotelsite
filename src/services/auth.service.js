import axios from 'axios';
class AuthService{
    login(user){
        return axios.post('/api/ApplicationUser/login',user)
                         .then(res=>{
                             sessionStorage.setItem('user',JSON.stringify(res.data));
                             return Promise.resolve(res);
                         })
                         .catch(err=>{
                             return Promise.reject(err);
                         })
    }

    logout(){
        sessionStorage.removeItem('user');
    }

    register(user){
        return axios.post('/api/ApplicationUser/Register',user);
                         
    }

}
export default new AuthService();