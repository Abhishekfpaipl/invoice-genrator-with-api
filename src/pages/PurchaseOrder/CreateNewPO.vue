<template>
    <div class="container mt-5">

        <form @submit.prevent="createPo()">
            <div class="form-floating my-3">
                <select class="form-select" v-model="testSupId">
                    <option v-for="(sup, index) in suppliers" :key="index" :value="sup.id">{{ sup.id }}</option>
                </select>
            </div>
            <div class="form-floating my-3">
                <select class="form-select" v-model="testStockId">
                    <option v-for="(sup, index) in stocks" :key="index" :value="sup.id">{{ sup.id }}</option>
                </select>
            </div>
            <div class="form-floating my-3">
                <input type="text" class="form-control" id="gstDetails" v-model="form.rate" placeholder="GST Details"
                    required>
                <label for="gstDetails">Rate</label>
            </div>
            <div class="form-floating my-3">
                <input type="text" class="form-control" id="gstDetails" v-model="form.quantity" placeholder="GST Details"
                    required>
                <label for="gstDetails">Quantity</label>
            </div>
            <div class="form-floating my-3">
                <input type="text" class="form-control" id="gstDetails" v-model="form.variation" placeholder="GST Details"
                    required>
                <label for="gstDetails">Variation</label>
            </div>
            <div class="form-floating my-3">
                <input type="text" class="form-control" id="gstDetails" v-model="form.payment_terms"
                    placeholder="GST Details" required>
                <label for="gstDetails">Payment Terms</label>
            </div>
            <div class="form-floating my-3">
                <input type="text" class="form-control" id="gstDetails" v-model="form.delivery_terms"
                    placeholder="GST Details" required>
                <label for="gstDetails">Delivery Terms</label>
            </div>
            <div class="form-floating my-3">
                <input type="text" class="form-control" id="gstDetails" v-model="form.quality_terms"
                    placeholder="GST Details" required>
                <label for="gstDetails">Quality Terms</label>
            </div>
            <div class="form-floating my-3">
                <input type="text" class="form-control" id="gstDetails" v-model="form.general_terms"
                    placeholder="GST Details" required>
                <label for="gstDetails">General Terms</label>
            </div>
            <div class="form-floating my-3">
                <input type="date" class="form-control" id="gstDetails" v-model="form.duedate_at" placeholder="GST Details"
                    required>
                <label for="gstDetails">Due Date</label>
            </div>
            <div class="form-floating my-3">
                <input type="text" class="form-control" id="gstDetails" v-model="form.description" placeholder="GST Details"
                    required>
                <label for="gstDetails">Description</label>
            </div>
            <button type="submit" class="btn btn-dark">Create New PO</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            suppliers: [],
            stocks: [],
            form: {
                supplier_id: '',
                stock_id: '',
                rate: '',
                quantity: '',
                variation: '',
                payment_terms: '',
                delivery_terms: '', 
                quality_terms: '',
                general_terms: '',
                duedate_at: '',
                description: '',
            },
            testSupId: 1,
            testStockId: 1,
        }
    },
    mounted() {
        axios.get('http://192.168.1.133:8003/api/suppliers/')
            .then(response => {
                this.suppliers = response.data.data
            }).catch(error => {
                console.error('Error fetching data:', error);
            });

        axios.get('http://192.168.1.133:8003/api/stocks/')
            .then(response => {
                this.stocks = response.data.data
            }).catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    methods: {
        createPo() {
            const formData = {
                supplier_id: this.testSupId,
                stock_id: this.testStockId,
                rate: this.form.rate,
                quantity: this.form.quantity,
                variation: this.form.variation,
                payment_terms: this.form.payment_terms,
                delivery_terms: this.form.delivery_terms,
                quality_terms: this.form.quality_terms,
                general_terms: this.form.general_terms,
                duedate_at: this.form.duedate_at,
                description: this.form.description
            };
            axios.post('http://192.168.1.133:8003/api/purchaseorders/', formData)
                .then(response => {
                    const newPO = response.data;
                    this.$store.commit('addPurchaseOrder', newPO);
                    this.clearForm();
                    console.log('New PO created:', newPO);
                }).catch(error => {
                    console.error('Error:', error);
                });
        },
        clearForm() {
            this.form = {
                supplier_id: '',
                stock_id: '',
                rate: '',
                quantity: '',
                variation: '',
                payment_terms: '',
                delivery_terms: '',
                quality_terms: '',
                general_terms: '',
                duedate_at: '',
                description: '',
            };
        },
    },
}
</script>
