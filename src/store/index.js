import { createStore } from "vuex";
import PurchaseOrder from "./PurchaseOrder";
import axios from "axios";
export default createStore({
  state: {
    so: [
      {
        id: 1,
        name: 'SO Number',
        value: 'SO-01',
      },
      {
        id: 2,
        name: 'Buyer Name',
        value: 'Sardar Enterprises',
      },
      {
        id: 3,
        name: 'Buyer ID',
        value: '1',
      },
      {
        id: 4,
        name: 'Buyer Location',
        value: 'Okhla',
      },
      {
        id: 5,
        name: 'Buyer GST',
        value: '07GRGPS5476F2Z7',
      },
      {
        id: 6,
        name: 'Unit',
        value: 'MTR',
      },
      {
        id: 7,
        name: 'Rate',
        value: '₹ 150 / KG',
      },
      {
        id: 8,
        name: 'HSN/SCN Code',
        value: '60069000',
      },
      {
        id: 9,
        name: 'GST Rate',
        value: '5%',
      },
      {
        id: 10,
        name: 'Material ID',
        value: 'MC23-A62-A005',
      },
      {
        id: 11,
        name: 'SO Expiry Date',
        value: 'Wednesday, August 23, 2023',
      },
      {
        id: 12,
        name: 'SO Expiry Period',
        value: '6 Days of PO Creation',
      },
      {
        id: 13,
        name: 'Payment Terms',
        value: '30 Days Payment Cycle',
      },
      {
        id: 14,
        name: 'Delivery Terms',
        value: 'Free Door Delivery',
      },
      {
        id: 15,
        name: 'Catalog ID',
        value: '#DNB109',
      },
      {
        id: 16,
        name: 'Material Category',
        value: 'Knitted Fabric Rotary Print, MC-23',
      },
      {
        id: 17,
        name: 'Material Name',
        value: 'Zara Patta, A62',
      },
      {
        id: 18,
        name: 'Material Style',
        value: 'White Single stripe, A005',
      },
    ],
    soColors: [
      {
        id: 1,
        variant: 'Blue & White',
        width: '56',
        length: '90',
        order: '70 Mtr',
        consumption: '0.7',
        ttlFabric: '',
      },
      {
        id: 2,
        variant: 'Blue & White',
        width: '56',
        length: '90',
        order: '70 Mtr',
        consumption: '0.7',
        ttlFabric: '',
      },
      {
        id: 1,
        variant: 'Blue & White',
        width: '56',
        length: '90',
        order: '70 Mtr',
        consumption: '0.7',
        ttlFabric: '',
      },
      {
        id: 1,
        variant: 'Blue & White',
        width: '56',
        length: '90',
        order: '70 Mtr',
        consumption: '0.7',
        ttlFabric: '',
      }
    ],
    gdn: [
      {
        id: 1,
        name: 'Buyer ID',
        value: 'BO-01',
      },
      {
        id: 2,
        name: 'Invoice No',
        value: '245363',
      },
      {
        id: 3,
        name: 'Invoice Date',
        value: '07-08-23',
      },
      {
        id: 4,
        name: 'SO No',
        value: '11245',
      },
      {
        id: 5,
        name: 'SO Date',
        value: '10-06-23',
      },
      {
        id: 6,
        name: 'SO Part',
        value: '1230',
      },
      {
        id: 7,
        name: 'Material Category',
        value: '',
      },
      {
        id: 8,
        name: 'Material Name',
        value: 'Cheese',
      },
      {
        id: 9,
        name: 'Material Style',
        value: '23',
      },
      {
        id: 10,
        name: 'Material ID',
        value: '25461',
      },
      {
        id: 9,
        name: 'Material Unit',
        value: '23',
      },
      {
        id: 10,
        name: 'GDN Quantity',
        value: '12',
      },
    ],
    gdnColors: [
      {
        id: 1,
        variant: 'Blue',
        width: '56',
        length: '90',
        total_qty: '100',
        issued_qty: '12',
        bundle_details: '',
      },
      {
        id: 2,
        variant: 'Black',
        width: '56',
        length: '90',
        total_qty: '100',
        issued_qty: '12',
        bundle_details: '',
      },
      {
        id: 3,
        variant: 'Red',
        width: '56',
        length: '90',
        total_qty: '100',
        issued_qty: '12',
        bundle_details: '',
      },
      {
        id: 4,
        variant: 'White',
        width: '56',
        length: '90',
        total_qty: '100',
        issued_qty: '12',
        bundle_details: '',
      }
    ],
    goodOutward: [
      {
        id: 1,
        name: 'Buyer Name',
        value: 'Monaal Creations',
      },
      {
        id: 2,
        name: 'Address',
        value: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN',
      },
      {
        id: 3,
        name: 'Bill No',
        value: '45',
      },
      {
        id: 4,
        name: 'Bill Date',
        value: '05 Sept. 23',
      },
      {
        id: 5,
        name: "Total PO's",
        value: '4',
      },
      {
        id: 6,
        name: 'Transporter',
        value: 'Radha Krishna Transports',
      },
      {
        id: 7,
        name: 'LR No',
        value: '45689',
      },
      {
        id: 8,
        name: 'Vehicle No',
        value: 'DL4C BK 4556',
      },
      {
        id: 9,
        name: 'Mobile No',
        value: '9988776655',
      },
      {
        id: 10,
        name: 'Total Bundles',
        value: '120',
      },
    ],
    outwardDetails: [
      {
        id: 1,
        po_no: '80',
        variant: 'Black',
        width: '56',
        farma: '140',
        sent_qty: '800',
        unit: 'mtr',
        bundle_details: '',
      },
      {
        id: 2,
        po_no: '80',
        variant: 'Red',
        width: '56',
        farma: '140',
        sent_qty: '800',
        unit: 'mtr',
        bundle_details: '',
      },
      {
        id: 3,
        po_no: '80',
        variant: 'Blue',
        width: '56',
        farma: '140',
        sent_qty: '800',
        unit: 'mtr',
        bundle_details: '',
      },
      {
        id: 4,
        po_no: '80',
        variant: 'Brown',
        width: '56',
        farma: '140',
        sent_qty: '800',
        unit: 'mtr',
        bundle_details: '',
      }
    ],
    sales: [
      {
        id: 1,
        name: 'Invoice No',
        value: '1',
      },
      {
        id: 2,
        name: 'Delivery Note',
        value: 'sadf',
      },
      {
        id: 3,
        name: 'Reference No & Date',
        value: '11224 23-sept-23',
      },
      {
        id: 4,
        name: "Buyer's Order No",
        value: '22536',
      },
      {
        id: 5,
        name: "Disptach Doc No",
        value: '35162',
      },
      {
        id: 6,
        name: 'Dispatch Through',
        value: 'sdfds',
      },
      {
        id: 7,
        name: 'Terms of Delivery',
        value: '',
      },
      {
        id: 8,
        name: 'Dated',
        value: '23-Aug-23',
      },
      {
        id: 9,
        name: 'Mode/Terms Of Payment',
        value: 'cash',
      },
      {
        id: 10,
        name: 'Other References',
        value: '12',
      },
      {
        id: 11,
        name: 'Dated',
        value: '24-sept-23',
      },
      {
        id: 12,
        name: 'Delivery Note Date',
        value: '22-sept-23',
      },
      {
        id: 13,
        name: 'Destination',
        value: '22',
      },
    ],
    salesOrder: [
      {
        id: 1,
        name: "Lilen print",
        order_no: '51325',
        gdn: '',
        hsn_sac: '540710',
        qty: '1125',
        rate: '90',
        unit: 'Mtr',
        amount: '101250'
      },
      {
        id: 2,
        name: "Snow Fall Digital Print",
        order_no: '51345',
        gdn: '',
        hsn_sac: '6006',
        qty: '99.850',
        rate: '380',
        unit: 'Kg',
        amount: '37943'
      },
      {
        id: 3,
        name: "Bsy Print",
        order_no: '51335',
        gdn: '',
        hsn_sac: '540754',
        qty: '3053.51',
        rate: '85',
        unit: 'Mtr',
        amount: '259523.25'
      },
    ],
    purchaseOrders: [],
    purchaseOrder: {},
    purchaseInvoice: [],
    grn: [],
  },
  getters: {
    getSo(state) {
      return state.so
    },
    getSoColors(state) {
      return state.soColors
    },
    getGdn(state) {
      return state.gdn
    },
    getGdnColors(state) {
      return state.gdnColors
    },
    getGoodOutward(state) {
      return state.goodOutward
    },
    getOutwardDetails(state) {
      return state.outwardDetails
    },
    getSales(state) {
      return state.sales
    },
    getSalesOrder(state) {
      return state.salesOrder
    },
    purchaseOrders(state) {
      return state.purchaseOrders
    },
    purchaseInvoice(state) {
      return state.purchaseInvoice
    },
    grn(state) {
      return state.grn
    },
    getPurchase(state) {
      return state.purchaseOrder
    }
  },
  mutations: {
    setPurchaseOrder(state, data) {
      state.purchaseOrders = data
    },
    setPurchase(state, data) {
      state.purchaseOrder = data
    },
    setPurchaseInvoice(state, data) {
      state.purchaseInvoice = data
    },
    setGrn(state, data) {
      state.grn = data
    },
    addPurchaseOrder(state, newPO) {
      state.purchaseOrders.push(newPO);
    },
  },
  actions: {
    fetchPurchaseOrders({ commit }) {
      axios.get('http://192.168.1.133:8003/api/purchaseorders').then(response => {
        commit('setPurchaseOrder', response.data.data)
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    },
    fetchPurchaseInvoice({ commit }) {
      axios.get('http://192.168.1.133:8003/api/purchases/').then(response => {
        commit('setPurchaseInvoice', response.data.data)
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    },
    fetchGrn({ commit }) {
      axios.get('http://192.168.1.133:8003/api/grns/').then(response => {
        commit('setGrn', response.data.data)
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    },
    fetchPurchaseOrder({ commit }) {
      let poId = this.$route.params.purchaseOrderId
      axios.get('http://192.168.1.133:8003/api/purchaseorders/' + poId).then(response => {
        commit('setPurchase', response.data.data)
      })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

    },
    updatePurchaseOrder({ commit }) {
      let poId = this.$route.params.purchaseOrderId
      axios.put('http://192.168.1.133:8003/api/purchaseorders/' + poId)
        .then(response => {
          commit('updatePurchaseOrder', response.data.data)
          console.log(this.po)
        }).catch(error => {
          console.error('Error :', error);
        });
    }
  },
  modules: {
    PurchaseOrder: PurchaseOrder,
  },
});
