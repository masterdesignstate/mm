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
                'dark:bg-transparent dark:text-bc-50 rounded-full py-4 px-6 text-sm text-bc-200 border-gray-300  focus:border-bc-600 focus:ring-bc-600  ' +
                className
            }
            ref={localRef}
        />
    );
});
