<template>
    <div class="base-info-pages">
        <group style="pading:0 30px;">
            <x-input title="姓名" 
:max="10" required text-align="right" placeholder="请输入姓名,10位以内" placeholder-align="right"></x-input>
            <selector title="性别" 
direction="rtl" :options="[{key: '0', value: '男'}, {key: '1', value: '女'}]"></selector>
            <datetime v-model="birthday" 
@on-change="change" :title="'生日'" :min-year="1900" :max-year="thisYear" @on-confirm="onConfirm"></datetime>
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
required text-align="right" placeholder="请输入现居住地址" placeholder-align="right"></x-input>
            <x-input title="联系电话" 
required text-align="right" placeholder="请输入11位手机号" is-type="china-mobile" placeholder-align="right"></x-input>
            <popup-picker title="政治面貌" 
:data="[['党员','团员','群众']]"></popup-picker>
            <popup-picker title="最高学历" 
:data="[['博士','研究生','本科','大专','高中','初中','小学']]"></popup-picker>
            <popup-picker title="婚姻状况" 
:data="[['已婚','未婚']]"></popup-picker>
            <x-switch title="过往职业" 
v-model="show8"></x-switch>
            <x-input title="近期年收入" 
required text-align="right" placeholder="请输入年收入" type="number" placeholder-align="right"></x-input>
        </group>
        <group title="选择保险行业原因">
            <x-textarea :max="100" 
:height="176" required :placeholder="'5-100字'"></x-textarea>
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
        <div v-transfer-dom>
            <popup v-model="show8" 
position="left" width="100%">
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
import { TransferDom, XTextarea, Popup, XInput, Group, XButton, Cell, Selector, Datetime, PopupPicker, XAddress, XSwitch, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
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
<style lang="less">
@import '~vux/src/styles/close.less';
.base-info-pages{
    width: 100%;
    height:100%;
    padding-bottom:60px;
    overflow-y: scroll;
    background:#f1f2f3;
    .baseinfo-submit{
        width:100%;
        padding: 0 30px;
        margin-top:60px;
        button{
            height:80px;
            width: 100%;
            border: none;
            border-radius: 40px;
            background:red;
            color:#fff;
            font-size: 30px;
        }
    }
    .person-label{
        width:100%;
        background:#fff;
        margin-top:16px;
        padding:0 30px;
        p{
            font-size: 30px;
            color:#333;
            padding:30px 0;
        }
        .person-label-list{
            display: flex;
            flex-wrap: wrap;
            span{
                font-size: 28px;
                color:#333;
                background:#ffdada;
                height:64px;
                border-radius: 32px;
                padding: 0 32px;
                margin:0 20px 20px 0;
            }
        }
        .edit-label{
            height:88px;
            position: relative;
            :after{
                display: block;
                content: ' ';
                width: 100%;
                position: absolute;
                top:0;
                left:0;
                border-top:1px solid #333;
            }
            img{
                width: 30px;
                height:30px;
            }
            span{
                font-size: 28px;
                color:#333;
                margin-left:30px;
            }
        }
    }
    .weui-input{
        height:100%;
        font-size: 28px;
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
        height:88px;
    }
    .weui-cell{
        // height:88px;
        padding:0 30px;
        font-size: 30px;
        color:#333;
        text-decoration:none;
    }
    .vux-selector.weui-cell_select-after{
        padding:0 30px;
    }
    .weui-cell_select .weui-select{
        padding-right:40px;
        font-size: 28px;
        color:#999;
    }
    .weui-cells__title{
        font-size: 30px;
        color:#333;
        background:#fff;
        padding:20px 30px;
        margin:0;
        display: flex;
        align-items: center;
    }
    .weui-textarea{
        background:#f1f2f3;
        padding:20px;
    }
    .vux-x-textarea{
        margin-bottom:30px;
    }
    .weui-cell__bd{
        position: relative;
        .weui-textarea-counter{
            position: absolute;
            right:20px;
            bottom:20px;
        }
    }
    .vux-popup-dialog .vux-popup-picker-container .vux-popup-header{
        font-size: 30px;
    }
    .weui-label{
        font-size: 30px;
        color:#333;
    }
    .scroller-item{
        font-size: 35px !important;
        color:red;
        // color:#333;
    }
    .dp-header .dp-item{
        font-size: 35px;
    }
    .dp-container{
        font-size: 40px;
    }
    .vux-popup-header{
        font-size: 30px;
        height:60px;
    }
}
</style>
