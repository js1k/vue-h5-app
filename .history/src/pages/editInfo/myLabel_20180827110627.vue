<template>
    <div class="career-pages">
        <headers title="我的标签"></headers>
        <div class="my-career-info after-border flex-center-center">已添加6个，还可以添加4个</div>
        <ul>
            <li class="after-border">
                <p>兴趣爱好<span>(最多选6个)</span></p>
                <div class="label-details">
                    <span class="flex-center-center">国企员工</span>
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
            p{
                font-size: pxTorem(30px);
                color:#333;
                span{

                }
            }
            .label-details{
                display: flex;
                flex-wrap: wrap;
                padding-top:pxTorem(60px);
                span{
                    font-size: pxTorem(28);
                    color:#333;
                    background:#ffdada;
                    height:pxTorem(64);
                    border-radius: pxTorem(32);
                    padding: 0 pxTorem(32);
                    margin:0 pxTorem(20) pxTorem(20) 0;
                }
            }
        }
    }
}
</style>
