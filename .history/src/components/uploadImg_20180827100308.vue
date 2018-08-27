<template>
    <div class="upload-images-pages">
        <vue-core-image-upload
            @imageuploaded="imageuploaded"
            :max-file-size="5242880"
            url="your server url" >
        </vue-core-image-upload>
    </div>
</template>
<script>
import VueCoreImageUpload from 'vue-core-image-upload'
export default{
    components: {
        VueCoreImageUpload
    },
    data() {
        return {}
    },
    methods: {
        imageuploaded() {

        }
    }
}
</script>
<style lang="scss">
@import '../assets/variable';
.upload-images-pages{
    width: 100%;
    height:100%;
    position: relative;
    .g-core-image-upload-btn{
        height:100%;
    }
}
</style>
