<template>
	<div id="app">
		<ButtonPrev />
		<ButtonAudio />
		<Schimpfos />
	</div>
</template>

<script>
import ButtonAudio from './components/ButtonAudio.vue'
import ButtonPrev from './components/ButtonPrev.vue'
import Schimpfos from './components/Schimpfos.vue'

export default {
	name: 'app',
	components: {
		ButtonAudio,
		ButtonPrev,
		Schimpfos
	}
}
</script>

<style lang="scss">
	@import 'scss/layout.scss';
</style>
