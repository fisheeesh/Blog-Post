<template>
    <div class="container">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length" class="layout">
            <div>
                <PostsList :posts="filteredPosts"></PostsList>
            </div>
            <div>
                <TagCloud></TagCloud>
            </div>
        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostsList from '../components/PostsList'
import { computed } from 'vue';
import Spinner from '../components/Spinner'
import getPosts from '@/composables/getPosts';
export default {
    components: {
        TagCloud,
        PostsList, Spinner
    },
    props: ['tag'],
    setup(props) {
        let { posts, error, load } = getPosts()

        load()

        let filteredPosts = computed(() => {
            return posts.value.filter(post => {
                return post.tags.includes(props.tag)
            })
        })

        return { posts, error, filteredPosts }
    }
}
</script>

<style>
.container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>