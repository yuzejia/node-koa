import getUserInfo from "../../db/getUserInfo";
import {ResultJson} from "../core/utils/resJson"
 export default async (ctx: any) => {
    const res = await getUserInfo();
    ctx.body = ResultJson.success({data: res})
  };

