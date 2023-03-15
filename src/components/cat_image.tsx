interface CatImageProps {
	image: string;
	altText: string;
	licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}
const CatImage: React.FC<CatImageProps> = ({ image, altText }) => (
	<>
		<img className='card__image' src={image} alt={altText} />
	</>
);

export default CatImage;