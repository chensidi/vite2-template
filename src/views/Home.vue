<template>
    <section>
        Hello Home Page
        <div>
            <van-button type="primary">主要按钮</van-button>
            <van-button type="success">成功按钮</van-button>
            <van-button type="default">默认按钮</van-button>
            <van-button type="warning">警告按钮</van-button>
            <van-button type="danger">危险按钮</van-button>
        </div>
        <p>
            hello world
        </p>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        console.log('setup');
        fetch('/api/banner')
    },
})
</script>

<style scoped lang="scss">
    p {
        font-size: 16px;
    }
    .flex {
        display: flex;
    }
</style>

