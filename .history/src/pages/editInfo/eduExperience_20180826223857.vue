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
                          :title="'生日'"
                          :min-year="1900"
                          :max-year="thisYear"
                          @on-confirm="onConfirm"></datetime>
            </div>
        </div>
    </div>
</template>
<script>
import {XInput, Datetime} from 'vux'
import headers from '../../components/common-headers'
export default{
    components: {
        headers,
        XInput
Datetime
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
}
</style>
