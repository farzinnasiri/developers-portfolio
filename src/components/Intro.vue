<template>
  <div class="intro">
    <header class="group vcenter intro__header">
      <h1>
        Hi, I'm <strong>{{ personal.name }}</strong>
      </h1>
      <p class="roles">
        I am a
        <vue-typer
          class="typing-list"
          :text="personal.roles"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="60"
          :pre-erase-delay="2000"
          :erase-delay="40"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="blink"
        />
      </p>
    </header>

    <section id="view-portfolio">
      <a class="portfolio-button button" href="#works" align="middle">
        <span> View Portfolio </span>
        <font-awesome-icon :icon="['fas', 'angle-down']" />
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    socials: {
      type: Array,
      required: false,
      default: function () {
        return [];
      },
    },
    personal: {
      type: Object,
      required: true,
      default: function () {
        return {};
      },
    },
  },
  components: {
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
  padding: 17rem 5rem 17rem 5rem;
  background: #1e88e5;
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
.portfolio-button:hover {
  text-decoration: none;
}
.roles {
  font-size: 30px;
}
</style>
