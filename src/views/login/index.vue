<template>
    <div class="login-wrap">
        <a-form
            :model="formState"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
        >
            <a-form-item>
                <a-input v-model:value="formState.user" placeholder="Username">
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    v-model:value="formState.password"
                    type="password"
                    placeholder="Password"
                >
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button
                    type="primary"
                    html-type="submit"
                    :disabled="
                        formState.user === '' || formState.password === ''
                    "
                >
                    Log in
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
export default {
    name: "Login",
    components: {},
    setup() {
        // computed(() => count.value + 1)
        // watch(count, (count, prevCount) => {})
        const count = ref(0);
        const obj = reactive({
            a: 1,
        });

        const formState = reactive({
            user: "",
            password: "",
        });
        const handleFinish = (values) => {
            console.log(values, formState);
        };
        const handleFinishFailed = (values) => {
            console.log(values, formState);
        };

        onMounted(() => {
            // mounted
        });
        onUnmounted(() => {
            // unmounted
        });
        return {
            formState,
            handleFinish,
            handleFinishFailed,
            count,
            ...toRefs(obj),
        };
    },
};
</script>
<style lang="less" scoped></style>
