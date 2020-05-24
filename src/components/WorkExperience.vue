<template>
  <div class="work-experience container-fluid" id="experiences">
    <h2>My Work Experience</h2>
    <div class="row">
      <div class="card-columns">
        <div
          class="card experience-card"
          v-for="experience in experiences"
          :key="experience.title"
        >
          <g-image
            class="logo"
            :src="getPic(experience.logo)"
            alt="Logo"
            quality="100"
          />
          <div class="card-body">
            <a
              class="card-title"
              style="text-decoration:none;"
              :href="experience.link"
              target="_blank"
            >
              {{ experience.title }}
            </a>
            <p class="card-text">
              {{ experience.role }}
            </p>
            <p class="card-text">
              {{ experience.years }}
            </p>
          </div>
        </div>
      </div>
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
  methods: {
    getPic(pic_name) {
      if (pic_name == "") {
        return "";
      }
      return require("@/assets/" + pic_name + ".png");
    },
  },
  components: {},
  data: () => ({}),
};
</script>

<style lang="scss">
.work-experience {
  position: relative;
  box-sizing: border-box;
  width: auto;
  padding-top: 2rem;
  padding-bottom: 5rem;
  color: white;
  text-align: center;
}
.experience-card {
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
}
.logo {
  width: 200px;
  align-self: center;
}
.card-title {
  font-weight: bold;
  font-size: 20pt;
  color: rgb(12, 153, 172);
}
.card-text {
  font-size: 13pt;
  padding-top: 10px;
}
.card-body {
  a:hover {
    color: white;
  }
}
</style>
