<template>
    <div class="baseinfo-pages">
        <div class="baseinfo-header flex-center-center">
            <div class="header-img">
                <img src="../../assets/images/image.png">
            </div>
            <div class="user-name flex-center-center">
                <span>WWB</span>
                <img src="../../assets/images/edit@2x.png">
            </div>
            <p class="user-register-mobile">注册手机号 : 13823185776</p>
        </div>
        <div class="user-info-list">
            <ul>
                <li class="flex-center-spanbetween">
                    <span class="info-list-name">基本信息</span>
                    <p class="info-list-more"
                       @click="goEditBaseInfo">
                        <span>已完善</span>
                        <img src="../../assets/images/more.png">
                    </p>
                </li>
                <li class="flex-center-spanbetween">
                    <span class="info-list-name">个人经历</span>
                    <p class="info-list-more"
                       @click="goPersonalExperience">
                        <span>已完善</span>
                        <img src="../../assets/images/more.png">
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {

            }
        }
    },
    methods: {
        goEditBaseInfo() {
            this.$router.push('/baseInfo')
        },
        goPersonalExperience() {
            this.$router.push('')
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/variable.scss';
.baseinfo-pages{
    width:100%;
    height:100%;
    background:#f1f2f3;
    .baseinfo-header{
        padding: pxTorem(64) 0;
        flex-direction: column;
        background:#fff;
        margin-bottom:pxTorem(16);
        .header-img{
            width: pxTorem(150);
            height:pxTorem(150);
            margin-bottom:pxTorem(30);
            img{
                width:100%;
                height:100%;
            }
        }
        .user-name{
            span{
                font-size:pxTorem(30);
                color:#333;
                font-weight:bold;
            }
            img{
                width:pxTorem(44);
                height:pxTorem(44);
                margin-left:pxTorem(30);
            }
        }
        .user-register-mobile{
            margin-top:pxTorem(30);
            font-size: pxTorem(24);
            color:#999;
        }
    }
    .user-info-list{
        background:#fff;
        padding:0 pxTorem(30);
        ul li{
            height:pxTorem(88);
            .info-list-name{
                font-size:pxTorem(30);
                color:#333;
            }
            .info-list-more{
                span{
                    font-size: pxTorem(28);
                    color:#999;
                    margin-right:pxTorem(30);
                }
                img{
                    width: pxTorem(14);
                    height:pxTorem(24);
                }
            }
        }
        li:nth-child(1){
            position: relative;
            :after{
                display: block;
                content: ' ';
                width: 100%;
                position: absolute;
                bottom: 0;
                left:0;
                border-bottom:1px solid #e6e6e6;
                // transform: scaleY(0.5)
            }
        }
    }
}
</style>
