// typeorm配置
module.exports = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "poi$5574",
    database: "blog",
    logging: false, // 是否有日志
    synchronize: true, // 是否自动建表
    entities: ["src/entity/*{.ts,.js}"], // entity/model存放位置
    typezone: "Z", // 以本地地区时间为主
    dataStrings: "TIMESTAMP"
};
