<template>
    <div class="personal-experiense-pages">
        <headers :title="个人经历"
                 :secondTitle="编辑"></headers>
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
            form: {}
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/variable.scss';

</style>
