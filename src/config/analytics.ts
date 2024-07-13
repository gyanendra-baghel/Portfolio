import ReactGA from "react-ga4";

ReactGA.initialize("G-V48LM7EN9G");

export const pageView = (title: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
    title,
  });
};
