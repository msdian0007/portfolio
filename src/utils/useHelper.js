export const useHelper = () => {
  return {
    getYearOfExperience: (d = "2022-02-01") => {
      let dob = new Date(d);
      let todayDate = new Date();
      let yearDiff = todayDate.getFullYear() - dob.getFullYear();
      console.log(todayDate.getMonth());
      let monthDiff = todayDate.getMonth() + 1 - (dob.getMonth() + 1);
      if (monthDiff < 0) {
        yearDiff--;
        monthDiff = 12 + monthDiff;
      }
      return yearDiff + "." + monthDiff + " years";
    },
  };
};
