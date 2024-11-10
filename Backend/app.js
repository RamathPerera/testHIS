import express from 'express';
import { Worker } from 'worker_threads';
import cors from 'cors';
import mailRoute from './routes/mailRoute.js'
import crudRoute from './routes/crudRoute.js'
import authRoute from './routes/authRoute.js'

function startWorker(filePath) {
    const worker = new Worker(filePath); // No need to pass data for this task
    worker.on('error', (error) => console.error('Worker error:', error));
    worker.on('exit', (code) => {
        if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
    });
}

// Start the worker
// startWorker('./workers/fetchWorker.js');
// startWorker('./workers/logWorker.js');
// startWorker('./workers/calculationWorker.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', mailRoute);
app.use('/crud', crudRoute);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});
