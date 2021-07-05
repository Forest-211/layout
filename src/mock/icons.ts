export interface Icon {
    navId: string;
    navUrl: string;
    navIcon: {
        active: string;
        def: string;
    };
}

const icons: Icon[] = [
    {
        navId: 'index',
        navUrl: 'https://m.jd.com',
        navIcon: {
            active: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png',
            def: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png',
        },
    },
    {
        navId: 'category',
        navUrl: 'https://so.m.jd.com/category/all.html',
        navIcon: {
            active: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png',
            def: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png',
        },
    },
    {
        navId: 'find',
        navUrl: 'https://wqs.jd.com/portal/wx/tuan/pingouv3.shtml?sceneval=2&fromM=1',
        navIcon: {
            active: 'https://img12.360buyimg.com/img/s130x100_jfs/t1/172403/26/9304/4002/609c87c2Ea19f3782/703bf62f6c17a032.png',
            def: 'https://img12.360buyimg.com/img/s130x100_jfs/t1/172403/26/9304/4002/609c87c2Ea19f3782/703bf62f6c17a032.png',
        },
    },
    {
        navId: 'cart',
        navUrl: 'https://p.m.jd.com/cart/cart.action?fromnav=1',
        navIcon: {
            active: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png',
            def: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png',
        },
    },
    {
        navId: 'home',
        navUrl: 'https://home.m.jd.com/myJd/newhome.action',
        navIcon: {
            active: 'https://m.360buyimg.com/mobilecms/jfs/t17950/16/2476630334/3955/36c9ce38/5af43af1N96d4474e.png',
            def: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png',
        },
    },
];

export default icons;
