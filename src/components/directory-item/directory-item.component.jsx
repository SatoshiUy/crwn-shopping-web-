import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, size } = category;
  const navigate = useNavigate();
  return (
    <div className={`directory-item-container ${size ? size : ''}`} 
      onClick={() => navigate(`/shop/${title}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
