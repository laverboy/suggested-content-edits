<template>
  <div class="container">
    <!-- hero headline -->
    <div class="hero-headline flex flex-col items-center justify-center pt-24 text-center">
      <h1 class=" font-bold text-3xl text-gray-900">{{ msg }}</h1>
      <p class=" font-base text-base text-gray-600">enter a web address to see a list of edits</p>
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
          <input type="search" name="" id="" v-model="siteToLookup" v-on:keyup.enter="submit"
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
      items: [
        {
          "siteID": "www.iainjmitchell.com",
          "editID": "a71fe549-d2a1-4217-b1ea-6828486f7f09",
          "pageID": "/blog/async-meetings",
          "editedText": "Finally, ensure that the meeting channel is closed once a meeting has ended. This shuts the door on the meeting and removes it from the participants cognitive load. However, it is useful to archive the meeting channel as it may be needed in the future to understand why a certain decision was made.",
          "originalText": "Finally, ensure that the meeting channel is closed once a meeting has ended. This shuts the door on the meeting and removes it from the participants cognitive load. However, it is useful to archive the meeting channel as it may needed in the future to understand why a certain decision was made.",
          "timestamp": "1601978065781"
        },
        {
          "siteID": "www.iainjmitchell.com",
          "editID": "9817a05d-faa8-4b7c-b6da-2eeb319b0104",
          "pageID": "/blog/async-meetings",
          "editedText": "Here are a few hints to using them effectively.",
          "originalText": "Here are a few hints to using the effectively.",
          "timestamp": "1601993392677"
        },
        {
          "siteID": "www.iainjmitchell.com",
          "editID": "2e429a0d-e3c2-4347-9caa-d58186fa15bc",
          "pageID": "/blog/job-titles-causal-loop",
          "editedText": "In my previous post I covered the phenomenon of Job Title Diffusion. That is the impact that a variety of job titles can have on an organisation.",
          "originalText": "In my previous post I covered the phenomenon of Job Title Diffusion. That is the impact of a variety of job titles can have on a organisation.",
          "timestamp": "1601993436280"
        }
      ]
    }
  },
  methods: {
    submit: function (e) {
      if (this.siteToLookup === "") {
        return
      }
      console.log(e, this.siteToLookup)
      axios
          .get('https://kg4bf2ru4b.execute-api.eu-west-2.amazonaws.com/test/edits/www.iainjmitchell.com')
          .then(response => (this.info = response))
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
