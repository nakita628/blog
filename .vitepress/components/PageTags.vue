<script lang="ts" setup>
import { ref } from 'vue'
import { getPosts } from '../hooks/postsHooks'

import Pagination from './Page/Pagination.vue'

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
})

const posts = ref(getPosts().filter((post) => post.tags.includes(props.tag)))
</script>

<template>
  <Pagination :baseUrl="`/blog/tags/${props.tag}`" :posts="posts" :page="props.page" />
</template>
