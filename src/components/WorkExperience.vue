<template>
  <div class="work-experience container-fluid" id="experiences">
    <h2>My Work Experience</h2>
    <div class="row">
      <ul class=" pl-0">
        <li v-for="experience in experiences" :key="experience.title">
          <a :href="experience.link" target="_blank">
            {{experience.title}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkExperience",
  props: {
    experiences: {
      type: Array,
      required: false,
      default: function() {
        return [];
      },
    },
  },
  components: {},
  data: () => ({}),
};
</script>

<style>
.work-experience {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 8rem;
  color: white;
  text-align: center;
  font-size: 1rem;
}
</style>
