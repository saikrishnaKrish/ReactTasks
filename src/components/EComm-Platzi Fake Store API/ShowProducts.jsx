import extractImagesFromData from './utils/extractImages';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const ImageSlider = ({ imagesData }) => {
  const data = imagesData?.map((source) => ({ source }));

  return (
    <AwesomeSlider className='images-slider'>
      {data.map((item, index) => (
        <div key={index} data-src={item.source} />
      ))}
    </AwesomeSlider>
  );
};

const ShowProducts = ({ item }) => {
  const extractedImages = extractImagesFromData(item.images);

  return (
    <div key={item.id} className="product-card">
      Name: {item.title}
      Description: {item.description}
      Price: {item.price}
      First Available Data: {item.creationAt}
      Category: {item.category.name}
      <br />
      <ImageSlider imagesData={extractedImages} />
      <br />
      <img className="product-image"
       src={item.category.image}
        alt={item.title} />
    </div>
  );
};

export default ShowProducts;
