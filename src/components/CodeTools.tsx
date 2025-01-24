import {Link} from 'react-router-dom';
import stringIcon from '../assets/double-quotes.png';
import jsonIcon from '../assets/json-icon.svg';
import properties from '../assets/properties.json';
import Card from './Card';
import useGoBack from './navigations/useGoBack';
import BackButton from './BackButtonProps.tsx';

function CodeTools(): JSX.Element {
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                {/*Back Button*/}
                <BackButton onClick={useGoBack()} style={{marginRight: '20px'}}/>

                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="breadcrumb-custom">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className="breadcrumb-link">Home</Link>
                        </li>
                        <li className="breadcrumb-item breadcrumb-active" aria-current="page">
                            Code Tools
                        </li>
                    </ol>
                </nav>

            </div>

            {/* Tools Cards */}
            <div className="tools-container">
                <Link to="/code-tools/json-lint">
                    <Card cardText={properties.beautify_json} title="Json Lint" iconPath={jsonIcon}/>
                </Link>
                <Link to="/code-tools/string-util">
                    <Card cardText={properties.string_utils} title="String Utils" iconPath={stringIcon}/>
                </Link>
            </div>
        </>
    );
}

export default CodeTools;
