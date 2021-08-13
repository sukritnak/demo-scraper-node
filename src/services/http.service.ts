import { responseCode } from "../constants/response.constants";
import { IResponse } from "../interfaces/http.interface";

export const successResponse = (res: IResponse): IResponse => {
    return {
        code: res.code || responseCode.default.success,
        data: res.data,
        message: res.message
    };
}

export const errorResponse = (res: IResponse): IResponse => {
    return {
        code: res.code || responseCode.default.error,
        data: res.data,
        message: res.message
    };
}