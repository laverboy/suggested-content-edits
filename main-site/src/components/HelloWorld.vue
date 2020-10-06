<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Enter a web address to see a list of edits
    </p>
    <label>
      <input v-model="siteToLookup" placeholder="www.mysite.com" type="text" v-on:keyup.enter="submit">
    </label>
    <div>
      <item v-for="item in items" v-bind:item="item" v-bind:key="item.editID.S"></item>
    </div>
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

input {
  width: 100%;
  padding: 10px;
  font-size: 1.8em;
}

a {
  color: #42b983;
}
</style>
