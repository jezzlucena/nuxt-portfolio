import { ref, onMounted, onUnmounted } from 'vue'

export default function useScroll() {
  const isScrolled = ref(false);
  const scrollY = ref(0);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
    scrollY.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  });

  return { isScrolled, scrollY }
}