<template>
	<div id="app">
		<ButtonPrev />
		<ButtonAudio />
		<LosSchimpfos />
	</div>
</template>

<script>
import ButtonAudio from './components/ButtonAudio'
import ButtonPrev from './components/ButtonPrev'
import LosSchimpfos from './components/LosSchimpfos'

export default {
	name: 'app',
	components: {
		ButtonAudio,
		ButtonPrev,
		LosSchimpfos
	}
}
</script>

<style lang="scss">
	@import 'scss/layout.scss';
</style>
