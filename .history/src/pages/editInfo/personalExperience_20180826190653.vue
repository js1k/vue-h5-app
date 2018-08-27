<template>
    <div class="personal-experiense-pages">
        <headers title="个人经历"
                 secondTitle="编辑"></headers>
        <div class="eduaction-experience">
            <div class="experience-column-header">
                <img src="../../assets/images/eduaction_icon@2x.png">
                <span>教育经历</span>
            </div>
        </div>
    </div>
</template>
<script>
import headers from '../../components/common-headers'
export default{
    components: {
        headers
    },
    data() {
        return {
            form: {}
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/variable.scss';
.personal-experiense-pages{
    width: 100%;
    height:100%;
    position: relative;
    padding-top:pxTorem(100px);
    background:#f1f2f3;
    .experience-column-header{
        width: 100%;
        img{
            height:pxTorem(44px);
            width:pxTorem(44px);
            margin-right:pxTorem(44px)
        }
    }
}
</style>
