import config from "../config";

export const GetAll = () => {
  return callApi("schedules");
};

export const GetSchedule = id => {
  return callApi("schedules/" + id);
};

export const UpdateSchedule = schedule => {
  return callApi("schedules", {
    method: "put",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(schedule)
  });
};

export const AddSchedule = schedule => {
  return callApi("schedules", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(schedule)
  });
};

const callApi = (endpoint, options = { method: "get" }) => {
  const url = `${config.apiUrl}/${endpoint}`;
  return fetch(url, {
    ...options
  })
    .then(res => {
      return res.text();
    })
    .then(text => {
      console.log("text", text);
      // if (text == "OK") return text;
      let value;
      try{
        value = JSON.parse(text);
      } catch {
        value = text;
      } finally {
        return value;
      }
    });
};
