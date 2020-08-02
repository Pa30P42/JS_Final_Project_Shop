export default {
  isMobile: false,
  isTablet: false,
  isDesktop: false,

  getDevice() {
    const width = document.documentElement.clientWidth;
    if (width < 768) {
      this.isMobile = true;
      this.isTablet = false;
      this.isDesktop = false;
    }
    if (width >= 768 && width < 1200) {
      this.isTablet = true;
      this.isMobile = false;
      this.isDesktop = false;
    }
    if (width >= 1200) {
      this.isDesktop = true;
      this.isMobile = false;
      this.isTablet = false;
    }
  },
};
