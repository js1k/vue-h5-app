<template>
    <div class="personal-experience-pages">
        <headers title="个人经历"
                 :secondTitle="secondTitle"
                 @operationMore="editMore"></headers>
        <div class="experience-content">
            <div class="experience-column">
                <div class="experience-column-header flex-center-start after-border">
                    <img src="../../assets/images/eduaction_icon@2x.png">
                    <span>教育经历</span>
                </div>
                <ul>
                    <li class="flex-center-start after-border">
                        <img src="../../assets/images/delete_icon@2x.png"
                             v-if="secondTitle==='取消'">
                        <div class="flex-center-spanbetween experience-context">
                            <div class="flex-column-center experience-details">
                                <span>2018-10-10</span>
                                <p class="experience-main-info">清华大学清华大学清华大学清华大学清华大学</p>
                                <div class="flex-center">
                                    <span>硕士</span>
                                    <i class="left-border"></i>
                                    <span>经济管理</span>
                                </div>
                            </div>
                            <img src="../../assets/images/more.png"
                                 class="experience-more">
                        </div>
                    </li>
                    <li class="flex-center-start after-border">
                        <img src="../../assets/images/delete_icon@2x.png"
                             v-if="secondTitle==='取消'">
                        <div class="flex-center-spanbetween experience-context">
                            <div class="flex-column-center experience-details">
                                <span>2018-10-10</span>
                                <p class="experience-main-info">清华大学清华大学清华大学清华大学清华大学</p>
                                <div class="flex-center">
                                    <span>硕士</span>
                                    <i class="left-border"></i>
                                    <span>经济管理</span>
                                </div>
                            </div>
                            <img src="../../assets/images/more.png"
                                 class="experience-more">
                        </div>
                    </li>
                </ul>
                <div class="add-more-experience flex-center-center before-border"
                     @click="addEduaction">
                    <img src="../../assets/images/add_icon@2x.png">
                    <span>添加教育经历</span>
                </div>
            </div>
            <div class="experience-column">
                <div class="experience-column-header flex-center-start after-border">
                    <img src="../../assets/images/work_icon@2x.png">
                    <span>工作经历</span>
                </div>
                <ul>
                    <li class="flex-center-start after-border">
                        <img src="../../assets/images/delete_icon@2x.png"
                             v-if="secondTitle==='取消'">
                        <div class="flex-center-spanbetween experience-context">
                            <div class="flex-column-center experience-details">
                                <span>2018-10-10</span>
                                <p class="experience-main-info">民生人寿保险</p>
                                <div class="flex-center">
                                    <span>硕士</span>
                                    <i class="left-border"></i>
                                    <span>经济管理</span>
                                </div>
                            </div>
                            <img src="../../assets/images/more.png"
                                 class="experience-more">
                        </div>
                    </li>
                    <li class="flex-center-start after-border">
                        <img src="../../assets/images/delete_icon@2x.png"
                             v-if="secondTitle==='取消'">
                        <div class="flex-center-spanbetween experience-context">
                            <div class="flex-column-center experience-details">
                                <span>2018-10-10</span>
                                <p class="experience-main-info">长江实业</p>
                                <div class="flex-center">
                                    <span>硕士</span>
                                    <i class="left-border"></i>
                                    <span>经济管理</span>
                                </div>
                            </div>
                            <img src="../../assets/images/more.png"
                                 class="experience-more">
                        </div>
                    </li>
                    <li class="flex-center-start after-border">
                        <img src="../../assets/images/delete_icon@2x.png"
                             v-if="secondTitle==='取消'">
                        <div class="flex-center-spanbetween experience-context">
                            <div class="flex-column-center experience-details">
                                <span>2018-10-10</span>
                                <p class="experience-main-info">长江实业</p>
                                <div class="flex-center">
                                    <span>硕士</span>
                                    <i class="left-border"></i>
                                    <span>经济管理</span>
                                </div>
                            </div>
                            <img src="../../assets/images/more.png"
                                 class="experience-more">
                        </div>
                    </li>
                </ul>
                <div class="add-more-experience flex-center-center before-border"
                     @click="addWork">
                    <img src="../../assets/images/add_icon@2x.png">
                    <span>添加工作经历</span>
                </div>
            </div>
            <div class="experience-column">
                <div class="experience-column-header flex-center-start after-border">
                    <img src="../../assets/images/honor_icon@2x.png">
                    <span>职业标签</span>
                </div>
                <div class="career-label">
                    <div class="label-details">
                        <span class="flex-center-center">政府人员</span>
                    </div>
                    <p>已添加8个标签，还可以添加2个标签</p>
                </div>
                <div class="add-more-experience flex-center-center before-border"
                     @click="addHornor">
                    <img src="../../assets/images/add_icon@2x.png">
                    <span>添加个人荣誉</span>
                </div>
            </div>

            <div class="experience-column">
                <div class="experience-column-header flex-center-start after-border">
                    <img src="../../assets/images/honor_icon@2x.png">
                    <span>个人荣誉</span>
                </div>
                <ul>
                    <li class="flex-center-start after-border">
                        <img src="../../assets/images/delete_icon@2x.png"
                             v-if="secondTitle==='取消'">
                        <div class="flex-center-spanbetween experience-context">
                            <div class="flex-column-center experience-details">
                                <span>2018-10-10</span>
                                <p class="experience-main-info">民生人寿保险</p>
                                <div class="flex-center">
                                    <span>硕士</span>
                                    <i class="left-border"></i>
                                    <span>经济管理</span>
                                </div>
                            </div>
                            <img src="../../assets/images/more.png"
                                 class="experience-more">
                        </div>
                    </li>
                    <li class="flex-center-start after-border">
                        <img src="../../assets/images/delete_icon@2x.png"
                             v-if="secondTitle==='取消'">
                        <div class="flex-center-spanbetween experience-context">
                            <div class="flex-column-center experience-details">
                                <span>2018-10-10</span>
                                <p class="experience-main-info">长江实业</p>
                                <div class="flex-center">
                                    <span>硕士</span>
                                    <i class="left-border"></i>
                                    <span>经济管理</span>
                                </div>
                            </div>
                            <img src="../../assets/images/more.png"
                                 class="experience-more">
                        </div>
                    </li>
                </ul>
                <div class="add-more-experience flex-center-center before-border"
                     @click="addHornor">
                    <img src="../../assets/images/add_icon@2x.png">
                    <span>添加个人荣誉</span>
                </div>
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
            form: {},
            secondTitle: '编辑'
        }
    },
    methods: {
        editMore(val) {
            if (val === '编辑') {
                this.$set(this, 'secondTitle', '取消')
            } else {
                this.$set(this, 'secondTitle', '编辑')
            }
        },
        addEduaction() {
            this.$router.push('eduExper')
        },
        addWork() {
            this.$router.push('workExper')
        },
        addHornor() {
            this.$router.push('addHornor')
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
    .experience-content{
        width: 100%;
        height:100%;
        overflow: scroll;
    }
    .experience-column{
        width: 100%;
        padding:0 pxTorem(30px);
        background:#fff;
        margin-bottom:pxTorem(16px);
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
                margin-right:0;
            }
            .experience-details{
                overflow: hidden;
            }
            i{
                width: 1px;
                height: pxTorem(22px);
                margin:0 pxTorem(10px);
            }
        }
        .add-more-experience{
            height:pxTorem(88px);
            img{
                width: pxTorem(30px);
                height:pxTorem(30px);
                margin-right:pxTorem(30px);
            }
            span{
                font-size: pxTorem(30px);
                color:#333;
            }
        }
    }
    .experience-column:last-child{
        margin-bottom:0;
    }
    .experience-column-header{
        width: 100%;
        height:pxTorem(100px);
        position: relative;
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
    .career-label{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
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
</style>
