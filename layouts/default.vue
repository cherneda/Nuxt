<template>
  <div class="external">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FGWXTJ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div class="dot"></div>
    <!-- navigation -->
    <Navigation />
    <!-- displays the page component -->

    <div class="maincontainer">

      <Transitions />

      <Header />
      
      <main>
        <nuxt />
      </main>
    </div>

    <Footer /> 
  </div>
</template>


<script>
import Navigation from "~/components/Navigation.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Transitions from "~/components/ForTransition.vue";
export default {
  components: {
    Navigation, Header, Footer, Transitions,
  }
};
</script>


<style lang="scss">
.page-enter-active{
  transition:.75s ease-out
}
.page-leave-active{
	transition:.25s ease-in
}
.page-enter,.page-leave-active{
opacity:0;
transform:translate3d(0,32px,0)
}


.is-waypoint{
  opacity:0;
  transform:translate3d(0,50px,0)
  }
  .is-waypoint p{
    transform:translate3d(0,20px,0);
    transition:.8s .5s
    }
    .is-waypoint .take-me{
      transform:rotateX(90deg);
      transition:.8s .5s
      }
      .visible,[data-visibility=always-visible]{
        -webkit-animation:fadein 1s 1 forwards;
        animation:fadein 1s 1 forwards
        }
        .visible p,[data-visibility=always-visible] p{
          transform:translateZ(0)
          }
          .visible .take-me,[data-visibility=always-visible] .take-me{
            transform:rotateX(0deg)
            }
            @-webkit-keyframes fadein{to{opacity:1;transform:translateZ(0)}}@keyframes fadein{to{opacity:1;transform:translateZ(0)}}
</style>

