<template>
    <div class="career-pages">
        <headers title="个人经历"
                 :secondTitle="secondTitle"
                 @operationMore="editMore"></headers>
        <div>已添加6个，还可以添加4个</div>
        <ul>
            <li>
                <p>兴趣爱好(最多选6个)</p>
                <div class="label-details">
                    <span></span>
                </div>
            </li>
        </ul>
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

        }
    }
}
</script>
<style lang="scss">
@import '../../assets/variable.scss';
.career-pages{
    width: 100%;
    height:100%;
    position: relative;
}
</style>
