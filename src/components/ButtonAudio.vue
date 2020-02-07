<template>
	<button
		class="audio"
		type="button"
		:disabled="active || !wortos"
		@click="onClick"
	>
		<Icon />
		<span>Audio</span>
	</button>
</template>

<script>
import Icon from '../assets/audio.svg';

const
	Synth = window.speechSynthesis,
	Speech = window.SpeechSynthesisUtterance
;

export default {
	name: 'ButtonAudio',
	components: {
		Icon
	},
	data() {
		return {
			active: false,
			speech: null
		}
	},
	computed: {
		wortos() {
			return this.$store.state.wortos;
		}
	},
	created() {
		if (!Synth || !Speech) {
			this.active = true;
		}

		this.speech = new Speech();
		this.speech.lang = 'de-DE';
		this.speech.onend = () => {
			this.active = false;
		}

		document.addEventListener('keydown', this.onKeypress);
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.onKeypress);
	},
	methods: {
		onClick() {
			if (!this.active) {
				this.speech.text = this.wortos;
				this.active = true;
				Synth.speak(this.speech);
			}
		},
		onKeypress(e) {
			// Enter
			if (e.keyCode === 13 && e.target === document.body) {
				this.onClick();
			}
		}
	}
}
</script>

<style lang="scss">
	@import '../scss/components/audio';
</style>
