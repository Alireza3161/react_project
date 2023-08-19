import Item from "./item"

const Timelist=(props)=>{
    return(
        
        <div>
            
                {props.children.map((x)=>(
                    <Item key={Math.random()}>
                        {x}
                    </Item>
                ))}
        </div>
    )
}


export default Timelist;