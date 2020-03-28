export const makeRespData = (body: any, headerParams?: any) => {
    const header = {
        retCode: headerParams.retCode ? headerParams.retCode : "0",
        errorNo: "",
        errorMsg: ""
    };
    return {
        header,
        body
    };
};
