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
    position: relative;
    .headers-content{
        width: 100%;
        height:pxTorem(100px);
        position: absolute;
        top:0;
        left:0;
        span{
            width: 100%;
            height:100%;
            font-size: pxTorem(36px);
            color:#333;
            font-weight: bold;
        }
    }
}
</style>
