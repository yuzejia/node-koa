import getUserInfo from "../../db/getUserInfo";

 export default async (ctx: any) => {
    const res = await getUserInfo();
    ctx.body = res;
  };