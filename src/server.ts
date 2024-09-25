import express, { Request, Response } from 'express';
import application from './application';

const app = application();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

