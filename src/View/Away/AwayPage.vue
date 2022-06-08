 /* eslint-disable */
<template>
  <div>
    <h1>{{this.$attrs.props.title}}</h1>
  </div>
</template>

<script>


export default {
  name:'AwayPage',
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
  }
};
</script>

<style lang="css" scoped>
h1 {
  color: blue;
}
</style>