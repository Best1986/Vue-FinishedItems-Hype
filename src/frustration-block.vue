<template>
    <section v-bind:class="elementID" class="card">
        <h1>Let out some emotions!</h1>
        <!-- bag img -->
        <div id="bag" v-bind:class="{burst: ended}"></div>

        <!-- bag health -->
        <div id="bag-health">
            <div v-bind:style="{width: health + '%'}"></div>
        </div>			
        
        <!-- game controls -->
        <div id="controls">
            <button id="punch" class="btn" v-show="!ended" v-on:click="punch">Punch</button>
            <div class="ko-container" v-show="ended">
                <p>KNOCK OUT!</p>
            </div>
            <button id="reset" class="btn btn-outline" v-on:click="restart">Reset</button>
        </div>
    </section>
</template>
<script>
export default {
    name: 'frustration-block',
    data() {
        return {
            elementID: "item-frustration",
            health: 100,
            ended: false
        }
	},
	methods: {
		punch: function(){
			this.health -= 10;

			if(this.health <= 0){
				this.ended = true;
			}		
		},
		restart: function(){
			this.health = 100;
			this.ended = false;
		}
	},
}
</script>
<style scoped>
    #bag {
        height: 300px;
        margin: 0 auto;
        background: url('/assets/images/bag.png') center no-repeat;
        background-size: 45%;
    }

    #bag.burst {
        background: url('/assets/images/bag-burst.png') center no-repeat;
        background-size: 45%;
    }

    #bag-health {
        width: 200px;
        border: 2px solid #3e3e3e;
        margin: 0 auto 20px auto;
        border-radius: 5px;
    }

    #bag-health div {
        height: 20px;
        border-radius: 5px;
        background: crimson;
    }

    .ko-container {
        padding: 15px 0;
    }

</style>