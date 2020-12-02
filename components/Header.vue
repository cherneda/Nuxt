<template>
  <header>
    <div class="siteName"><span>Inna</span> <span>Schapina</span></div>
    <h1>Нескучные игрушки ручной работы от Инны Щапиной</h1>
	<img src="https://www.victoria-salon.ru/wp-content/uploads/2017/05/IMG_0268.png" alt="Photo of Inna Schapina / Фото Инна Щапина" title="Inna Schapina">
	</header>
</template>

<script>
</script>

<style lang="scss" scoped>

header{
	transition: 0.5s;
	/*background-image: linear-gradient(#88888888 , transparent 50%);*/
	z-index: 2;
	display: grid;
	grid-template-rows: repeat(2, auto);
	grid-template-columns : repeat(2, auto);
	/*filter: drop-shadow(0rem 0rem 0.3rem var(--egg-shell));*/
	position:absolute;
	left:0;
	top:calc(15vw + 4rem);
	padding-left:5vw
}

div{
	line-height:1;
	margin:auto;
	position:relative;
	z-index:0;
}

h1{
	grid-column: 1 / 1;
	display: block;
	padding: 0 1rem;
}
 /*
 @supports (-webkit-background-clip:text){
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
		pointer-events:none;
		transform:translateZ(-.5px) scale(1.5);
		transform-origin:0 0
	}
	header div{
		background-size:800px auto,600px auto,700px auto,700px auto
	}
}

.siteName > span{
	font-family: "Anton", sans-serif;
	margin: 0;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-mask-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#000),color-stop(.5,#000),color-stop(1,transparent));
	transition: background-position 1s, background-color 1s;
	font-size: calc(8vw + 4rem);
	line-height: 1;
	background-repeat: repeat-x;
	background-position: 0px 25%, 25rem 35%, -50px 2vw;
	background-color: var(--dark-purple);
	color: #231f20;
	font-weight: bolder;
	text-align: left;
	/*filter: drop-shadow(0.2rem 0.3rem 0.5rem #bbff00);*/
}
.siteName > span:first-child {
	background-image: url('../assets/img/IMG_4713.png');
	background-size: 60vw auto;
	background-position: -15rem 25%;
	animation: animatedBackgroun 10s  forwards infinite alternate ease-in-out;
}


.siteName > span:last-child {
	background-image: url('../assets/img/IMG_4246.png');
	background-position: 0rem 40%, -150px 1vw;
	background-size: 50vw auto;
	animation: animatedBackgroun 10s forwards infinite alternate ease-in-out;
}

@keyframes animatedBackground {
	from {
		background-position: 20% 20%; }
	to {
		background-position: 75% 55%; }
}

img{
	position: relative;
	width: 15vw;
	border-radius: 15rem;
	object-fit: cover;
	object-position: top;
	max-height: 35vh;
	max-width: 40vh;
	z-index: 1;
	border: solid;
	border-width: 1rem;
	border-color: var(--dark-purple);
	grid-column: 2 / 2;
	grid-row: 1 / 3;
	margin-left: 2rem;
}

</style>