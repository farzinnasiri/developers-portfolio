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
        <div class="card text-black">
          <div class="card-body">
            <h3 class="card-title">About</h3>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn text-white border-light">Outline</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
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
.about-text {

}
.card{
    border: none;
}
@media screen and (max-width: 480px) {
  .profile-image {
    width: 300px;
  }
}
</style>
