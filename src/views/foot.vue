<template>
  <div class="fixed-bottom bg-primary">
    <div class="container-fluid">

      <div class="row d-flex">
        <div class="col-4 bg-success" id="kongzhi">
          <h1 class="text-light text-center">控制</h1>
        </div>
        <div class="col-4 " id="jiankong">
          <h1 class="text-light text-center">监控</h1>
        </div>
        <div class="col-4 " id="fuwu">
          <h1 class="text-light text-center">服务</h1>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { Router, useRouter } from 'vue-router'
import { RemoveClass,AddClass } from '@/utils/simple'
// 按钮的定义

const router: Router = useRouter()

onMounted(() => {
  var fuwu = document.getElementById("fuwu");
  var jiankong = document.getElementById("jiankong")
  var kongzhi = document.getElementById("kongzhi")


  fuwu?.addEventListener("click", () => {
    AddClass(fuwu, "bg-success")
    RemoveClass(jiankong, "bg-success")
    RemoveClass(kongzhi, "bg-success")
    router.push('/service');
  })

  jiankong?.addEventListener("click", () => {
    AddClass(jiankong, "bg-success")
    RemoveClass(fuwu, "bg-success")
    RemoveClass(kongzhi, "bg-success")
    router.push('/monitor');
  })

  kongzhi?.addEventListener("click", () => {
    AddClass(kongzhi, "bg-success")
    RemoveClass(jiankong, "bg-success")
    RemoveClass(fuwu, "bg-success")
    router.push('/');
  })



})


</script>
<style scoped></style>