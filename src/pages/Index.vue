<template>
  <Layout>
    <div class="intro front">
      <header class="group vcenter intro__header">
        <h1>Hey, My name is farzin</h1>
        <h6>
          I'm a second year computer science student at sharif university of
          technology
        </h6>
      </header>

      <section id="view-portfolio">
        <a class="portfolio-button button" href="#works" align="middle">
          <span> View Portfolio </span>
          <font-awesome-icon :icon="['fas', 'angle-down']"/>
        </a>
      </section>
    </div>

    <div class="portfolio-works container" id="works">
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
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
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
.intro {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 17rem 5rem 17rem 5rem;
  background: #1E88E5;
  color: white;
  text-align: center;
  font-size: 1rem;
}

.work {
  padding: 2rem 2rem;
}

.work-card {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.2rem;
}

.portfolio-button {
  position: absolute !important;
  color: white;
  left: 50%;
  text-align: center;
  bottom: 10px;
  transform: translateX(-50%);
  margin: 7px 0px 0px;
  padding: 14px 14px 7px;
}
.portfolio-button span {
  display: block;
}

.button {
  text-transform: uppercase;
  font-weight: 300;
}
.portfolio-button:hover{
  text-decoration: none;
}
</style>
