import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Mannu Coin",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            marketplace: "andr1ncp8uacljv394653etk70hr5khfam6pwkgrvs67tx98gsg5gaezs99nhjn",
            cw721: "andr1ep5esnt99366tnxp0kkel70ynwzl5yde5n20tqth8ppw9vn5g3yqwufr5r",
            name: "Grocery Store Items",
            id: "embeddables-marketplace-1",
            type: ICollectionType.MARKETPLACE
        },
        {
            exchange:
                "andr12y6r7vr0vgaz9urz87c0pm5586686snv49u8dve22f0p5ehfzw7qegg2ue",
            cw20: "andr1c7xarmkrvekc76jlrn6lkfxem2aayn5w4n5jv7x2cfxrart3u0cst5kgse",
            name: "Mannu Coin",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
