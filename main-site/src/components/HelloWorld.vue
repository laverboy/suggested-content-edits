<template>
  <div class="container">
    <!-- hero headline -->
    <div class="hero-headline flex flex-col items-center justify-center pt-24 text-center">
      <h1 class=" font-bold text-3xl text-white">{{ msg }}</h1>
      <p class=" font-base text-base text-white">enter a web address to see a list of edits</p>
    </div>

    <!-- image search box -->
    <div class="box pt-6">
      <div class="box-wrapper">

        <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
          <button @click="getImages()" class="outline-none focus:outline-none">
            <svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round"
                 stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input type="search" ref="search" id="" v-model="siteToLookup" v-on:keyup.enter="submit"
                 placeholder="www.mysite.com"
                 class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent">
        </div>

      </div>
    </div>

    <!-- search results -->
    <item v-for="item in items" v-bind:item="item" v-bind:key="item.editID.S"></item>

  </div>
</template>

<script>
import axios from 'axios';
import item from './SiteItem.vue'

export default {
  name: 'HelloWorld',
  components: {
    item
  },
  data: function () {
    return {
      siteToLookup: "",
      items: []
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.focusInput();
    })
  },
  methods: {
    focusInput: function() {
      console.log(this.$refs)
      this.$refs.search.focus();
    },
    submit: function () {
      this.items = []
      if (this.siteToLookup === "") {
        return
      }
      axios
          .get('https://kg4bf2ru4b.execute-api.eu-west-2.amazonaws.com/test/edits/' + this.siteToLookup)
          .then(response => {
            console.log(response);
            this.items = response.data.items
          })
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
