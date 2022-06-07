 /* eslint-disable */
<template>
  <div>
    <h1>{{this.$attrs.props.title}}</h1>
    <h1>{{txt}}</h1>
    <h1>Not propb</h1>
  </div>
</template>

<script>


export default {
  name:'HomePage',
  data(){
    return{
      txt:"DSdsds",
      t: this.$attrss
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted(){
    console.log("secoddnd" , this.$attrs.props.title)
  }
};
</script>

<style lang="css" scoped>
h1 {
  color: red;
}
</style>