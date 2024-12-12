import { Request, Response } from "express";
import { User } from "../models/user";

export const register = async (req: Request, res: Response) => {
    try {
    } catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}

export const login = async (req: Request, res: Response) => {
    try {

    } catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}

export const logout = async (req: Request, res: Response) => {
    try {

    } catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {

    } catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}