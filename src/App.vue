<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view class="child_view"/>
    </transition>
    <layers></layers>
  </div>
</template>

<script>
	import layers from './components/layers';
	export default {
		  name: 'App',
      data(){
		    return {
					
        };
      },
		  components: {
		    layers
		  },
		  methods: {
				
		  }
	}
</script>

<style scoped>
  .child_view{
  	width: 100%;
  	height: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: space-between;
	  box-sizing: border-box;
  }
	.slide-fade-enter-active {
		transition: all .5s ease;
	}
	.slide-fade-leave-active {
		transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		transform: translateX(-0.5rem);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
		transform: translateX(0.5rem);
		opacity: 0;
	}
</style>
