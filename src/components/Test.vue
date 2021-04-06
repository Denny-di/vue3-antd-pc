<template>
    <div class="test-wrap"></div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
export default {
    name: "Test",
    setup() {
        // computed(() => count.value + 1)
        // watch(count, (count, prevCount) => {})
        const count = ref(0);
        const obj = reactive({
            a: 1,
        });

        onMounted(() => {
            // mounted
        });
        onUnmounted(() => {
            // unmounted
        });
        return {
            count,
            ...toRefs(obj),
        };
    },
};
</script>

<style lang="less" scoped></style>
