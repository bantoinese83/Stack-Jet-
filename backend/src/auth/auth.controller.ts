import { Request, Response } from 'express';
import { loginUser } from '../auth/auth.service';

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        const token = await loginUser(email, password);
        if (!token) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        res.json({ token });
    } catch {
        res.status(500).json({ message: 'Server error during login.' });
    }
};
