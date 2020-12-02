<template>

  <div class="container">
    <div class="inner-container push-up">
      <h2>Познакомьтесь с героями,<br>которые уже нашли своих хозяев</h2>
      <article class="is-waypoint grid-p visible">
        <img src="~/assets/img/kuzya.png" alt="Kuzya / Кузя" title="Kuzya">
        <h3>Кузя</h3>
        <p>Хранитель домашего уюта</p>
        <p>Seems simple of the screenshot, but it is one of the most complex project I've ever done.</p>
        <p>As you probably understand from the title, this website is about Alexander Prokofiev, very talanted and creative person. We want to make this project as portofolio with a lot of biography facts.</p>
        <ul>
          <li>Complete unique design,</li>
          <li>A bunch of custom plugins were developed for different visual needs,</li>
          <li>On-page SEO optimization.</li>
        </ul>
      </article>
      <article class="is-waypoint grid-p visible">
        <img src="~/assets/img/kuzya.png" alt="Kuzya / Кузя" title="Kuzya">
        <h3>Кузя</h3>
        <p>Хранитель домашего уюта</p>
        <p>For me it is very personal project. Actually this awesome site we made with my mom.</p>
        <p>This website dedicated to her creativity.</p>
        <ul>
          <li>At that moment I didn't have a designer in my team, so I did everything by myself,</li>
          <li>Custom theme which was created specially for this website,</li>
          <li>On-page SEO.</li>
        </ul>
      </article>
      
      <a href="http://www.schapina.art/" class="project-title">
        <h2>&quot;Null&quot;</h2>
        <p>Null</p>
      </a>
      <img src="img/che.png">
      <p>It is fun sometimes to look back and think about progress that you make throu the years while styding.</p>
      <ul>
        <li>For the past 2 years I redesigned this website 4 times!</li>
      </ul>
    
    </div>
  </div>

</template>


<style lang="scss" scoped>
h2 {
  padding-top: 25vh;
	transform: perspective(1rem) translateZ(0);
	/*box-shadow: 0 0 1rem #66ff0000;*/
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;
	-webkit-transition-property: box-shadow, transform;
	transition-property: box-shadow, transform;
}
h3{
  margin:1rem 5rem;
  line-height:1;
  	transform: perspective(1rem) translateZ(0);

  }
article{
	margin-bottom:3rem;

  }
.inner-container{
  max-width:1000px
  }
.tags{
  list-style:none;
  margin:24px 0;
  padding:0;
  grid-column:1/5;
  display:flex;
  justify-content:center;
  font-size:.875rem;
  opacity:.75
  }
.tags li:not(:last-child):after{
  content:"\00b7";
  margin:0 .5rem
  }
.container{
  background-image:linear-gradient(#1e102300 5vh,#1e1023 30vh);
	backdrop-filter: blur(5px);
//  -webkit-backdrop-filter: blur(5px);
  z-index: 2;
	color: #DDEEFF;
	/*border: 2px solid #22a7f0;*/
}

.take-me a{
  background-image:linear-gradient(-90deg,#e26961 51%,#1e1023 0);
  color:#e8e4d2
  }

.projects{
	background-color:#e8e4d2
}
.projects{
	color:#231f20
}


.grid-p{
  padding:1.5rem 0;
  margin-bottom:3rem;
  position:relative;
  color: #ccc;
	font-size: 2.5vh;
}
.grid-p p{
  grid-column:1/5;
	padding: 1vh;

}
.grid-p h3{
  font-size:3.5rem;
  line-height:1;
  margin-bottom:1.5rem
  }
.grid-p h3 span{
  position:relative;
  display:inline-block
}
.grid-p h3 span:after,.grid-p h3 span:before{
  content:"";
  position:absolute;
  top:0;
  height:50%;
  border-bottom:1px solid
}
.grid-p h3 span:before{
  right:calc(100% + 10px);
  width:50vw
  }
.grid-p h3 span:after{
  left:calc(100% + 10px);
  width:80vw
}
@media (min-width:64em){
  .grid-p{
    grid-template-columns:1fr 1fr}
  .grid-p p{
    max-width: 500px;
    grid-column:2/2;
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
/*@supports (grid-column:4/5){
  .take-me{
    grid-column:4/5;
    position:relative;
    top:auto;
    right:auto
    }
  }*/
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



@media (min-width:64em){
  h3{
  text-align:center;
  position:relative;
  margin:0
  }
  h3:after{
  content:"";
  position:absolute;
  right:-9px;
  top:0;
  bottom:0;
  width:0
  }
  .grid{
  display:grid;
  grid-column-gap:20px;
  grid-template-columns:5fr 5fr 2fr
  }
}



img{
	padding: 0rem;
	min-height: 30rem;
	min-width: 30rem;
	width: 50%;
	margin: auto 0;
	border-radius: 1rem;
	display: block;
	grid-row: 1 / 6;
}

li{
	background-color: #e26a61aa;
	margin-bottom: 1rem;
	z-index: 3;
	max-width: 20rem;
	font-size:.75rem;
	text-transform:uppercase;
	border-radius: 1rem;
	padding: 0 1rem;
	list-style: none;
}


</style>

<script>
export default {
  animation: '@/assets/animations.css'
}
</script>