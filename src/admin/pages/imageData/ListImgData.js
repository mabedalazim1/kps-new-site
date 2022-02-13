import {Link } from "react-router-dom"
const ListImgData = ({ imgData, sortItems, tablename, handelDelete }) => {


    return (
        <div className="img-table" >
            <p>معرض الصور</p>
        <table className='table table-bordered table-hover '>
            <thead>
                <tr>
                    <th scope='col' className='text-center'>م</th>
                    <th scope='col' className='text-center'>{ tablename.tableHeadTitleB }</th>
                    <th scope='col' className='text-center'>{ tablename.tableHeadTitleA }</th>
                    <th scope='col' className='text-center'>{ tablename.tableHeadTitleC }</th>
                </tr>
            </thead>
            <tbody>
                { sortItems && imgData.map((item, index) => (
                     Table(index,handelDelete, item)
                )) }

                {!sortItems &&  imgData.slice(0).reverse().map((item, index) => (
                    Table(index,handelDelete, item)
                )) }
            </tbody>
            </table>
            { !imgData.length && <p className='error'>There is no amages</p> }  
            </div>
    );
}

const Table = (index, handelDelete, item) =>
  
    <tr className='text-center' key={ index }>
        <th scope='row'>{ index + 1 }</th>
         <td>{ item.imgDesc }</td>
        <td 
            className='td-title'>
            <img src ={`http://www.alkwtherps.com/api/static/uploads/images/${item.imgUrl}`} alt=""/>      
        </td>
        <td className='text-center'>
            <i className='fas fa-trash-alt'
                title='تعديل / حذف'
                onClick={ () => handelDelete(item.id) }>
            </i>
           
            <Link to={ `/admin/editimage/${item.id}` }>
            <i className="fas fa-info-circle"
                title='تعديل '
                >
                    </i>
                </Link>
               
            
        </td>
    </tr>



export default ListImgData;
