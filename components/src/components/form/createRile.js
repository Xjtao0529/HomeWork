/**
 * @author Xu
 * @date 2022/7/21
 */
import {
  validatePhone,
  validatePass,
  validateEmail,
} from "../../utils/validate";

const createRules = (data) => {
  data.forEach((item) => {
    let ruleArray = [];
    if (item.required) {
      const rules = {
        required: true,
        message: item.message || createMessage(item),
      };
      ruleArray.push(rules);
    }
    console.log(item, 1);
    if (item.valueType && item.valueType === "phone") {
      const rule = { validator: validatePhone, trigger: "change" };
      ruleArray.push(rule);
    }
    item.rules = ruleArray;
    console.log(item);
  });
  return data;
};

const createMessage = (data) => {
  let msg = "";
  switch (data.type) {
    case "input":
      msg = "请输入";
      break;
    case "select":
      msg = "请选择";
      break;
  }
  return `${msg}${data.label}`;
};

export default createRules;
