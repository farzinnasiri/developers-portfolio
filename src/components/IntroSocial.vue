<template>
    <ul class="social-intro pl-0">
      <li v-for="social in socials" :key="social.icon">
        <a :href="social.link" target="_blank">
          <font-awesome-icon :icon="['fab', social.icon]" />
        </a>
      </li>
    </ul>
</template>
<script>
export default {
  name: "IntroSocial",
  props: {
    'socials': {
      type: Array,
      required: false,
      default: function() {
        return [];
      },
    },
  },
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.social-intro {
  text-align: center;
  list-style: none;
  li {
    display: inline-block;
    padding: 0 5px;

    a {
      color: #fff;
      padding: 7px;
      display: block;
      width: 40px;
      height: 40px;
      background: rgba(244, 244, 244, 0.1);
      border-radius: 5px;
      // -webkit-transform: rotate(45deg);
      // -ms-transform: rotate(45deg);
      // transform: rotate(45deg);
      margin: 5px;
      transition: 0.5s;
      // svg {
      //   -webkit-transform: rotate(-45deg);
      //   -ms-transform: rotate(-45deg);
      //   transform: rotate(-45deg);
      // }
    }
    a:hover {
      transform: scale(1.3);
      // transform: rotate(0);
      background: rgba(244, 244, 244, 0.8);
      color: rgb(12, 153, 172);
      svg {
        // -webkit-transform: rotate(0);
        // -ms-transform: rotate(0);
        // transform: rotate(0);
      }
    }
  }
}
</style>
