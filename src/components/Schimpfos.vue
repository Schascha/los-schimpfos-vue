<template>
	<section>
		<Logo class="logo" />
		<h1>Los Schimpfos</h1>

		<span class="wortos">
			{{wortos}}
		</span>

		<button type="button" @click="onClick">
			Schimpfe
		</button>
	</section>
</template>

<script>
import Logo from '../assets/logo-white.svg';

export default {
	name: 'Schimpfos',
	components: {
		Logo
	},
	computed: {
		wortos() {
			return this.$store.state.wortos;
		}
	},
	created() {
		this.$store.dispatch('getAllWortos');
		document.addEventListener('keydown', this.onKeypress);
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.onKeypress);
	},
	methods: {
		onClick() {
			this.$store.dispatch('getRandomWortos');
		},
		onKeypress(e) {
			// Left arrow
			if (e.keyCode === 37) {
				this.$store.dispatch('getPrevWortos');
			}

			// Right arrow
			if (e.keyCode === 39) {
				this.$store.dispatch('getNextWortos');
			}
		}
	}
}
</script>

<style lang="scss">
	@import '../scss/components/button';
	@import '../scss/components/logo';
	@import '../scss/components/wortos';
</style>
