<template>
  <div id="app">
    <main>
      <div class="item-counter">
        <h1>Total finished</h1>
        <div class="count-container">
          {{counter}}
        </div>
        <div class="count-btn">
          <button class="btn-default" @click="addItem">I finished something!</button>
          <button v-show="countStarted" class="btn-default btn-outline" @click="removeItem">Meh, remove one</button>          
          <button v-show="countStarted" class="btn-default btn-no-outline" @click="resetCount">Reset counter</button>  
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueConfetti from 'vue-confetti';


  Vue.use(VueConfetti);

  export default {
    name: 'App',
    data() {
      return {
        counter: 0,
        confettiType: [
          {
            particles: [
              {
                type: 'circle'
              }
            ],
            defaultColors: [
              'DodgerBlue', 
              'OliveDrab', 
              'Gold', 
              'pink', 
              'SlateBlue', 
              'lightblue', 
              'Violet', 
              'PaleGreen', 
              'SteelBlue', 
              'SandyBrown', 
              'Chocolate', 
              'Crimson'
            ]
          },
          {
            particles: [
              {
                type: 'circle'
              },
              {
                type: 'rect'
              }
            ],
            defaultColors: [
              'DodgerBlue', 
              'OliveDrab', 
              'Gold', 
              'pink', 
              'SlateBlue', 
              'lightblue', 
              'Violet', 
              'PaleGreen', 
              'SteelBlue', 
              'SandyBrown', 
              'Chocolate', 
              'Crimson'
            ]
          },
          {
            particles: [
              {
                type: 'rect'
              }
            ],
            defaultColors: [
              'DodgerBlue', 
              'OliveDrab', 
              'Gold', 
              'pink', 
              'SlateBlue', 
              'lightblue', 
              'Violet', 
              'PaleGreen', 
              'SteelBlue', 
              'SandyBrown', 
              'Chocolate', 
              'Crimson'
            ]
          },
          {
            particles: [
              {
                type: 'heart',
                size: 20
              },
              {
                type: 'circle',
                size: 10
              },
            ],
            defaultColors: [
              'DodgerBlue', 
              'OliveDrab', 
              'Gold', 
              'pink', 
              'SlateBlue', 
              'lightblue', 
              'Violet', 
              'PaleGreen', 
              'SteelBlue', 
              'SandyBrown', 
              'Chocolate', 
              'Crimson'
            ],
          }
        ]
      }
    },
    methods: {
      addItem: function() {
        this.counter += 1;
        var randomIndex = Math.floor(Math.random() * this.confettiType.length);
        this.startConfetti(this.confettiType[randomIndex]);
        
        setTimeout(() => this.stopConfetti(), 1500);
        
      },
      removeItem: function() {
        this.counter -= 1;
      },
      resetCount: function() {
        this.counter = 0;
      },
      startConfetti(confettiType) {
     
        this.$confetti.start(confettiType);
      },

      stopConfetti() {
        this.$confetti.stop();
      }
    },
    computed: {
      countStarted: function(){
        return this.counter > 0;
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

.item-counter {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 16px 0 16px;
  padding: 25px;
  width: 300px;
  margin: 30px auto;
  text-align: center;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25);
}

.item-counter h1 {
  font-size: 1.4em;
  font-weight: 500;
  text-transform: uppercase;
}

.item-counter .count-container {
  margin-top: 25px;
  font-size: 4em;
  font-weight: 700;
}

.count-btn {
  width: 100%;
  margin-top: 25px
}

.btn-default {
  width: 200px;
  font-size: 0.9em;
  font-weight: 700;
  padding: 10px;
  background: #fdbb2d;
  border: 2px solid #fdbb2d;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

button:focus {
  outline: none;
}

.btn-default.btn-outline {
  background: transparent;
  border: 2px solid #fdbb2d;
}

.btn-default.btn-no-outline {
  border-color: transparent;
  background: transparent;
  color: #4e4e4e;
}

</style>
