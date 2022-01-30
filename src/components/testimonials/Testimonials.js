import './testimonials.css'

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <p className='main-title'>تجربة الخريجين</p>
            <div className='container testimonials-con'>
                <img
                    className='testimonials-img'
                    src='/assets/images/students/std-1.jpg'
                    alt='' />
                <div>
                <p class="text-icon-right">
                        <i class="fas fa-quote-right"></i>
                    </p>
                    <p>
                        تزويد العائلات المحلية بتعليم ممتاز يقدمه مدرسون استثنائيون في مرافق حائزة على جوائز.

                        حكمت Ofsted على أنها مدرسة جيدة يمكن رؤية إنجازاتنا من خلال التحسينات السريعة في التعليم. نحن
                        أيضًا نخطو خطوات رئيسية نحو إنشاء مدرسة تحدث فرقًا كبيرًا في المجتمع الذي نخدمه وتوفر فرصًا
                        لجميع طلابنا وطلابنا.
 </p>
                    <p class="text-icon-left">
                        <i class="fas fa-quote-left"></i>
                    </p>
                </div>
            </div>
            
        </section>
    );
}

export default Testimonials;
