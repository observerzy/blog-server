export const makeRespData = (body: any) => {
    const header = {
        retCode: "",
        errorNo: "",
        errorMsg: ""
    };
    return {
        header,
        body
    };
};
