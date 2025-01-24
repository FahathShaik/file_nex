import {Route, Routes} from 'react-router-dom';
import CodeTools from './components/CodeTools';
import Header from './components/Header';
import Home from './components/Home';
import JsonLint from './components/Json/JsonLint';
import PdfTools from './components/PdfTools';
import {StringUtils} from './components/StringUtils.tsx';

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/pdf-tools" element={<PdfTools/>}/>
                <Route path="/code-tools" element={<CodeTools/>}/>
                <Route path="/code-tools/json-lint" element={<JsonLint/>}/>
                <Route path="/code-tools/strings" element={<StringUtils/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App;
