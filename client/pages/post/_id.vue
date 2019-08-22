<template>
    <div>
        <div class="container">
            {{ loading }}
             <div v-if="post" class="jumbotron">
                <h1>{{ post.title }}</h1> 
                <p>{{ post.body }}</p> 
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
      this.getSinglePost();  
    },
    methods: {
        getSinglePost() {
            let payload = { id: this.$route.params.id }
            this.$store.dispatch('post/getPost', payload)
        }
    }
}
</script>