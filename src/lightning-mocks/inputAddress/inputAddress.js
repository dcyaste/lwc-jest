import { LightningElement, api } from 'lwc';

export default class InputAddress extends LightningElement {
    @api addressLabel
	@api city
	@api cityLabel
	@api country
	@api countryLabel
	@api countryOptions
	@api disabled
	@api fieldLevelHelp
	@api postalCode
	@api postalCodeLabel
	@api province
	@api provinceLabel
	@api provinceOptions
	@api readonly
	@api required
	@api street
	@api streetLabel
	@api variant
    
}