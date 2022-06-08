 /* eslint-disable */
<template>
  <div>
    <h1>{{this.$attrs.props.title}}</h1>
    <p>{{this.$attrs.props.count}}</p>
    <p>{{t}}</p>
    <button @click="this.$attrs.props.fu(t)">Count - {{t}}</button>
     <button @click="add">Count - {{t}}</button>
  </div>
</template>

<script>


export default {
  name:'HomePage',
  data(){
    return{
      txt:"DSdsds",
      t: this.$attrs.props.count
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
     count: {
      type: Number
    }
    ,
    fu:{
      type: Function
      }

  },methods:{
    add(){
      this.t++;
      console.log("in fun")
    }
  }
 
};
</script>

<style lang="css" scoped>
h1 {
  color: red;
}
p{
  font-size: 25px;
  color: red;
}
</style>