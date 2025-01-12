import { useState, useEffect } from "react";

export const getFormattedDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

export const getLastSevenMonths = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  let result = [];

  for (let i = 0; i < 7; i++) {
    let index = (date.getMonth() - i + months.length) % months.length;
    result.unshift(months[index]);
  }

  return result;
};

export const getWeekArray = () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();
  let result = [];

  for (let i = 0; i < 7; i++) {
    let index = (date.getDay() - i + week.length) % week.length;
    result.unshift(week[index]);
  }

  return result;
};

export const useImagePreloader = (imageSources) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = imageSources.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error
        });
      });

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    loadImages();
  }, [imageSources]);

  return imagesLoaded;
};
