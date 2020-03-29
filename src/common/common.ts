export const makeRespData = (headerParams?: any, body?: any) => {
    const header = headerParams
        ? {
              retCode: headerParams.retCode ? headerParams.retCode : "0",
              errorNo: headerParams.errorNo ? headerParams.errorNo : "",
              errorMsg: headerParams.errorMsg ? headerParams.errorMsg : ""
          }
        : {
              retCode: "0",
              errorNo: "",
              errorMsg: ""
          };
    const respData = body
        ? {
              header,
              body
          }
        : { header };
    return respData;
};
