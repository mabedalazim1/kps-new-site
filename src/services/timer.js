

const timer = (delay) => {
    return new Promise( res => setTimeout(res, delay) );
}
export default timer