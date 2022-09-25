const createDate = (year: number, month: number): Date => {
  return new Date(year, month - 1);
};

export default createDate;
