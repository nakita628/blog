<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref } from 'vue'
import { getPosts } from '../hooks/postsHooks'
import type { Post } from '../types'
import Pagination from './Page/Pagination.vue'

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
})

const _posts: Ref<Post[]> = ref(getPosts())
</script>

<template>
    <Pagination baseUrl="/blog/posts" :posts="_posts" :page="props.page" />
</template>