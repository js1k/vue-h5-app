<template>
    <div class="career-pages">
        <headers title="我的标签"></headers>
        <div class="my-career-info after-border flex-center-center">已添加6个，还可以添加4个</div>
        <ul>
            <li class="after-border">
                <p class="">兴趣爱好(最多选6个)</p>
                <div class="label-details">
                    <span></span>
                </div>
            </li>
        </ul>
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

        }
    }
}
</script>
<style lang="scss">
@import '../../assets/variable.scss';
.career-pages{
    width: 100%;
    height:100%;
    position: relative;
    padding-top:pxTorem(88px);
    .my-career-info{
        height:pxTorem(88px);
        width: 100%;
        font-size: pxTorem(30px);
        color:#999;
    }
    ul{
        padding:0 pxTorem(30px);
        li{
            padding: pxTorem(30px) 0;
            .label-details{

            }
        }
    }
}
</style>
