<template>
  <aside class="bd-side">
    <RouterLink class="bd-side__brand" to="/">
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 5 42 15 24 25 6 15z" stroke="currentColor" stroke-width="1.8" />
        <path d="M6 23 24 33 42 23" stroke="currentColor" stroke-width="1.8" opacity=".65" />
        <path d="M6 31 24 41 42 31" stroke="currentColor" stroke-width="1.8" opacity=".35" />
      </svg>
      <div>
        <div class="bd-side__name">BEDROCK UI</div>
        <div class="bd-side__sub">大屏组件库</div>
      </div>
    </RouterLink>

    <nav ref="navEl" class="bd-side__nav" @click="saveScroll">
      <div class="bd-side__group">开始</div>
      <RouterLink class="bd-side__link" :class="{ 'bd-side__link--active': active === 'home' }" to="/">
        <span class="bd-side__no">00</span><span>组件总览</span>
      </RouterLink>

      <template v-for="category in categories" :key="category.id">
        <div class="bd-side__group">{{ category.name }}</div>
        <RouterLink
          v-for="item in category.items"
          :key="item.id"
          class="bd-side__link"
          :class="{ 'bd-side__link--active': active === item.id }"
          :to="item.path"
        >
          <span class="bd-side__no">{{ item.no }}</span><span>{{ item.title }}</span>
        </RouterLink>
      </template>
    </nav>

    <div class="bd-side__foot">MVP · {{ total }} 个页面 · Element Plus</div>
  </aside>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { CATEGORIES, COMPONENTS } from '@/views/docs/catalog'

defineProps({
  active: { type: String, default: 'home' }
})

const categories = CATEGORIES
const total = COMPONENTS.length
const navEl = ref(null)
const SCROLL_KEY = 'bedrock-docs-nav-scroll'

function readScroll() {
  try {
    const value = Number(sessionStorage.getItem(SCROLL_KEY))
    return Number.isFinite(value) ? value : 0
  } catch (e) {
    return 0
  }
}

function saveScroll() {
  if (!navEl.value) return
  try {
    sessionStorage.setItem(SCROLL_KEY, String(navEl.value.scrollTop))
  } catch (e) {
    // 存储不可用时不影响导航
  }
}

function restoreScroll() {
  if (!navEl.value) return
  navEl.value.scrollTop = readScroll()
}

onMounted(() => {
  nextTick(() => requestAnimationFrame(restoreScroll))
  navEl.value && navEl.value.addEventListener('scroll', saveScroll, { passive: true })
})

onBeforeUnmount(() => {
  saveScroll()
  navEl.value && navEl.value.removeEventListener('scroll', saveScroll)
})
</script>
