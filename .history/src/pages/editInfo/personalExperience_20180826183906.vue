<template>
    <div class="personal-experiense-pages">
        <div class="common-headers">
            <div class="headers-content">
                <span>个人经历</span>
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
        height:pxTorem(128px);
        position: absolute;
        top:0;
        left:0;
    }
}
</style>
