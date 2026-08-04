---
layout: doc
title: Redirecting...
head:
  - - meta
    - http-equiv: refresh
      content: 0; url=./introduction/overview
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.location.replace('./introduction/overview')
})
</script>

Mengalihkan ke halaman [Ringkasan Proyek](./introduction/overview)...
