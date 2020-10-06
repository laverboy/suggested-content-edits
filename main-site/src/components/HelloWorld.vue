<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Enter a web address to see a list of edits
    </p>
    <input v-model="siteToLookup" placeholder="www.mysite.com" type="text" v-on:keyup.enter="submit">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      siteToLookup: "",
    }
  },
  methods: {
    submit: function (e) {
      if (this.siteToLookup === "") {
        return
      }
      console.log(e, this.siteToLookup)
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
