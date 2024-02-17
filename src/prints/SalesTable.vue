<template>
    <div class="container">
        <p class="text-center">Tax Invoice</p>
        <div class="d-flex justify-content-between">
            <div class="w-50 border px-1">
                <p class="fw-bold">Monaal Creations</p>
                <p>B-74,Basment and Ground Floor
                    Okhla Industrial Area Phase-II
                    South East,Delhi-110020<br>
                    GSTIN/UIN: 07GRGPS5476F1Z8<br>
                    State Name : Delhi, Code : 07
                </p>
                <p class="border-top">Consignee (Ship To)</p>
                <p class="fw-bold">AM Fabrics</p>
                <p v-if="dataSet.party">{{ dataSet.party.address }}<br>GSTIN/UIN : {{ dataSet.party.gstin }}</p>
                <p class="border-top">Buyer (Bill To)</p>
                <p class="fw-bold">AM Fabrics</p>
                <p v-if="dataSet.supplier">{{ dataSet.supplier.address }}<br>GSTIN/UIN : {{ dataSet.supplier.gstin }}</p>
            </div>
            <div class="w-50 border">
                <div class="d-flex border-bottom">
                    <div class="w-50 px-2 border-end">
                        <p class="">Invoice No.</p>
                        <p class="mb-0">{{ dataSet.invoice_no }}</p>
                    </div>
                    <div class="w-50 px-2">
                        <p>Dated</p>
                        <p class="mb-0">{{ dataSet.invoice_date }}</p>
                    </div>
                </div>
                <div class="d-flex border-bottom">
                    <div class="w-50 px-2 border-end">
                        <p class=" ">PO Nos</p>
                        <p class="mb-0">1</p>
                    </div>
                    <div class="w-50 px-2">
                        <p class=" ">PO Dates</p>
                        <p class="mb-0">24-Aug-23</p>
                    </div>
                </div>
                <div class="d-flex border-bottom">
                    <div class="w-50 px-2 border-end">
                        <p class="fw-bold">Delivery Note</p>
                        <p class="mb-0"></p>
                    </div>
                    <div class="w-50 px-2">
                        <p>Mode of Payment</p>
                        <p class="mb-0"> </p>
                    </div>
                </div>
                <div class="d-flex border-bottom">
                    <div class="w-50 px-2 border-end">
                        <p class="fw-bold">Delivery Doc No.</p>
                        <p class="mb-0">1</p>
                    </div>
                    <div class="w-50 px-2">
                        <p class="fw-bold">Delivery Doc Date</p>
                        <p class="mb-0">24-Aug-23</p>
                    </div>
                </div>
                <div class="px-2">
                    <p>PO Terms</p>
                    <p>{{ dataSet.description }}</p>
                </div>
            </div>
        </div>
        <div class="">
            <table class="flex-fill table table-sm table-bordered" style="font-size: 0.9rem;">
                <thead class="table-secondary">
                    <tr>
                        <td class="text-center">SI <br>No</td>
                        <td class="text-center">Name</td>
                        <td class="text-center" style="width: 40px;">HSN/SAC</td>
                        <td class="text-center">Quantity</td>
                        <td class="text-center">Rate</td>
                        <td class="text-center" style="width:40px;">Unit</td>
                        <td class="text-end">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataSet.items" :key="index">
                        <td>1</td>
                        <td><span class="fw-bold">{{ item.name }}</span><br> {{ item.fabric_sid }}<br>{{ item.po_sid }}</td>
                        <td class="text-center">{{ item.hsncode }}</td>
                        <td class="text-center">{{ item.quantity }}</td>
                        <td class="text-center">{{ item.rate }}</td>
                        <td class="text-center">{{ item.unit }}</td>
                        <td class="text-end">{{ item.amount }}</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-end fw-bold">CGST</td>
                        <td colspan="5" class="text-end">{{ formatCurrency(dataSet.cgst) }}</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-end fw-bold">SGST</td>
                        <td colspan="5" class="text-end">{{ formatCurrency(dataSet.sgst) }}</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-end">Total</td>
                        <td colspan="5" class="text-end">{{ formatCurrency(calculateTotal) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <table class="flex-fill table table-sm table-bordered" style="font-size: 0.9rem;">
            <thead class="table-secondary">
                <tr>
                    <td class="text-center">HSN/SAC</td>
                    <td class="text-center">Taxable <br>Value</td>
                    <td class="text-center">
                        <p class="mb-0">CGST</p>
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">Rate</p>
                            <p class="mb-0">Amount</p>
                        </div>
                    </td>
                    <td class="text-center">
                        <p class="mb-0">SGST</p>
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">Rate</p>
                            <p class="mb-0">Amount</p>
                        </div>
                    </td>
                    <td class="text-center">Total</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dataSet.items" :key="index">
                    <td class="text-center">{{ item.hsncode }}</td>
                    <td class="text-center">{{ item.amount }}</td>
                    <td class="text-center">
                        <div class="d-flex justify-content-between">
                            <p>2.5%</p>
                            <p>{{ formatTax(cgst(item)) }}</p>
                        </div>
                    </td>
                    <td class="text-center">
                        <div class="d-flex justify-content-between">
                            <p>2.5%</p>
                            <p>{{ formatTax(sgst(item)) }}</p>
                        </div>
                    </td>
                    <td class="text-end">{{ item.amount_with_tax }}</td>
                </tr>
            </tbody>
        </table>
        <div class="mt-3">
            <div class="d-flex justify-content-between">
                <p class="mb-0">Tax Amount (in words):</p>
                <p class="mb-0 fw-bold">INR Nineteen Thousand Nine Hundred Thirty Five and Ninety Eight paise Only
                </p>
            </div>
            <div class="d-flex mt-2 gap-2">
                <div class="">
                    <p class="mb-0" style="text-decoration: underline;">Declaration</p>
                    <p class="mb-0 ">We declare that this invoice shows the <br> actual price of the goods described
                        <br> and
                        that all
                        particulars are true and
                        correct
                    </p>
                </div>
                <div class="border border-dark flex-fill px-2">
                    <p class="text-end fw-bold mb-0">for Monaal Creation</p><br><br>
                    <p class="text-end mb-0">Authorised Signatory</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
export default {
    data() {
        return {
            dataSet: [],
        }
    },
    computed: {
        calculateTotal() {
            let total = 0;
            // Check if dataSet and its properties are defined before calculation
            if (this.dataSet && this.dataSet.items) {
                for (const item of this.dataSet.items) {
                    if (item.amount) {
                        total += parseFloat(item.amount.replace(/,/g, '')); // Remove commas and parse as float
                    }
                }

                if (this.dataSet.cgst) {
                    total += parseFloat(this.dataSet.cgst.replace(/,/g, ''));
                }

                if (this.dataSet.sgst) {
                    total += parseFloat(this.dataSet.sgst.replace(/,/g, ''));
                }
            }

            return total.toFixed(2); // Format the total with 2 decimal places
        },

    },
    methods: {
        formatCurrency(value) {
            // Check if value is defined before formatting
            if (value) {
                return parseFloat(value.replace(/,/g, '')).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            } else {
                return '0.00'; // Return a default value if value is undefined
            }
        },
        cgst(item) {
            const amountWithTax = parseFloat(item.amount_with_tax.replace(',', ''));
            const amount = parseFloat(item.amount.replace(',', ''));
            if (!isNaN(amountWithTax) && !isNaN(amount)) {
                return (amountWithTax - amount) / 2;
            }
            return 0;
        },
        sgst(item) {
            const amountWithTax = parseFloat(item.amount_with_tax.replace(',', ''));
            const amount = parseFloat(item.amount.replace(',', ''));
            if (!isNaN(amountWithTax) && !isNaN(amount)) {
                return (amountWithTax - amount) / 2;
            }
            return 0;
        },
        calculateTotalTax(item) {
            const cgstAmount = this.cgst(item);
            const sgstAmount = this.sgst(item);
            return (parseFloat(item.amount) + cgstAmount + sgstAmount).toFixed(2);
        },
        formatTax(value) {
            // Format the numeric value to a currency format
            return parseFloat(value).toFixed(2); // Assuming you want two decimal places
        },
    },
    mounted() {
        let poId = this.$route.params.purchaseInvoiceId;
        console.log(poId)
        axios.get('http://192.168.1.133:8003/api/purchases/' + poId).then(response => {
            this.dataSet = response.data.data
        })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

};
</script>
<style>
body {
    margin: 0;
    padding: 0;
    background-color: #FAFAFA;
    font: 12pt "Tahoma";
}

* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.page {
    width: 21cm;
    min-height: 29.7cm;
    /* padding: 2cm;
    margin: 1cm auto;
    border: 1px #D3D3D3 solid;
    border-radius: 5px; */
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>