import jwt from 'jsonwebtoken';

// Set JWT_SECRET in your .env files for each environment (e.g., .env.dev, .env.test, .env.prod)
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';

// This is a placeholder. In a real app, you would query the database
// to find the user and verify their password.
const findUserByEmail = async (email: string) => {
    if (email === 'test@example.com') {
        return { id: '123', email, passwordHash: 'hashed_password' };
    }
    return null;
};

const verifyPassword = async (password: string, hash: string) => {
    // In a real app, use a library like bcrypt to compare passwords
    return password === 'password';
};

export const loginUser = async (email: string, password: string): Promise<string | null> => {
    const user = await findUserByEmail(email);

    if (!user) {
        return null;
    }

    const isValidPassword = await verifyPassword(password, user.passwordHash);

    if (!isValidPassword) {
        return null;
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    return token;
};
