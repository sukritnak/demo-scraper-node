import axios from 'axios';
import * as http from "http";
import express, { Application, Request, Response } from 'express';
import * as cheerio from 'cheerio';

import App from './App'

const PORT: number = 8000;

const server = http.createServer(App);
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});