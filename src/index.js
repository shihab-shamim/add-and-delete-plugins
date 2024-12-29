import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { blockIcon } from './utils/icons';
import  attributes from "../src/attributes"

registerBlockType(metadata, {
	attributes,
	icon: blockIcon,
	edit: Edit
});