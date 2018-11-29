<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view v-if="isRouterAlive" class="child_view"/>
    </transition>
    <layers></layers>
  </div>
</template>

<script>
	import layers from './components/layers';
	export default {
		  name: 'App',
		  provide () {
		  	return {
		  		reload: this.reload
		  	}
		  },
      data(){
		    return {
          transitionName: 'slide-right',
          isRouterAlive: true
        };
      },
		  components: {
		    layers
		  },
		  methods: {
		  	reload () {
		  		this.isRouterAlive = false
		  		this.$nextTick(function(){
		  			this.isRouterAlive = true
		  		})
		  	}
		  },
    watch: {
      '$route' (to, from, savedPosition) {
        let num = Math.random() * 4;
        if (num < 1) {
          return (this.transitionName = 'slide-right');
        } else if (num < 2) {
          return (this.transitionName = 'slide-left');
        } else if (num < 3) {
          return (this.transitionName = 'slide-top');
        } else {
          return (this.transitionName = 'slide-bottom');
        }
      }
    },
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
    transition: all 0.5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0px);
    transform: translate(50px, 0px);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0px);
    transform: translate(-50px, 0px);
  }
  .slide-top-enter, .slide-top-leave-active {
    opacity: 0;
    -webkit-transform: translate(0px, 50px);
    transform: translate(0px, 50px);
  }
  .slide-bottom-leave-active, .slide-bottom-enter {
    opacity: 0;
    -webkit-transform: translate(0px, -50px);
    transform: translate(0px, -50px);
  }
</style>
