export const scrollToSection = (elementId:string) => {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
