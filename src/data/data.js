import { getImgListData } from './../admin/actions/listImagesData'
import GroupData from './../services/groupingData'
import store from './../store'

store.dispatch(getImgListData(8))
const imgListData = (store.getState().imgListData)

let testData = []
let newData = []

if (imgListData.length > 0) {
  testData = imgListData[0].imageCatogeries
  testData.map(item => 
    item.imageData.length > 0 &&   newData.push(item))
}

const groupData = GroupData.third(newData)
console.log(groupData)
const featuredData = [
  [ {
    id: 1,
    imgTitle: '1تكريم الطلاب الفائقين',
    imgUrl: '/assets/test/IMG_3298.jpg',
    imgDesc: ' 111111111111111 قامت المدرسة بحفل تكريم للطلاب الفائقين'
  },
  {
    id: 2,
    imgTitle: '2تكريم الطلاب الفائقين',
    imgUrl: '/assets/test/IMG_2989.jpg',
    imgDesc: ' 222222222222222قامت المدرسة بحفل تكريم للطلاب الفائقين'
  },
  {
    id: 3,
    imgTitle: '3تكريم الطلاب الفائقين',
    imgUrl: '/assets/test/IMG_3298.jpg',
    imgDesc: ' 3333333333333قامت المدرسة بحفل تكريم للطلاب الفائقين'
    },

  
    {
      id: 4,
      imgTitle: 'تكريم الطلاب الفائقين',
      imgUrl: '/assets/test/IMG_2989.jpg',
      imgDesc: 'قامت المدرسة بحفل تكريم للطلاب الفائقين'
    },
    {
      id: 5,
      imgTitle: 'تكريم الطلاب الفائقين',
      imgUrl: '/assets/test/IMG_2989.jpg',
      imgDesc: 'قامت المدرسة بحفل تكريم للطلاب الفائقين'
    },
    {
      id: 6,
      imgTitle: 'حفل استقبال العام الدراسى',
      imgUrl: '/assets/test/IMG_3298.jpg',
      imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
    },
 ],
]


export { groupData, featuredData }
