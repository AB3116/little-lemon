export const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitAPI = function (formData) {
  return true;
};

function removeTime(arr, item) {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
}

export function setLocalStorage(formData) {
  const existingStorage =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("formData")) : [];

  localStorage.setItem(
    "formData",
    JSON.stringify([...existingStorage, formData])
  );
}

export function getTimes(date) {
  const availableTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];
  const existingStorage =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("formData")) : [];

  for (const item of existingStorage) {
    if (item.date !== date) continue;
    if (availableTimes.includes(item.time))
      removeTime(availableTimes, item.time);
  }

  return availableTimes;
}
