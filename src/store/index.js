import { createStore } from 'vuex';

export const store = createStore({
    state: {
        ip: '192.168.1.9',
        addressInfo: {
            ip: "8.8.8.8",
            location: {
                country: "US",
                region: "California",
                timezone: "-07:00",
            },
            domains: [
                "0d2.net",
                "003725.com",
                "0f6.b0094c.cn",
                "007515.com",
                "0guhi.jocose.cn"
            ],
            as: {
                asn: 15169,
                name: "Google LLC",
                route: "8.8.8.0/24",
                domain: "https://about.google/intl/en/",
                type: "Content"
            },
            isp: "Google LLC"
        }
    },
    mutations: {
        updateIp (state, newIp) {
            state.ip = newIp;
        },
        updateAddress(state, locationInfoObj) {
            state.addressInfo = locationInfoObj
        }
    }
});

console.log('From here: ', store.state)