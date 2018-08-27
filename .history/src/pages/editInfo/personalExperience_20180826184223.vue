<template>
    <div class="personal-experiense-pages">
        <div class="common-headers">
            <div class="headers-content">
                <span class="flex-center-center">个人经历</span>
                <p>编辑</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            form: {}
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/variable.scss';
.common-headers{
    background:#fff;
    position: absolute;
    top:0;
    left:0;
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
            position:
        }
    }
}
</style>
