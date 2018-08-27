<template>
    <div class="eduaction-experience-pages">
        <headers title="教育经历"></headers>
        <div class="eduaction-content">
            <div class="">
                <x-input title="学校名称"></x-input>
            </div>
        </div>
    </div>
</template>
<script>
import {XInput} from 'vux'
import headers from '../../components/common-headers'
export default{
    components: {
        headers,
        XInput
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
.eduaction-experience-pages{
    width: 100%;
    height:100%;
    padding-top:pxTorem(100px);
}
</style>
