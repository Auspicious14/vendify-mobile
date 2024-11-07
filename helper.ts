export const helper = {
  toCurrency: (val: number, currency = "N") => {
    if (!val) return `${currency} 0.0`;
    return currency + val?.toFixed(2)?.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  },
};
// setCookie("user_email","bobthegreat@gmail.com",30); //set "user_email" cookie, expires in 30 days
// const userID=getCookie("uuid");//"jbjkbkbjh

export const formatDate = (dateString: string) => {
  if (!dateString) return "Unknown Date";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options as any);
};
