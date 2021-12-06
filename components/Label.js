const Label = (props) => {
    return (
        <label htmlFor={props.for} className = "mylabel" >{props.children}</label>   
    )
}

export default Label
