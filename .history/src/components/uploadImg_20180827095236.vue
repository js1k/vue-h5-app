<template>
    <div class="upload-images-pages">
        <img src="">
        <input type="file">
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
