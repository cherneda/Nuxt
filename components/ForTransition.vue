<template>
  <div class="transitions">
    <div class="to-projects"></div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.to-home, .to-contact .to-projects{
  position:fixed;
  width:1rem;
  height:1rem;
  top:0;
  transform-origin:0 0;
  transition:width .7s,height .7s,left .7s,top .7s,z-index .7s;
  pointer-events:none
}
.transitions {
  position:relative;
  z-index:-1
}
.to-projects{
  background:var(--egg-shell);
  left:50%
}
.to-contact{
  background:var(--dark-peach);
  left:75%
}
.to-home{
  background:var(--purple-brown);
  left:15%
}
@media screen and (min-width:64em){
  .to-home,.to-contact,.to-projects{
    top:2rem;transform:scale(2.5) translateZ(-1.5px)
    }
  .to-home{left:375px}
  .to-projects{left:625px}
  .to-contact{left:925px}
}
.tr-contact .to-contact,
.tr-index .to-home,
.tr-projects .to-projects{
  width:100vw;height:100vh;left:0;top:0;z-index:1}
</style>