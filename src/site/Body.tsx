
type BodyPropsType={
    titleForBody:string
}
export const Body=(props:BodyPropsType)=>{
    return (
       <>{props.titleForBody}</>
    )
}