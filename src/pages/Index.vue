<template>
  <div class="container-fluid page">
    <div class="row">
      <intro :personal="myProfile.personal" :socials="myProfile.socials" />
    </div>
    <div class="row">
      <about :personal="myProfile.personal" />
    </div>
    <div class="row">
      <portfolio />
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import About from "@/components/About.vue";
import profile from "@/data/profile.json";
import Portfolio from "@/components/Portfolio.vue";

export default {
  components: {
    Intro,
    About,
    Portfolio,
  },
  metaInfo: {
    title: "Farzin Nasiri",
  },
  data: () => ({
    myProfile: profile,
  }),
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.page {
  background-color: rgb(46, 45, 45);
}
</style>
