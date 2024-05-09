const dictionary = (lang: string) => {
  if (lang === 'pt') {
    return {
      Menu: {
        inicio: 'INÍCIO'
      }
    };
  }

  if (lang === 'en') {
    return {
      Menu: {
        inicio: 'HOME'
      }
    };
  }
};

export { dictionary };
