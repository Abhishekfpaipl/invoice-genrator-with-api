<template>
    <div class="container">
        <h2>Apply for Business</h2>
        <form @submit.prevent="submitForm()">

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="businessName" placeholder="name@example.com"
                    v-model="formData.businessName" required>
                <label for="businessName">Business Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="businessAddress" placeholder="name@example.com"
                    v-model="formData.businessAddress" required>
                <label for="businessAddress">Business Address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="pincode" placeholder="name@example.com"
                    v-model="formData.pincode" required>
                <label for="pincode">Pincode</label>
            </div>
            
            <p class="fs-3">Business Registration</p>
            <nav>
                <div class="nav nav-tabs d-flex justify-content-between" style="font-size: 14px;" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-gst-tab" data-bs-toggle="tab" data-bs-target="#nav-gst"
                        type="button" role="tab" aria-controls="nav-gst" aria-selected="true">GST</button>

                    <button class="nav-link" id="nav-aadhaar-tab" data-bs-toggle="tab" data-bs-target="#nav-aadhaar"
                        type="button" role="tab" aria-controls="nav-aadhaar" aria-selected="false">Aadhaar Card</button>

                    <button class="nav-link" id="nav-cheque-tab" data-bs-toggle="tab" data-bs-target="#nav-cheque"
                        type="button" role="tab" aria-controls="nav-cheque" aria-selected="false">Bank Details</button>

                    <button class="nav-link" id="nav-shop-tab" data-bs-toggle="tab" data-bs-target="#nav-shop" type="button"
                        role="tab" aria-controls="nav-shop" aria-selected="false">Shop</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">

                <div class="tab-pane fade show active" id="nav-gst" role="tabpanel" aria-labelledby="nav-gst-tab"
                    tabindex="0">
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="gstDetails" v-model="formData.gstDetails"
                            placeholder="GST Details" required>
                        <label for="gstDetails">GST Number</label>
                    </div>
                    <ImageUploadBox @image="gstImage" :required="true"></ImageUploadBox>
                </div>
                <div class="tab-pane fade" id="nav-aadhaar" role="tabpanel" aria-labelledby="nav-aadhaar-tab" tabindex="0">
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="aadhaarDetails" v-model="formData.aadhaarDetails"
                            placeholder="Aadhaar Card Details" required>
                        <label for="aadhaarDetails">Aadhaar Card Number</label>
                    </div>
                    <ImageUploadBox @image="aadhaarImage" :required="true"></ImageUploadBox>
                </div>

                <div class="tab-pane fade" id="nav-cheque" role="tabpanel" aria-labelledby="nav-cheque-tab" tabindex="0">
                    <div class="form-floating my-3">
                        <input type="number" class="form-control" id="gstDetails" v-model="formData.chequeDetails"
                            placeholder="GST Details" required>
                        <label for="gstDetails">Current Account Number</label>
                    </div>
                    <ImageUploadBox @image="chequeImage" :required="true"></ImageUploadBox>
                </div>

                <div class="tab-pane fade" id="nav-shop" role="tabpanel" aria-labelledby="nav-shop-tab" tabindex="0">
                    <div class="mt-5">
                        <p class="fs-2">Upload Your Shop Video</p>
                        <VideoUploadBox @video="video" :required="true"></VideoUploadBox>
                    </div>
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="monthlySales" placeholder="name@example.com"
                    v-model="formData.monthlySales" required>
                <label for="monthlySales">Monthly Sales</label>
            </div>

            <button type="submit" class="btn btn-dark">Submit</button>
        </form>
    </div>
</template>

<script>
import VideoUploadBox from './VideoUploadBox'
import ImageUploadBox from './ImageUploadBox'
export default {
    data() {
        return {
            formData: {
                businessName: '',
                businessAddress: '',
                pincode: '',
                gstDetails: '',
                gstImage: '',
                aadhaarImage: '',
                aadhaarDetails: '',
                chequeDetails: '',
                chequeImage: '',
                video: '',
                monthlySales: '',
            },
            business: []
        };
    },
    components: {
        VideoUploadBox,
        ImageUploadBox
    },
    methods: {
        submitForm() {
            this.business.push({
                businessName: this.formData.businessName,
                businessAddress: this.formData.businessAddress,
                pincode: this.formData.pincode,
                gstDetails: this.formData.gstDetails,
                gstImage: this.formData.gstImage,
                aadhaarDetails: this.formData.aadhaarDetails,
                aadhaarImage: this.formData.aadhaarImage,
                chequeDetails: this.formData.chequeDetails,
                chequeImage: this.formData.chequeImage,
                video: this.formData.video,
                monthlySales: this.formData.monthlySales
            })
            this.formData = {
                businessName: '',
                businessAddress: '',
                pincode: '',
                gstDetails: '',
                gstImage: '',
                aadhaarImage: '',
                aadhaarDetails: '',
                chequeDetails: '',
                chequeImage: '',
                video: '',
                monthlySales: '',
            };
        },
        aadhaarImage(value) {
            console.log(value)
            this.formData.aadhaarImage = value
        },
        gstImage(value) {
            console.log(value)
            this.formData.gstImage = value
        },
        chequeImage(value) {
            console.log(value)
            this.formData.chequeImage = value
        },
        video(value) {
            console.log(value)
            this.formData.video = value
        },
    },

}
</script>

<style lang="scss" scoped></style>