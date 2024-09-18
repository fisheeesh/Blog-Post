<template>
  <nav class="main-nav">
    <div>
      <h1>Bloggy Vue</h1>
    </div>
    <div>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'create' }">Create</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.main-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  color: crimson;
  font-weight: bold;
  font-size: 2.4rem;
}
.main-nav a{
  margin-left: 15px;
  color: #aaa;
  font-weight: bold;
}
.main-nav a.router-link-active{
  color: crimson;
}
</style>