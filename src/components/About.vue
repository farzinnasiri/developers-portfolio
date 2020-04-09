<template>
  <div class="container-fluid about">
    <div class="row">
      <div class="col-sm-6 about-image">
        <g-image
          class="profile-image"
          src="@/assets/profile_photo.jpg"
          alt="Profile Photo"
          quality="100"
          width="450"
        />
      </div>
      <div class="col-sm-6 about-text">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">About Me</h3>
            <p class="card-text about-me">
              Hello,I'm
              <strong style="color:green;">{{ personal.full_name }}</strong
              >.
              {{ personal.about }}
            </p>
            <p class="card-text interests">
              {{ personal.interests }}
            </p>
            <g-link class="cv-button float-right">MY CV</g-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
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
.profile-image {
  border-radius: 0%;
  box-shadow: -30px -25px 0px 10px rgb(51, 50, 50);
  padding: 0px;
  margin-top: 2rem;
}
.about {
  padding-top: 3rem;
  display: block;
}
.about-image {
  text-align: center;
}
.about-me {
  font-size: 1.3rem;
}
.interests {
  font-size: 1.1rem;
}
.card {
  margin: 0 auto;
  float: none;
  border: none;
  width: 42rem;
  color: white;
  background-color: black;
}
@media screen and (max-width: 95rem) {
  .profile-image {
    width: 300px;
  }
  .card {
    width: 25rem;
  }
}
@media screen and (max-width: 60rem) {
  .profile-image {
    width: 300px;
    box-shadow: -15px -20px 0px 8px rgb(51, 50, 50);
  }
  .card {
    width: 20rem;
  }
}
.cv-button {
  margin-top: 2rem;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  background-color: rgb(12, 153, 172);
  border: 2px solid rgb(12, 153, 172);
  cursor: pointer;
  width: max-content;
  transition: 0.25s ease;
}
.cv-button:hover {
  color: rgb(12, 153, 172);
  background-color: transparent;
  text-decoration: none;
}
</style>
