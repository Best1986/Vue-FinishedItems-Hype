<template>
    <section v-bind:class="elementID" class="card">
      <!--https://www.kirupa.com/animations/creating_pulsing_circle_animation.htm-->
        <h1>Take a breath</h1>
        <p><em>Breath in as the circle grows, and out as the cirlce shrinks</em></p>
        <div class="breathing-container">
            <div class="circle" :class="{'pulse-animation': hasStarted}" ></div>
            <!-- <div class="circle" :class="{'pulse-animation': hasStarted}" :style="hasStarted ? { 'animation-delay': '1s' } : null" ></div>
            <div class="circle" :class="{'pulse-animation': hasStarted}" :style="hasStarted ? { 'animation-delay': '2s' } : null"></div>
            <div class="circle" :class="{'pulse-animation': hasStarted}" :style="hasStarted ? { 'animation-delay': '3s' } : null"></div> -->
        </div>
        <div class="btn-container">
            <button v-show="!breathingStarted" class="btn" @click="startBreathing">Start</button>        
            <button v-show="breathingStarted" class="btn" @click="endBreathing">Stop</button>  
        </div>
    </section>
</template>
<script>
export default {
    name: 'Breathing',
    data() {
      return {
        elementID: "item-breathing",
        hasStarted: false,
      }
    },
    methods: {
      startBreathing: function() {
        this.hasStarted = true;        
      },
      endBreathing: function() {
        this.hasStarted = false;        
      }
    },    
    computed: {
      breathingStarted: function(){
        return this.hasStarted;
      }
    }
}
</script>

<style scoped>
em {
  font-size: 0.7em;
  color: #545454;
}

.card .breathing-container {
  margin-top: 25px;
  font-size: 4em;
  font-weight: 700;
  min-height: 200px;
  text-align: center;
  width: auto;
  position: relative;
}

.btn-container {
  width: 100%;
  margin-top: 25px
}

.circle {
  border-radius: 50%;
  background-color: deepskyblue;
  width: 60px;
  height: 60px;
  position: absolute;
  opacity: 0.6;
  margin: auto;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
}

.pulse-animation {
  animation: scaleIn 5s infinite alternate-reverse forwards ; /*cubic-bezier(.36, .11, .89, .32)*/
}

@keyframes scaleIn {
  from {
    transform: scale(2.5, 2.5);
    opacity: 0.2;
  }
  to {
    transform: scale(1, 1);
    opacity: .6;    
  }
}
</style>