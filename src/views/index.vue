<template>
    <div>
        <live />
        <yaoGan></yaoGan>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import yaoGan from './yaogan.vue';
import live from './control/index.vue'
</script>
<style scoped></style>