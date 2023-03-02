export const sortTicketsPrice = (tickets) => {
  const compareNumbers = (a, b) => {
    return a - b;
  };

  return tickets.sort(compareNumbers);
};
