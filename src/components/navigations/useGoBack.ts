import { useNavigate } from 'react-router-dom';

const useGoBack = (): (() => void) => {
    const navigate = useNavigate();
    const goBack = (): void => {
        navigate(-1);
    };
    return goBack;
};

export default useGoBack;
