<template>
    <div class="container">
        <h2>Personal Information</h2>
        <form @submit.prevent="submitForm()">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="name" placeholder="name@example.com" v-model="formData.name"
                    required>
                <label for="name">Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="contact" placeholder="name@example.com"
                    v-model="formData.contact" required>
                <label for="contact">Contact Number</label>
            </div>

            <nav>
                <div class="nav nav-tabs d-flex justify-content-between" style="font-size: 14px;" id="nav-tab"
                    role="tablist">
                    <button class="nav-link active" id="nav-pan-tab" data-bs-toggle="tab" data-bs-target="#nav-pan"
                        type="button" role="tab" aria-controls="nav-pan" aria-selected="true">Pan Card</button>

                    <button class="nav-link" id="nav-license-tab" data-bs-toggle="tab" data-bs-target="#nav-license"
                        type="button" role="tab" aria-controls="nav-license" aria-selected="false">Driving License</button>

                    <button class="nav-link" id="nav-image-tab" data-bs-toggle="tab" data-bs-target="#nav-image"
                        type="button" role="tab" aria-controls="nav-image" aria-selected="false">Image</button>

                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">

                <div class="tab-pane fade show active" id="nav-pan" role="tabpanel" aria-labelledby="nav-pan-tab"
                    tabindex="0">
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="panDetails" placeholder="name@example.com"
                            v-model="formData.panDetails" required>
                        <label for="panDetails">Pan Card</label>
                    </div>
                    <ImageUploadBox @image="panImage" :required="true"></ImageUploadBox>
                </div>
                <div class="tab-pane fade" id="nav-license" role="tabpanel" aria-labelledby="nav-license-tab" tabindex="0">
                    <div class="form-floating my-3">
                        <input type="number" class="form-control" id="dlDetails" placeholder="name@example.com"
                            v-model="formData.dlDetails" required>
                        <label for="dlDetails">Driving License</label>
                    </div>
                    <ImageUploadBox @image="dlImage"></ImageUploadBox>
                </div>
                <div class="tab-pane fade" id="nav-image" role="tabpanel" aria-labelledby="nav-image-tab" tabindex="0">
                    <div class="">
                        <p class="my-3">Upload Your Image</p>
                        <ImageUploadBox @image="image"></ImageUploadBox>
                    </div>
                </div>


            </div>





            <button type="submit" class="btn btn-dark">Submit</button>
        </form>
    </div>
</template>

<script>
import ImageUploadBox from './ImageUploadBox.vue';

export default {
    components: { ImageUploadBox },
    data() {
        return {
            formData: {
                name: '',
                contact: '',
                panDetails: '',
                panImage: '',
                dlDetails: '',
                dlImage: '',
                image: ''
            },
            personalInfo: [],
        }
    },
    methods: {
        submitForm() {
            this.personalInfo.push({
                name: this.formData.name,
                contact: this.formData.contact,
                panDetails: this.formData.panDetails,
                panImage: this.formData.panImage,
                dlDetails: this.formData.dlDetails,
                dlImage: this.formData.dlImage,
                image: this.formData.image
            })
            this.formData = {
                name: '',
                contact: '',
                panDetails: '',
                panImage: '',
                dlDetails: '',
                dlImage: '',
                image: ''
            }
        },
        image(value) {
            this.formData.image = value
        },
        panImage(value) {
            this.formData.panImage = value
        },
        dlImage(value) {
            this.formData.dlImage = value
        },
    }
}
</script>

<style lang="scss" scoped></style>