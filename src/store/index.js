import { createStore } from 'vuex';

export const store = createStore({
    state: {
        ip: '192.168.1.9'
    },
    mutations: {
        updateIp (state, newIp) {
            state.ip = newIp;
        }
    }
});

console.log('From here: ', store.state)