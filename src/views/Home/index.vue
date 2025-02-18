<script setup>
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeProduct from "@/views/Home/components/HomePeoduct.vue";
import HomePanel from "@/views/Home/components/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />

  <HomePanel title="新鲜好物" sub-title="新鲜好物">
    <div>我是新鲜好物的插槽</div>
  </HomePanel>

  <HomePanel title="人气推荐" sub-title="新鲜好物lll">
    <div>我是人气推荐的插槽</div>
  </HomePanel>
</template>
