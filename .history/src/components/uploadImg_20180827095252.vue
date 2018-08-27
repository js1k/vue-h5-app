<template>
    <div class="upload-images-pages">
        <vue-core-image-upload
            :class="['btn', 'btn-primary']"
            :crop="false"
            @imageuploaded="imageuploaded"
            :data="data"
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
    }
}
</script>
<style lang="scss">
@import '../assets/variable';
.upload-images-pages{
    width: 100%;
    height:100%;
    img{
        width: 100%;
        height:100%;
    }
    input{
        width: 100%;
        height:100%;
    }
}
</style>
