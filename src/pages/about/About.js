import './about.css'
import CoveSubPages from '../../components/coverSubPages/CoveSubPages';
const About = () => {
    const title = "مدرستنا"
    const background = {
        background: "url(/assets/images/IMG-Back-22.jpg)"
    }
    return (
        <main className='about-page' >
            <CoveSubPages
                title={ title }
                background={ background }
            />
            <div className="container about-text">
                <p className="main-title">كلمة ترحيب</p>
            </div>
            <div className="welcome">
                <div className="text">
                    <div>
                        <p className="text-icon-right">
                            <i className="fas fa-quote-right"></i>
                        </p>
                        <p className="text-con">
                            بصفتك مديرًا ، أتمنى لك ترحيبًا حارًا في مدرستنا! نحن في قلب مجتمع لندن وفي عام 2010 نجحنا في
                            تزويد العائلات المحلية بتعليم ممتاز يقدمه مدرسون استثنائيون في مرافق حائزة على جوائز.

                            حكمت Ofsted على أنها مدرسة جيدة يمكن رؤية إنجازاتنا من خلال التحسينات السريعة في التعليم. نحن
                            أيضًا نخطو خطوات رئيسية نحو إنشاء مدرسة تحدث فرقًا كبيرًا في المجتمع الذي نخدمه وتوفر فرصًا
                            لجميع طلابنا وطلابنا.

                            السيدة جوانا ماكويد ، مديرة
                        </p>

                        <p className="text-icon-left">
                            <i className="fas fa-quote-left"></i>
                        </p>
                    </div>

                </div>
                <img className="about-img" src="/assets/images/students/std-1.jpg" alt="img" />
            </div>
        </main>

    );
}

export default About;
