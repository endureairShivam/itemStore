import React , {useContext, useEffect} from "react";
import { Container, Button } from "@mui/material";
import { DataContext } from "./DataProvider";


const ItemButton = () =>{
    const {items,setItemns} = useContext(DataContext);
    const getItemData= async(event)=>{
        try{
            const response=await fetch('http://localhost:8080/items');
            const data = await response.json()

            if(data.items.lenght===0)
            {
                alert('No items in stock!.')
            }
            setItemns(items);
            console.log('getting data');
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return(
        <Container sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button variant="contained" onClick={getItemData}> Get Data</Button>
        </Container>
    );
}

export default ItemButton;