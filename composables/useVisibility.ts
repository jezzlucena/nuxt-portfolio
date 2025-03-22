import { ref, onMounted, onUnmounted } from 'vue'

export default function useVisibility() {
  const pageHidden = ref(false);

  const onVisible = () => {
    pageHidden.value = false;
  }
  
  const onHidden = () => {
    pageHidden.value = true;
  }
  
  const handleVisibilityChange = () => {
    if(document.hidden) onHidden();
    else onVisible();
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('focus', onVisible);
    document.addEventListener('blur', onHidden);
    window.addEventListener('focus', onVisible);
    window.addEventListener('blur', onHidden);
    window.focus();
  
    handleVisibilityChange();
  });
  
  onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    document.removeEventListener('focus', onVisible);
    document.removeEventListener('blur', onHidden);
    window.removeEventListener('focus', onVisible);
    window.removeEventListener('blur', onHidden);
  });

  return { pageHidden }
}