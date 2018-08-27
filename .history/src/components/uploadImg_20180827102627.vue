<template>
    <div class="upload-images-pages">
        <vue-core-image-upload
            @imageuploaded="imageuploaded"
            :max-file-size="5242880"
            url="your server url" >
        </vue-core-image-upload>
        <div class="upload-img-bg flex-column-center"
             @click="imageuploaded">
            <img src="../assets/images/upload_pic_icon@2x.png">
            <span>上传图片</span>
        </div>
        <!-- <img src=""> -->
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
    border: 2px dotted #ececec;
    position: relative;
    .g-core-image-upload-btn{
        height:100%;
        z-index: 9;
    }
    .upload-img-bg{
        width: 100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        background: #fff;
        align-items: center;
        justify-content: center;
        z-index: 0
        img{
            width:pxTorem(64px);
            height:pxTorem(64px);
            margin-bottom:pxTorem(10px);
        }
    }
    >img{
        z-index: 1;
        width: 100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
    }
}
</style>
