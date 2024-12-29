	import { createRoot } from 'react-dom/client';
	import './style.scss';
	import Style from './Components/Common/Style';
	import BlockName from './Components/Frontend/BlockName';

	document.addEventListener('DOMContentLoaded', () => {
		const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-test-purpose');
		blockNameEls.forEach(blockNameEl => {
			const attributes = JSON.parse(blockNameEl.dataset.attributes);
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
				counterTitleSizes, } = attributes;
				

			createRoot(blockNameEl).render(<>
				<Style attributes={attributes} id={blockNameEl.id} />

		{
			counterItems && counterItems.map((Item,index) =>{
				return (
				<div key={index}>
				{/* Icon:{Item.icon}
				counter:{Item.counter}
				suffix:{Item.suffix}
				title:{Item.title} */}
				<div className="card">
		<img src="https://i.ibb.co.com/rG3BYJR/225993.png" alt="Icon"/>
		<h2>100Suffix</h2>
		<p>Title</p>
		</div>
					
				</div>
				)
			})
		}

				
			</>);

			blockNameEl?.removeAttribute('data-attributes');
		});
	});