// index banner
function getBannerData(){
    var arr = [
        '../../images/banner_01.jpg', 
        '../../images/banner_02.jpg', 
        '../../images/banner_03.jpg', 
        '../../images/banner_04.jpg'
    ]
    return arr
}

// index nav 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../images/nav_icon_01.png",
                icon2:"../../images/nav_icon_06.png",
                title:"推荐"
            },
            {
                id:2,
                icon:"../../images/nav_icon_02.png",
                icon2:"../../images/nav_icon_07.png",
                title:"凉菜"
            },
            {
                id:3,
                icon:"../../images/nav_icon_03.png",
                icon2:"../../images/nav_icon_08.png",
                title:"热菜"
            },
            {
                id:4,
                icon:"../../images/nav_icon_04.png",
                icon2:"../../images/nav_icon_09.png",
                title:"汤羹"
            },
            {
                id:5,
                icon:"../../images/nav_icon_05.png",
                icon2:"../../images/nav_icon_10.png",
                title:"点心"
            }
            
        ]
    return arr
}

// index list 
function getIndexNavSectionData(){
    var arr = [
                [
                    { 
                        subject:"菜卤拼盘",
                        coverpath:"/images/list-1.JPG",
                        price:'¥38',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        subject:"蓝莓山药",
                        coverpath:"/images/list-2.JPG",
                        price:'¥18',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        subject:"干煸刀豆",
                        coverpath:"/images/list-3.JPG",
                        price:'¥18',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        subject:"山药鱿鱼卷",
                        coverpath:"/images/list-4.JPG",
                        price:'¥48',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        subject:"海鲜羹",
                        coverpath:"/images/list-5.JPG",
                        price:'¥68',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        subject:"钱塘糟酿",
                        coverpath:"/images/list-6.JPG",
                        price:'¥48',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        subject:"糯米仔排",
                        coverpath:"/images/list-7.JPG",
                        price:'¥68',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        subject:"脆皮年糕",
                        coverpath:"/images/list-8.JPG",
                        price:'¥28',
                        message:'每一道菜品都经过精心研制！'
                    }
                ],
                [
                    { 
                        artype:'leng',
                        subject:"菜卤拼盘",
                        coverpath:"/images/list-1.JPG",
                        price:'¥38',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        artype:'leng',
                        subject:"蓝莓山药",
                        coverpath:"/images/list-2.JPG",
                        price:'¥18',
                        message:'每一道菜品都经过精心研制！'
                    }
                ],
                [
                    { 
                        artype:'re',
                        subject:"干煸刀豆",
                        coverpath:"/images/list-3.JPG",
                        price:'¥18',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        artype:'re',
                        subject:"山药鱿鱼卷",
                        coverpath:"/images/list-4.JPG",
                        price:'¥48',
                        message:'每一道菜品都经过精心研制！'
                    }
                ],
                [
                    { 
                        artype:'tang',
                        subject:"海鲜羹",
                        coverpath:"/images/list-5.JPG",
                        price:'¥68',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        artype:'tang',
                        subject:"钱塘糟酿",
                        coverpath:"/images/list-6.JPG",
                        price:'¥48',
                        message:'每一道菜品都经过精心研制！'
                    }
                ],
                [
                    { 
                        artype:'dian',
                        subject:"糯米仔排",
                        coverpath:"/images/list-7.JPG",
                        price:'¥68',
                        message:'每一道菜品都经过精心研制！'
                    },
                    { 
                        artype:'dian',
                        subject:"脆皮年糕",
                        coverpath:"/images/list-8.JPG",
                        price:'¥28',
                        message:'每一道菜品都经过精心研制！'
                    }
                ] 
            ]
    return arr
}


// 查询地址
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}

//用户数据
function userData(){
    var arr = {
                uid:'1',
                nickname:'Healer',
                name:'Nancie',
                phone:'12345678910',
                avatar:'../../images/avatar.jpg',
                addrs:[
                   {
                        addrid:'1',
                        name:'Healer',
                        phone:'17812349217',
                        province:'浙江省',
                        city:'杭州市',
                        block:'拱墅区',
                        addr:'上塘街道浙大城市学院'
                    },
                    {
                        addrid:'2',
                        name:'Lethe',
                        phone:'18312349071',
                        province:'浙江省',
                        city:'杭州市',
                        block:'拱墅区',
                        addr:'上塘街道浙大城市学院'
                    } 
                ]
            }
    return arr
}

// 新增地址 省
function provinceData(){
    var arr = [
        '请选择省份','浙江省'
    ]
    return arr
}

//新增地址 市
function cityData(){
    var arr = [
        '请选择城市','杭州市'
    ]
    return arr
}

//新增地址 区
function blockData(){
    var arr = [
        '请选择区/县','拱墅区'
    ]
    return arr
}

/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  blockData : blockData,
  searchAddrFromAddrs : searchAddrFromAddrs

}