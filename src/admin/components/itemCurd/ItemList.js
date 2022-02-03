
const ItemList = ({ items, sortItems, tablename, handelEdit }) => {

    return (
        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th scope='col' className='text-center'>م</th>
                    <th scope='col' className='text-center'>{ tablename.tableHeadTitleA }</th>
                    <th scope='col' className='text-center'>{ tablename.tableHeadTitleB }</th>
                    <th scope='col' className='text-center'>{ tablename.tableHeadTitleC }</th>
                </tr>
            </thead>
            <tbody>
                { sortItems && items.map((item, index) => (
                     Table(index,handelEdit, item)
                )) }

                {!sortItems &&  items.slice(0).reverse().map((item, index) => (
                    Table(index,handelEdit, item)
                )) }
            </tbody>
        </table>
    );
}

const  Table = (index,handelEdit, item) =>
    <tr className='text-center' key={ index }>
        <th scope='row'>{ index + 1 }</th>
        <td onClick={ () => handelEdit(item) }
        className='td-title'
        >{ item.title }</td>
        <td>{ item.sectionDesc }</td>
        <td className='text-center'>
            <i className='fas fa-info-circle'
                title='تعديل / حذف'
                onClick={ () => handelEdit(item) }>
            </i>
        </td>
    </tr>



export default ItemList;
