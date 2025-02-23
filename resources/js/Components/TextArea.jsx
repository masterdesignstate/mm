import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextArea(
    { className = '', isFocused = false, ...props },
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
        <textarea
            {...props}
            className={
                ' dark:bg-bc-900 dark:text-white py-3 border-gray-300 shadow-sm focus:border-bc-600 focus:ring-bc-600  ' +
                className
            }
            ref={localRef}
        ></textarea>
    );
});
