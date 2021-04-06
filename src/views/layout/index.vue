<template>
    <div class="layout-wrap">
        layout-wrap 123

        <router-view />
    </div>
</template>

<script>
import {
    onMounted,
    onUnmounted,
    // reactive, ref, toRefs
} from "vue";
export default {
    name: "Layout",
    components: {},
    setup() {
        // computed(() => count.value + 1)
        // watch(count, (count, prevCount) => {})
        onMounted(() => {
            // mounted
        });
        onUnmounted(() => {
            // unmounted
        });
        return {};
    },
};
</script>
<style lang="less" scoped></style>
