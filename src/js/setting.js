export default {
  isMobile: false,
  isTablet: false,
  isDesktop: false,

  getDevice(width) {

    if (width < 768) {
      this.isMobile = true;
      console.log('isMobile');
    } else if (width >= 768 && width < 1200) {
      this.isTablet = true;
      console.log('isTablet');
    } else if (width >= 1200) {
      this.isDesktop = true;
      console.log('isDesktop');
    }
  }
};
