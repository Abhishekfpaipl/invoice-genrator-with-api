<template>
    <div v-if="po" class="">
        <form @submit.prevent="UpdatePo()">
                <div class="form-floating my-3">
                    <input type="text" class="form-control" id="gstDetails" v-model="po.rate" placeholder="GST Details"
                        required>
                    <label for="gstDetails">Rate</label>
                </div>
                <div class="form-floating my-3">
                    <input type="text" class="form-control" id="gstDetails" v-model="po.quantity" placeholder="GST Details"
                        required>
                    <label for="gstDetails">Quantity</label>
                </div>
                <div class="form-floating my-3">
                    <input type="text" class="form-control" id="gstDetails" v-model="po.variation" placeholder="GST Details"
                        required>
                    <label for="gstDetails">Variation</label>
                </div>
                <div v-if="po.terms">
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="gstDetails" v-model="po.terms.payment"
                            placeholder="GST Details" required>
                        <label for="gstDetails">Payment Terms</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="gstDetails" v-model="po.terms.delivery"
                            placeholder="GST Details" required>
                        <label for="gstDetails">Delivery Terms</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="gstDetails" v-model="po.terms.quality"
                            placeholder="GST Details" required>
                        <label for="gstDetails">Quality Terms</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="gstDetails" v-model="po.terms.general"
                            placeholder="GST Details" required>
                        <label for="gstDetails">General Terms</label>
                    </div>
                </div>
                <!-- <div class="form-check form-switch my-3">
                    <input class="form-check-input" v-model="status" type="checkbox" role="switch"
                        id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Lock</label>
                </div> -->
            <!-- <div class="">
                <div v-if="po.locked === 1" class="form-check  my-3">
                    <input class="form-check-input" v-model="po.status.pending" type="checkbox" role="switch" id="complete">
                    <label class="form-check-label" for="complete">Complete</label>
                </div>
            </div> -->

            <button type="submit" class="btn btn-dark">Update</button>

        </form>
    </div>
    <div v-else>
        Loading products ....
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            poId: '',
            status:'Pending',
            po: {},
        }
    },
    mounted() {
        this.poId = this.$route.params.purchaseOrderId;
    },
    watch: {
        async poId(newPoId) {
            try {
                const response = await axios.get('http://192.168.1.133:8003/api/purchaseorders/' + newPoId);
                this.po = response.data.data;
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        },
    },
    methods: {
        UpdatePo() {
            const formData = {
                rate: this.po.rate,
                quantity: this.po.quantity,
                variation: this.po.variation,
                payment_terms: this.po.terms.payment,
                delivery_terms: this.po.terms.delivery,
                quality_terms: this.po.terms.quality,
                general_terms: this.po.terms.general,
                locked: this.po.locked,
                pending: this.po.status.pending,
                status: this.status
            };
            axios.put('http://192.168.1.133:8003/api/purchaseorders/' + this.poId, formData)
                .then(response => {
                    this.po = response.data.data
                    console.log("data", this.po)
                }).catch(error => {
                    console.error('Error :', error);
                });
        }
    }
}
</script>

<style lang="scss" scoped></style>