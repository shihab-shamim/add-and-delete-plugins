import { __ } from '@wordpress/i18n';

import { PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { Button } from '@wordpress/components';
import { TextControl } from '@wordpress/components';


const General = ({ attributes, setAttributes }) => {
  const { purposeType,counterItems } = attributes;

  

  return (
    <PanelBody className='bPlPanelBody' title={__('Add-Items', 'b-blocks')} initialOpen={false}>


{
  counterItems.map((item,index) =>{
    return (
   <>
      <TextControl key={index}
	label="Counter-Number"
	value={ item.counter}
	onChange={ e =>{
      const newItems=[...counterItems]
//       const number=parseFloat(e)
//       if(isNaN(number)){
// return
//       }
      newItems[index].counter=e
      setAttributes({counterItems:newItems})
  }}
	type="text"
/>
      <TextControl key={index}
	label="Suffix"
	value={ item.suffix}
	onChange={ e =>{
      const newItems=[...counterItems]
//       const number=parseFloat(e)
//       if(isNaN(number)){
// return
//       }
      newItems[index].suffix=e
      setAttributes({counterItems:newItems})
  }}
	type="text"
/>
      <TextControl key={index}
	label="Title"
	value={ item.title}
	onChange={ e =>{
      const newItems=[...counterItems]
//       const number=parseFloat(e)
//       if(isNaN(number)){
// return
//       }
      newItems[index].title=e
      setAttributes({counterItems:newItems})
  }}
	type="text"
/>

<Button variant='tertiary' 
onClick={()=>{
  const newItems=counterItems.filter((item,i)=>i !==index)
  setAttributes({counterItems:newItems})

}}
> Delete</Button>
   </>
    )
  })
}
      
      <Button
      variant='primary'
      onClick={()=>{
        const newItems=[...counterItems]
        newItems.push({
          icon:"x-icon",
          counter:100,
          suffix:"suffix",
          title:"title",
        })
        setAttributes({counterItems:newItems})

      }}
      >{__('Add Item','b-block')}</Button>

     <Button
     onClick={()=>{
      const newItems=[...counterItems]
      newItems.pop()
      setAttributes({counterItems:newItems})


     }}
      style={{marginLeft:"20px"}} variant='secondary'>{__('Remove Item','b-block')}</Button>



    </PanelBody>
  )
}

export default General