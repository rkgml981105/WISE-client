import { useState, useCallback } from 'react';

const useInput = (initValue:string) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setter(e.target.value);
    }, []);
    return [value, handler, setter] as const;
};

export default useInput;
