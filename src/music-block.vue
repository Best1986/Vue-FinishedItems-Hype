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
    name: 'Music',
    data() {
      return {
        elementID: "item-music"
      }
    }
}
</script>

<style lang="scss" scoped>

</style>