document.addEventListener('DOMContentLoaded', function () {
  // Opens/closes the sidebar menu
  document.querySelectorAll('.menu-toggle').forEach((item)=>{item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('.sidebar-wrapper').classList.toggle('active');
    const burger = document.getElementById('burger');
    if (burger.classList.contains('fa-bars')) {
      burger.classList.remove('fa-bars');
      burger.classList.add('fa-times')
    }
    else {
      burger.classList.remove('fa-times');
			burger.classList.add('fa-bars');
    }
  });
  })
});
