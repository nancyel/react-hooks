export const dayString = (today: Date) => {
  return today.toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const dayName = (today: Date) => {
  return today.toLocaleDateString("en", { weekday: "long" });
};
