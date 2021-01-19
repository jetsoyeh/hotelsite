import axios from 'axios';

const API_URL = "https://localhost:44382/api"

class AuthService {
    login(user) {
        return axios.post(API_URL+'/ApplicationUser/login', user)
            .then(res => {
                localStorage.setItem('accesstoken', JSON.stringify(res.data.token));
                localStorage.setItem('refreshtoken', JSON.stringify(res.data.refreshtoken));
                return Promise.resolve(res);
            })
            .catch(err => {
                return Promise.reject(err);
            })
    }

    logout() {
        localStorage.removeItem('accesstoken');
        return axios.post(API_URL+'/ApplicationUser/revoke');
    }

    register(user) {
        return axios.post(API_URL+'/ApplicationUser/Register', user);

    }

    refresh() {
        let accesstoken = JSON.parse(localStorage.getItem('accesstoken'));
        let refreshtoken = JSON.parse(localStorage.getItem('refreshtoken'));

        return axios.post(API_URL+'/ApplicationUser/refresh', { accesstoken, refreshtoken })
            .then(res => {
                
                return Promise.resolve(res);
            })
            .catch(err => {
                return Promise.reject(err);

            })
    }

    revoke() {
        return axios.post(API_URL+'/ApplicationUser/revoke')
            .then(() => {
                Promise.resolve();
            })
            .catch(err => {
                console.log(err);
            })

    }

    getPaymentDetail(){
        return axios.get('/api/PaymentDetail').then((res)=>{
            return Promise.resolve(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

}
export default new AuthService();