<template>
  <div class="intro">
    <div class="container-fluid vcenter ">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h1>
            Hi, I'm <strong>{{ personal.name }}</strong>
          </h1>
          <p class="roles">
            I'm a
            <ClientOnly>
              <vue-typer
                class="typing-list"
                :text="personal.roles"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="1000"
                :type-delay="120"
                :pre-erase-delay="2000"
                :erase-delay="1000"
                erase-style="select-all"
                :erase-on-complete="false"
                caret-animation="blink"
              />
            </ClientOnly>
          </p>
        </div>
        <div class="col-sm-12 mt-5">
          <intro-social :socials="socials" />
        </div>
      </div>
    </div>
    <section id="view-portfolio">
      <a class="portfolio-button button" href="#works" align="middle">
        <span> View Portfolio </span>
        <font-awesome-icon :icon="['fas', 'angle-down']" />
      </a>
    </section>
  </div>
</template>

<script>
import IntroSocial from "@/components/IntroSocial.vue";

export default {
  name: "Intro",
  components: {},
  props: {
    socials: {
      type: Array,
      required: false,
      default: function() {
        return [];
      },
    },
    personal: {
      type: Object,
      required: true,
      default: function() {
        return {};
      },
    },
  },
  components: {
    "intro-social": IntroSocial,
    VueTyper: () => import("vue-typer").then((m) => m.VueTyper),
  },
  data: () => ({}),
};
</script>

<style>
.intro {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 8rem;
  background: black;
  color: white;
  text-align: center;
  font-size: 1rem;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}

.portfolio-button {
  position: absolute !important;
  color: white;
  left: 50%;
  text-align: center;
  bottom: 10px;
  transform: translateX(-50%);
  padding: 14px 14px 7px;
}
.portfolio-button span {
  display: block;
}

.button {
  text-transform: uppercase;
  font-weight: 300;
}
.portfolio-button:hover {
  text-decoration: none;
  color: green;
}
.roles {
  font-size: 25px;
}
.vue-typer .custom.char.typed {
  color: #76ff03;
  font-weight: bold;
  font-family: "Inconsolata";
}
.vue-typer .custom.char.selected {
  font-weight: bold;
  font-family: "Inconsolata";
}

.vue-typer .custom.caret {
  width: 0.5rem;
  background-color: rgba(255, 255, 255, 0.3);
}

.profile-image {
  border-radius: 5%;
  padding: 1rem 1rem 1rem 1rem;
  margin-bottom: 2rem;
}
</style>
