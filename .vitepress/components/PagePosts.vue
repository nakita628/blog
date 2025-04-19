<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref } from 'vue'

import { getPosts } from './hooks/postsHooks'
import Pagination from './Page/Pagination.vue'
import type { Post } from '../../types';


const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
})

const posts: Ref<Post[]> = ref(getPosts())
</script>

<template>
    <Pagination baseUrl="/blog/posts" :posts="posts" :page="props.page" />
</template>