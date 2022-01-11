import React from 'react'
import MoreButton from '../buttons/MoreButton'
import './schoolInfo.css'

const SchoolInfo = () => {

  return (
    <>
      <div className='container school-info'>
        <div className='info-text'>
          <p className='info-titel'>شروط القبول بالمدرسة</p>
          <p className='info-contant'>
            . سن القبول برياض الأطفال يبدأ من ثلاث سنوات ونصف في أول شهر أكتوبر
          </p>
          <p className='info-contant'>
            . سن القبول بالصف الأول يبدأ من خمس سنوات ونصف في أول شهر أكتوبر
          </p>
          <p className='info-contant'> . اجتياز اختبار القبول للمتقدمين الجدد</p>
          <p className='info-contant'>
            . يحب أن يكون كلا من الوالدين حاصلاً على مؤهل مناسب
          </p>
          <p className='button'>
            <MoreButton />
          </p>
        </div>
        <div className='info-img'>
          <img src='/assets/images/IMG-Back-22.jpg' alt='img' />
        </div>
      </div>
      <div className='about-school'>
        
        <div className='about-contant'>
          <h2 className='main-title'>نبذة عن المدرسة </h2>
          <p>
            مؤسس المدرسة المرحوم الأستاذ / أحمد عبد العظيم إبراهيم .. المدير
            العام بالإدارة التعليمية
          </p>
          <p>
            تأسست المدرسة عام 2008 كأحدي مدارس التعليم الخاص بإدارة بنى مزار
            التعليمية{' '}
          </p>
          <p>
            تتميز المدرسة بموقعها المميز فى قلب مدينة بنى مزار بمحافظة المنيا
          </p>
          <p>تم تخريج أول دفعة من الصف الثالث الإعدادى عام 2010 </p>
          <p>
            حصلت المدرسة على اعتماد هيئة الجودة عام 2017 عن المرحلة الإبتدائية
          </p>
        </div>
        <div className='about-img'>
          <img src='/assets/images/school-info.jpg' alt='img' />
        </div>
      </div>
    </>
  )
}

export default SchoolInfo
