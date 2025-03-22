export default defineNuxtPlugin(nuxtApp => {
  if (!import.meta.client) return;

  const handleTouch = (event: TouchEvent) => {
    for (const touch of event.touches) {
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      target?.classList.add('hovered');
    }
  }
  
  const handleTouchEnd = () => {
    document.querySelectorAll('.hovered').forEach(elm => elm.classList.remove('hovered'));
  }
  
  nuxtApp.hook('page:loading:end', () => {
    document.addEventListener('touchstart', handleTouch);
    document.addEventListener('touchmove', handleTouch);
    document.addEventListener('touchend', handleTouchEnd);

    window.addEventListener('beforeunload', () => {
      document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('touchmove', handleTouch);
      document.removeEventListener('touchend', handleTouchEnd);
    });
  });
});