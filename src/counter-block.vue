<template>
    <section v-bind:class="elementID" class="card">
        <h1>Total finished</h1>
        <div class="count-container">
            {{counter}}
        </div>
        <div class="count-btn">
            <button class="btn" @click="addItem">I finished something!</button>
            <button v-show="countStarted" class="btn btn-outline" @click="removeItem">Meh, remove one</button>          
            <button v-show="countStarted" class="btn btn-no-outline" @click="resetCount">Reset counter</button>  
        </div>
    </section>
</template>
<script>
export default {
    name: 'Counter',
    data() {
      return {
        elementID: "item-counter",
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
<style scoped>
.card .count-container {
  margin-top: 25px;
  font-size: 4em;
  font-weight: 700;
}

.count-btn {
  width: 100%;
  margin-top: 25px
}
</style>