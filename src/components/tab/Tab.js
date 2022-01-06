

const Tab = (props) => {
    const change = () => {
         console.log('Chang',props)
         console.log('Chang2255  : ',props.height)
     }
    const change2 = () => {
         console.log('Chang2' )
     }
    return (
        <>
        <input
          type='radio'
          name="tab"
          id={ props.tabId }
                checked={ props.checked }
                onChange={change2}
        />
        <label
                htmlFor={ props.tabId }
            onClick={change}>
          { props.tabTitel }
        </label>
        </>
    )
  }

  export default Tab