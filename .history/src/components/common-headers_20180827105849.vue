<template>
    <div class="common-headers">
        <div class="headers-content">
            <img src="../assets/images/back@2x.png"
                 @click="goBack">
            <span class="flex-center-center">{{title}}</span>
            <p class="flex-center-center"
               v-if="secondTitle"
               @click="operationMore">{{secondTitle}}</p>
        </div>
    </div>
</template>
<script>
export default{
    props: {
        title: {
            type: String,
            default: ''
        },
        secondTitle: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            form: {

            }
        }
    },
    methods: {
        goBack() {
            this.$router.back()
        },
        operationMore() {
            this.$emit('operationMore', this.secondTitle)
        }
    }
}
</script>
<style lang="scss">
@import '../assets/variable.scss';
.common-headers{
    background:#fff;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:pxTorem(88px);
    :after{
        content: ' ';
        width: 100%;
        display: block;
        border-bottom:1px solid #e6e6e6;
        position: absolute;
        bottom:0;
        left:0;
        transform: scaleY(0.5);
    }
    .headers-content{
        width: 100%;
        height:pxTorem(88px);
        padding:0 pxTorem(30px);
        position: relative;
        img{
            position: absolute;
            left:pxTorem(30px);
            top:pxTorem(28);
            width: pxTorem(44);
            height:pxTorem(44);
        }
        span{
            width: 100%;
            height:100%;
            font-size: pxTorem(36px);
            color:#333;
            font-weight: bold;
        }
        p{
            height:pxTorem(100px);
            position: absolute;
            top:0;
            right:pxTorem(30px);
            font-size: pxTorem(28px);
            color:#333;
        }
    }
}
</style>
