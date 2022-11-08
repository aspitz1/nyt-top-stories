const dateFormatter = (dateString) => {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(dateString));
};

export { dateFormatter };
