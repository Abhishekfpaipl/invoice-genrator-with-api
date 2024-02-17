import axios from "axios"

export default {
    namespaced: true,
    state: {
        purchaseOrders: []
    },
    getters: {
        // purchaseOrder: state => state.purchaseOrder
        purchaseOrder(state) {
            return state.purchaseOrders
        },
    },
    mutations: {
        setPurchaseOrder(state, data) {
            state.purchaseOrders = data
        }
    },
    actions: {
        fetchPurchaseOrders({ commit }) {
            axios.get('http://192.168.1.133:8003/api/purchaseorders').then(response => {
                commit('setPurchaseOrder', response.data.data)
            });
        }
    },
}