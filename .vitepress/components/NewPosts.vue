<script lang="ts" setup>
import { getNewPosts } from "../hooks";
import Posts from "./Posts/Posts.vue";

const new_posts = getNewPosts(3);
</script>

<template>
  <Posts v-for="post in new_posts" :key="post.link" :post="post" />
</template>
