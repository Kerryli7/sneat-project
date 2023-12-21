import {useCallback, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function EmailLabels() {

    const [labels, setLabels] = useState([
        {
            label: 'Personal',
            color: 'green-400',
            indicator: <span className="flex w-3 h-3 bg-green-400 rounded-full"></span>
        },
        {
            label: 'Company',
            color: 'purple-500',
            indicator: <span className="flex w-3 h-3 bg-purple-500 rounded-full"></span>
        },
        {
            label: 'Important',
            color: 'yellow-300',
            indicator: <span className="flex w-3 h-3 bg-yellow-300 rounded-full"></span>
        },
        {
            label: 'Private',
            color: 'red-500',
            indicator: <span className="flex w-3 h-3 bg-red-500 rounded-full"></span>
        }
    ]);

    const navigate = useNavigate();

    const location = useLocation();
    const isActive = useCallback((labelName) => {
        return location.pathname.toUpperCase().includes(labelName.toUpperCase());
    }, [location]);
    return (
        <div>
            <h3 className={'pl-5  text-gray-300'}>
                <small>
                    LABELS
                </small>
            </h3>
            <ul className={'mt-3'}>
                {labels.map(label => {
                    const active = isActive(label.label);
                    return (
                        <li
                            onClick={() => {
                                navigate(`/Email/` + label.label)
                            }}
                            className={
                            `transition border-l-4 cursor-pointer 
                            mb-2 box-border flex items-center h-10 pl-4 pr-4 
                             ${active ? ` border-purple-600 ` : 'border-white'}
                            ${active ? `text-purple-600` : ''}
                            `
                        }
                            key={label.label}>
                            {label.indicator}
                            <p className={'ml-4'}>
                                {label.label}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}