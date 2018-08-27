<template>
    <div class="eduaction-experience-pages">
        <headers title="教育经历"></headers>
        <div class="eduaction-content">
            <div class="edu-school">
                <x-input title="学校名称"
                         required
                         text-align="right"
                         placeholder="请输入学校名称"></x-input>
                <x-input title="学校名称"
                         required
                         text-align="right"
                         placeholder="请输入学校名称"></x-input>
            </div>
            <div class="edu-school-time">
                <datetime v-model="birthday"
                          @on-change="change"
                          format="YYYY-MM"
                          :title="'入学时间'"
                          :min-year="1900"
                          :max-year="thisYear"
                          @on-confirm="onConfirm"></datetime>
                <datetime v-model="birthday"
                          @on-change="change"
                          format="YYYY-MM"
                          :title="'毕业时间'"
                          :min-year="1900"
                          :max-year="thisYear"
                          @on-confirm="onConfirm"></datetime>
                <selector title="专业名称"
                          direction="rtl"
                          :options="[{key: '0', value: '男'}, {key: '1', value: '女'}]"></selector>
            </div>
            <div class="edu-description">
                <group class="经历描述">
                    <x-textarea :max="100"
                                :height="176"
                                required
                                :placeholder="'请输入描述内容~'"></x-textarea>
                </group>
            </div>
        </div>
    </div>
</template>
<script>
import {XInput, Datetime, Selector, XTextarea} from 'vux'
import headers from '../../components/common-headers'
export default{
    components: {
        headers,
        XInput,
        Datetime,
        Selector,
        XTextarea
    },
    data() {
        return {
            form: {

            }
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
    }
}
</style>
