// Email validation
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Password validation
export const isValidPassword = (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

// Required field validation
export const isRequired = (value: string): boolean => {
    return value.trim().length > 0;
};

// Min length validation
export const hasMinLength = (value: string, minLength: number): boolean => {
    return value.length >= minLength;
};

// Max length validation
export const hasMaxLength = (value: string, maxLength: number): boolean => {
    return value.length <= maxLength;
};

// Form validation helper
export const validateField = (
    value: string,
    rules: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
        custom?: (value: string) => boolean;
    }
): string | null => {
    if (rules.required && !isRequired(value)) {
        return 'This field is required';
    }

    if (rules.minLength && !hasMinLength(value, rules.minLength)) {
        return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
        return `Maximum length is ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
        return 'Invalid format';
    }

    if (rules.custom && !rules.custom(value)) {
        return 'Invalid value';
    }

    return null;
};

// Validate entire form
export const validateForm = (
    formData: Record<string, string>,
    validationRules: Record<string, {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
        custom?: (value: string) => boolean;
    }>
): Record<string, string> => {
    const errors: Record<string, string> = {};

    Object.keys(validationRules).forEach((fieldName) => {
        const value = formData[fieldName] || '';
        const rules = validationRules[fieldName];
        const error = validateField(value, rules);

        if (error) {
            errors[fieldName] = error;
        }
    });

    return errors;
}; 