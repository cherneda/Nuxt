<template>
  <nav class="nav-">
    <ul>
      <li><n-link class="slideDown" to="/"> Home </n-link></li>
      <li><n-link class="slideDown" to="/projects"> Projects </n-link></li>
      <li><n-link class="slideDown" to="/contact"> Contact </n-link></li>
      <li><n-link id="link2" class="slideDown" to="index_ru.html"> English </n-link></li>
    </ul>
  </nav>
</template>

<script>
</script>

<style lang="scss">
nav{
  position:fixed;
  z-index:2;
	top: -2rem;
  left:0;
  width:100%;
  max-width:480px;
  letter-spacing:2px;
  transition:.6s;
  color:#1e1023;
  }
nav ul{
  list-style:none;
  display:flex;
  justify-content:space-between;
  text-align:center;
  padding:0;
  margin:0
  }
nav li{
  font-size:.75rem;
  text-transform:uppercase;
  white-space:nowrap
  }
nav a{
  text-decoration:none;
  color:inherit;
  padding:.75rem;
  display:block;
  position:relative;
  transition:.5s
}
  [href*="/"],[href*=contact]{
  color:#1e1023
}
  [href*=projects]{
  color:#ece6c6
}
  [href="/"]{
  background:#ece6c6;
}
  [href*=projects]{
  background:#1e1023
}
  [href*=contact]{
  background:#e26961
}
  nav .nuxt-link-exact-active{
  pointer-events:none;
  transform:scale(1.1);
  z-index: 2;
}
  @media screen and (max-width:64em){
    li{
  flex:1;
  
  }
}
@media screen and (min-width:64em){
  nav:after{
    content:"";
    border:1rem solid;
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    z-index:3
    }
  nav{
	top: -2rem;
  left:120px;
  width:auto;
  letter-spacing:2px;
  }
  nav li{
  margin-right: 0;
  padding-right: 0;
  right: 0;}
  nav a{
  padding:1.25rem .75rem 0
  }
}

	nav ul {
	  list-style: none;
	  display: flex;
	  text-align: center;
	  margin: 0;
	    
	  height: 1rem;
	  width: 20%;
	  font-family: "Fira Sans", sans-serif;
	  list-style-type: none;
	  align-items: baseline;
	  margin: 0rem 50vw 0;

	}
	nav li {
	  flex: 1 0 7.5rem;
	  animation-duration: 10s;	
	  -webkit-animation-duration: 10s;
	}
	nav a {
	  display: block;
	  text-decoration: none;
	  text-transform: uppercase;
	  letter-spacing: 2px;
	  font-size: .875rem;
	  
	  font-weight: bold;
	  padding: 0.1rem 0.5rem;
	  border-radius: 5px;
	  background-color: #666666;
	  transform: perspective(1rem) translateZ(0);
	  -webkit-transition-duration: 0.5s;
	  transition-duration: 0.5s;
	  -webkit-transition-property: box-shadow, transform;
	  transition-property: box-shadow, transform;
		padding-top: 8rem;
    margin: 0 0rem;
	  filter: drop-shadow(0rem 0.1rem 0.2rem #231f2079);
	}
	nav a:hover{
		-webkit-transform: translateY(10%);
		transform: translateY(10%);
	}

@media screen and (orientation: portrait){
  nav ul{
    margin: auto;
    width: 100vw;
  }
  nav a{
    padding-top: 3rem;
  }
}


</style>