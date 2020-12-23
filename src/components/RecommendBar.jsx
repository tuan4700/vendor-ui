import Button from './Button';
import Icon from './Icon'

const RecommendBar = () => {
    return <div className="recommendBar">
        <div className="recommendBar_title">
            Recommend
        </div>
        <div className="recommendBar_actions">
            <div className="recommendBar_actions-search"><Button><Icon name='loupe'/></Button></div>
        </div>
    </div>
}

export default RecommendBar;