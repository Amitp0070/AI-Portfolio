import { techIcons } from '../../utils/techIcons';
import { FaServer } from 'react-icons/fa';

interface Props {
    tech: string;
}
const TechBadge = ({ tech }: Props) => {
    return (
        <div
            className="tech-badge"
        >
            <div className="tech-icon">
                {techIcons[tech] || <FaServer />}
            </div>
        </div>
    );
};
export default TechBadge;