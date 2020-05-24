<template>
  <div class="portfolio-works container-fluid" id="works">
    <h2>My portfolio Works</h2>
    <div class="row">
      <div
        class="col-md-6 work"
        v-for="work in $static.allWork.edges"
        :key="work.node.id">
        <div class="card work-card">
          <!-- <img class="card-img-top" src="..." alt="Card image cap" /> -->
          <div class="card-body">
            <h5 class="card-title">{{ work.node.title }}</h5>
            <p class="card-text">
              {{ work.node.description }}
            </p>
            <g-link class="cv-button float-right">Source code</g-link>
            <g-link class="cv-button float-left">Live Demo</g-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<static-query>
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
</static-query>
<script>
export default {
  name: "Portfolio",
  components: {},
  data: () => ({}),
};
</script>

<style>
.portfolio-works {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 5rem;
  color: white;
  text-align: center;
  font-size: 1rem;
}
.work-card {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  color: black;
}

.work {
  padding: 2rem;
}
</style>
