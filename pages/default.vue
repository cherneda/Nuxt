<template>
  <div class="external">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FGWXTJ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div class="dots"></div>
    <!-- navigation -->
    <nav class="nav-">
      <ul>
        <li><n-link class="nuxt-link-active slideDown" to="/">Home</n-link></li>
        <li><n-link class="nuxt-link-active slideDown" to="/projects">Projects</n-link></li>
        <li><n-link class="nuxt-link-active slideDown" to="/contact">Contact</n-link></li>
        <li><n-link id="link2" class="slideDown" to="index_ru.html">English</n-link></li>
      </ul>
    </nav>
    <!-- displays the page component -->

    <div class="maincontainer">
      <div class="transitions tr-">
        <div class="to-home"></div>
        <div class="to-projects"></div>
        <div class="to-contact"></div>
      </div>
      <header>
        <div class="header-">Inna Schapina</div>
        <h1>Нескучные игрушки ручной работы</h1>
      </header>
<main>
    <!--transition name="slide-fade" mode="out-in">
      <p key="bio" v-if="bg==='bio'">Hi! I'm a bio page.</p>
      <p key="projects" v-if="bg==='projects'">This is a projects page.</p>
      <p key="find-me" v-if="bg==='find-me'">See <a href="https://pehaa.com" target="_blank" rel="noopener">pehaa.com</a> for the complete website (built with Nuxt.js).</p>
    </transition-->
  <nuxt />
</main>
    </div>

    <footer>
      <a target="blank" href="https://www.cherneda.pro/"><div id="siteInfo">Coding & Design by <b>Alexander Cherneda</b><br>
      <h4>2020<span></span> <span>ver. 1.3</span></h4></div></a>
    </footer> 
    <bottom-footer/>
  </div>
</template>


<script>
import Nav from "~/components/navBar.vue";
export default {
  components: {
    Nav
  }
};
</script>

<script>
export default {
  scrollToTop: false
}
</script>


<script>
export default {
  transition: "to-home"
}
</script>


<style>
nav{
  position:fixed;
  z-index:1002;
  top:0;
  left:0;
  width:100%;
  max-width:480px;
  letter-spacing:2px;
  transition:.6s;
  color:#e8e4d2
  }
ul{
  list-style:none;
  display:flex;
  justify-content:space-between;
  text-align:center;
  padding:0;
  margin:0
  }
li{
  font-size:.75rem;
  text-transform:uppercase;
  white-space:nowrap
  }
a{
  text-decoration:none;
  color:inherit;
  padding:.75rem;
  display:block;
  position:relative;
  transition:.5s
}
  [href*="/"],[href*=contact]{
  color:#e8e4d2
}
  [href*=projects]{
  color:#231f20
}
  [href="/"]{
  background:#231f20
}
  [href*=projects]{
  background:#e8e4d2
}
  [href*=contact]{
  background:#e26961
}
  .nav-projects{
  color:#231f20
}
  nav .nuxt-link-exact-active{
  pointer-events:none;
  transform:scale(1.2)
}
  @media screen and (max-width:64em){
    li{
  flex:1
  }
}
@media screen and (min-width:64em){
  nav:after{
    content:"";
    border:16px solid;
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    z-index:1003
    }
  nav{
  top:16px;
  left:120px;
  width:auto;
  letter-spacing:2px
  }
  nav li{
  margin:0 10px}
  nav a{
  padding:1.25rem .75rem 0
  }
}


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
.grid-p{
	display:grid;
  grid-template-columns:2fr 4fr;
  grid-column-gap:20px;
  padding:1.5rem 0;
  margin-bottom:3rem;
  position:relative
}
.grid-p p{
grid-column:1/5
}
.grid-p h2{
  font-size:2.5rem;
  line-height:1;
  margin-bottom:1.5rem
  }
.grid-p h2 span{
  position:relative;
  display:inline-block
}
.grid-p h2 span:after,.grid-p h2 span:before{
  content:"";
  position:absolute;
  top:0;
  height:50%;
  border-bottom:1px solid
}
.grid-p h2 span:before{
  right:calc(100% + 10px);
  width:50vw
  }
.grid-p h2 span:after{
  left:calc(100% + 10px);
  width:80vw
}
@media (min-width:64em){
  .grid-p{
    grid-template-columns:1fr 1fr 4fr 2fr}
  .grid-p h2{grid-column:1/3
  }
  .grid-p p{grid-column:2/5
  }
}
.subtitle{
  text-transform:uppercase;
  font-size:.875rem;
  letter-spacing:2px;
  max-width:420px
}
.take-me{
  margin-bottom:1.5rem;
  display:flex;
  position:absolute;
  align-items:center;
  justify-content:flex-end;
  top:1.5rem;
  right:0
  }
@supports (grid-column:4/5){
  .take-me{
    grid-column:4/5;
    position:relative;
    top:auto;
    right:auto
    }
  }
  .take-me a{
    text-decoration:none;
    display:inline-block;
    margin:0 0 0 .75rem;
    background-size:205% 100%;
    background-position:100% 0;
    padding:.5rem;
    font-size:.75rem;
    text-transform:uppercase;
    letter-spacing:2px;
    transition:background-position .35s ease-in-out
  }
  .take-me a:hover{
    background-position:0 0
  }


p:not(:last-child){
  margin-bottom:1.5rem}.grid{
  color:#e8e4d2
}
@media (min-width:64em){
  h1{
  text-align:right;
  position:relative;
  margin:0
  }
  h1:after{
  content:"";
  position:absolute;
  right:-9px;
  top:0;
  bottom:0;
  border-right:2px solid #e8e4d2;
  width:0
  }
  .grid{
  display:grid;
  grid-column-gap:20px;
  grid-template-columns:5fr 5fr 2fr
  }
  .container{
  background-image:linear-gradient(rgba(35,31,32,0) 5vh,#231f20 20vh)
  }
}

div{
	line-height:1;
	margin:auto;
	position:relative;
	z-index:0
}
.header-error div,
.header-index div{
	color:#e26961
}
.header-projects div{color:rgba(226,105,97,.8)
}
.header-contact div{
	color:#e8e4d2
}
/*@supports (-webkit-background-clip:text){
	div{
		-webkit-background-clip:text;
		-webkit-text-fill-color:transparent;
		-webkit-mask-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#000),color-stop(.3,#000),color-stop(.8,transparent),color-stop(1,transparent));
		transition:background-position 1s ease-in,background-color 1s;
		text-align:center;
		font-size:calc(30vw + 5rem);
		line-height:1;
		margin:auto;
		background-size:70vw auto,70vw auto,70vw auto,70vw auto;
		background-repeat:repeat-x;
		background-position:0 15%,200px 25%,60px 0,0 0;
		position:relative;
		z-index:0
	}
	.header-error div,
	.header-index div{
		background-color:#e26961
	}
	.header-projects div{
		background-color:rgba(226,105,97,.8);
		background-position:-120px 15%,230px 20%,120px 0,120px 0
	}
	.header-contact div{
		background-color:#e8e4d2;
		background-position:-240px 15%,260px 25%,200px 0,240px 0
	}
}
*/
@media (min-width:64em){
	header{
		height:100vh;
		display:flex;
		pointer-events:none;
		padding:64px;
		transform:translateZ(-.5px) scale(1.5);
		transform-origin:0 0
	}
	header div{
		background-size:800px auto,600px auto,700px auto,700px auto
	}
}



</style>

