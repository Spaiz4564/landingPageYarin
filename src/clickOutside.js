// clickOutside.js
const clickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      // Check if the clicked element is outside the bound element
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(); // Call the provided method
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

export default clickOutside;
