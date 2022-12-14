import http from "@common/finsuit-http/index.js";
import config from "../config/config.index.js";

/**
 * @name B000A122 埋点唯一标识ID（自定义）
 * @param {Object} context 当前上下文
 * @param {Object} args 动态参数
 */

// 活动规则
export const ACB0I001 = (params) => http.postPoint(config.baseUrlHost, config.baseUrlPath, { ...params, FUNCTION_ID: "ACB0I001", REMARK_DATA: "活动规则" });
