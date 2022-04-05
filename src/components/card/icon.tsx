import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
    url: string;
    icon: IconDefinition;
}

export default function Icon(props: IconProps) {
    return (
        <div>
            <a href={props.url} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon
                    icon={props.icon}
                    className="text-slate-900 h-6"
                />
            </a>
        </div>
    );
}
