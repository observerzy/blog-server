export const makeRespData = (headerParams?: any, body?: any) => {
    const header = headerParams
        ? {
              retCode: headerParams.retCode ? headerParams.retCode : "0",
              errorNum: headerParams.errorNum ? headerParams.errorNum : "",
              errorMsg: headerParams.errorMsg ? headerParams.errorMsg : "",
          }
        : {
              retCode: "0",
              errorNum: "",
              errorMsg: "",
          };
    const respData = body
        ? {
              header,
              body,
          }
        : { header };
    return respData;
};
