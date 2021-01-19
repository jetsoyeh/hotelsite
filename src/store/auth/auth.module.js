import authservice from '../../services/auth.service'


const user = JSON.parse(localStorage.getItem('accesstoken'));

const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return authservice.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                err => {
                    commit('loginFailure');
                    return Promise.reject(err);
                }
            );
        },
        logout({ commit }) {
            authservice.logout();
            commit('logout');
        },

        register({ commit }, user) {
            return authservice.register(user).then(
                res => {
                    commit('registerSuccess');
                    return Promise.resolve(res.data);
                },
                err => {
                    commit('registerFailure');
                    return Promise.reject(err);
                }
            );
        },

        refresh_token({commit}) {
            return authservice.refresh().then(
                res => {
                    commit("refreshSuccess");
                    return Promise.resolve(res);
                }
            )
                .catch(err => {
                    commit("refreshFailure");
                    return Promise.reject(err);
                })
        },

        revoke_token() {
            return authservice.revoke().then(
                res => {
                    Promise.resolve(res);
                }
            ).catch(err => {
                Promise.reject(err);
            })
        },

        get_paydeatail(){
            return authservice.getPaymentDetail().then(
                res=>{
                   return Promise.resolve(res);
                }
            ).catch(err=>{
                return Promise.reject(err);
            })
        }

    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
        refreshSuccess(state) {
            state.status.loggedIn = false;
        },
        refreshFailure(state) {
            state.status.loggedIn = false;
        }
    }
}
