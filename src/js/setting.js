export default {
  isMobile: false,
  isTablet: false,
  isDesktop: false,

  getDevice() {
    const width = document.documentElement.clientWidth;
    if (width < 768) {
      this.isMobile = true;
    }
    if (width >= 768 || width < 1200) {
      this.isTablet = true;
    }
    if (width >= 1200) {
      this.isDesktop = true;
    }
  },
};
