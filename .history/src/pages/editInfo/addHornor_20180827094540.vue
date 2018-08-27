<template>
    <div class="eduaction-experience-pages">
        <headers title="个人荣誉"></headers>
        <div class="eduaction-content">
            <div class="edu-school">
                <x-input title="获奖名称"
                         required
                         text-align="right"
                         placeholder="请输入获奖名称"></x-input>
                <datetime v-model="birthday"
                          @on-change="change"
                          format="YYYY-MM"
                          :title="'获奖时间'"
                          :min-year="1900"
                          @on-confirm="onConfirm"></datetime>
            </div>
            <div class="edu-description">
                <p>上传获奖图片</p>
                <div class="upload-img">
                    <img src="../../assets/images/upload_pic_icon@2x.png">
                    <input type="text">
                </div>
            </div>
            <div class="edu-submit">
                <span class="flex-center-center">保存</span>
            </div>
        </div>
    </div>
</template>
<script>
import {XInput, Datetime, Selector, XTextarea, Group} from 'vux'
import headers from '../../components/common-headers'
export default{
    components: {
        headers,
        XInput,
        Datetime,
        Selector,
        XTextarea,
        Group
    },
    data() {
        return {
            form: {

            },
            thisYear: '',
            birthday: ''
        }
    },
    methods: {
        change() {

        },
        onConfirm() {

        }
    }
}
</script>
<style lang="scss">
@import '../../assets/variable.scss';
@import '../../assets/vux';
.eduaction-experience-pages{
    width: 100%;
    height:100%;
    padding-top:pxTorem(100px);
    background:#f1f2f3;
    overflow: scroll;
    .edu-school{
        background:#fff;
        padding:0 pxTorem(30px);
        margin-bottom:pxTorem(16px);
    }
    .edu-school-time{
        background:#fff;
        padding:0 pxTorem(30px);
    }
    .edu-description{
        margin-top:pxTorem(16px);
        background:#fff;
        padding:0 pxTorem(30px)
    }
    .weui-cell__bd{
        padding:0 !important;
    }
    .edu-submit{
        width:100%;
        padding:0 pxTorem(30px);
        span{
            height:pxTorem(80px);
            width:100%;
            margin:pxTorem(60px) 0;
            border-radius: pxTorem(40px);
            background:red;
            color:#fff;
            font-size: pxTorem(30px);
        }
    }
}
</style>
