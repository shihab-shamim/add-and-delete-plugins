import { RichText, useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const {
    purposeType,
    uniqId,
    counterItems,
    containerBorder,
    containerBorderRadius,
    containerBg,
    containerIcon,
    iconSizes,
    iconColor,
    counterColor,
    counterSizes,
    counterTitleColor,
    counterTitleSizes,

  } = attributes;
  // set unique id
  setAttributes({
    uniqId: `b-blocks-${clientId.slice(0,8)}`
  })
  console.log(counterItems);


  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps({
        className:uniqId
      })}>
        <Style attributes={attributes} id={`block-${clientId}`} />
       <div className="container">
         
       {
        counterItems && counterItems.map((Item,index) =>{
          return (
            <div key={index} >
             {/* Icon:{Item.icon}
             counter:{Item.counter}
             suffix:{Item.suffix}
             title:{Item.title} */}
             <div className="card">
    <img src="https://i.ibb.co.com/rG3BYJR/225993.png" alt="Icon"/>
    {/* <h2>{Item.counter}{Item.suffix}</h2> */}
    {/* e =>{
      const newItems=[...counterItems]
//       const number=parseFloat(e)
//       if(isNaN(number)){
// return
//       }
      newItems[i].counter=e
      setAttributes({counterItems:newItems})
  }} */}
   <div style={{display:"flex"}}> 
   <RichText 
    tagName="span"
    placeholder="Counter..."
    onChange={(e,)=>{
     
      const newCounter=[...counterItems]
     
  newCounter[index].counter = e; 
  setAttributes({ counterItems: newCounter }); 

    }}
     value={Item.counter}></RichText>

    <RichText tagName="span"
    placeholder="Suffix..."
    onChange={(e,)=>{
     
      const newCounter=[...counterItems]
     
  newCounter[index].suffix = e; 
  setAttributes({ counterItems: newCounter }); 

    }}
     value={Item.suffix}></RichText>
    
    </div>

    <p>{Item.title}</p>
  </div>
              
            </div>
          )
        })
       }

       </div>

        
      </div>
    </>
  );
};
export default Edit;
