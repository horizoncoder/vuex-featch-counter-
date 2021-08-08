export default{
    actions:{
       async  fetchPosts(gett,url="dd"){
            const res = await fetch(url);
            // eslint-disable-next-line no-unused-vars
            const posts = await res.json('');
            gett.commit('mutatePosts',posts)
        },
       
    },
mutations:{
    mutatePosts(state,posts){
        state.posts = posts
    },
},
state:{
    posts:[]
},
getters:{
    getPosts(state){
        return state.posts
    }
},
}