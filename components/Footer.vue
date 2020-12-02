<template>
  <footer>
    <a target="blank" href="https://www.cherneda.pro/"><div id="siteInfo">Coding & Design by <b>Alexander Cherneda</b><br>
    <h4>2020 <span> ver. 2.3</span></h4></div></a>
  </footer>
</template>

<style lang="scss">

footer {
	flex: 0 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--dark-purple);
	position: fixed;
	-webkit-writing-mode: vertical-rl;
	-ms-writing-mode: tb-rl;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	bottom: 2rem;
	right: 1rem;
	z-index: 0;
	border-radius: 0.5em;
	padding-left: 2rem;
	box-shadow: 0 0 .1rem #e26961;
}

</style>