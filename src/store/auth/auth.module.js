import authservice from '../../services/auth.service'


const user = JSON.parse(sessionStorage.getItem('user'));

const initialState = user
?{status:{loggedIn:true},user}
:{status:{loggedIn:false},user:null};

export const auth={
    namespaced: true,
    state:initialState,
    actions:{
        login({commit},user){
            return authservice.login(user).then(
                user=>{
                    commit('loginSuccess',user);
                    return Promise.resolve(user);
                },
                err=>{
                    commit('loginFailure');
                    return Promise.reject(err);
                }
            );
        },
        logout({commit}){
            authservice.logout();
            commit('logout');
        },

        register({commit},user){
            return authservice.register(user).then(
                res=>{
                    commit('registerSuccess');
                    return Promise.resolve(res.data);
                },
                err=>{
                    commit('registerFailure');
                    return Promise.reject(err);
                }
            );
        }

    },
    mutations:{
        loginSuccess(state,user){
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state){
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state){
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state){
            state.status.loggedIn = false;
        },
        registerFailure(state){
            state.status.loggedIn = false;
        }
    }
}
