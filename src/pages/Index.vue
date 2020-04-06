<template>
  <div class="container-fluid">
    <div class="row">
      <intro :personal="myProfile.personal" />
    </div>
    <div class="row">
      <about :personal="myProfile.personal" />
    </div>
    <div class="portfolio-works container-fluid row" id="works">
      <h2>My portfolio Works</h2>
      <div class="row">
        <div
          class="col-md-6 work"
          v-for="work in $page.allWork.edges"
          :key="work.node.id"
        >
          <div class="work-card">
            <h2 class="work-title">{{ work.node.title }}</h2>
            <p>
              {{ work.node.description }}
            </p>
            <g-link
              class="btn btn-primary"
              :to="work.node.path"
              role="button"
              target="_blank"
              >Clieck Here</g-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import About from "@/components/About.vue";
import profile from "@/data/profile.json";

export default {
  components: {
    Intro,
    About,
  },
  metaInfo: {
    title: "Farzin Nasiri",
  },
  data: () => ({
    myProfile: profile,
  }),
};
</script>

<page-query>
query{
  allWork{
    totalCount
    edges{
      node{
        id
        title
        description
        content
        path
      }
    }
  }

}

</page-query>

<style>
html {
  scroll-behavior: smooth;
}
.work {
  padding: 2rem;
}

.work-card {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
  border-radius: 0.2rem;
}

.portfolio-works {
  width: 100%;
  margin-top: 3rem;
  background-color: black;
}
</style>
