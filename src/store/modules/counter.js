export default{
    actions:{
       incrementactions(context){
        context.commit('increment');
       },
       decrementactions(context){
        context.commit('decrement');
       }
    },
mutations:{
    increment (state) {
        state.counter = state.counter + 1

        console.log('New counter value: '+ state.counter)
      },
      decrement (state){
        state.counter = state.counter -1

        console.log('New counter value: '+ state.counter)
      }
},
state:{
    counter: 0
},
getters:{
    getCounter (state) {
        return state.counter
      }
},
}