<template>
    <div>
        <SinglePost
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post.id"
        ></SinglePost>
    </div>
</template>

<script>
    import SinglePost from "@/components/post/SinglePost";
    
    export default{
        components: {
            SinglePost
        },
        mounted() {
           this.$store.dispatch('post/getPosts');
        }
    }
</script>
