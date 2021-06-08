document.addEventListener('DOMContentLoaded', function () {
  // Opens/closes the sidebar menu
  document.querySelectorAll('.menu-toggle').forEach((item)=>{item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('.sidebar-wrapper').classList.toggle('active');
    const BURGER = document.getElementById('burger');
    if (BURGER.classList.contains('fa-bars')) {
      BURGER.classList.remove('fa-bars');
      BURGER.classList.add('fa-times')
    }
    else {
      BURGER.classList.remove('fa-times');
			BURGER.classList.add('fa-bars');
    }
  });
  })
});
