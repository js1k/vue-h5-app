<template>
    <div class="baseinfo-pages">
        <div class="baseinfo-header flex-center-center">
            <div class="header-img">
                <img src="../../assets/images/image.png" alt="点击上传头像">
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
                    <p class="info-list-more" @click="goEditBaseInfo">
                        <span>已完善</span>
                        <img src="../../assets/images/more.png">
                    </p>
                </li>
                <li class="flex-center-spanbetween">
                    <span class="info-list-name">个人经历</span>
                    <p class="info-list-more">
                        <span>已完善</span>
                        <img src="../../assets/images/more.png">
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            form:{

            }
        }
    },
    methods: {
        goEditBaseInfo() {
            this.$router.push('/baseInfo')
        }
    }
}
</script>
<style lang="less">
.baseinfo-pages{
    width:100%;
    height:100%;
    background:#f1f2f3;
    .baseinfo-header{
        padding:64px 0;
        flex-direction: column;
        background:#fff;
        margin-bottom:16px;
        .header-img{
            width: 150px;
            height:150px;
            margin-bottom:30px;
            img{
                width:100%;
                height:100%;
            }
        }
        .user-name{
            span{
                font-size:30px;
                color:#333;
                font-weight:bold;
            }
            img{
                width:44px;
                height:44px;
                margin-left:30px;
            }
        }
        .user-register-mobile{
            margin-top:30px;
            font-size: 24px;
            color:#999;
        }
    }
    .user-info-list{
        background:#fff;
        padding:0 30px;
        ul li{
            height:88px;
            .info-list-name{
                font-size:30px;
                color:#333;
            }
            .info-list-more{
                span{
                    font-size: 28px;
                    color:#999;
                    margin-right:30px;
                }
                img{
                    width: 14px;
                    height:24px;
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
