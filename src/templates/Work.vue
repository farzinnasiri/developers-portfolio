<template>
  <Layout>
    <div class="jumbotron">
      <h1>{{ $page.work.title }}</h1>
      <h6 class="display -6">{{ $page.work.description }}</h6>
    </div>
    <div class="container">
      <div class="row">
        <div class="content col-8 offset-2" v-html="$page.work.content"></div>
      </div>
    </div>
  </Layout>
</template>

<style></style>

<page-query>
query Works($path: String!){
    work: work(path: $path){
        title
        description
        content
    }
}

</page-query>
