import AccessDenied from "../accessDenied/AccessDenied";

const Manasa = () => {
    let auth = localStorage.getItem('user');
    return (
        <div>
            { !auth ? <AccessDenied />
                :
                
                (<p>OK :  Auth  Manasa Conatant Here</p>)
            }
           
           
        </div>
    );
}

export default Manasa;
