import { object } from "prop-types"

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
  ],
  [
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
  
  // {
  //   id: 7,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '/assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 8,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '/assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 9,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 10,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 11,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 12,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 13,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 14,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 15,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 16,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 17,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 18,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 19,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 20,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 21,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 22,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 23,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 24,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 25,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 26,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 27,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 28,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 29,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 30,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 31,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 32,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_3298.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 33,
  //   imgTitle: 'حفل استقبال العام الدراسى',
  //   imgUrl: '//assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  // },
  // {
  //   id: 34,
  //   imgTitle: 'تكريم الطلاب الفائقين',
  //   imgUrl: '/assets/test/IMG_2989.jpg',
  //   imgDesc: 'قامت المدرسة بحفل تكريم للطلاب الفائقين'
  // }
]

const featuredDataB = [
  {
    id: 1,
    imgTitle: 'حفل استقبال العام الدراسى',
    imgUrl: '/assets/test/IMG_3298.jpg',
    imgDesc: 'قامت المدرسة بحفل استقبال للطلاب الجدد قى بداية العام الدراسى'
  }
]

let x = 0
let slideDataA = []
let data = []
const handelData = () => {
  for (let i = 0; i <= featuredData.length + 1; i++) {
    if (featuredData.length < 3) {
      if (featuredData.length === 1) {
        slideDataA = featuredData.slice(0, 1)
        data.push(slideDataA)
        return data
      } else if (featuredData.length === 2) {
        slideDataA = featuredData.slice(0, 2)
        data.push(slideDataA)
        return data
      }
    }
    if (i % 3 === 0 && i !== 0) {
      x = x + 1
      slideDataA = featuredData.slice(i - 3, i)
      data.push(slideDataA)
      if (
        x === Math.ceil(featuredData.length / 3) - 1 &&
        featuredData.length % 3 !== 0
      ) {
        slideDataA = featuredData.slice(i, i + (featuredData.length % 3))
        data.push(slideDataA)
      }
    }
  }
  return data
}
const handelDataB = () => {
  featuredData.map((item,index,err)=>{
    console.log(item)
  })
}
handelData()

const slideData = new Object({...data })
console.log(Object.keys(slideData).length)

export { slideData, featuredData }
