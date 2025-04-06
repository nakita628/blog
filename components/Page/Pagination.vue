<script lang="ts" setup>
import { ref, computed } from 'vue'
import Posts from '../Posts/Posts.vue'
import type { Post } from '../../types'

const PER_PAGE = 20 as const

const props = defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
  baseUrl: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
})

const currentPage = ref(props.page || 1)
const sortOrder = ref<'asc' | 'desc'>('asc')

// sortedPosts
const sortedPosts = computed(() => {
  return props.posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return sortOrder.value === 'asc' ? dateB - dateA : dateA - dateB
  })
})

// paginate
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * PER_PAGE
  return sortedPosts.value.slice(start, start + PER_PAGE)
})

// totalPages
const totalPages = computed(() => Math.ceil(props.posts.length / PER_PAGE))

// prevPageLink
const prevPageLink = computed(() => {
  return currentPage.value > 1 ? `${props.baseUrl}/page/${currentPage.value - 1}` : null
})
// nextPageLink
const nextPageLink = computed(() => {
  return currentPage.value < totalPages.value
    ? `${props.baseUrl}/page/${currentPage.value + 1}`
    : null
})

// toggleSortOrder
const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}
</script>

<template>
  <!-- Sort -->
  <div class="flex justify-center">
    <button @click="toggleSortOrder">
      <a class="!no-underline">
        Sort By Date {{ sortOrder === 'asc' ? 'Asc' : 'Desc' }}
      </a>

    </button>
  </div>

  <Posts v-for="post in paginatedPosts" :key="post.link" :post="post" />

  <div class="flex justify-between items-center mt-4">
    <!-- prevPageLink -->
    <a v-if="prevPageLink" :href="prevPageLink" class="!no-underline">
      ← Prev page
    </a>
    <span v-else class="invisible">
      ← Prev page
    </span>
    <!-- currentPage / totalPages -->
    <span>
      {{ currentPage }} / {{ totalPages }}
    </span>
    <!-- nextPageLink -->
    <a v-if="nextPageLink" :href="nextPageLink" class="!no-underline">
      Next page →
    </a>
    <span v-else class="invisible">
      Next page →
    </span>
  </div>
</template>
