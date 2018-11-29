<template>
	<div class="layers" v-show="islayersShow">
		<div class="layers-child flex-col" :class="{'fadeInUp': showIn, 'fadeOut': !showIn}">
			<h4>{{msg}}</h4>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'layers',
	  data () {
	    return {
	    };
	  },
	  computed: {
	    showIn () {
	      return this.$store.state.layers.showIn;
	    },
	    islayersShow () {
	      return this.$store.state.layers.show;
	    },
	    msg () {
	      return this.$store.state.layers.msg;
	    }
	  }
	};
</script>

<style scoped>
	.layers{
		width: auto;
		height: auto;
		padding: 0.2rem 0.2rem;
		position: fixed;
		left: 50%;
		top: 46%;
		transform: translate(-50%, -50%);
    	animation-duration: .5s;
    	z-index: 999;
	}
	.layers-child{
		background: rgba(0, 0, 0, 0.8);
      	box-shadow: 0.01rem 0.01rem 0.05rem 0.01rem #8a9dac;
      	border-radius: 0.2rem;
      	animation-duration: 0.8s;
      	color: #fff;
	}
  h4{
    margin: 0.1rem 0.2rem;
  }
</style>
