import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            type={type}
            {...props}
            className={
                'rounded-full py-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  ' +
                className
            }
            ref={localRef}
        />
    );
});
