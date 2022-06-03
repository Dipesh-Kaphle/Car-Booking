export const isEmpty = (obj) => {
  if (typeof obj === "number") {
    return false;
  }
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const isObject = (obj) => {
  if (obj instanceof Object && !(obj instanceof Array)) {
    return true;
  }
  return false;
};

export const isArray = (obj) => {
  if (obj instanceof Array) {
    return true;
  }
  return false;
};

export const numberMask = (number) => {
  if (number) {
    let cv = -1;
    cv = number.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    return !cv[2]
      ? cv[1]
      : "(" + cv[1] + ") " + cv[2] + (cv[3] ? "-" + cv[3] : "");
  } else {
    return undefined;
  }
};

export const listSearch = (form, mainList, setList) => {
  let filteredData = [];
  const temp = [];
  for (const key in form.getFieldsValue()) {
    if (form.getFieldsValue()[key]) {
      const tempFilteredData = !isEmpty(filteredData) ? filteredData : mainList;
      filteredData = tempFilteredData.filter((item) => {
        if (
          typeof form.getFieldValue(key) === "string" &&
          isNaN(Number(form.getFieldValue(key)))
        ) {
          return item[key]
            .toLowerCase()
            .includes(form.getFieldValue(key).toLowerCase());
        }
        return item[key] === form.getFieldValue(key);
      });
      temp.push(true);
    } else {
      temp.push(false);
    }
  }

  setList(filteredData);
  if (!temp.includes(true)) {
    setList(mainList);
  }
};
