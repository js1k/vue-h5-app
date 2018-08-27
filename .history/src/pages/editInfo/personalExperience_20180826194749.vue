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
                <li class="flex-center-start">
                    <img src="../../assets/images/delete_icon@2x.png">
                    <div class="flex-center-spanbetween experience-context">
                        <div class="flex-column-center experience-details">
                            <span>2018-10-10</span>
                            <p class="experience-main-info">清华大学清华大学清华大学清华大学清华大学</p>
                            <div class="flex-center">
                                <span>硕士</span>
                                <i></i>
                                <span>经济管理</span>
                            </div>
                        </div>
                        <img src="../../assets/images/more.png"
                             class="experience-more">
                    </div>
                </li>
                <li class="flex-center-start">
                    <img src="../../assets/images/delete_icon@2x.png">
                    <div class="flex-center-spanbetween experience-context">
                        <div class="flex-column-center experience-details">
                            <span>2018-10-10</span>
                            <p class="experience-main-info">清华大学清华大学清华大学清华大学清华大学</p>
                            <div class="flex-center">
                                <span>硕士</span>
                                <i></i>
                                <span>经济管理</span>
                            </div>
                        </div>
                        <img src="../../assets/images/more.png"
                             class="experience-more">
                    </div>
                </li>
                <li class="flex-center-start">
                    <img src="../../assets/images/delete_icon@2x.png">
                    <div class="flex-center-spanbetween experience-context">
                        <div class="flex-column-center experience-details">
                            <span>2018-10-10</span>
                            <p class="experience-main-info">清华大学清华大学清华大学清华大学清华大学</p>
                            <div class="flex-center">
                                <span>硕士</span>
                                <i></i>
                                <span>经济管理</span>
                            </div>
                        </div>
                        <img src="../../assets/images/more.png"
                             class="experience-more">
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
            height:pxTorem(174px);
            img{
                width:pxTorem(44px);
                height:pxTorem(44px);
                margin-right:pxTorem(30px);
            }
            .experience-main-info{
                font-size: pxTorem(30px);
                color:#333;
                margin:pxTorem(20px) 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            span{
                font-size: pxTorem(24px);
                color:#999;
            }
            .experience-context{
                width: 1px;
                flex-grow: 1;
            }
            .experience-more{
                width: pxTorem(14px);
                height:pxTorem(24px);
            }
            .experience-details{
                overflow: hidden;
            }
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
