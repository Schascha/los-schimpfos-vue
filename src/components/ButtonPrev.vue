<template>
	<button
		class="prev"
		type="button"
		:disabled="!active"
		@click="onClick"
	>
		<Icon />
		<span>Zurück</span>
	</button>
</template>

<script>
import Icon from '../assets/arrow-left.svg';

export default {
	name: 'ButtonPrev',
	components: {
		Icon
	},
	computed: {
		active() {
			return this.$store.state.rememberIndex;
		}
	},
	methods: {
		onClick() {
			this.$store.dispatch('getPrevWortos');
		}
	}
}
</script>

<style lang="scss">
	@import '../scss/components/prev';
</style>
