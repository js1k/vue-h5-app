<template>
    <div class="base-info-pages">
        <div class="base-content">
            <group>
                <x-input title="姓名"
                         :max="10"
                         required
                         text-align="right"
                         placeholder="请输入姓名"
                         placeholder-align="right"></x-input>
                <selector title="性别"
                          direction="rtl"
                          :options="[{key: '0', value: '男'}, {key: '1', value: '女'}]"></selector>
                <datetime v-model="birthday"
                          @on-change="change"
                          :title="'生日'"
                          :min-year="1900"
                          :max-year="thisYear"
                          @on-confirm="onConfirm"></datetime>
            </group>
            <group>
                <popup-picker title="身高"
                              :data="[[1,2,3,4,5]]"></popup-picker>
                <popup-picker title="体重"
                              :data="[[1,2,3,4,5]]"></popup-picker>
            </group>
            <group>
                <x-address :title="'户口所在地'"
                           :list="addressData"></x-address>
                <x-input title="现居住地址"
                         required
                         text-align="right"
                         placeholder="请输入现居住地址"
                         placeholder-align="right"></x-input>
                <x-input title="联系电话"
                         required
                         text-align="right"
                         placeholder="请输入11位手机号"
                         is-type="china-mobile"
                         placeholder-align="right"></x-input>
                <popup-picker title="政治面貌"
                              :data="[['党员','团员','群众']]"></popup-picker>
                <popup-picker title="最高学历"
                              :data="[['博士','研究生','本科','大专','高中','初中','小学']]"></popup-picker>
                <popup-picker title="婚姻状况"
                              :data="[['已婚','未婚']]"></popup-picker>
                <x-switch title="过往职业"
                          v-model="show8"></x-switch>
                <x-input title="近期年收入"
                         required
                         text-align="right"
                         placeholder="请输入年收入"
                         type="number"
                         placeholder-align="right"></x-input>
            </group>
            <group title="选择保险行业原因">
                <x-textarea :max="100"
                            :height="176"
                            required
                            :placeholder="'5-100字'"></x-textarea>
            </group>
            <div class="person-label">
                <p>个人标签</p>
                <div class="person-label-list">
                    <span class="flex-center-center">个人能力</span>
                    <span class="flex-center-center">执行力</span>
                    <span class="flex-center-center">团队能力</span>
                    <span class="flex-center-center">自我管理</span>
                    <span class="flex-center-center">自觉</span>
                    <span class="flex-center-center">个人能力强</span>
                </div>
                <div class="edit-label flex-center-center">
                    <img src="../../assets/images/add_icon@2x.png">
                    <span>添加/编辑个人标签</span>
                </div>
            </div>
        </div>
        <div v-transfer-dom>
            <popup v-model="show8"
                   position="left"
                   width="100%">
                <div class="position-horizontal-demo">
                    <span class="vux-close"
                          @click="show8 = false"></span>
                </div>
            </popup>
        </div>
        <div class="baseinfo-submit">
            <button>保存</button>
        </div>
    </div>
</template>
<script>
import { TransferDom, Value2nameFilter as value2name } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        XInput,
        XTextarea,
        Group,
        XButton,
        Cell,
        Selector,
        Datetime,
        PopupPicker,
        XAddress,
        XSwitch,
        Popup
    },
    data() {
        return {
            form: {

            },
            show8: false,
            birthday: '',
            thisYear: 2017,
            height: [{ key: '100', value: '100' }],
            addressData: ChinaAddressV4Data
        }
    },
    computed: {
        heightssssssss: () => {
            for (let i = 150; i < 210; i++) {

            }
            return 1
        }
    },
    mounted() {
        this.thisYear = new Date().getFullYear()
        console.log(this.addressData)
    },
    methods: {
        getName(value) {
            return value2name(value, ChinaAddressV4Data)
        },
        change() {
            console.log(1)
        },
        onConfirm() {
            console.log(1)
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/variable.scss';
.base-info-pages{
    width: 100%;
    height:100%;
    padding-bottom:pxTorem(60);
    overflow-y: scroll;
    background:#f1f2f3;
    .base-content{
        background: #fff;
        padding:0 pxTorem(30);
    }
    .baseinfo-submit{
        width:100%;
        padding: 0 pxTorem(30);
        margin-top:pxTorem(60);
        button{
            height: pxTorem(80);
            width: 100%;
            border: none;
            border-radius: pxTorem(40);
            background:red;
            color:#fff;
            font-size: pxTorem(30);
        }
    }
    .person-label{
        width:100%;
        background:#fff;
        p{
            font-size: pxTorem(30);
            color:#333;
            padding:pxTorem(30) 0;
        }
        .person-label-list{
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
        .edit-label{
            height: pxTorem(88);
            position: relative;
            :after{
                display: block;
                content: ' ';
                width: 100%;
                position: absolute;
                top:0;
                left:0;
                border-top:1px solid #d9d9d9;
            }
            img{
                width: pxTorem(30);
                height: pxTorem(30);
            }
            span{
                font-size: pxTorem(28);
                color:#333;
                margin-left: pxTorem(30);
            }
        }
    }
    .weui-input{
        height:100%;
        font-size: pxTorem(28);
        color:#999;
    }
    .weui-cells{
        margin-top:0;
    }
    .weui-cells:before{
        display: none;
    }
    .weui-cell:before{
        // box-sizing: border-box;
    }
    .vux-x-switch,.vux-selector,.vux-x-input,.weui-cell_access{
        height:pxTorem(88);
    }
    .weui-cell{
        // height:88px;
        padding-left:0;
        padding-right:0;
        font-size: pxTorem(30);
        color:#333;
        text-decoration:none;
    }
    .weui-cell_select .weui-select{
        padding:0;
        font-size: pxTorem(28);
        color:#999;
    }
    .weui-cell_select .weui-cell__bd:after{
        right:0;
    }
    .weui-cells__title{
        font-size: pxTorem(30);
        color:#333;
        background:#fff;
        padding:pxTorem(20) 0 0;
        margin:0;
        display: flex;
        align-items: center;
    }
    .weui-textarea{
        background:#f1f2f3;
        padding:pxTorem(20) pxTorem(20) 0;
    }
    .vux-x-textarea{
        margin-bottom:pxTorem(30);
    }
    .weui-cell__bd{
        position: relative;
        padding-right:pxTorem(15px);
        .weui-textarea-counter{
            position: absolute;
            right:pxTorem(20);
            bottom:pxTorem(20);
        }
    }
    .vux-popup-dialog .vux-popup-picker-container .vux-popup-header{
        font-size: pxTorem(30);
    }
    .weui-label{
        font-size: pxTorem(30);
        color:#333;
    }
    .scroller-item{
        font-size: pxTorem(35);
        color:red;
        // color:#333;
    }
    .dp-header .dp-item{
        font-size: pxTorem(35);
    }
    .dp-container{
        font-size: pxTorem(40);
    }
    .vux-popup-header{
        font-size: pxTorem(30);
        height: pxTorem(60);
    }
    .weui-cell:before{
        left:0;
    }
    .vux-selector.weui-cell_select-after{
        padding-left:0 !important;
        padding-right:pxTorem(2px);
    }
    .vux-cell-box:not(:first-child):before{
        left:0;
    }
}
</style>
