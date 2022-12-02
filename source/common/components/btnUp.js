const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
      });
    
  };
  backToTopButton.addEventListener("click", goToTop)