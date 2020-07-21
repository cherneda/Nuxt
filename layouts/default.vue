<!-- ./layouts/default.vue -->

<template>
  <div>
    <!-- navigation -->
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item">
            Awesome JS SSR Blog!
          </nuxt-link>
          <nuxt-link active-class="is-active" to="/" class="navbar-item is-tab" exact>Home</nuxt-link>
          <nuxt-link active-class="is-active" to="/about" class="navbar-item is-tab" exact>About</nuxt-link>
        </div>
      </div>
    </nav>
      <nav>
        <ul id="globalNav">
          <li><a class="link-bio slideDown" href="#bio" @click="bg = 'bio'">Приветствие</a></li>
          <li><a class="link-projects slideDown" href="#projects" @click="bg = 'projects'">Знакомство</a></li>
          <li><a class="link-find-me slideDown" href="#findme" @click="bg = 'find-me'">Посвящение</a></li>
          <li><a id="link2" class="slideDown" href="index_ru.html">English</a></li>
        </ul>
      </nav>

    <!-- /navigation -->
    <!-- displays the page component -->
    <nuxt/>
  </div>
</template>
<style>
  .main-content {
    margin: 30px 0;
  }

</style>