<template>
    <div class="personal-experience-pages">
        <headers title="个人经历"
                 secondTitle="编辑"></headers>
        <div class="experience-column">
            <div class="experience-column-header flex-center-start">
                <img src="../../assets/images/eduaction_icon@2x.png">
                <span>教育经历</span>
            </div>
            <ul>
                <li>
                    <img src="../../assets/images/delete_icon@2x.png">
                    <div>
                        <span>2018-10-10</span>
                        <p>清华大学</p>
                        <div class="flex-center-center">
                            <span>硕士</span>
                            <i></i>
                            <span>经济管理</span>
                        </div>
                    </div>
                </li>
            </ul>
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
.personal-experience-pages{
    width: 100%;
    height:100%;
    position: relative;
    padding-top:pxTorem(100px);
    background:#f1f2f3;
    .experience-column{
        width: 100%;
        padding:0 pxTorem(30px);
        background:#fff;
        ul li{
            width: 100%;
            height:pxTorem(174px)
        }
    }
    .experience-column-header{
        width: 100%;
        height:pxTorem(88px);
        position: relative;
        &:after{
            display: block;
            position: absolute;
            left:0;
            bottom:0;
            width: 100%;
            content:' ';
            border-bottom:1px solid #e6e6e6;
        }
        img{
            height:pxTorem(44px);
            width:pxTorem(44px);
            margin-right:pxTorem(30px)
        }
        span{
            font-size: pxTorem(30px);
            color:#333;
            font-weight: bold;
        }

    }
}
</style>
