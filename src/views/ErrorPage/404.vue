<template>
    <div class="error-page">
        <p class="error-tips" style="font-size: 100px">404</p>
        <p class="error-tips">抱歉，找不到此页面~</p>
        <div class="tips-en">
            <p>Sorry, the site now can not be accessed.</p>
            <p>
                您请求访问的页面暂时找不到，我们建议您返回首页进行浏览，谢谢！
            </p>
        </div>
        <router-link to="/home">
            <a-button type="primary">
                <template #icon><LeftOutlined /></template>
                返回首页
            </a-button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "404",
    components: {},
    setup() {},
};
</script>
<style lang="less" scoped>
.error-page {
    padding: 100px 0 0 150px;
    .error-tips {
        font-size: 44px;
        margin-bottom: 10px;
        color: #909399;
    }
    .tips-en {
        font-size: 16px;
        margin-bottom: 60px;
        color: #909399;
    }
    .el-button {
        margin-top: 10px;
    }
}
</style>
