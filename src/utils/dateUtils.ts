const getValidHTMLDateInputFormat = (date: number) => {
  const [day, month, year] = new Date(date).toLocaleDateString().split('/');
  return [year, month, day].join('-');
};

export default getValidHTMLDateInputFormat;
