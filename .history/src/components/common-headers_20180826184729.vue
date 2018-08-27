<template>
    <div class="common-headers">
        <div class="headers-content">
            <span class="flex-center-center">个人经历</span>
            <p class="flex-center-center">编辑</p>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            form: {

            }
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
    height:pxTorem(100px);
    .headers-content{
        width: 100%;
        height:pxTorem(100px);
        padding:0 pxTorem(30px);
        position: relative;
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
