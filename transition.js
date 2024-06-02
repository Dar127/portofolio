window.onload = () => {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a');

  setTimeout(() => {
      transition_el.classList.remove('is-active');
  }, 500);

  anchors.forEach(anchor => {
      anchor.addEventListener('click', e => {
          e.preventDefault();
          const target = anchor.href;
          console.log('Target URL:', target);

          transition_el.classList.add('is-active');

          setTimeout(() => {
              window.location.href = target;
          }, 500);
      });
  });
};

  