<template>
  <div id="app">
    <main>
      <count-block v-show="isActiveBlock('item-counter')"></count-block>
      <frustration-block v-show="isActiveBlock('item-frustration')"></frustration-block>
    
      <div  class="options"> <!-- v-if="!showOptions" -->
        <button @click="showOptions = !showOptions" title="show option buttons" class="options-toggle">...</button>
      </div>

      <div v-if="showOptions" class="options option-btns">
          <button id="item-counter" @click="setActiveBlock('item-counter')" class="btn btn-round mr-s">
            <img src="/assets/images/plusone.svg" alt="Counter section" class="icon" />
          </button>
          <br>
          <button id="frustration" @click="setActiveBlock('item-frustration')" class="btn btn-round">
            <img src="/assets/images/frustrated.svg" alt="Frustration section" class="icon" />
          </button>
      </div>
    </main>
  </div> 
</template>

<script>
  import Vue from 'vue';
  import VueConfetti from 'vue-confetti';
  import CountBlock from './counter-block.vue';
  import FrustrationBlock from './frustration-block.vue';

  Vue.use(VueConfetti);

  export default {
    components: {
      'count-block': CountBlock,
      'frustration-block': FrustrationBlock
    },
    name: 'App',
    data() {
      return {
        showOptions: false,
        activeElement: "item-counter"
      }
    },
    methods: {
      setActiveBlock(elementID) {
        this.activeElement = elementID;
      },
      isActiveBlock(elementID) {        
        if(this.activeElement == elementID) return true;
        return false;
      }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  letter-spacing: 1px;
}

main {
  background: rgb(34,193,195);
  background: linear-gradient(174deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  width: 100%;
  min-height: 100vh;
  padding: 25px;
}

.card {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 16px 0 16px;
  padding: 25px;
  width: 300px;
  margin: 30px auto;
  text-align: center;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25);
  transition: easy 0.4ms;
}

.card h1 {
  font-size: 1.4em;
  font-weight: 500;
  text-transform: uppercase;
}

.btn {
  width: 200px;
  font-size: 0.9em;
  font-weight: 700;
  padding: 10px;
  background: #fdbb2d;
  border: 2px solid #fdbb2d;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 8px;
}

.btn:last-child {
  margin-right: 0;
}

.btn-round {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 0;
}

.btn-round .icon {
  margin: auto;
  opacity: 0.75;
}

button:focus {
  outline: none;
}

.btn.btn-outline {
  background: transparent;
  border: 2px solid #fdbb2d;
}

.btn.btn-no-outline {
  border-color: transparent;
  background: transparent;
  color: #4e4e4e;
  font-weight: 400;
  text-transform: lowercase;
}

.options {
  width: 100px;
  margin: 10px auto;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
}

.options.option-btns {
  top: 60px !important;
}

.options-toggle {
  background: transparent;
  border: none;
  text-decoration: none;
  color: #fdbb2d;
  font-weight: 600;
  font-size: 2.2em;
  opacity: 0.7;
  cursor: pointer;
}
</style>
