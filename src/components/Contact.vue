<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h2 style="margin-top:-8rem">
            Contact Me
          </h2>
          <div class="contact_info">
            <p id = "info" v-for="item in personal.contact_info" :key="item">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <a class="up-button button align-top" href="#intro">
          <font-awesome-icon :icon="['fas', 'angle-up']" />
          <span> GO UP </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    personal: {
      type: Object,
      required: true,
      default: function() {
        return {};
      },
    },
  },
  components: {},
  data: () => ({}),
};
</script>

<style>
.footer {
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

.up-button {
  position: absolute !important;
  color: white;
  left: 50%;
  text-align: center;
  bottom: 10px;
  transform: translateX(-50%);
  padding: 5px 14px 7px;
}
.up-button span {
  display: block;
}

.button {
  text-transform: uppercase;
  font-weight: 300;
}
.up-button:hover {
  text-decoration: none;
  color: green;
}
.contact_info {
  padding-top: 2rem;
}
.contact_info #info:hover {
  color: rgb(12, 153, 172);
}
</style>
