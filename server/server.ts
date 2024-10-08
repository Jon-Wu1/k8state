import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 8080;

// Middleware example
app.use(express.json());

// Basic route example
app.get('/api', (_req: Request, res: Response) => {
	res.send('Hello, TypeScript with Express!');
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
