import addUserInfo from "../../db/addUserInfo";

 export default async (ctx: any) => {
    console.log('add--', ctx.request.body);
    const body = ctx.request.body
    const res = await addUserInfo(body);
    ctx.body = res;
  };

